import { Card, Group, MediaQuery, Text } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { ModalDelete } from 'components';
import { Paths } from 'constants/paths';
import { VacancyInfo } from 'core';
import { Link } from 'react-router-dom';
import { renderVacancyPayment } from 'utils';
import { useCardVacancyStyles } from './styles';

type VacancyProps = {
  vacancy: VacancyInfo;
  isDetails?: boolean;
};

export const VacancyCard = ({ vacancy, isDetails }: VacancyProps) => {
  const { classes, theme } = useCardVacancyStyles();
  const { id, profession, town, type_of_work, payment_to, payment_from, currency } =
    vacancy;

  return (
    <Card
      shadow="sm"
      p="1.4rem"
      radius="md"
      mih={137}
      withBorder
      className={classes.card}
      data-elem={`vacancy-${id}`}
    >
      <Group className={classes.link}>
        <Link to={`${Paths.vacancy}/${id}`}>
          <Group
            spacing={isDetails ? 13 : 9}
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <Group>
              <MediaQuery smallerThan="sm" styles={{ fontSize: '1.25rem', fontWeight: 600 }}>
                <Text
                  fw={isDetails ? 700 : 600}
                  color={isDetails ? theme.black : theme.colors.hover[1]}
                  fz={isDetails ? '1.75rem' : '1.25rem'}
                  lh={1.2}
                >
                  {profession}
                </Text>
              </MediaQuery>
            </Group>

            <Group spacing={12}>
              <MediaQuery smallerThan="sm" styles={{ fontSize: '1rem', fontWeight: 600 }}>
                <Text
                  fw={isDetails ? 700 : 600}
                  fz={isDetails ? '1.25rem' : '1rem'}
                  lts={0.7}
                >
                  з/п {renderVacancyPayment(payment_from, payment_to, currency)}
                </Text>
              </MediaQuery>
              <Text size="1.125rem" c={theme.colors.grey[1]}>
                &bull;
              </Text>
              <Text fw={400}>{type_of_work.title}</Text>

            </Group>

            <Group
              position="left"
              spacing={8}
              sx={{
                alignItems: 'flex-start',
              }}
            >
              <IconMapPin size="1.25rem" color={theme.colors.grey[0]} strokeWidth={1.5} />
              <Text fw={400} lh={1.1}>
                {town.title}
              </Text>
            </Group>
          </Group>
        </Link>

        <ModalDelete id={id} />
      </Group>
    </Card>
  );
};
