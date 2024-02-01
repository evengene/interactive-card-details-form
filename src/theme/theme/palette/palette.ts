import createPalette from '@mui/material/styles/createPalette';

import { byName } from './colors/byName';
import { gradient } from './gradient';

export const palette = createPalette({
  byName,
  gradient,
  primary: {
    main: byName.deepViolet,
    contrastText: byName.white,
  },
  error: {
    main: byName.red,
  },
});

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    byName: typeof byName;
    gradient: typeof gradient;
  }

  export interface PaletteOptions {
    byName?: Partial<Palette['byName']>;
    gradient?: Partial<Palette['gradient']>;
  }
}
