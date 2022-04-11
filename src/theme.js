import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      color: mode('#141214', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#141214')(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
      dialog: {
        bg: mode('gray.100', '#141214')(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
});

export default theme;
