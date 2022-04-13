import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
import { Header } from '../signupPage/Header';
import { FinalForgotPasswordPage } from '../forgotPasswordPage/FinalForgotPasswordPage';

function ForgotPasswordPage() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <FinalForgotPasswordPage />
    </ChakraProvider>
  );
}

export default ForgotPasswordPage;
