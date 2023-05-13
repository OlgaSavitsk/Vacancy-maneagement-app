import { Box, Group } from '@mantine/core';
import { VacancyCardList } from 'components/CardList/CardList';
import { FilterForm } from 'components/Filter/Filter';
import { PaginationComponent } from 'components/Pagination/Pagination';
import { SearchField } from 'components/Search/SearchField';
import { AppProvider } from 'store/reducer';
import { useHomeStyles } from './styles';

export const Home = () => {
  const { classes } = useHomeStyles();

  return (
    <div className={classes.container}>
      <Box className={classes.wrapper} mt={40}>
        <AppProvider>
          <FilterForm />
          <Group className={classes.inner}>
            <SearchField />
            <VacancyCardList />
            <PaginationComponent />
          </Group>
        </AppProvider>
      </Box>
    </div>
  );
};
