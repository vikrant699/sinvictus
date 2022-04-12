import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
import { Header } from './signupPage/Header';
import { FinalPage } from './signupPage/FinalPage';
import { Footer } from './landingPage/Footer';

function SignupPage() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <FinalPage />
      <Footer />
    </ChakraProvider>
  );
}

export default SignupPage;
