import { createContext, useContext } from "react";
import { AppAction, InitialAppState, AppState } from "store";

const myParams = {
  state: InitialAppState,
  dispatch: (): void => undefined,
};

export const VacancyContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>(myParams);

export const useParams = () => useContext(VacancyContext);
