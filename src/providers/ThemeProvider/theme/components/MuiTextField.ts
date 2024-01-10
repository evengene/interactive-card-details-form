import type { Components, Theme } from '@mui/material';

export const MuiTextField: Components<Theme>['MuiTextField'] = {
  defaultProps: {
    variant: 'outlined',
    fullWidth: true,
    inputProps: {
      sx: {
        '&::placeholder': {
          fontWeight: 400,
          opacity: 0.5,
        },
      },
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      position: 'relative',
      borderRadius: 8,
      fontSize: 16,
      color: theme.palette.primary.main,
      display: 'flex',
      flexDirection: 'column',
      margin: '0 0 24px',
      borderColor: theme.palette.byName.lightGrey,

      '& .MuiOutlinedInput-root': {
        borderRadius: 8,
        position: 'relative',
        backgroundColor: 'white',
        height: 45,

        '& fieldset': {
          height: 45,
          top: 0,
          legend: {
            display: 'none',
          },
        },

        '&.Mui-error.Mui-focused::before': {
          background: theme.palette.byName.red,
        },

        '&:hover::before, &.Mui-focused::before': {
          content: '""',
          position: 'absolute',
          top: -1,
          right: -1,
          bottom: -1,
          left: -1,
          borderRadius: 9,
          background: theme.palette.gradient.purpleGradient,
          zIndex: -1,
          padding: '1px',
        },

        '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      },
    }),
  },
};
