export interface VacancyData {
  objects: VacancyInfo[];
  total: number;
}

export interface VacancyInfo {
  id: number;
  profession: string;
  firm_name: string;
  town: {
    title: string;
  };
  catalogues: { title: string }[];
  type_of_work: { title: string };
  payment_to: number;
  payment_from: number;
  currency: string;
}
