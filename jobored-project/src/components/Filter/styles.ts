import { createStyles, rem } from '@mantine/core';

export const useFilterStyles = createStyles((theme) => ({
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
      paddingRight: rem(7),
      letterSpacing: rem(0.5),
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.colors.hover[0],
    },
    '&:active': {
      color: theme.colors.active[0],
    },
  },

  label: {
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '1.25rem',
    marginBottom: rem(7),
  },
  item: {
    borderRadius: '0.5rem',
    '&[data-selected]': {
      backgroundColor: theme.colors.hover[0],
      color: theme.white,
      '& ~ div div div svg': {
        display: 'none',
      },
    },
    '&[data-hovered]': {
      backgroundColor: theme.colors.hover[1],
      color: theme.white,
    },
  },

  field: {
    width: '100%',
    borderRadius: '0.5rem',
    '& input': {
      height: '2.6rem',
    },
    '& input:hover': {
      borderColor: theme.colors.hover[1],
    },
    '& input[aria-controls]': {
      '& ~ div svg': {
        transform: 'rotate(180deg)',
        stroke: theme.colors.hover[1],
      },
    },
    '& input:selected': {
      '& ~ div div svg': {
        display: 'none',
      },
    },
    // '&[aria-expanded=false]': {
    //   '& div div svg': {
    //    display: 'none'
    //   },
    // }
  },
  rightSection: {
    width: '2.8rem',
  },
  control: {
    height: '0.75rem',
    paddingTop: '0.5rem',
    stroke: theme.colors.grey[0],
    border: 'none',
    cursor: 'pointer',
    '& + button': {
      padding: '0 0 0.5rem',
    },
    '&:not(:disabled):hover': {
      stroke: theme.colors.hover[0],
      backgroundColor: 'transparent',
    },
    '&:not(:disabled):active': {
      stroke: theme.colors.hover[1],
    },
  },
}));
