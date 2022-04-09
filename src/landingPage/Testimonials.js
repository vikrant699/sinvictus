import {
  Box,
  Circle,
  HStack,
  IconButton,
  Stack,
  SimpleGrid,
  Flex,
  Img,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ImQuotesLeft } from 'react-icons/im';
import { useKeenSlider } from 'keen-slider/react';

export const Testimonials = props => {
  const { reviews, rootProps } = props;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [ref, slider] = useCarousel({
    slideChanged: slider => setCurrentSlide(slider.track.details.rel),
  });
  const hasPrevious = currentSlide !== 0;
  const hasNext = currentSlide < reviews.length - 1;

  return (
    <Stack spacing="4" {...rootProps}>
      <Box
        position="relative"
        sx={{
          _hover: {
            '> button': {
              display: 'inline-flex',
            },
          },
        }}
      >
        <Carousel ref={ref}>
          {reviews.map((review, i) => (
            <CarouselSlide key={i}>
              <SimpleGrid
                py="16"
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
        {hasPrevious && (
          <CarouselIconButton
            pos="absolute"
            left="3"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slider.current?.prev()}
            icon={<FiChevronLeft />}
            aria-label="Previous Slide"
          />
        )}

        {hasNext && (
          <CarouselIconButton
            pos="absolute"
            right="3"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slider.current?.next()}
            icon={<FiChevronRight />}
            aria-label="Next Slide"
          />
        )}
        <HStack
          position="absolute"
          width="full"
          justify="center"
          bottom="0"
          py="4"
        >
          {reviews.map((_, index) => (
            <Circle
              key={index}
              size="2"
              bg={currentSlide === index ? 'white' : 'whiteAlpha.400'}
            />
          ))}
        </HStack>
      </Box>
    </Stack>
  );
};

const CarouselIconButton = props => (
  <IconButton display="none" fontSize="lg" isRound variant="ghost" {...props} />
);

const Carousel = React.forwardRef(function Carousel(props, ref) {
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

const CarouselSlide = props => (
  <Box
    className="chakra-carousel__slide"
    position="relative"
    overflow="hidden"
    width="100%"
    minH="100%"
    {...props}
  />
);

const useCarousel = options => {
  const defaultOptions = {
    selector: '.chakra-carousel__slide',
  };
  return useKeenSlider({ ...defaultOptions, ...options });
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
        mt="2"
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
        <Box mb="6">
          <Box
            as={ImQuotesLeft}
            color={mode('blue.600', 'blue.400')}
            fontSize="xl"
          />
          <Text mt="3" fontSize="xl" fontWeight="bold" maxW="38rem">
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
              color={mode('blue.600', 'blue.400')}
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
