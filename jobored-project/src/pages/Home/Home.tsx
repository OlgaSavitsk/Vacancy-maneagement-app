import { lazy, Suspense, useEffect } from 'react';
import { Box, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  VacancyCardList,
  FilterForm,
  PaginationComponent,
  SearchField,
} from 'components';
import { initFilterValue } from 'constants/form.constants';
import { IFormValue } from 'core/models';
import { useParams } from 'hooks/useSearchParams';
import { useAppState } from 'store';
import { useHomeStyles } from './styles';

const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const Home = () => {
  const { classes } = useHomeStyles();
  const {
    state: { data, isFetching },
  } = useAppState();

  const form = useForm<IFormValue>({
    initialValues: initFilterValue,
  });

  const [setFilterParams] = useParams({ form });

  useEffect(() => {
    setFilterParams();
  }, [setFilterParams]);

  return (
    <div className="container">
      <Box className={classes.wrapper} mt={40}>
        <FilterForm form={form} />
        <Group className={classes.inner}>
          <SearchField form={form} />
          <VacancyCardList data={data?.objects} />
          <PaginationComponent />
          <Suspense>
            {!isFetching && !data?.objects.length && <NotFound isPage={false} />}
          </Suspense>
        </Group>
      </Box>
    </div>
  );
};

