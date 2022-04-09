import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { Navbar } from './landingPage/Navbar';
import { Hero } from './landingPage/Hero';
import { Services } from './landingPage/Services';
import { FinalTestimonials } from './landingPage/FinalTestimonials';
import { Pricing } from './landingPage/Pricing';
import { About } from './landingPage/About';

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

function LandingPage() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero />
      <Services />
      <FinalTestimonials />
      <Pricing />
      <About />
    </ChakraProvider>
  );
}

export default LandingPage;
