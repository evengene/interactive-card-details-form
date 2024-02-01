import type { Components, Theme } from '@mui/material';

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: {
    '#root': {
      height: '100%',
    },
    html: {
      height: '100%',
      overflow: 'auto',
    },
  },
};
