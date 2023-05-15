import { DEFAULT_FAVORITES, LocalStorageKey } from 'constants/storage';
import { FilterParams } from 'core/models/vacancy.model';
import { useLocalState } from 'hooks/useLocalState';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { ActionType, AddFavorites, AppAction, SetParams } from './actions';
import { AppState, InitialAppState } from './state';

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

export const setParamsValue = (params: FilterParams): SetParams => ({
  type: ActionType.SetParams,
  payload: params,
});

export const addFavoriteId = (id: number): AddFavorites => ({
  type: ActionType.AddFavorites,
  payload: id,
});

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, InitialAppState);
  const [idsValue, setIds] = useLocalState(LocalStorageKey.favoritesId, DEFAULT_FAVORITES);
  
  useEffect(() => {
    const { ids } = state.favorites;
    setIds({ ids: [...ids] });
  }, [state.favorites])

  return (
    <VacancyContext.Provider value={{ state, dispatch }}>
      {children}
    </VacancyContext.Provider>
  );
};

export const useParams = () => useContext(VacancyContext);
