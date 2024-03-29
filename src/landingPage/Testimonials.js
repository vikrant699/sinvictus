import {
  Box,
  HStack,
  Stack,
  SimpleGrid,
  Flex,
  Img,
  Text,
  Heading,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import { useKeenSlider } from 'keen-slider/react';
import { reviews } from './Review_Data';

export const FinalTestimonials = () => {
  return (
    <Box
      as="section"
      pt={{
        base: '0',
        md: '16',
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
        <Testimonials
          rootProps={{
            overflow: 'hidden',
            flex: '1',
          }}
          reviews={reviews.slice(0, 5)}
        />
      </Box>
    </Box>
  );
};

const Testimonials = props => {
  const { reviews, rootProps } = props;
  const [ref] = useCarousel();

  return (
    <Stack spacing="4" {...rootProps}>
      <Box pt="20">
        <Heading
          as="h1"
          size="2xl"
          letterSpacing="tight"
          fontWeight="extrabold"
          textAlign="center"
        >
          What our clients have to say
        </Heading>
        <Box m="2% 5% 0% 5%">
          <Carousel ref={ref}>
            {reviews.map((review, i) => (
              <CarouselSlide key={i}>
                <SimpleGrid
                  pt="16"
                  columns={{
                    base: 1,
                    lg: 2,
                  }}
                  spacing={{
                    base: '16',
                    lg: '32',
                  }}
                >
                  <Feedback
                    name={review.name1}
                    role={review.role1}
                    image={review.avt1}
                  >
                    {review.feed1}
                  </Feedback>
                  <Feedback
                    name={review.name2}
                    role={review.role2}
                    image={review.avt2}
                  >
                    {review.feed2}
                  </Feedback>
                </SimpleGrid>
              </CarouselSlide>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Stack>
  );
};

// const CarouselIconButton = props => (
//   <IconButton display="none" fontSize="lg" isRound variant="ghost" {...props} />
// );

export const Carousel = React.forwardRef(function Carousel(props, ref) {
  return (
    <Flex
      ref={ref}
      className="chakra-carousel"
      overflow="hidden"
      position="relative"
      userSelect="none"
      {...props}
    />
  );
});

export const CarouselSlide = props => (
  <Box
    className="chakra-carousel__slide"
    position="relative"
    overflow="hidden"
    width="100%"
    minH="100%"
    {...props}
  />
);

export const useCarousel = options => {
  const defaultOptions = {
    selector: '.chakra-carousel__slide',
  };
  return useKeenSlider({ loop: true, ...defaultOptions, ...options }, [
    slider => {
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 2000);
      }
      slider.on('created', () => {
        slider.container.addEventListener('mouseover', () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener('mouseout', () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on('dragStarted', clearNextTimeout);
      slider.on('animationEnded', nextTimeout);
      slider.on('updated', nextTimeout);
    },
  ]);
};

const Feedback = props => {
  const { image, name, role, children } = props;
  return (
    <Stack
      as="blockquote"
      direction="row"
      spacing={{
        base: '0',
        md: '8',
      }}
      flex="1"
      {...props}
    >
      <Img
        display={{
          base: 'none',
          md: 'block',
        }}
        mt="3"
        flexShrink={0}
        src={image}
        alt={name}
        objectFit="cover"
        w={{
          base: '20',
          md: '32',
        }}
        h={{
          base: '20',
          md: '32',
        }}
        rounded="full"
      />
      <Flex w="full" direction="column">
        <Box mb="5">
          <Box
            as={ImQuotesLeft}
            color={mode('brand.600', 'brand.400')}
            fontSize="xl"
          />
          <Text fontSize="xl" fontWeight="bold" maxW="20rem">
            {children}
          </Text>
        </Box>
        <HStack>
          <Img
            display={{
              base: 'block',
              md: 'none',
            }}
            flexShrink={0}
            src={image}
            alt={name}
            objectFit="cover"
            w={{
              base: '12',
              md: '32',
            }}
            h={{
              base: '12',
              md: '32',
            }}
            rounded="full"
          />
          <Box>
            <Text
              as="cite"
              fontStyle="normal"
              fontWeight="extrabold"
              color={mode('brand.600', 'brand.400')}
            >
              {name}
            </Text>
            <Text fontSize="sm" color={mode('gray.600', 'gray.400')}>
              {role}
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Stack>
  );
};
