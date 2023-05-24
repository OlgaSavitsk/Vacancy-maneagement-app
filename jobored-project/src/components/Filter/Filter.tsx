import { useCallback } from 'react';
import { Button, Group, CloseButton, Paper, Title } from '@mantine/core';
import { setParamsValue, useAppState } from 'store';
import { SelectComponent } from './Select';
import { SalaryInput } from './SalaryInput';
import { FormProps, IFormValue } from 'core/models';
import { useFilterStyles } from './styles';
import { useCataloguesValue } from 'hooks/useCatalogues';

export const FilterForm = ({ form }: FormProps) => {
  const { dispatch } = useAppState();
  const [, selectedIndustryKey] = useCataloguesValue({form})
  const { classes } = useFilterStyles();

  const handleSubmit = (values: IFormValue) => {
    try {
      dispatch(
        setParamsValue({
          ...values,
          catalogues: selectedIndustryKey(),
        }),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = useCallback(() => {
    try {
      form.reset();
      dispatch(
        setParamsValue({
          ...form.values,
          catalogues: [],
        }),
      );
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Paper
      maw={315}
      p="lg"
      radius="md"
      withBorder
      sx={{
        alignSelf: 'start',
        minHeight: '360px',
        '@media (max-width: 755px)': {
          maxWidth: '100%',
          width: '100%',
        },
      }}
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

        <SelectComponent
          form={form}
        />
        <SalaryInput form={form} />

        <Group position="center" mt="lg">
          <Button
            type="submit"
            data-elem="search-button"
            fullWidth
            radius="md"
            h="2.5rem"
          >
            Применить
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
