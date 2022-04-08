import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from 'react-icons/fi';
import { Logo } from './Logo';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      as="section"
      pb={{
        base: '12',
        md: '24',
      }}
    >
      <Box as="nav" bg="bg-accent" color="on-accent">
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
              {isDesktop && (
                <ButtonGroup variant="ghost-on-accent" spacing="1">
                  <Button>Home</Button>
                  <Button>Services</Button>
                  <Button>Testimonials</Button>
                  <Button>Pricing</Button>
                  <Button>About</Button>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ColorModeSwitcher />
                <Button>Take a Demo</Button>
              </HStack>
            ) : (
              <IconButton
                variant="ghost-on-accent"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
