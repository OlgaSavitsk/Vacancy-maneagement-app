import { Card, Group, Image, Text } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { VacancyInfo } from 'core/models/vacancy.model';
import { renderVacancyPayment } from '../../utils/helpers';

export const VacancyCard = ({
  profession,
  town,
  type_of_work,
  payment_to,
  payment_from,
  currency,
}: VacancyInfo) => {
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
        <Image width={22} src="./src/assets/star.svg" alt="favourite" />
      </Group>
    </Card>
  );
};
