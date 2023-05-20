import { Box, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { VacancyCardList } from 'components/CardList/CardList';
import { FilterForm } from 'components/Filter/Filter';
import { PaginationComponent } from 'components/Pagination/Pagination';
import { SearchField } from 'components/Search/SearchField';
import { IFormValue } from 'core/models/form';
import { NotFound } from 'pages/NotFound/NotFound';
import { useEffect } from 'react';
import { setParamsValue, useAppState } from 'store';
import { useHomeStyles } from './styles';

const Home = () => {
  const { classes } = useHomeStyles();
  const {
    state: { data, isFetching }, dispatch
  } = useAppState();

  const form = useForm<IFormValue>({
    initialValues: {
      catalogues: [],
      payment_from: '',
      payment_to: '',
      keyword: '',
    },
  });

  useEffect(() => {
    dispatch(setParamsValue({ids: []}))
  }, [])

  return (
    <div className='container'>
      <Box className={classes.wrapper} mt={40}>
        <FilterForm form={form} />
        <Group className={classes.inner}>
          <SearchField form={form}/>
          {data?.objects.length ? (
            <>
              <VacancyCardList data={data.objects} />
              <PaginationComponent />
            </>
          ) : 
            (!isFetching && <NotFound isPage={false} />)}
          
        </Group>
      </Box>
    </div>
  );
};

export default Home;
