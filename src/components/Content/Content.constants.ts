import { EMPTY_STRING } from '../../CreditCardForm.constants';
import { CardFields } from '../../CreditCardForm.enumerations';

export const COPY = {
  CardNameLabel: 'Cardholder Name',
  CardNumberLabel: 'Card Number',
  CardExpirationLabel: 'Expiration Date',
  CardCvcLabel: 'CVC',
  CardNamePlaceholder: 'e.g.Jane Appleseed',
  CardNumberPlaceholder: 'e.g. 1234 5678 9123',
  ExpirationMonthPlaceholder: 'MM',
  ExpirationYearPlaceholder: 'YY',
  CvcPlaceholder: 'e.g. 123',
}

export const INITIAL_VALUES = {
  [CardFields.CardName]: EMPTY_STRING,
  [CardFields.CardNumber]: EMPTY_STRING,
  [CardFields.ExpirationMonth]: EMPTY_STRING,
  [CardFields.ExpirationYear]: EMPTY_STRING,
  [CardFields.Cvc]: EMPTY_STRING,
}