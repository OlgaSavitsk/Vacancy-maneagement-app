import { FilterParams } from 'core/models/vacancy.model';
import { createContext, useContext, useReducer } from 'react';
import { ActionType, AppAction, SetParams } from './actions';
import { AppState, InitialAppState } from './state';

const appReducer = (state: AppState, action: SetParams): AppState => {
  switch (action.type) {
    case ActionType.SetParams:
      return { ...state, params: {...state.params, ...action.payload} };
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
  payload: params
});

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, InitialAppState);

  return (
    <VacancyContext.Provider value={{ state, dispatch }}>
      {children}
    </VacancyContext.Provider>
  );
};

export const useParams = () => useContext(VacancyContext);
