import { createStyles, rem } from "@mantine/core";

export const useFilterStyles = createStyles(() => ({
    close: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'end',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      borderRadius: '0.5rem',
      '&:before': {
        content: '"Сбросить все"',
        paddingRight: '7px',
      },
    },
    label: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
    option: {
      '&:hover': {
        color: '#5E96FC',
      },
    },
    field: {
      width: '100%',
      borderRadius: '0.5rem',
    },
  }));