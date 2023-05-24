import { createStyles, rem } from '@mantine/core';

export const useHomeStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '1.75rem',
    maxWidth: rem(1156),
    width: '100%',
    minHeight: '360px',
    margin: '0 auto',
    padding: '0 1.2rem',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      gap: '1rem',
      minHeight: '50%',
      height: '100%',
    },
    [theme.fn.smallerThan('sx')]: {
      minHeight: '50%',
    },
  },
  inner: {
    position: 'relative',
    minHeight: '100%',
    flexDirection: 'column',
    alignItems: 'start',
    flexGrow: 1,
    maxWidth: rem(773),
    width: '100%',
    '& > div, ul': {
      width: '100%',
    },
  },
}));
