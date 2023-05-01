import {
  Group,
  rem,
  Box,
  Header,
  Burger,
  Image,
  createStyles,
  Title,
  Container,
  Transition,
  Paper,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderLinkProps } from 'shared/models/header';

const useStyles = createStyles((theme) => ({
  inner: {
    maxWidth: rem(1116),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'space-between',
    },
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
      color: theme.colors.blue[9],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  logo: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '2.25rem',
    letterSpacing: '-0.02em',
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

  active: {
    color: theme.colors.blue[9],
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

export function HeaderMegaMenu({ links }: HeaderLinkProps) {
  const { pathname } = useLocation()
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(pathname);

  const menuItems = links.map((link) => (
    <Link
      to={link.path}
      key={link.label}
      className={cx(classes.link, { [classes.active]: active === link.path })}
      onClick={() => {
        setActive(link.path);
        closeDrawer();
      }}
    >{link.label}</Link>
  ));

  return (
    <Box pb={120}>
      <Header height={84} px="md">
        <Container className={classes.inner}>
          <Group sx={{ height: '100%' }}>
            <Image width={30} src="./src/assets/union.svg" alt="Logo" />
            <Title className={classes.logo}>Jobored</Title>
          </Group>

          <Group sx={{ height: '100%', flexGrow: 1 }} spacing={0} position="center" className={classes.hiddenMobile}>
            {menuItems}
          </Group>
          <Burger opened={opened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {menuItems}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </Box>
  );
}
