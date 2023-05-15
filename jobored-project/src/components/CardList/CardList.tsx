import { List } from "@mantine/core";
import { VacancyCard } from "components/Card/VacancyCard";
import { useParams } from "store";
import { VacancyInfo } from "core/models/vacancy.model";


export const VacancyCardList = () => {
  const { state: { data } } = useParams();

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
      {data && data.map((vacancy: VacancyInfo) => {
        return (
          <List.Item key={vacancy.id}>
            <VacancyCard vacancy={vacancy} />
          </List.Item>
        );
      })}
    </List>
  );
};