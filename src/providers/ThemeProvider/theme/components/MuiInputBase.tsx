import { Components, Theme } from "@mui/material";

export const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    input: ({ theme }) => ({
      color: theme.palette.primary.main,
      display: 'flex',
      flexDirection: 'column',
      fontSize: 18,
      fontWeight: 500,
      padding: '11px 16px',
    }),
  },
};