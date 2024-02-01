import { byName } from './colors/byName';

const { violet, purple } = byName;

export const gradient = {
  purpleGradient: `linear-gradient(0deg, ${purple} 0%, ${violet} 100%)`,
};
