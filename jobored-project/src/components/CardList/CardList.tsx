import { Group, List } from '@mantine/core';
import { VacancyCard } from 'components/Card/VacancyCard';
import { useParams } from 'store';
import { VacancyInfo } from 'core/models/vacancy.model';
import { LoaderContainer } from 'core/LoaderContainer/LoaderContainer';

interface Props {
  data: VacancyInfo[];
}

export const VacancyCardList = ({ data }: Props) => {
  const {
    state: { isFetching },
  } = useParams();

  return ( 
      <Group mih={300} sx={{ alignItems: 'start', flex: '1 1 auto', position: 'relative' }}>
      <LoaderContainer isLoading={isFetching} />
        <List
          styles={() => ({
            root: {
              rowGap: '1rem',
              marginBottom: '2.5rem',
            },
            itemWrapper: {
              width: '100%',
            },
          })}
        >
          {data.map((vacancy: VacancyInfo) => {
            return (
              <List.Item key={vacancy.id}>
                <VacancyCard vacancy={vacancy} />
              </List.Item>
            );
          })}
        </List>
      </Group>
  );
};
