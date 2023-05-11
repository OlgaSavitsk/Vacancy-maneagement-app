import { INDUSTRY_API_PATH } from 'constants/api.constants';
import { IndustryInfo } from 'core/models/vacancy.model';
import { baseInstance, getRequest } from './api-base.service';

export const getIndustryValue = (): Promise<IndustryInfo[]> => {
  return getRequest(baseInstance.get<IndustryInfo[]>(INDUSTRY_API_PATH));
};
