import { Group, NumberInput } from '@mantine/core';
import { FormProps } from 'core/models';
import { useFilterStyles } from './styles';

export const SalaryInput = ({ form }: FormProps) => {
  const {
    classes: { field, label, control },
  } = useFilterStyles();

  return (
    <Group sx={{ width: '100%', gap: '0.6rem' }}>
      <NumberInput
        label="Оклад"
        placeholder="От"
        data-elem="salary-from-input"
        min={0}
        stepHoldDelay={500}
        stepHoldInterval={100}
        step={10000}
        rightSectionWidth={30}
        classNames={{
          label: label,
          root: field,
          control: control,
        }}
        {...form.getInputProps('payment_from')}
      />

      <NumberInput
        placeholder="До"
        data-elem="salary-to-input"
        min={0}
        stepHoldDelay={500}
        stepHoldInterval={100}
        step={10000}
        rightSectionWidth={30}
        classNames={{
          root: field,
          control: control,
        }}
        {...form.getInputProps('payment_to')}
      />
    </Group>
  );
};
