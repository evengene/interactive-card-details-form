import { object, string } from 'yup';
import { CardFields, Errors } from './CreditCardForm.enumerations';

export const EMPTY_STRING = '';

export const CREDIT_CARD_NAME_REGEX = /^[a-zA-Z ]*$/;
export const CREDIT_CARD_REGEX = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;


export const CREDIT_CARD_VALIDATION_SCHEMA = object().shape({
  [CardFields.CardName]: string().required(Errors.CantBeBlank).nullable().matches(CREDIT_CARD_NAME_REGEX, Errors.EnterCorrectCardName).min(2, Errors.EnterCorrectCardName).max(50, Errors.EnterCorrectCardName),
  [CardFields.CardNumber]: string().required(Errors.CantBeBlank).nullable().matches(CREDIT_CARD_REGEX, Errors.CardNumberInvalid),
  [CardFields.ExpirationMonth]: string().required(Errors.CantBeBlank).nullable(),
  [CardFields.ExpirationYear]: string().required(Errors.CantBeBlank).nullable(),
  [CardFields.Cvc]: string().required(Errors.CantBeBlank).nullable(),
});