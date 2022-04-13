import {
  Button,
  FormControl,
  FormLabel,
  Checkbox,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { GoogleIcon } from '../signupPage/ProviderIcons';

export const LogInForm = props => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Stack spacing="8" {...props}>
      <Stack spacing="6">
        <Stack
          spacing={{
            base: '2',
            lg: '3',
          }}
          textAlign="center"
        >
          <Heading
            size={useBreakpointValue({
              base: 'xs',
              md: 'sm',
            })}
          >
            Log in here
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Not registered yet?</Text>
            <Button variant="link" colorScheme="blue">
              Sign up
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" placeholder="Enter your email" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                placeholder="********"
                type={show ? 'text' : 'password'}
              />
              <InputRightAddon p="0" m="0">
                <Button
                  h="100%"
                  w="50px"
                  size="sm"
                  onClick={handleClick}
                  rounded="0"
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightAddon>
            </InputGroup>
          </FormControl>
        </Stack>
        <HStack justify="space-between">
          <Checkbox defaultIsChecked>Remember me</Checkbox>
          <Button variant="link" colorScheme="blue" size="sm">
            Forgot password
          </Button>
        </HStack>
        <Stack spacing="4">
          <Button variant="primary">Register</Button>
          <Button
            variant="secondary"
            leftIcon={<GoogleIcon boxSize="5" />}
            iconSpacing="3"
          >
            Log in with Google
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
