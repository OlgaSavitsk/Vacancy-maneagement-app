import { VACANCY_API_PATH } from 'constants/api.constants';
import { PAGE_SIZE } from 'constants/common.constants';
import { VacancyData } from 'core/models/vacancy.model';
import { baseInstance, getRequest } from './api-base.service';

export const getVacancies = (page: number): Promise<VacancyData> => {
  return getRequest(
    baseInstance.get<VacancyData>(VACANCY_API_PATH, {
      params: {
        page: page,
        count: PAGE_SIZE,
      },
    }),
  );
};
