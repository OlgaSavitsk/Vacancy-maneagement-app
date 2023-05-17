import { Box, Group } from '@mantine/core';
import { VacancyCardList } from 'components/CardList/CardList';
import { FilterForm } from 'components/Filter/Filter';
import { PaginationComponent } from 'components/Pagination/Pagination';
import { SearchField } from 'components/Search/SearchField';
import { NotFound } from 'pages/NotFound/NotFound';
import { useEffect } from 'react';
import { setParamsValue, useParams } from 'store';
import { useHomeStyles } from './styles';

const Home = () => {
  const { classes } = useHomeStyles();
  const {
    state: { data },
    dispatch,
  } = useParams();

  useEffect(() => {
    dispatch(setParamsValue({ ids: [] }));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Box className={classes.wrapper} mt={40}>
        <FilterForm />
        <Group className={classes.inner}>
          <SearchField />
          {data.length ? (
            <>
              <VacancyCardList />
              <PaginationComponent />
            </>
          ) : (
            <NotFound isPage={false} />
          )}
        </Group>
      </Box>
    </div>
  );
};

export default Home;
