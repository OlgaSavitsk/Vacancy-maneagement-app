import { Box, Group } from '@mantine/core';
import { VacancyCardList, PaginationComponent } from 'components';
import { useMemo } from 'react';
import { useAppState } from 'store';
import { useFavouritesStyles } from './styles';

const FavoritesPage = () => {
  const { classes } = useFavouritesStyles();
  const {
    state: { data, favorites },
  } = useAppState();

  const vacanciesData = useMemo(() => {
    return data?.objects.filter((vacancy) => favorites.ids.includes(vacancy.id));
  }, [data, favorites.ids]);

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
