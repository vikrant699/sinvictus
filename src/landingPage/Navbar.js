import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaWhatsapp, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Logo } from './Logo';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
} from 'react-scroll';

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

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
      <Box
        as="header"
        position="fixed"
        w="100%"
        backdropFilter="saturate(180%) blur(5px)"
        zIndex="2"
      >
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
                <ButtonGroup variant="ghost" spacing="1">
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
                <Button>Book a Demo</Button>
              </HStack>
            ) : (
              <>
                <HStack spacing="4">
                  <ColorModeSwitcher />
                  <IconButton
                    onClick={onOpen}
                    variant="ghost"
                    icon={<FiMenu fontSize="1.25rem" />}
                    aria-label="Open Menu"
                  />
                </HStack>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerHeader>
                      <Logo />
                      <DrawerCloseButton />
                    </DrawerHeader>

                    <DrawerBody>
                      <Stack spacing="14px">
                        <Button variant="ghost" isFullWidth="true">
                          Home
                        </Button>
                        <Button variant="ghost" isFullWidth="true">
                          Services
                        </Button>
                        <Button variant="ghost" isFullWidth="true">
                          Testimonials
                        </Button>
                        <Button variant="ghost" isFullWidth="true">
                          Pricing
                        </Button>
                        <Button variant="ghost" isFullWidth="true">
                          About
                        </Button>
                        <Button isFullWidth="true" onClose={onClose}>
                          Book a Demo
                        </Button>
                      </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                      <IconButton
                        variant="ghost"
                        aria-label="WhatsApp"
                        size="md"
                        fontSize="lg"
                        isRound="true"
                        icon={<FaWhatsapp />}
                      />
                      <IconButton
                        variant="ghost"
                        aria-label="Twitter"
                        size="md"
                        fontSize="lg"
                        isRound="true"
                        icon={<FaTwitter />}
                      />
                      <IconButton
                        variant="ghost"
                        aria-label="Instagram"
                        size="md"
                        fontSize="lg"
                        isRound="true"
                        icon={<FaInstagram />}
                      />
                      <IconButton
                        variant="ghost"
                        aria-label="Facebook"
                        size="md"
                        fontSize="lg"
                        isRound="true"
                        icon={<FaFacebook />}
                      />
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
