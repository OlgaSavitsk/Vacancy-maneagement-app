import { Box, Group } from '@mantine/core';
import { VacancyCardList } from 'components/CardList/CardList';
import { PaginationComponent } from 'components/Pagination/Pagination';
import { useParams } from 'store';
import { useFavouritesStyles } from './styles';

const FavoritesPage = () => {
  const { classes } = useFavouritesStyles();
  const {
    state: { data },
  } = useParams();


  return (
    <div className={classes.container}>
      <Box className={classes.wrapper} mt={40}>
        <Group className={classes.inner}>
          <VacancyCardList data={data} />
          <PaginationComponent />
        </Group>
      </Box>
    </div>
  );
};

export default FavoritesPage;
