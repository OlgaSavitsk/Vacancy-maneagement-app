import { createStyles, rem } from "@mantine/core";

export const useHomeStyles = createStyles(() => ({
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
      maxWidth: rem(1156),
      width: '100%',
      minHeight: '360px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    inner: {
      flexDirection: 'column',
      alignItems: 'start',
      flexGrow: 1,
      maxWidth: rem(773),
      width: '100%',
      rowGap: rem(12),
      '& > div, ul': {
        width: '100%',
      },
    },
  }));