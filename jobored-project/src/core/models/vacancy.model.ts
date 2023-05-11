export interface VacancyData {
  objects: VacancyInfo[];
  total: number;
}

export interface VacancyInfo {
  id: number;
  profession: string;
  town: {
    title: string;
  };
  catalogues: { title: string }[];
  type_of_work: { title: string };
  payment_to: number;
  payment_from: number;
  currency: string;
}

export interface IndustryInfo {
  title: string,
  key: number
}

export interface FilterValue {
  selectKey: number[];
  from: number;
  to: number;
}
