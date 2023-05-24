import { Button, CloseButton, Group, MediaQuery, rem, TextInput } from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { setParamsValue, useAppState } from 'store';
import { FormProps } from 'core/models';
import { useCataloguesValue } from 'hooks/useCatalogues';

export const SearchField = ({ form }: FormProps) => {
  const { dispatch } = useAppState();
  const [, selectedIndustryKey] = useCataloguesValue({ form });

  const handleSearchInputClick = async (): Promise<void> => {
    dispatch(
      setParamsValue({
        ...form.values,
        catalogues: selectedIndustryKey() as number[],
      }),
    );
  };

  const resetSearchInput = () => {
    form.setValues({ keyword: '' });
  };

  return (
    <Group>
      <TextInput
        placeholder="Введите название вакансии"
        data-elem="search-input"
        rightSection={
          <>
            {form.values.keyword && (
              <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
                <CloseButton
                  aria-label="Close modal"
                  iconSize={20}
                  onClick={resetSearchInput}
                />
              </MediaQuery>
            )}
            <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
              <Button
                data-elem="search-button"
                onClick={handleSearchInputClick}
                type="submit"
                radius="md"
                lts={1}
              >
                Поиск
              </Button>
            </MediaQuery>
            <MediaQuery smallerThan="xs" styles={{ color: 'blue' }}>
              <IconSearch size="1rem" stroke={1.5} onClick={handleSearchInputClick} />
            </MediaQuery>
          </>
        }
        icon={
          <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
            <IconSearch size="1rem" stroke={1.5} />
          </MediaQuery>
        }
        onKeyDown={getHotkeyHandler([['Enter', handleSearchInputClick]])}
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
