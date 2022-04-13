import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
import { Header } from '../signupPage/Header';
import { FinalSignUpPage } from '../signupPage/FinalSignUpPage';
import { Footer } from '../landingPage/Footer';

function SignupPage() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <FinalSignUpPage />
      <Footer />
    </ChakraProvider>
  );
}

export default SignupPage;
