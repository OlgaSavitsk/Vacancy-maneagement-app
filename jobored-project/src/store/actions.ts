import { FilterParams } from 'core/models/vacancy.model';

export enum ActionType {
  SetParams,
}

export interface SetParams {
  type: ActionType.SetParams;
  payload: FilterParams;
}

export type AppAction = SetParams;
