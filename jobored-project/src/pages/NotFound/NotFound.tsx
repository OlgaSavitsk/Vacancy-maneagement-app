import { Container, createStyles, Group, Text, Image, Button } from '@mantine/core';
import { Paths } from 'constants/paths';
import { Link } from 'react-router-dom';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flex: '1 1 auto',
    width: '100%',
    background: '#F7F7F8',
  },
}));

export const NotFound = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Container size={327} p={0} mt={120}>
        <Group position="center" spacing={32}>
          <Image width={240} src={'../src/assets/notfound.png'} alt="notfound page" />
          <Text fw={700} size="1.5rem">
            Упс, здесь еще ничего нет!
          </Text>
          <Button component={Link} to={Paths.home} variant="light">
            Поиск Вакансий
          </Button>
        </Group>
      </Container>
    </div>
  );
};
