export const renderVacancyPayment = (
  payment_from: number,
  payment_to: number,
  currency: string,
) => {
  if (payment_from && payment_to) {
    return `${payment_from}-${payment_to} ${currency}`;
  }
  if (!payment_from && !payment_to) {
    return 'не указана';  
  }
  return `от ${payment_from || payment_to} ${currency}`;
};
