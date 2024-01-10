import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  confirmationBlock: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  continueButton: {
    marginTop: theme.spacing(6),
  }
}));
