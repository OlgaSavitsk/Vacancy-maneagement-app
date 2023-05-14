import { FilterParams } from 'core/models/vacancy.model';

export enum ActionType {
  SetParams,
  AddFavorites,
}

export interface SetParams {
  type: ActionType.SetParams;
  payload: FilterParams;
}

export interface AddFavorites {
  type: ActionType.AddFavorites;
  payload: number;
}

export type AppAction = SetParams | AddFavorites;
