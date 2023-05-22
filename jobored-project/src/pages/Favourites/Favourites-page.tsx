import { Box, Group } from '@mantine/core';
import { VacancyCardList, PaginationComponent } from 'components';
import { DEFAULT_FILTER_PARAMS, initFilterValue } from 'constants/form';
import { useEffect, useMemo } from 'react';
import { setParamsValue, useAppState } from 'store';
import { useFavouritesStyles } from './styles';

const FavoritesPage = () => {
  const { classes } = useFavouritesStyles();
  const {
    state: { data, favorites, isFetching },
    dispatch,
  } = useAppState();

  useEffect(() => {
    console.log(DEFAULT_FILTER_PARAMS)
    dispatch(setParamsValue({ ...initFilterValue, ids: favorites.ids }));
  }, [dispatch, favorites.ids]);

  const vacanciesData = useMemo(() => {
    return data?.objects.filter((vacancy) => favorites.ids.includes(vacancy.id));
  }, [data, favorites.ids]);

  return (
    <div className="container">
      <Box className={classes.wrapper} mt={40}>
        <Group className={classes.inner}>
          <VacancyCardList data={vacanciesData} />
         {!isFetching && <PaginationComponent />}
        </Group>
      </Box>
    </div>
  );
};

export default FavoritesPage;
