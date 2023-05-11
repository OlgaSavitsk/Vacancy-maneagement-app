import { Box, Group, Pagination } from '@mantine/core';
import { getVacancies } from 'api/vacancy.service';
import { VacancyCardList } from 'components/CardList/CardList';
import { FilterForm } from 'components/Filter/Filter';
import { SearchField } from 'components/Search/SearchField';
import { FilterValue, VacancyData } from 'core/models/vacancy.model';
import { useEffect, useState } from 'react';
import { useHomeStyles } from './styles';

export const Home = () => {
  const { classes } = useHomeStyles();
  const [activePage, setPage] = useState(1);
  const [data, setData] = useState<VacancyData | null>(null);
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterValue, setFilterValue] = useState<FilterValue>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVacancies(activePage, searchInput, filterValue);
      setData(data);
    };
    fetchData();
  }, [activePage, filterValue, searchInput]);

  return (
    <div className={classes.container}>
      <Box className={classes.wrapper} mt={40}>
        <FilterForm onChangeFilterValue={(data) => setFilterValue(data)} />
        <Group className={classes.inner}>
          <SearchField onChange={(data) => setSearchInput(data)} />
          <VacancyCardList vacancies={data?.objects} />
          <Pagination value={activePage} onChange={setPage} total={3} position="center" />
        </Group>
      </Box>
    </div>
  );
};
