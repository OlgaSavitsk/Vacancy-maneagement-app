import { createStyles } from '@mantine/core';

export const useCardVacancyStyles = createStyles(() => ({
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

    '& > a': {
      width: '100%',
      textDecoration: 'none',
      color: '#232134',
    },
  },
}));
