import { makeStyles } from 'tss-react/mui';

import { Images } from '../../assets';

export const useStyles = makeStyles()((theme) => ({
  cardWrapper: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  },
  card: {
    borderRadius: 10,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    color: theme.palette.byName.white,
    display: 'flex',
    flexDirection: 'column',
    height: 245,
    position: 'relative',
    width: 447,
    [theme.breakpoints.down('md')]: {
      borderRadius: 6,
      height: 156,
      width: 285,
    },
  },
  cardFront: {
    background: `url(${Images.CardPreviewFront}) no-repeat center`,
    justifyContent: 'space-between',
    left: 0,
    marginBottom: 37,
    padding: theme.spacing(3.5, 4, 3.25, 4),
    top: 0,
    [theme.breakpoints.down('md')]: {
      left: -24,
      marginBottom: 0,
      padding: theme.spacing(2.5),
      top: 0,
      zIndex: 1,
    },
  },
  cardBack: {
    alignItems: 'center',
    backgroundColor: theme.palette.byName.lightGrey,
    left: 94,
    top: 0,
    [theme.breakpoints.down('md')]: {
      left: 24,
      top: 54,
    },
  },

  largerCircle: {
    background: theme.palette.byName.white,
    borderRadius: '100%',
    height: 47,
    width: 47,
    [theme.breakpoints.down('md')]: {
      height: 30,
      width: 30,
    }
  },
  smallerCircle: {
    background: 'transparent',
    border: `1px solid ${theme.palette.byName.white}`,
    borderRadius: '100%',
    height: 21,
    width: 21,
    [theme.breakpoints.down('md')]: {
      height: 13.5,
      width: 13.5,
    }
  },
  cardFrontNumber: {
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      marginTop: theme.spacing(3.75),
    },
  },
  cardBottom: {
    [theme.breakpoints.down('md')]: {
      fontSize: 9,
    },
  },
  cardBackMagneticStripe: {
    background: theme.palette.byName.darkGrey,
    height: 54,
    marginTop: 23,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      height: 34,
      marginTop: 14,
    },
  },
  cardBackSignature: {
    alignItems: 'center',
    background: theme.palette.byName.blueGrey,
    display: 'flex',
    height: 38,
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
    padding: theme.spacing(1.25),
    width: 361,
    [theme.breakpoints.down('md')]: {
      width: 230,
      marginTop: theme.spacing(2),
    },
  },
  cardBackCvc: {},
}));
