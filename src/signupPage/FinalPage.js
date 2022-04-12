import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { SignUpForm } from './SignUpForm';
import {
  Carousel,
  CarouselSlide,
  useCarousel,
} from '../landingPage/Testimonials';
import { features } from './Feature_Data';

export const FinalPage = () => {
  const [ref] = useCarousel();
  const headingSize = useBreakpointValue({
    md: 'lg',
    xl: 'xl',
  });

  return (
    <Box
      as="section"
      pb={{
        base: '20',
        md: '24',
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
          md: '25%',
          lg: '20',
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
            <SignUpForm
              px={{
                base: '4',
                lg: '8',
              }}
              py={{
                base: '5',
                md: '5',
              }}
              width="full"
              maxW={{
                base: '',
                lg: 'md',
              }}
            />
          </Box>
          <Box
            display={{
              base: 'none',
              lg: 'block',
            }}
            w="50%"
            textAlign="center"
          >
            <Carousel ref={ref}>
              {features.map((feature, i) => (
                <CarouselSlide key={i}>
                  <Stack spacing="6">
                    <Image src={feature.img} h="500px" w="500px" />
                    <Heading size={headingSize} maxW="500px">
                      {feature.title}
                    </Heading>
                    <Text fontSize="lg" maxW="500px" fontWeight="medium">
                      {feature.desc}
                    </Text>
                  </Stack>
                </CarouselSlide>
              ))}
            </Carousel>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
