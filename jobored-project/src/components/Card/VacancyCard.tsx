import { Card, Group, Title, Image } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

export const VacancyCard = () => {

  return (
    <Card shadow="sm" padding="lg" radius="md" h={137} withBorder>
      <Group sx={{ justifyContent: 'space-between' }}>
        <Title order={3} color="blue.5" size='1.125rem'>
          Underlined h4 heading with blue color
        </Title>
        <Image width={22} src="./src/assets/star.svg" alt="favourite" />
      </Group>
      <Group mt="sm">
        <Title order={4} sx={{ fontWeight: 600 }} >
          з/п от rub
        </Title>
        <Title order={4} size='1.125rem' sx={{ color: '#7B7C88' }}>&bull;</Title>
        <Title order={4} sx={{ fontWeight: 400 }}>
          Полный рабочий день
        </Title>
      </Group>

      <Group position='left' mt="sm">
        <IconMapPin size='1.25rem' color="#ACADB9" strokeWidth={1.5} />
        <Title order={4} sx={{ fontWeight: 400 }}>
          Yjdsq ehtyujq
        </Title>
      </Group>
    </Card>
  );
};