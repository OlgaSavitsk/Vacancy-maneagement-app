import { List } from "@mantine/core";
import { VacancyCard } from "components/Card/VacancyCard";
import { VacancyInfo } from "core/models/vacancy.model";

type VacancyListProps = {
  vacancies: VacancyInfo[] | undefined;
};

export const VacancyCardList = ({ vacancies }: VacancyListProps) => {

  return (
    <List styles={() => ({
      root: {
        rowGap: '1rem',
        marginBottom: '2.5rem'
      },
      itemWrapper: {
        width: '100%'
      },
    })}>
      {vacancies && vacancies.map((vacancy) => {
        return (
          <List.Item key={vacancy.id}>
            <VacancyCard vacancy={vacancy} />
          </List.Item>
        );
      })}
    </List>
  );
};