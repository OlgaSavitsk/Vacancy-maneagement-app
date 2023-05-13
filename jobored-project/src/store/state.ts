import { VACANCY_FILTER_PARAMS } from 'constants/api.constants';
import { VacancyFilterParams } from 'core/models/vacancy.model';

export interface AppState {
  params: VacancyFilterParams;
}

export const InitialAppState: AppState = {
  params: VACANCY_FILTER_PARAMS,
};
