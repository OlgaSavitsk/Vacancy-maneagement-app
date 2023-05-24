import { useCallback, useEffect } from 'react';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import { FormProps } from 'core/models';
import { useAppState } from 'store';
import { useCataloguesValue } from './useCatalogues';

export const useParams = ({ form }: FormProps) => {
  const {
    state: { params },
  } = useAppState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [state] = useCataloguesValue({ form }, searchParams);

  const setFormValue = useCallback(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    form.setValues({
      ...form.values,
      payment_from: Number(currentParams.payment_from) || '',
      payment_to: Number(currentParams.payment_to) || '',
      catalogues: state,
      keyword: currentParams.keyword || '',
    });
  }, [searchParams, state]);

  const setFilterParams = useCallback(() => {
    setSearchParams(params as unknown as URLSearchParamsInit);
  }, [params]);

  useEffect(() => {
    setFilterParams();
    setFormValue();
  }, [setFilterParams, setFormValue]);

  return [setFilterParams] as const;
};
