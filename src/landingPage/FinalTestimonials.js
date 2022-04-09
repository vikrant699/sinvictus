import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { Testimonials } from './Testimonials';
import { reviews } from './Review_Data';

export const FinalTestimonials = () => {
  return (
    <Box as="section" pt="16" pb="24">
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
