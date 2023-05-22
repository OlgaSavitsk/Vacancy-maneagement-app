import { getVacancies } from 'core/api/vacancy.service';
import { LocalStorageKey, DEFAULT_FAVORITES } from 'constants/storage';
import { useStorage } from 'hooks/useLocalState';
import { useReducer, useEffect, useCallback } from 'react';
import { ActionType, appReducer, InitialAppState, setData, VacancyContext } from 'store';
import { useLocation } from 'react-router-dom';
import { initFilterValue } from 'constants/form';
import { getInitialState } from 'utils';

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, InitialAppState);
  const [, setIds] = useStorage(LocalStorageKey.favoritesId, DEFAULT_FAVORITES);
  const { pathname } = useLocation();

  const getParams = () => {
    return pathname === '/fav'
      ? { ...initFilterValue, ids: getInitialState() }
      : pathname === '/'
        ? { ids: [] }
        : state.params;
  }

  useEffect(() => {
    const { ids } = state.favorites;
    setIds({ ids: [...ids] });
  }, [state.favorites]);

  const fetchVacancies = useCallback(async () => {
    try {
      const param = getParams()
      dispatch({ type: ActionType.Fetching, payload: true });
      const data = await getVacancies({ ...state.params, ...param });
      dispatch(setData(data));
    } catch (e) {
      console.log(e);
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
