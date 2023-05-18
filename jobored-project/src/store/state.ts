import { DEFAULT_FILTER_PARAMS } from 'constants/api.constants';
import { Favorites, VacancyFilterParams, VacancyInfo } from 'core/models/vacancy.model';
import { getInitialState } from 'utils/helpers';

export interface AppState {
  data: VacancyInfo[];
  params: VacancyFilterParams | Favorites;
  favorites: Favorites;
  isFetching: boolean;
}

export const InitialAppState: AppState = {
  data: [],
  params: { ...DEFAULT_FILTER_PARAMS, ids: [] },
  favorites: {
    ids: getInitialState(),
  },
  isFetching: false,
};
