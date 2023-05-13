import { Button, CloseButton, rem, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { setParamsValue, useParams } from 'store/reducer';
import { useState } from 'react';

export const SearchField = () => {
  const { dispatch } = useParams();
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputClick = async (): Promise<void> => {
    if (searchInput) {
      dispatch(setParamsValue({ keyword: searchInput }));
    }
  };

  return (
    <>
      <TextInput
        placeholder="Введите название вакансии"
        rightSection={
          <>
            {searchInput && <CloseButton aria-label="Close modal" iconSize={20} />}
            <Button onClick={handleSearchInputClick} type="submit" radius="md" pl="sm">
              Поиск
            </Button>
          </>
        }
        icon={<IconSearch size="1rem" stroke={1.5} />}
        onChange={(e) => setSearchInput(e.target.value)}
        styles={() => ({
          root: {
            flexGrow: 1,
          },
          rightSection: {
            justifyContent: 'end',
            width: rem(83),
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
          },
        })}
      />
    </>
  );
};
