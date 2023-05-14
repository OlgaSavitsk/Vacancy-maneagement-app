import { VACANCY_FILTER_PARAMS } from 'constants/api.constants';
import { Favorites, VacancyFilterParams } from 'core/models/vacancy.model';
import { createFavoritesFromStorage } from 'utils/helpers';

export interface AppState {
  params: VacancyFilterParams;
  favorites: Favorites;
}

export const InitialAppState: AppState = {
  params: VACANCY_FILTER_PARAMS,
  favorites: {
    ids: createFavoritesFromStorage()
  },
};
