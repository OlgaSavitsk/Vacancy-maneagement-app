import { Text, Button, Group, MultiSelect, CloseButton, createStyles, NumberInput, Paper } from '@mantine/core';
import { useForm } from '@mantine/form';

const useStyles = createStyles(() => ({
  close: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'end',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    '&:before': {
      content: '"Сбросить все"',
      paddingRight: '7px',
    },
  },
  label: {
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '1.25rem',
  },
  field: {
    width: '100%',
    borderRadius: '0.5rem',
  },
}));

export const FilterForm = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Paper maw={315} p="lg" radius="md" withBorder>
      <Group sx={{ display: 'flex' }}>
        <Text weight={700} fz={20}>
          Фильтры
        </Text>
        <CloseButton className={classes.close} aria-label="Close modal" iconSize={12} />
      </Group>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <MultiSelect
          data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
          label="Отрасль"
          placeholder="Выберите отрасль"
          classNames={{ label: classes.label }}
          pt={30}
          radius={8}
        />
        <Group sx={{ width: '100%' }} pt="lg">
          <NumberInput
            label="Оклад"
            placeholder="От"
            stepHoldDelay={500}
            stepHoldInterval={100}
            classNames={{ label: classes.label, root: classes.field }}
          />

          <NumberInput
            placeholder="До"
            stepHoldDelay={500}
            stepHoldInterval={100}
            classNames={{ root: classes.field }}
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
