import { DEFAULT_FILTER_PARAMS } from 'constants/form.constants';
import { Favorites, IndustryInfo, VacancyData, VacancyFilterParams } from 'core/models';
import { getInitialState } from 'utils';

export interface AppState {
  data: VacancyData | undefined;
  params: VacancyFilterParams | Favorites;
  favorites: Favorites;
  industryData: IndustryInfo[];
  isFetching: boolean;
}

export const InitialAppState: AppState = {
  data: undefined,
  params: { ...DEFAULT_FILTER_PARAMS, ids: [] },
  favorites: {
    ids: getInitialState(),
  },
  industryData: [],
  isFetching: false,
};
