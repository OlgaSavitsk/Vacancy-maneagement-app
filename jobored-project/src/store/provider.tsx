import { useReducer, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { getVacancies, getIndustryValue } from 'core/api';
import { LocalStorageKey, DEFAULT_FAVORITES } from 'constants/storage.constants';
import { useStorage } from 'hooks/useLocalState';
import {
  ActionType,
  appReducer,
  InitialAppState,
  setData,
  setIndustryData,
  VacancyContext,
} from 'store';
import { getParams } from 'utils';

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, InitialAppState);
  const [, setIds] = useStorage(LocalStorageKey.favoritesId, DEFAULT_FAVORITES);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetch = async () => {
      const data = await getIndustryValue();
      dispatch(setIndustryData(data));
    };
    fetch();
  }, []);

  useEffect(() => {
    const { ids } = state.favorites;
    setIds({ ids: [...ids] });
  }, [state.favorites]);

  const fetchVacancies = useCallback(async () => {
    try {
      dispatch({ type: ActionType.Fetching, payload: true });
      const param = getParams(pathname);
      const data = await getVacancies({ ...state.params, ...param });
      dispatch(setData(data));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch({ type: ActionType.Fetching, payload: false });
    }
  }, [pathname, state.params]);


  useEffect(() => {
    fetchVacancies();
  }, [fetchVacancies]);

  return (
    <VacancyContext.Provider value={{ state, dispatch }}>
      {children}
    </VacancyContext.Provider>
  );
};
