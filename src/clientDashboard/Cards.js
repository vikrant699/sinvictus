import {
  Box,
  Button,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';

export const ButtonCard = props => {
  const { text, buttonText, ...rest } = props;
  return (
    <Box
      minW={{ base: '75%', lg: '25%' }}
      bg="bg-surface"
      boxShadow={mode('2xl', '2xl-dark')}
      borderRadius="lg"
      {...rest}
    >
      <Stack p="8%" spacing={8}>
        <Text>{text}</Text>
        <Button
          w="full"
          colorScheme="red"
          color="white"
          height="14"
          // leftIcon={<Box as={FaYoutube} fontSize="2xl" />}
        >
          {buttonText}
        </Button>
      </Stack>
    </Box>
  );
};

export const WideCard = props => {
  const { text, buttonText, ...rest } = props;
  return (
    <Box
      w="full"
      bg="bg-surface"
      boxShadow={mode('2xl', '2xl-dark')}
      borderRadius="lg"
      {...rest}
    >
      <Stack p="5%" spacing={8}>
        <Text>{text}</Text>
        <Button
          colorScheme="red"
          w={{ base: '100%%', lg: '15%' }}
          color="white"
          height="14"
          // leftIcon={<Box as={FaYoutube} fontSize="2xl" />}
        >
          {buttonText}
        </Button>
      </Stack>
    </Box>
  );
};
