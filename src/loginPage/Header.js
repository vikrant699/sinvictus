import { Box, Button, Container, Flex, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from '../Logo';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Box
      as="section"
      pb={{
        base: '0',
        md: '12',
      }}
    >
      <Box as="header" w="100%">
        <Container
          maxW="100%"
          py={{
            base: '3',
            lg: '4',
          }}
        >
          <Flex justify="space-around">
            <HStack spacing="4">
              <RouterLink to="/">
                <Logo />
              </RouterLink>
            </HStack>
            <HStack spacing="4">
              <ColorModeSwitcher />
              <RouterLink to="/signup">
                <Button>Register</Button>
              </RouterLink>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
