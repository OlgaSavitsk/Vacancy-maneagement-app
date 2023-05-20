import { DEFAULT_FILTER_PARAMS } from 'constants/api.constants';
import { Favorites, VacancyData, VacancyFilterParams, VacancyInfo } from 'core/models/vacancy.model';
import { getInitialState } from 'utils/helpers';

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
