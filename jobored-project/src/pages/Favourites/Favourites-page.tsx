import { Box, Group } from '@mantine/core';
import { VacancyCardList } from 'components/CardList/CardList';
import { PaginationComponent } from 'components/Pagination/Pagination';
import { useEffect, useMemo } from 'react';
import { setParamsValue, useAppState } from 'store';
import { getInitialState } from 'utils/helpers';
import { useFavouritesStyles } from './styles';

const FavoritesPage = () => {
  const { classes } = useFavouritesStyles();
  const {
    state: { data, favorites },
    dispatch,
  } = useAppState();

  const vacanciesData = useMemo(() => {
    return data.filter((vacancy) => favorites.ids.includes(vacancy.id));
  }, [data, favorites.ids]);

  useEffect(() => {
    function fetch() {
      const ids = getInitialState();
      dispatch(setParamsValue({ ids: ids }));
    }
    fetch();
  }, []);

  return (
    <div className="container">
      <Box className={classes.wrapper} mt={40}>
        <Group className={classes.inner}>
          <VacancyCardList data={vacanciesData} />
          <PaginationComponent />
        </Group>
      </Box>
    </div>
  );
};

export default FavoritesPage;
