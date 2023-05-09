import { Box, createStyles, Group, Pagination, rem } from '@mantine/core';
import { getVacancies } from 'api/vacancy.service';
import { VacancyCardList } from 'components/CardList/CardList';
import { FilterForm } from 'components/Filter/Filter';
import { SearchField } from 'components/Search/SearchField';
import { VacancyData } from 'core/models/vacancy.model';
import { useEffect, useState } from 'react';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flex: '1 1 auto',
    width: '100%',
    background: '#F7F7F8'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '1.75rem',
    maxWidth: rem(1156),
    width: '100%',
    minHeight: '360px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  inner: {
    flexDirection: 'column',
    alignItems: 'start',
    flexGrow: 1,
    maxWidth: rem(773),
    width: '100%',
    rowGap: rem(12),
    '& > div, ul': {
      width: '100%',
    }
  }
}));

export const Home = () => {
  const { classes } = useStyles();
  const [activePage, setPage] = useState(1);
  const [data, setData] = useState<VacancyData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVacancies(activePage);
      setData(data)
      console.log(data)
    }
    fetchData();
  }, [activePage]);

  return (
    <div className={classes.container}>
      <Box className={classes.wrapper} mt={40}>
        <FilterForm />
        <Group className={classes.inner}>
          <SearchField />
          <VacancyCardList vacancies={data?.objects} />
          <Pagination value={activePage} onChange={setPage} total={125} position='center'/>
        </Group>
      </Box>
    </div>
  );
};
