import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Navbar } from './landingPage/Navbar';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function LandingPage() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
    </ChakraProvider>
  );
}

export default LandingPage;
