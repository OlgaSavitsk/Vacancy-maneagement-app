import { Group, List } from '@mantine/core';
import { VacancyCard } from 'components';
import { useAppState } from 'store';
import { VacancyInfo, LoaderContainer } from 'core';

interface Props {
  data: VacancyInfo[] | undefined;
}

export const VacancyCardList = ({ data }: Props) => {
  const {
    state: { isFetching },
  } = useAppState();

  return (
    <Group sx={{ alignItems: 'start', flex: '1 1 auto', position: 'relative' }}>
      <LoaderContainer isLoading={isFetching} />
      <List
        styles={() => ({
          root: {
            rowGap: '1rem',
            marginBottom: '2.5rem',
            display: data?.length ? 'flex' : 'none'
          },
          itemWrapper: {
            width: '100%',
          },
        })}
      >
        {data && data.map((vacancy: VacancyInfo) => {
          return (
            <List.Item key={vacancy.id}>
              <VacancyCard vacancy={vacancy} isDetails={false} />
            </List.Item>
          );
        })}
      </List>
    </Group>
  );
};
