import { Box, Center } from '@chakra-ui/react';
import * as React from 'react';
import { ForgotPasswordForm } from './ForgotPasswordForm';

export const FinalForgotPasswordPage = () => {
  return (
    <Box
      py={{
        base: '5',
        md: '20',
        lg: '5',
      }}
    >
      <Center>
        <ForgotPasswordForm
          px={{
            base: '4',
            lg: '46',
          }}
          py={{
            base: '5',
            md: '20',
            lg: '5',
          }}
          w={{
            base: '100%',
            md: '50%',
          }}
          maxW={{
            base: '',
            lg: 'md',
          }}
        />
      </Center>
    </Box>
  );
};
