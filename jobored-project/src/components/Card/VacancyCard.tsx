import { Card, Group, Image, Text } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { Paths } from 'constants/paths';
import { VacancyInfo } from 'core/models/vacancy.model';
import { Link } from 'react-router-dom';
import { addFavoriteId, useParams } from 'store';
import { renderVacancyPayment } from '../../utils/helpers';
import { useCardVacancyStyles } from './styles';

type VacancyProps = {
  vacancy: VacancyInfo;
};

export const VacancyCard = ({ vacancy }: VacancyProps) => {
  const {
    state: { favorites },
    dispatch,
  } = useParams();
  const { classes } = useCardVacancyStyles();
  const { id, profession, town, type_of_work, payment_to, payment_from, currency } =
    vacancy;

  const handleFavorite = (id: number) => {
    dispatch(addFavoriteId(id));
  };

  const isFavorite = favorites.ids.includes(id);

  return (
    <Card shadow="sm" p="xl" radius="md" mih={137} withBorder className={classes.card}>
      <Group className={classes.link}>
        <Link to={`${Paths.vacancy}/${id}`}>
          <Group
            spacing={12}
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <Group>
              <Text fw={600} color="blue.5" size="1.125rem">
                {profession}
              </Text>
            </Group>

            <Group spacing={12}>
              <Text fw={600}>
                з/п {renderVacancyPayment(payment_from, payment_to, currency)}
              </Text>
              <Text size="1.125rem" c="#7B7C88">
                &bull;
              </Text>
              <Text fw={400}>{type_of_work.title}</Text>
            </Group>

            <Group position="left" spacing={8}>
              <IconMapPin size="1.25rem" color="#ACADB9" strokeWidth={1.5} />
              <Text fw={400}>{town.title}</Text>
            </Group>
          </Group>
        </Link>

        <Image
          width={22}
          src={isFavorite ? '../src/assets/starfill.svg' : '../src/assets/star.svg'}
          alt="favourite"
          onClick={() => handleFavorite(id)}
          styles={() => ({
            image: {
              cursor: 'pointer',
              '&:hover': {
                filter: 'invert(.5) sepia(1) saturate(5) hue-rotate(175deg)',
              },
            },
          })}
        />
      </Group>
    </Card>
  );
};
