import { makeStyles } from 'tss-react/mui';
import { Images } from './assets';

export const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    position: 'relative',
  },
  sidePanel: {
    background: `url(${Images.SidePanelDesktop}) center / cover no-repeat`,
    height: '100vh',
    left: 0,
    position: 'absolute',
    width: '33.5%',
    [theme.breakpoints.down('lg')]: {
      background: `url(${Images.SidePanelMobile}) center / cover no-repeat`,
      height: 240,
      width: '100%',
    },
  },
}));
