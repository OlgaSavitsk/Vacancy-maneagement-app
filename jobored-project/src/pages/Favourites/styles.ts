import { createStyles, rem } from "@mantine/core";

export const useFavouritesStyles = createStyles(() => ({
    container: {
      display: 'flex',
      flex: '1 1 auto',
      width: '100%',
      background: '#F7F7F8',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      columnGap: '1.75rem',
      maxWidth: rem(805),
      width: '100%',
      minHeight: '360px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    inner: {
      flexDirection: 'column',
      alignItems: 'start',
      flexGrow: 1,
      rowGap: rem(12),
      '& > div, ul': {
        width: '100%',
      },
    },
  }));