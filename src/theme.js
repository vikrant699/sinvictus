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
  Menu: {
    parts: ['menu', 'item', 'list'],
    baseStyle: props => ({
      menu: {
        boxShadow: 'lg',
        rounded: 'lg',
        flexDirection: 'column',
        py: '2',
      },
      item: {
        fontWeight: 'medium',
        lineHeight: 'normal',
        color: mode('#141214', 'white')(props),
      },
      list: {
        bg: mode('white', '#141214')(props),
      },
    }),
    sizes: {
      sm: {
        item: {
          fontSize: '0.75rem',
          px: 2,
          py: 1,
        },
      },
      md: {
        item: {
          fontSize: '0.875rem',
          px: 3,
          py: 2,
        },
      },
    },
    variants: {
      bold: {
        item: {
          fontWeight: 'bold',
        },
        menu: {
          boxShadow: 'xl',
        },
      },
      colorful: {
        item: {
          color: 'orange.600',
        },
        menu: {
          bg: 'orange.100',
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
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
