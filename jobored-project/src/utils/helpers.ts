import { initFilterValue } from 'constants/form.constants';
import { INIT_PAGE_QUANTITY, MAX_TOTAL, RECORDS_PER_PAGE } from 'constants/pagination.constants';
import { Paths } from 'constants/paths.constants';
import { DEFAULT_FAVORITES, LocalStorageKey } from 'constants/storage.constants';
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

export const renderPaginationPage = (totalVacancy: number, activePage: number) => {
  let total = INIT_PAGE_QUANTITY;
  if (activePage === INIT_PAGE_QUANTITY && totalVacancy > MAX_TOTAL) {
    total = MAX_TOTAL / RECORDS_PER_PAGE;
  }
  if (activePage > INIT_PAGE_QUANTITY && totalVacancy > MAX_TOTAL) {
    total = MAX_TOTAL / RECORDS_PER_PAGE;
  }
  if (totalVacancy < INIT_PAGE_QUANTITY * RECORDS_PER_PAGE) {
    total = Math.ceil(totalVacancy / RECORDS_PER_PAGE);
  }
  return total;
};

export const getParams = (pathname: string) => {
  return pathname === Paths.favourites
    ? { ...initFilterValue, ids: getInitialState() }
    : pathname === Paths.home
    ? { ids: [] }
    : null;
};
