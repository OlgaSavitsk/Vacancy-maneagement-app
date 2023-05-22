import { UseFormReturnType } from "@mantine/form";

interface IFormKeys {
  [key: string]: string | number | string[];
}

export interface IFormValue extends IFormKeys {
  catalogues: string[];
  payment_from: number | string;
  payment_to: number | string;
  keyword: string
  no_agreement: number
}

export type FormProps = {
  form: UseFormReturnType<IFormValue, (values: IFormValue) => IFormValue>;
}
