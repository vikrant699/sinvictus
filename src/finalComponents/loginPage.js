import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
import { Header } from '../loginPage/Header';
import { FinalLogInPage } from '../loginPage/FinalLogInPage';
import { Footer } from '../landingPage/Footer';

function LoginPage() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <FinalLogInPage />
      <Footer />
    </ChakraProvider>
  );
}

export default LoginPage;
