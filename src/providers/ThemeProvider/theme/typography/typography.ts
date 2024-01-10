import type { ThemeOptions } from '@mui/material';

import { SPACE_GROTESK } from './typography.constants';
import { fallbackFont } from './typography.utils';

const fontFamilies = {
  spaceGrotesk: fallbackFont(SPACE_GROTESK),
};

export const typography: ThemeOptions['typography'] = {
  fontFamily: fallbackFont(SPACE_GROTESK),
  fontFamilies,
  fontWeightSemiBold: 500,
  letterSpacing: '2px',
  body1: {
    fontFamily: fallbackFont(SPACE_GROTESK),
    fontWeight: 400,
    letterSpacing: '2px',
    lineHeight: 1.2,
  },
  h2: {
    fontSize: 28,
    fontWeight: 500,
    letterSpacing: '3.4px',
    margin: '35px 0 16px'
  },
  h3: {
    fontSize: 28,
    fontWeight: 500,
    marginTop: 46,
  },
  h5: {
    fontFamily: fallbackFont(SPACE_GROTESK),
    fontWeight: 500,
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  h6: {
    fontFamily: fallbackFont(SPACE_GROTESK),
    fontWeight: 500,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: 9,
    color: '#21092F',
  },
};

declare module '@mui/material/styles/createTypography' {
  interface FontStyle {
    fontWeightSemiBold: CSSProperties['fontWeight'];
    letterSpacing: CSSProperties['letterSpacing'];
  }

  interface Typography {
    fontFamilies: typeof fontFamilies;
  }

  interface TypographyOptions {
    fontFamilies?: typeof fontFamilies;
  }
}
