import { Box, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  VacancyCardList,
  FilterForm,
  PaginationComponent,
  SearchField,
} from 'components';
import { initFilterValue } from 'constants/form';
import { IFormValue } from 'core';
import { NotFound } from 'pages/NotFound/NotFound';
import { useEffect } from 'react';
import { setParamsValue, useAppState } from 'store';
import { useHomeStyles } from './styles';

const Home = () => {
  const { classes } = useHomeStyles();
  const {
    state: { data, isFetching },
    dispatch,
  } = useAppState();

  const form = useForm<IFormValue>({
    initialValues: initFilterValue,
  });

  useEffect(() => {
    function fetch() {
      dispatch(setParamsValue({ ids: [] }));
    }
    fetch();
  }, [dispatch]);

  return (
    <div className="container">
      <Box className={classes.wrapper} mt={40}>
        <FilterForm form={form} />
        <Group className={classes.inner}>
          <SearchField form={form} />
          <VacancyCardList data={data?.objects} />
          <PaginationComponent />
          {!isFetching && !data?.objects.length && <NotFound isPage={false} />}
        </Group>
      </Box>
    </div>
  );
};

export default Home;
