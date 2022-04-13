import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
import { Header } from '../clientDashboard/Header';

function ClientDashboard() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
}

export default ClientDashboard;
