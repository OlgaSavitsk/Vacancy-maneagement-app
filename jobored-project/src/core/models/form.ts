import { UseFormReturnType } from "@mantine/form";

export interface IFormValue {
  catalogues: string[];
  payment_from: number | string;
  payment_to: number | string;
  keyword: string
}

export type FormProps = {
  form: UseFormReturnType<IFormValue, (values: IFormValue) => IFormValue>;
}
