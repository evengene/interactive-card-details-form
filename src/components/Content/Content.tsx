import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';

import { CREDIT_CARD_VALIDATION_SCHEMA } from '../../CreditCardForm.constants';
import { CardPreview } from '../CardPreview/CardPreview';
import { ConfirmationSection } from '../ConfirmationSection/ConfirmationSection';
import { Form } from '../Form/Form';
import { INITIAL_VALUES } from './Content.constants';
import { useStyles } from './Content.styles';

export const Content = () => {

  const { classes } = useStyles();

  const [ formSubmitted, setFormSubmitted ] = useState<boolean>(false);

  const { values, errors, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      setFormSubmitted(true);
      console.log(JSON.stringify(values, null, 2));
    },
    validateOnBlur: false,
    validationSchema: CREDIT_CARD_VALIDATION_SCHEMA,
  });

  return (
    <Container maxWidth='lg' className={classes.containerWrapper}>
      <Grid container alignItems='center' className={classes.formCardContainer}>
        <CardPreview formData={values}/>
        {formSubmitted
          ? <ConfirmationSection/>
          : <Form values={values} errors={errors}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  setFieldValue={setFieldValue}
          />
        }
      </Grid>
    </Container>
  );
}