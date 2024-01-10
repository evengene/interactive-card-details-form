import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
  wrapper: {
    display: 'flex',
    height: 408,
    justifyContent: 'center',
    maxWidth: 381,
    width: '100%',
  },
  form: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  },
});
