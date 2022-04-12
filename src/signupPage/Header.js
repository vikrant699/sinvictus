import { Box, Button, Container, Flex, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from '../Logo';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

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
              <Logo />
            </HStack>
            <HStack spacing="4">
              <ColorModeSwitcher />
              <Button>Log In</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
