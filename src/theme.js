import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      color: mode('#141214', 'white')(props),
      bg: mode('white', '#141214')(props),
    },
  }),
};

const components = {
  Drawer: {
    baseStyle: props => ({
      dialog: {
        bg: mode('white', '#141214')(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
  colors: {
    brand: {
      50: '#ffece6',
      100: '#ffc7b3',
      200: '#ffb499',
      300: '#ffa280',
      400: '#ff7c4d',
      500: '#ff652f',
      600: '#b33000',
      700: '#802200',
      800: '#661b00',
      900: '#330e00',
    },
  },
});

export default theme;
