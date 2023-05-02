import { Button, rem, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export const SearchField = () => {
  return (
    <>
      <TextInput
        placeholder="Введите название вакансии"
        rightSection={
          <Button type="submit" radius="md">
            Поиск
          </Button>
        }
        icon={<IconSearch size="1rem" stroke={1.5} />}
        styles={() => ({
          root: {
            flexGrow: 1,
          },
          rightSection: {
            width: rem(83),
            paddingRight: '0.75rem',
            '& button': {
              height: '2rem',
              fontSize: rem(14),
              fontWeight: 500,
              lineHeight: rem(21),
            },
          },
          input: {
            height: '3rem',
          },
        })}
      />
    </>
  );
};
