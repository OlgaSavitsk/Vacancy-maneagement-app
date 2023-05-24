import { FormProps, IndustryInfo } from "core/models";
import { useCallback, useEffect, useState } from "react";
import { useAppState } from "store";

export const useCataloguesValue = ({ form }: FormProps, searchParams?: URLSearchParams) => {
  const {
    state: { industryData }
  } = useAppState();
  const [state, setState] = useState<string | undefined>('')
  
  const selectedIndustryKey = useCallback(() => {
    return industryData
      .filter((industry) => form.values.catalogues?.includes(industry.title))
      .map((selected) => selected.key);
  }, [form.values.catalogues, industryData]);

  const selectedIndustryTitle = useCallback(() => {
    setState(industryData.find((industry: IndustryInfo) => {
      if (industry.key === Number(searchParams?.get('catalogues'))) {
        return industry;
      }
    })?.title);
  },[industryData, searchParams]);

  useEffect(() => {
    selectedIndustryTitle()
  }, [selectedIndustryTitle])

  return [state, selectedIndustryKey] as const;
};
