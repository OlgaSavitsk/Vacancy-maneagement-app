import { VACANCY_API_PATH } from 'constants/api.constants';
import { VacancyData, VacancyFilterParams } from 'core/models/vacancy.model';
import { baseInstance, getRequest } from './api-base.service';

export const getVacancies = (filterParams: VacancyFilterParams): Promise<VacancyData> => {
  return getRequest(
    baseInstance.get<VacancyData>(VACANCY_API_PATH, {
      params: filterParams,
    }),
  );
};
