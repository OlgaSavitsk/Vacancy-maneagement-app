import { IFormValue } from 'core/models/form.model';
import { VacancyFilterParams } from 'core/models/vacancy.model';
import { RECORDS_PER_PAGE } from './pagination.constants';

export const initFilterValue: IFormValue = {
  catalogues: [],
  payment_from: '',
  payment_to: '',
  keyword: '',
  no_agreement: 0,
};

export const DEFAULT_FILTER_PARAMS: VacancyFilterParams = {
  page: 0,
  count: RECORDS_PER_PAGE,
  published: 1,
  ids: [],
};
