import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';

import { COPY } from './CardPreview.constants';
import { CardFields } from '../../CreditCardForm.enumerations';
import { useStyles } from './CardPreview.styles';

import type { CardPreviewProps } from './CardPreview.types';
import { Images } from '../../assets';

export const CardPreview: FC<CardPreviewProps> = (props) => {

  const { classes, cx } = useStyles();

  const { formData } = props;

  const renderCardFieldFromProps = (fieldName: CardFields) => {
    const fieldValue = formData[fieldName];
    const placeholder = COPY[fieldName];
    return fieldValue.length > 0 ? fieldValue : placeholder;
  }

  return (
    <Grid item lg={7} className={classes.cardWrapper}>
      <div className={cx(classes.card, classes.cardFront)}>
        <Grid container alignItems="center" gap={2}>
          <span className={classes.largerCircle}/>
          <span className={classes.smallerCircle}/>
        </Grid>
        <Typography
          className={classes.cardFrontNumber}
          variant="h3"
        >
          {renderCardFieldFromProps(CardFields.CardNumber)}
        </Typography>
        <Grid container justifyContent="space-between">
          <Typography
            className={classes.cardBottom}
            variant="h5"
          >
            {renderCardFieldFromProps(CardFields.CardName)}
          </Typography>
          <Typography
            className={classes.cardBottom}
            variant="h5"
          >
            {renderCardFieldFromProps((CardFields.ExpirationMonth))}/{renderCardFieldFromProps(CardFields.ExpirationYear)}
          </Typography>
        </Grid>
      </div>
      <div className={cx(classes.card, classes.cardBack)}>
        <div className={classes.cardBackMagneticStripe}/>
        <div className={classes.cardBackSignature}>
          <Typography
            className={classes.cardBackCvc}
            variant="h5"
          >
            {renderCardFieldFromProps(CardFields.Cvc)}
          </Typography>
        </div>
        <img className={classes.wording} src={Images.CreditCardBackWording} alt="wording"/>
      </div>
    </Grid>
  );
}