import React, { FC } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';

import { COPY } from '../Content/Content.constants';
import { CardFields } from '../../CreditCardForm.enumerations';
import { EMPTY_STRING } from '../../CreditCardForm.constants';
import { formatToSixteenDigitsAndSpaces } from './Form.utils';
import { useStyles } from './Form.styles';

import type { FormProps } from './Form.types';

export const Form: FC<FormProps> = (props) => {

  const {
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    values,
  } = props;

  const { classes } = useStyles();

  const formatCardValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFieldValue(CardFields.CardNumber, formatToSixteenDigitsAndSpaces(value));
  }

  return (
    <Grid item>
      <div className={classes.wrapper}>
        <form className={classes.form} onSubmit={handleSubmit} autoComplete='off'>
          <Typography variant='h6'>
            {COPY.CardNameLabel}
          </Typography>
          <TextField
            error={Boolean(touched[CardFields.CardName] && errors[CardFields.CardName])}
            helperText={touched[CardFields.CardName] && errors[CardFields.CardName]}
            id={CardFields.CardName}
            name={CardFields.CardName}
            onChange={handleChange}
            placeholder={COPY.CardNamePlaceholder}
            type='text'
            value={values[CardFields.CardName] ?? EMPTY_STRING}
          />
          <Typography variant='h6'>
            {COPY.CardNumberLabel}
          </Typography>
          <TextField
            error={Boolean(touched[CardFields.CardNumber] && errors[CardFields.CardNumber])}
            helperText={touched[CardFields.CardNumber] && errors[CardFields.CardNumber]}
            id={CardFields.CardNumber}
            name={CardFields.CardNumber}
            onChange={formatCardValue}
            placeholder={COPY.CardNumberPlaceholder}
            type='text'
            value={values[CardFields.CardNumber] ?? EMPTY_STRING}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant='h6'>
                Exp. Date (MM/DD)
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6'>
                {COPY.CardCvcLabel}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                error={Boolean(touched[CardFields.ExpirationMonth] && errors[CardFields.ExpirationMonth])}
                helperText={touched[CardFields.ExpirationMonth] && errors[CardFields.ExpirationMonth]}
                id={CardFields.ExpirationMonth}
                inputProps={{ maxLength: 2 }}
                name={CardFields.ExpirationMonth}
                onChange={handleChange}
                placeholder={COPY.ExpirationMonthPlaceholder}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                error={Boolean(touched[CardFields.ExpirationYear] && errors[CardFields.ExpirationYear])}
                helperText={touched[CardFields.ExpirationYear] && errors[CardFields.ExpirationYear]}
                id={CardFields.ExpirationYear}
                inputProps={{ maxLength: 2 }}
                name={CardFields.ExpirationYear}
                onChange={handleChange}
                placeholder={COPY.ExpirationYearPlaceholder}
                variant='outlined'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                error={Boolean(touched[CardFields.Cvc] && errors[CardFields.Cvc])}
                fullWidth
                helperText={touched[CardFields.Cvc] && errors[CardFields.Cvc]}
                id={CardFields.Cvc}
                inputProps={{ maxLength: 4 }}
                name={CardFields.Cvc}
                onChange={handleChange}
                placeholder={COPY.CvcPlaceholder}
                variant='outlined'
              />
            </Grid>
          </Grid>
          <Button type='submit'>
            Submit
          </Button>
        </form>
      </div>
    </Grid>
  )
}