import { useCallback, useState } from 'react';
import { Button, Group, CloseButton, Paper, Title } from '@mantine/core';
import { useFilterStyles } from './styles';
import { setParamsValue, useAppState } from 'store';
import { AGREEMENT_VALUE } from 'constants/common.constants';
import { SelectComponent } from './Select';
import { SalaryInput } from './SalaryInput';
import { FormProps, IFormValue } from 'core/models/form';

export const FilterForm = ({ form }: FormProps) => {
  const { dispatch } = useAppState();
  const [industryData, setIndustryData] = useState<number[] | undefined>([]);
  const { classes } = useFilterStyles();

  const handleSubmit = async (values: IFormValue): Promise<void> => {
    try {
      const params =
        values.payment_from || values.payment_to ? AGREEMENT_VALUE : undefined;
      dispatch(
        setParamsValue({
          ...values,
          catalogues: industryData,
          no_agreement: params,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = useCallback(() => {
    try {
      form.reset();
      dispatch(
        setParamsValue({
          ...form.values,
          catalogues: [],
          no_agreement: undefined,
        }),
      );
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Paper
      maw={315}
      p="lg"
      radius="md"
      withBorder
      sx={{ alignSelf: 'start', minHeight: '360px', '@media (max-width: 755px)': {
       maxWidth: '100%', width: '100%'
      }, }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group sx={{ display: 'flex', alignItems: 'start' }}>
          <Title weight={700} fz={20} lh={1}>
            Фильтры
          </Title>
          <CloseButton
            className={classes.close}
            aria-label="Close modal"
            iconSize={12}
            type="reset"
            onClick={resetForm}
          />
        </Group>

        <SelectComponent form={form} setSelectedValue={(data) => setIndustryData(data)} />
        <SalaryInput form={form} />

        <Group position="center" mt="lg">
          <Button type="submit" data-elem="search-button" fullWidth radius="md" h="2.5rem">
            Применить
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
