import { Dispatch, SetStateAction, useState } from 'react';

export function getStorageValue<T>(key: string, initialValue: T | (() => T)) {
  if (typeof window === 'undefined') return initialValue;
  try {
    const storageValue = window.localStorage.getItem(key);
    if (storageValue) return JSON.parse(storageValue);
    return initialValue instanceof Function ? initialValue() : initialValue;
  } catch (error) {
    return initialValue instanceof Function ? initialValue() : initialValue;
  }
}

export function useStorage<T>(
  key: string,
  initialValue: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    return getStorageValue(key, initialValue);
  });

  const setValue = (value: SetStateAction<T | ((prevState: T) => T)>) => {
    try {
      const setedValue = value instanceof Function ? value(state) : value;
      console.log(setedValue);
      setState(setedValue);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(setedValue));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue];
}
