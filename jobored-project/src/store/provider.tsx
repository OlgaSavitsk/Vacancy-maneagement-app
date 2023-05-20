import { getVacancies } from 'api/vacancy.service';
import { LocalStorageKey, DEFAULT_FAVORITES } from 'constants/storage';
import { useStorage } from 'hooks/useLocalState';
import { useReducer, useEffect } from 'react';
import { ActionType, appReducer, InitialAppState, setData, VacancyContext } from 'store';

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, InitialAppState);
  const [, setIds] = useStorage(LocalStorageKey.favoritesId, DEFAULT_FAVORITES);

  useEffect(() => {
    const { ids } = state.favorites;
    setIds({ ids: [...ids] });
  }, [state.favorites]);

  useEffect(() => {
    async function fetchVacancies() {
      try {
        dispatch({ type: ActionType.Fetching, payload: true });
        const data = await getVacancies({
          ...state.params,
        });
        dispatch(setData(data));
      } catch (e) {
        console.log(e);
      } finally {
        dispatch({ type: ActionType.Fetching, payload: false });
      }
    }
    fetchVacancies();
  }, [state.params]);

  return (
    <VacancyContext.Provider value={{ state, dispatch }}>
      {children}
    </VacancyContext.Provider>
  );
};
