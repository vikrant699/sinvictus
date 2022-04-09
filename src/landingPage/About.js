import {
  Box,
  Center,
  Heading,
  Divider,
  Flex,
  Img,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { Logo } from './Logo';

export const About = () => {
  return (
    <Box as="section">
      <Heading
        as="h1"
        size="2xl"
        letterSpacing="tight"
        fontWeight="extrabold"
        textAlign="center"
        marginBottom="20"
      >
        About Us
      </Heading>
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <Flex
          align={{ lg: 'center' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Box
            flex="1"
            pos="relative"
            maxW={{ lg: '480px' }}
            as="button"
            aria-label="Play Testimonial video"
          >
            <Img
              w="full"
              h="full"
              objectFit="cover"
              alt="Teaser Video Image"
              loading="lazy"
              rounded="4px"
              overflow="hidden"
              src="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=90"
            />
          </Box>

          <Box
            flex="1"
            paddingStart={{ md: '16' }}
            paddingEnd={{ md: '12' }}
            mt={{ base: '8', md: '0' }}
          >
            <Stack
              align={{ base: 'flex-start', lg: 'center' }}
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: '2', lg: '4' }}
            >
              <Box as="h5" color="gray.500" fontSize="lg">
                Sinvictus Technologies
              </Box>
              <Box h="4" display={{ base: 'none', lg: 'block' }}>
                <Divider orientation="vertical" />
              </Box>
              <Logo h="5" color="gray.500" />
            </Stack>
            <Box mt="4" fontSize={{ base: 'xl', lg: '2xl' }} as="blockquote">
              &quot;Some random stuff about us that we are proud to do blah blah
              blah.&quot;
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
