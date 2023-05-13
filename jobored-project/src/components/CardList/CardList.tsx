import { List } from "@mantine/core";
import { getVacancies } from "api/vacancy.service";
import { VacancyCard } from "components/Card/VacancyCard";
import { useParams } from "store/reducer";
import { VacancyInfo } from "core/models/vacancy.model";
import { useEffect, useState } from "react";


export const VacancyCardList = () => {
  const { state } = useParams();
  const [data, setData] = useState<VacancyInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const {objects} = await getVacancies(state.params);
      setData(objects);
    };
    fetchData();
  }, [state.params]);

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