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
  Link as ChakraLink,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaWhatsapp, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Logo } from './Logo';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [homeTab, setHomeTab] = React.useState(false);
  const [servicesTab, setServicesTab] = React.useState(false);
  const [testimonialsTab, setTestimonialsTab] = React.useState(false);
  const [pricingTab, setPricingTab] = React.useState(false);
  const [aboutTab, setAboutTab] = React.useState(false);

  const handleSetActive = to => {
    switch (to) {
      case 'Home':
        setHomeTab(true);
        setServicesTab(false);
        setTestimonialsTab(false);
        setPricingTab(false);
        setAboutTab(false);
        break;
      case 'Services':
        setHomeTab(false);
        setServicesTab(true);
        setTestimonialsTab(false);
        setPricingTab(false);
        setAboutTab(false);
        break;
      case 'Testimonials':
        setHomeTab(false);
        setServicesTab(false);
        setTestimonialsTab(true);
        setPricingTab(false);
        setAboutTab(false);
        break;
      case 'Pricing':
        setHomeTab(false);
        setServicesTab(false);
        setTestimonialsTab(false);
        setPricingTab(true);
        setAboutTab(false);
        break;
      case 'About':
        setHomeTab(false);
        setServicesTab(false);
        setTestimonialsTab(false);
        setPricingTab(false);
        setAboutTab(true);
        break;
      default:
        setHomeTab(false);
        setServicesTab(false);
        setTestimonialsTab(false);
        setPricingTab(false);
        setAboutTab(false);
        break;
    }
  };

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
              <Link
                onSetActive={handleSetActive}
                activeClass="active"
                className="top"
                to="top"
                spy={true}
                smooth={true}
                duration={200}
              >
                <ChakraLink>
                  <Logo />
                </ChakraLink>
              </Link>
              {isDesktop && (
                <ButtonGroup variant="ghost" spacing="1">
                  <Link
                    onSetActive={handleSetActive}
                    activeClass="active"
                    className="Home"
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={200}
                  >
                    <Button isActive={homeTab}>Home</Button>
                  </Link>
                  <Link
                    onSetActive={handleSetActive}
                    activeClass="active"
                    className="Services"
                    to="Services"
                    spy={true}
                    smooth={true}
                    duration={200}
                  >
                    <Button isActive={servicesTab}>Services</Button>
                  </Link>
                  <Link
                    onSetActive={handleSetActive}
                    activeClass="active"
                    className="Testimonials"
                    to="Testimonials"
                    spy={true}
                    smooth={true}
                    duration={200}
                  >
                    <Button isActive={testimonialsTab}>Testimonials</Button>
                  </Link>
                  <Link
                    onSetActive={handleSetActive}
                    activeClass="active"
                    className="Pricing"
                    to="Pricing"
                    spy={true}
                    smooth={true}
                    duration={200}
                  >
                    <Button isActive={pricingTab}>Pricing</Button>
                  </Link>
                  <Link
                    onSetActive={handleSetActive}
                    activeClass="active"
                    className="About"
                    to="About"
                    spy={true}
                    smooth={true}
                    duration={200}
                  >
                    <Button isActive={aboutTab}>About</Button>
                  </Link>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ColorModeSwitcher />
                <RouterLink to="/signup">
                  <Button>Book a Demo</Button>
                </RouterLink>
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
                      <Link
                        onSetActive={handleSetActive}
                        activeClass="active"
                        className="top"
                        to="top"
                        spy={true}
                        smooth={true}
                        duration={200}
                      >
                        <Logo />
                      </Link>
                      <DrawerCloseButton />
                    </DrawerHeader>

                    <DrawerBody>
                      <Stack spacing="14px">
                        <Link
                          onSetActive={handleSetActive}
                          activeClass="active"
                          className="Home"
                          to="Home"
                          spy={true}
                          smooth={true}
                          duration={200}
                        >
                          <Button
                            isActive={homeTab}
                            variant="ghost"
                            isFullWidth="true"
                            onClick={onClose}
                          >
                            Home
                          </Button>
                        </Link>
                        <Link
                          onSetActive={handleSetActive}
                          activeClass="active"
                          className="Services"
                          to="Services"
                          spy={true}
                          smooth={true}
                          duration={200}
                        >
                          <Button
                            isActive={servicesTab}
                            variant="ghost"
                            isFullWidth="true"
                            onClick={onClose}
                          >
                            Services
                          </Button>
                        </Link>
                        <Link
                          onSetActive={handleSetActive}
                          activeClass="active"
                          className="Testimonials"
                          to="Testimonials"
                          spy={true}
                          smooth={true}
                          duration={200}
                        >
                          <Button
                            isActive={testimonialsTab}
                            variant="ghost"
                            isFullWidth="true"
                            onClick={onClose}
                          >
                            Testimonials
                          </Button>
                        </Link>
                        <Link
                          onSetActive={handleSetActive}
                          activeClass="active"
                          className="Pricing"
                          to="Pricing"
                          spy={true}
                          smooth={true}
                          duration={200}
                        >
                          <Button
                            isActive={pricingTab}
                            variant="ghost"
                            isFullWidth="true"
                            onClick={onClose}
                          >
                            Pricing
                          </Button>
                        </Link>
                        <Link
                          onSetActive={handleSetActive}
                          activeClass="active"
                          className="About"
                          to="About"
                          spy={true}
                          smooth={true}
                          duration={200}
                        >
                          <Button
                            isActive={aboutTab}
                            variant="ghost"
                            isFullWidth="true"
                            onClick={onClose}
                          >
                            About
                          </Button>
                        </Link>
                        <RouterLink to="/signup">
                          <Button isFullWidth="true" onClick={onClose}>
                            Book a Demo
                          </Button>
                        </RouterLink>
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
