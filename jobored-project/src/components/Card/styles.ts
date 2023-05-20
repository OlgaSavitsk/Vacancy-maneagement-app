import { createStyles } from '@mantine/core';

export const useCardVacancyStyles = createStyles((theme) => ({
  card: {
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease-out',
    },
  },
  link: {
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    rowGap: '0.6rem',

    '& > a': {
      width: '100%',
      textDecoration: 'none',
      color: theme.black,
    },
  },
}));
