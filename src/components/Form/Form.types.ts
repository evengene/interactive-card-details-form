import type { ChangeEvent, FormEvent } from 'react';
import type { FormikErrors } from 'formik';
import { CardFields } from '../../CreditCardForm.enumerations';

export type FormProps = {
  values: CardFieldProps;
  errors: FormikErrors<CardFieldProps>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  setFieldValue: (field: string, value: string) => void;
}
type CardFieldProps = {
  [CardFields.CardName]: string;
  [CardFields.CardNumber]: string;
  [CardFields.ExpirationMonth]: string;
  [CardFields.ExpirationYear]: string;
  [CardFields.Cvc]: string;
}