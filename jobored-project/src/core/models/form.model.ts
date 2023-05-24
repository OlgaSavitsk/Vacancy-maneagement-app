import { UseFormReturnType } from "@mantine/form";

export interface IFormKeys {
  [key: string]: string | number | string[] | undefined;
}

export interface IFormValue extends IFormKeys {
  catalogues: string[] | string | undefined;
  payment_from: number | string;
  payment_to: number | string;
  keyword: string
  no_agreement: number | undefined
}

export type FormProps = {
  form: UseFormReturnType<IFormValue, (values: IFormValue) => IFormValue>;
}
