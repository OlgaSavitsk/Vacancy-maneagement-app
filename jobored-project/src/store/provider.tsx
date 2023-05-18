import { getVacancies } from 'api/vacancy.service';
import { Paths } from 'constants/paths';
import { LocalStorageKey, DEFAULT_FAVORITES } from 'constants/storage';
import { useStorage } from 'hooks/useLocalState';
import { useReducer, useEffect } from 'react';
import { ActionType, appReducer, InitialAppState, setData, VacancyContext } from 'store';

interface Props {
  children: React.ReactNode;
  pathName: string;
}

export const AppProvider = ({ children, pathName }: Props) => {
  const [state, dispatch] = useReducer(appReducer, InitialAppState);
  const [idsValue, setIds] = useStorage(LocalStorageKey.favoritesId, DEFAULT_FAVORITES);

  useEffect(() => {
    const { ids } = state.favorites;
    setIds({ ids: [...ids] });
  }, [state.favorites]);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: ActionType.Fetching, payload: true });
        const params =
          pathName === Paths.home
            ? { ids: [] }
            : pathName === Paths.favourites
            ? { ids: state.favorites.ids }
            : state.params.ids;

        const { objects } = await getVacancies({ ...state.params, ...params });
        dispatch(setData(objects));
      } catch (e) {
        console.log(e);
      } finally {
        dispatch({ type: ActionType.Fetching, payload: false });
      }
    }
    fetchData();
  }, [pathName, state.favorites.ids, state.params]);

  return (
    <VacancyContext.Provider value={{ state, dispatch }}>
      {children}
    </VacancyContext.Provider>
  );
};
