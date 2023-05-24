import { createStyles, rem } from "@mantine/core";

export const useHeaderStyles = createStyles((theme) => ({
    inner: {
      maxWidth: rem(1116),
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      margin: '0 auto',
      padding: 0,
  
      [theme.fn.smallerThan('sm')]: {
        justifyContent: 'space-between',
      },
    },
  
    menu: {
      flexGrow: 1,
      gap: '1.7rem',
      letterSpacing: rem(0.5),
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  
    link: {
      display: 'block',
      lineHeight: theme.fontSizes.lg,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: theme.black,
      fontWeight: 500,
      fontSize: theme.fontSizes.md,
  
      '&:hover': {
        color: theme.colors.hover[1],
      },
  
      [theme.fn.smallerThan('sm')]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
      '&.active': {
        color: theme.colors.hover[1],
      },
    },
  
    logo: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '2.25rem',
    },
  
    dropdown: {
      position: 'absolute',
      top: rem(60),
      left: 0,
      right: 0,
      zIndex: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopWidth: 0,
      overflow: 'hidden',
  
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  }));