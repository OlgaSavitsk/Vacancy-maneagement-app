import {
  Text,
  Button,
  Group,
  CloseButton,
  NumberInput,
  Paper,
  MultiSelect,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconChevronDown } from '@tabler/icons-react';
import { getIndustryValue } from 'api/filter.service';
import { setParamsValue, useParams } from 'store/reducer';
import { IndustryInfo } from 'core/models/vacancy.model';
import { useEffect, useState } from 'react';
import { useFilterStyles } from './styles';

interface IFormValue {
  catalogues: string[];
  payment_from: number;
  payment_to: number;
}

export const FilterForm = () => {
  const { dispatch } = useParams();
  const [industryData, setIndustryData] = useState<IndustryInfo[]>([]);
  const { classes } = useFilterStyles();

  const form = useForm<IFormValue>();

  const handleSubmit = async (values: IFormValue): Promise<void> => {
    try {
      values.catalogues &&
        dispatch(setParamsValue({ ...values, catalogues: setIndustryValue(values) }));
    } catch (error) {
      console.log(error);
    }
  };

  const setIndustryValue = (values: IFormValue): number[] => {
    return industryData
      .filter((value) => values.catalogues.includes(value.title))
      .map((val) => val.key);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getIndustryValue();
      setIndustryData(data);
    };
    fetch();
  }, []);

  return (
    <Paper
      maw={315}
      p="lg"
      radius="md"
      withBorder
      sx={{ alignSelf: 'start', minHeight: '360px' }}
    >
      <Group sx={{ display: 'flex' }}>
        <Text weight={700} fz={20}>
          Фильтры
        </Text>
        <CloseButton className={classes.close} aria-label="Close modal" iconSize={12} />
      </Group>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <MultiSelect
          label="Отрасль"
          placeholder="Выберите отрасль"
          data={industryData.map((industry) => industry.title)}
          classNames={{ label: classes.label }}
          rightSection={<IconChevronDown size="1rem" />}
          dropdownPosition="bottom"
          disableSelectedItemFiltering
          maxSelectedValues={1}
          {...form.getInputProps('catalogues')}
        />
        <Group sx={{ width: '100%' }} pt="lg">
          <NumberInput
            label="Оклад"
            placeholder="От"
            stepHoldDelay={500}
            stepHoldInterval={100}
            classNames={{ label: classes.label, root: classes.field }}
            {...form.getInputProps('payment_from')}
          />

          <NumberInput
            placeholder="До"
            stepHoldDelay={500}
            stepHoldInterval={100}
            classNames={{ root: classes.field }}
            {...form.getInputProps('payment_to')}
          />
        </Group>
        <Group position="center" mt="lg">
          <Button type="submit" fullWidth radius="md">
            Применить
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
