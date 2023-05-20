import {
  Group,
  Box,
  Header,
  Burger,
  Image,
  Title,
  Container,
  Transition,
  Paper,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderLinkProps } from 'core/models/header.model';
import { NavLink } from 'react-router-dom';
import { useHeaderStyles } from './styles';

export function HeaderMegaMenu({ links }: HeaderLinkProps) {
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { classes, cx } = useHeaderStyles();

  const menuItems = links.map((link) => (
    <NavLink
      to={link.path}
      key={link.label}
      className={classes.link}
      onClick={() => {
        closeDrawer();
      }}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <Box>
      <Header height={84} px="md">
        <Container className={classes.inner}>
          <Group sx={{ height: '100%' }}>
            <Image width={30} src="../src/assets/union.svg" alt="Logo" />
            <Title className={classes.logo}>Jobored</Title>
          </Group>

          <Group
            sx={{}}
            spacing={0}
            position="center"
            className={cx(classes.hiddenMobile, classes.menu)}
          >
            {menuItems}
          </Group>

          <Burger
            opened={opened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
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
