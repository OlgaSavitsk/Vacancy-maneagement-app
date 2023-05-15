import { getVacancies } from 'api/vacancy.service';
import { DEFAULT_FAVORITES, LocalStorageKey } from 'constants/storage';
import { useStorage } from 'hooks/useLocalState';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { ActionType, AppAction, AppState, InitialAppState, setData } from 'store';

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.SetParams:
      return { ...state, params: { ...state.params, ...action.payload } };
    case ActionType.AddFavorites: {
      let { ids } = state.favorites;
      if (state.favorites.ids.includes(action.payload)) {
        ids = ids.filter((fav) => fav !== action.payload);
      } else {
        ids = [...state.favorites.ids, action.payload];
      }
      return { ...state, favorites: { ids: [...ids] } };
    }
    case ActionType.SetData:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
};

const myParams = {
  state: InitialAppState,
  dispatch: (): void => undefined,
};

const VacancyContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>(myParams);

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, InitialAppState);
  const [idsValue, setIds] = useStorage(LocalStorageKey.favoritesId, DEFAULT_FAVORITES);

  useEffect(() => {
    const { ids } = state.favorites;
    setIds({ ids: [...ids] });
  }, [state.favorites]);

  useEffect(() => {
    const fetchData = async () => {
      if (state.params.ids) {
        const params = state.params.ids.length > 0 ? state.favorites : state.params;
        const { objects } = await getVacancies(params);
        dispatch(setData(objects));
      }
    };
    fetchData();
  }, [state.favorites, state.params]);

  return (
    <VacancyContext.Provider value={{ state, dispatch }}>
      {children}
    </VacancyContext.Provider>
  );
};

export const useParams = () => useContext(VacancyContext);
