import type { Components, Theme } from '@mui/material';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      width: '100%',
      height: 53,
      borderRadius: 8,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.byName.white,
      fontSize: 18,
      fontWeight: 500,
      transition: 'all 0.3s ease',
      opacity: 1,
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.8,
      },
      '&:disabled': {
        color: theme.palette.common.white,
        opacity: 0.5,
      },
      '&:active': {
        opacity: 0.5,
      },
    }),
  },
};
