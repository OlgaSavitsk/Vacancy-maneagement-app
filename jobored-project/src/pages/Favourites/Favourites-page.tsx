import { useEffect } from 'react';
import { Box, Group } from '@mantine/core';
import { VacancyCardList } from 'components/CardList/CardList';
import { PaginationComponent } from 'components/Pagination/Pagination';
import { setParamsValue, useParams } from 'store';
import { useFavouritesStyles } from './styles';

const FavoritesPage = () => {
  const { classes } = useFavouritesStyles();
  const { state, dispatch } = useParams();

  useEffect(() => {
    dispatch(setParamsValue({ ids: state.favorites.ids }));
  }, [dispatch, state.favorites.ids]);

  return (
    <div className={classes.container}>
      <Box className={classes.wrapper} mt={40}>
        <Group className={classes.inner}>
          <VacancyCardList />
          <PaginationComponent />
        </Group>
      </Box>
    </div>
  );
};

export default FavoritesPage;
