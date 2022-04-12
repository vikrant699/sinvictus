import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';

function SignupPage() {
  return (
    <ChakraProvider theme={theme}>
      <h1>signup page to do</h1>
    </ChakraProvider>
  );
}

export default SignupPage;
