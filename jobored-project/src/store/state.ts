import { DEFAULT_FILTER_PARAMS } from 'constants/form';
import { Favorites, VacancyData, VacancyFilterParams } from 'core';
import { getInitialState } from 'utils';

export interface AppState {
  data: VacancyData | undefined;
  params: VacancyFilterParams | Favorites;
  favorites: Favorites;
  isFetching: boolean;
}

export const InitialAppState: AppState = {
  data: undefined,
  params: { ...DEFAULT_FILTER_PARAMS, ids: [] },
  favorites: {
    ids: getInitialState(),
  },
  isFetching: false,
};
