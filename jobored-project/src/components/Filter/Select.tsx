import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { getIndustryValue } from 'api/filter.service';
import { FormProps } from 'core/models/form';
import { IndustryInfo } from 'core/models/vacancy.model';
import { useState, useEffect, useCallback } from 'react';
import { useFilterStyles } from './styles';

interface SelectProps extends FormProps {
  setSelectedValue: (selectedValue: number[] | undefined) => void
}

export const SelectComponent = ({ form, setSelectedValue }: SelectProps) => {
  const [industryData, setIndustryData] = useState<IndustryInfo[]>([]);
  const {
    classes: { field, label, item, rightSection },
    theme,
  } = useFilterStyles();

  const selectedIndustryValue = useCallback((): number[] => {
    return industryData
      .filter((value: IndustryInfo) => form.values.catalogues.includes(value.title))
      .map((val) => val.key);
  }, [form.values.catalogues]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getIndustryValue();
      setIndustryData(data);
    };
    fetch();
  }, []);

  useEffect(() => {
    setSelectedValue(selectedIndustryValue())
  }, [selectedIndustryValue]);

  return (
    <Select
      label="Отрасль"
      placeholder="Выберите отрасль"
      
      data={industryData.map((industry) => industry.title)}
      classNames={{ root: field, label: label, item: item, rightSection: rightSection }}
      rightSection={<IconChevronDown color={theme.colors.grey[0]} />}
      clearable
      dropdownPosition="bottom"
      m="27px 0 18px"
      {...form.getInputProps('catalogues')}
    />
  );
};
