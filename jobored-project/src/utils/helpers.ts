import { DEFAULT_FAVORITES, LocalStorageKey } from 'constants/storage';
import { VacancyInfo } from 'core/models/vacancy.model';
import { getStorageValue } from 'hooks/useLocalState';

export const renderVacancyPayment = (
  payment_from: number,
  payment_to: number,
  currency: string,
): string => {
  if (payment_from && payment_to) {
    return `${payment_from}-${payment_to} ${currency}`;
  }
  if (!payment_from && !payment_to) {
    return 'не указана';
  }
  return `от ${payment_from || payment_to} ${currency}`;
};

export const getInitialState = (): number[] => {
  const { ids } = getStorageValue(LocalStorageKey.favoritesId, DEFAULT_FAVORITES);
  return ids;
};
