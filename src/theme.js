import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bgGradient: mode(
        'linear(to-r, bg.light.800, bg.light.900)',
        'linear(to-r, bg.dark.800, bg.dark.900)'
      )(props),
    },
  }),
};

const components = {};

const fonts = {};

const colors = {
  bg: {
    light: {
      900: '#FFFFFF',
      800: '#ECECEC',
    },
    dark: {
      900: '#000000',
      800: '#101010',
    },
  },
  primary: '#5800FF',
  secondary: '#E900FF',
  orangeYellow: '#FFC600',
  violetBlue: '#5800FF',
  languages: {
    django: '#44B78B',
    figma: '#EA4C1D',
    pygame: '#FEE32D',
    react: '#61DAFB',
    chakra: '#29B9AD',
    python: {
      blue: '#4483b5',
      yellow: '#ffd94b',
    },
    nextjs: '#909090',
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
