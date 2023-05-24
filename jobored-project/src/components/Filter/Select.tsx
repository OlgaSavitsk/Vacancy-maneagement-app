import { useEffect } from 'react';
import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { FormProps } from 'core/models';
import { useAppState } from 'store';
import { useFilterStyles } from './styles';

export const SelectComponent = ({ form }: FormProps) => {
  const {
    classes: { field, label, item, rightSection },
    theme,
  } = useFilterStyles();
  const {
    state: { industryData },
  } = useAppState();

  useEffect(() => {
    form.setValues({ catalogues: form.values.catalogues });
  }, []);

  return (
    <Select
      label="Отрасль"
      placeholder="Выберите отрасль"
      data-elem="industry-select"
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
