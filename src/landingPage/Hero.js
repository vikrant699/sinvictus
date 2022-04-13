import {
  Box,
  Button,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { useCarousel, Carousel, CarouselSlide } from './Testimonials';

const images = [
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhZHklMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=90',
];

export function Hero() {
  const [ref] = useCarousel();
  return (
    <Box
      as="section"
      pt={{
        base: '4',
        lg: '20',
      }}
      pb={{
        base: '0',
        lg: '10',
      }}
    >
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          spacing={{
            base: '3rem',
            lg: '2rem',
          }}
          mt="8"
          align={{
            lg: 'center',
          }}
          justify="space-between"
        >
          <Box
            flex="1"
            maxW={{
              lg: '520px',
            }}
          >
            <Text
              size="xs"
              textTransform="uppercase"
              fontWeight="semibold"
              color={mode('brand.600', 'brand.400')}
              letterSpacing="wide"
            >
              Hire Talents
            </Text>
            <Heading
              as="h1"
              size="3xl"
              color={mode('brand.600', 'brand.400')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Get world class talents for your project
            </Heading>
            <Text
              color={mode('gray.600', 'gray.400')}
              mt="4"
              fontSize="lg"
              fontWeight="medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              spacing="4"
              mt="8"
            >
              <Button
                size="lg"
                minW="210px"
                colorScheme="brand"
                height="14"
                px="8"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                minW="210px"
                colorScheme="red"
                color="white"
                height="14"
                px="8"
                leftIcon={<Box as={FaYoutube} fontSize="2xl" />}
              >
                Watch Demo
              </Button>
            </Stack>
            <Text mt="8" color={mode('gray.600', 'gray.400')}>
              Already have an account store?{' '}
              <Link href="/login" textDecoration="underline">
                Log in
              </Link>
            </Text>
          </Box>
          <Box
            pos="relative"
            w={{
              base: 'full',
              lg: '560px',
            }}
            h={{
              base: 'auto',
              lg: '560px',
            }}
          >
            <Carousel ref={ref}>
              {images.map((image, i) => (
                <CarouselSlide key={i}>
                  <Box
                    pos="relative"
                    w={{
                      base: 'full',
                      lg: '560px',
                    }}
                    h={{
                      base: 'auto',
                      lg: '560px',
                    }}
                  >
                    <Img
                      w="full"
                      pos="relative"
                      zIndex="1"
                      h={{
                        lg: '100%',
                      }}
                      objectFit="cover"
                      src={image}
                      alt="Screening talent"
                      transition="0.8s linear"
                    />
                  </Box>
                </CarouselSlide>
              ))}
            </Carousel>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
