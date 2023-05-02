import { Box, createStyles, Group, rem } from '@mantine/core';
import { VacancyCard } from 'components/Card/VacancyCard';
import { FilterForm } from 'components/Filter/Filter';
import { SearchField } from 'components/Search/SearchField';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    width: '100%',
    background: '#F7F7F8'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '1.75rem',
    maxWidth: rem(1156),
    width: '100%',
    height: '100%',
    margin: '0 auto',
    padding: '0 1rem',
  },
  inner: {
    flexDirection: 'column',
    alignItems: 'start',
    flexGrow: 1,
    rowGap: rem(12),
    '& > div': {
      width: '100%',
    }
  }
}));

export const Home = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Box className={classes.wrapper} mt={40}>
        <FilterForm />
        <Group className={classes.inner}>
          <SearchField />
          <VacancyCard />
        </Group>
      </Box>
    </div>
  );
};
