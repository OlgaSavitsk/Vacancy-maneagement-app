import { Box, Card, Group, TypographyStylesProvider } from '@mantine/core';
import { getVacancy } from 'api/vacancy.service';
import { VacancyCard } from 'components/Card/VacancyCard';
import { VacancyInfo } from 'core/models/vacancy.model';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useVacancyStyles } from './styles';

export const VacancyPage = () => {
  const { classes } = useVacancyStyles();
  const [vacancyData, setVacancyData] = useState<VacancyInfo | null>(null);
  const [vacancyDescription, setVacancyDescription] = useState<string>('');
  const { id } = useParams();

  const fetchVacancy = useCallback(async () => {
    try {
      if (id) {
        const vacancy = await getVacancy(id);
        setVacancyData(vacancy);
        const correctText = vacancy.vacancyRichText.replace(/<br \/>/g, '');
        setVacancyDescription(correctText);
      }
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchVacancy();
  }, [fetchVacancy]);

  return (
    <div className={classes.container}>
      <Box className={classes.wrapper} mt={40}>
        <Group className={classes.inner}>
          {vacancyData && <VacancyCard vacancy={vacancyData} />}
          <Card shadow="sm" p="xl" radius="md" withBorder>
            <Group
              sx={{
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <TypographyStylesProvider>
                <div
                  dangerouslySetInnerHTML={{ __html: vacancyDescription }}
                  className={classes.text}
                />
              </TypographyStylesProvider>
            </Group>
          </Card>
        </Group>
      </Box>
    </div>
  );
};
