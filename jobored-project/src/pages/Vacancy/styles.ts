import { createStyles, rem } from '@mantine/core';

export const useVacancyStyles = createStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '1.75rem',
    maxWidth: rem(805),
    width: '100%',
    minHeight: '360px',
    margin: '0 auto',
    marginBottom: '3rem',
    padding: '0 1rem',
  },
  inner: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'start',
    flexGrow: 1,
    rowGap: rem(20),
    '& > div, ul': {
      width: '100%',
    },
  },
  text: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
}));
