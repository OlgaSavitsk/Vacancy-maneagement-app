import { Favorites, FilterParams, VacancyInfo } from 'core/models/vacancy.model';

export enum ActionType {
  SetData,
  SetParams,
  AddFavorites,
}

export interface SetParams {
  type: ActionType.SetParams;
  payload: FilterParams | Favorites;
}

export interface AddFavorites {
  type: ActionType.AddFavorites;
  payload: number;
}

export interface SetData {
  type: ActionType.SetData;
  payload: VacancyInfo[];
}

export const setParamsValue = (params: FilterParams | Favorites): SetParams => ({
  type: ActionType.SetParams,
  payload: params,
});

export const addFavoriteId = (id: number): AddFavorites => ({
  type: ActionType.AddFavorites,
  payload: id,
});

export const setData = (data: VacancyInfo[]): SetData => ({
  type: ActionType.SetData,
  payload: data,
});

export type AppAction = SetParams | AddFavorites | SetData;
