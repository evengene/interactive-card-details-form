import type { BreakpointsOptions } from '@mui/material';

export const CUSTOM_BREAKPOINTS = {
  xxs: 0,
  xs: 320,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const breakpoints: BreakpointsOptions = {
  values: CUSTOM_BREAKPOINTS,
};