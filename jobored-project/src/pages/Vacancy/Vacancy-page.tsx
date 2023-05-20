import { Box, Card, Group, TypographyStylesProvider } from '@mantine/core';
import { getVacancy } from 'api/vacancy.service';
import { VacancyCard } from 'components/Card/VacancyCard';
import { LoaderContainer } from 'core/LoaderContainer/LoaderContainer';
import { VacancyInfo } from 'core/models/vacancy.model';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppState } from 'store';
import { useVacancyStyles } from './styles';

export const VacancyPage = () => {
  const { state } = useAppState();
  const { classes } = useVacancyStyles();
  const [vacancyData, setVacancyData] = useState<VacancyInfo | undefined>(undefined);
  const [vacancyDescription, setVacancyDescription] = useState<string>('');
  const { id } = useParams();

  const vacancy = useMemo(() => {
    return state.data.find((vacancy) => vacancy.id === Number(id));
  }, [id, state.data]);

  const renderVacancyDescript = (vacancyData: VacancyInfo) => {
    const correctText = vacancyData.vacancyRichText.replace(/<br \/>/g, '');
    setVacancyDescription(correctText);
  };

  const getVacancyDetails = useCallback(async () => {
    try {
      const vacancyData = vacancy ? vacancy : await getVacancy(id!);
      setVacancyData(vacancyData);
      renderVacancyDescript(vacancyData);
    } catch (e) {
      console.log(e);
    }
  }, [vacancy]);

  useEffect(() => {
    getVacancyDetails();
  }, [getVacancyDetails]);

  return (
    <div className="container">
      <Box className={classes.wrapper} mt={40}>
        <Group className={classes.inner}>
          <LoaderContainer isLoading={state.isFetching} />
          {vacancyData && <VacancyCard vacancy={vacancyData} isDetails={true} />}
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
