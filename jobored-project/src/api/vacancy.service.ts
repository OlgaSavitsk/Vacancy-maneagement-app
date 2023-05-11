import { VACANCY_API_PATH } from 'constants/api.constants';
import { PAGE_SIZE } from 'constants/common.constants';
import { VacancyData } from 'core/models/vacancy.model';
import { baseInstance, getRequest } from './api-base.service';

export const getVacancies = (
  page: number,
  searchValue?: string,
  { selectKey, from, to }: { selectKey?: number[]; from?: number | null; to?: number | null } = {},
): Promise<VacancyData> => {
  return getRequest(
    baseInstance.get<VacancyData>(VACANCY_API_PATH, {
      params: {
        page: page - 1,
        count: PAGE_SIZE,
        published: 1,
        keyword: searchValue,
        catalogues: selectKey,
        payment_from: from,
        payment_to: to,
        no_agreement: 1
      },
    }),
  );
};
