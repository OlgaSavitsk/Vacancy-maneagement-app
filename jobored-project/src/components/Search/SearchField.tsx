import { Button, CloseButton, Group, rem, TextInput } from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { setParamsValue, useAppState } from 'store';
import { FormProps } from 'core/models/form';

export const SearchField = ({ form }: FormProps) => {
  const { dispatch } = useAppState();

  const handleSearchInputClick = async (): Promise<void> => {
    dispatch(setParamsValue({ keyword: form.values.keyword }));
  };

  return (
    <Group>
      <TextInput
        placeholder="Введите название вакансии"
        rightSection={
          <>
            {form.values.keyword && <CloseButton aria-label="Close modal" iconSize={20} />}
            <Button onClick={handleSearchInputClick} type="submit" radius="md" lts={1}>
              Поиск
            </Button>
          </>
        }
        icon={<IconSearch size="1rem" stroke={1.5}/>}
        onKeyDown={getHotkeyHandler([
          ['Enter', handleSearchInputClick],
        ])}
        styles={() => ({
          root: {
            flexGrow: 1,
          },
          icon: {
            width: '2.8rem',
          },
          rightSection: {
            justifyContent: 'end',
            paddingRight: '0.75rem',
            columnGap: '0.5rem',
            '& button': {
              height: '2rem',
              fontSize: rem(14),
              fontWeight: 500,
              lineHeight: rem(21),
            },
          },
          input: {
            height: '3rem',
            letterSpacing: rem(0.4),
          },
        })}
        {...form.getInputProps('keyword')}
      />
    </Group>
  );
};
