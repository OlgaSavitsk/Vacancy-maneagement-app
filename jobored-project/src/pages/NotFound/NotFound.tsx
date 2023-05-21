import { Container, Group, Text, Image, Button } from '@mantine/core';
import { Paths } from 'constants/paths';
import { Link } from 'react-router-dom';

interface NotFoundProps {
  isPage?: boolean;
}

export const NotFound = ({ isPage }: NotFoundProps) => {
  return (
    <div className="container">
      <Container size={327} mih={557} p={0} mt={isPage ? 120 : 20}>
        <Group position="center" spacing={29} lts={0.3}>
          <Image width={240} src={'../notfound.svg'} alt="notfound page" />
          <Text fw={700} size="1.5rem">
            Упс, здесь еще ничего нет!
          </Text>
          <Button
            component={Link}
            to={Paths.home}
            variant="light"
            styles={() => ({
              root: {
                height: '2.6rem',
                padding: '0 1.5rem',
              },
            })}
          >
            Поиск Вакансий
          </Button>
        </Group>
      </Container>
    </div>
  );
};
