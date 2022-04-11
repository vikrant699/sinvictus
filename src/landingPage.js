import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { Navbar } from './landingPage/Navbar';
import { Hero } from './landingPage/Hero';
import { Services } from './landingPage/Services';
import { FinalTestimonials } from './landingPage/FinalTestimonials';
import { Pricing } from './landingPage/Pricing';
import { About } from './landingPage/About';
import { Footer } from './landingPage/Footer';
import { Element } from 'react-scroll';

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
      <Element id="top" name="top">
        <Navbar />
      </Element>
      <Element id="Home" name="Home">
        <Hero />
      </Element>
      <Element id="Services" name="Services">
        <Services />
      </Element>
      <Element id="Testimonials" name="Testimonials">
        <FinalTestimonials />
      </Element>
      <Element id="Pricing" name="Pricing">
        <Pricing />
      </Element>
      <Element id="About" name="About">
        <About />
        <Footer />
      </Element>
    </ChakraProvider>
  );
}

export default LandingPage;
