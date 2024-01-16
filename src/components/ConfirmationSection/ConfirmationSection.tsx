import React from 'react';
import { Button, Typography } from '@mui/material';

import { COPY } from './ConfirmationSection.constants';
import { Images } from '../../assets';
import { useStyles } from './ConfirmationSection.styles';

export const ConfirmationSection = () => {

  const { classes } = useStyles();

  return (
    <div className={classes.confirmationBlock}>
      <img src={Images.ConfirmIcon} alt="check icon"/>
      <Typography variant="h2">
        {COPY.ThankYou}
      </Typography>
      <Typography variant="body1">
        {COPY.ConfirmationMessage}
      </Typography>
      <Button type="submit" className={classes.continueButton}>
        {COPY.ButtonLabel}
      </Button>
    </div>
  )
}