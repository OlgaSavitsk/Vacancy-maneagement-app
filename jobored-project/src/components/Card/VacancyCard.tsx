import { Card, Group, Image, Text } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { DEFAULT_FAVORITES, LocalStorageKey } from 'constants/storage';
import { VacancyInfo } from 'core/models/vacancy.model';
import { useLocalState } from 'hooks/useLocalState';
import { useCallback, useEffect } from 'react';
import { addFavoriteId, useParams } from 'store/reducer';
import { renderVacancyPayment } from '../../utils/helpers';

type VacancyProps = {
  vacancy: VacancyInfo;
};

export const VacancyCard = ({
  vacancy: { id, profession, town, type_of_work, payment_to, payment_from, currency },
}: VacancyProps) => {
  const { state, dispatch } = useParams();
  const [idsValue, setIds] = useLocalState(LocalStorageKey.favoritesId, DEFAULT_FAVORITES);

  const handleFavorite = (id: number) => {
    dispatch(addFavoriteId(id));
  };

  const handleAuth = useCallback(async () => {
    try {
      const { ids } = state.favorites;
      setIds({ ids: [...ids] });
    } catch (e) {
      console.log(e);
    }
  }, [state.favorites]);

  const isFavorite = idsValue.ids.includes(id);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return (
    <Card shadow="sm" p="xl" radius="md" mih={137} withBorder>
      <Group
        sx={{
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Group spacing={12} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
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
        <Image
          width={22}
          src={isFavorite ? './src/assets/starfill.svg' : './src/assets/star.svg'}
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
