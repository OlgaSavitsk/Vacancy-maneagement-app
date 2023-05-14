import { DEFAULT_FAVORITES, LocalStorageKey } from 'constants/storage';
import { getStorageValue } from 'hooks/useLocalState';

export const renderVacancyPayment = (
  payment_from: number,
  payment_to: number,
  currency: string,
): string => {
  if (payment_from && payment_to) {
    return `${payment_from}-${payment_to} ${currency}`;
  }
  if (!payment_from && !payment_to) {
    return 'не указана';
  }
  return `от ${payment_from || payment_to} ${currency}`;
};

export const createFavoritesFromStorage = (): number[] => {
  const { ids } = getStorageValue(LocalStorageKey.favoritesId, DEFAULT_FAVORITES) || [];
  return Object.values(ids).flat() as number[];
};
