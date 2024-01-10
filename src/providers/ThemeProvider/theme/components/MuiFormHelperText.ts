import type { Components, Theme } from '@mui/material';

export const MuiFormHelperText: Components<Theme>['MuiFormHelperText'] = {
  styleOverrides: {
    root: () => ({
      margin: '8px 0 0',
      letterSpacing: 0,
      lineHeight: 1,
      fontWeight: 500,
      fontSize: 12,
    }),
  },
};
