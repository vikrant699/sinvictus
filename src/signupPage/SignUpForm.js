import {
  Button,
  FormControl,
  FormLabel,
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
import { Select } from 'chakra-react-select';
import { GoogleIcon } from './ProviderIcons';
import { groupedCountries } from './Country_Data';

export const SignUpForm = props => {
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
            Register your account and we will contact you!
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Already registered?</Text>
            <Button variant="link" colorScheme="blue">
              Log in
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <Stack spacing="5" direction="row" maxW="100%">
            <FormControl>
              <FormLabel htmlFor="text">First Name</FormLabel>
              <Input id="firstName" placeholder="First" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="text">Last Name</FormLabel>
              <Input id="lastName" placeholder="Last" type="text" />
            </FormControl>
          </Stack>
          <FormControl>
            <FormLabel htmlFor="text">Country</FormLabel>
            <Select
              p="0"
              m="0"
              name="country"
              options={groupedCountries}
              placeholder="Select country"
              closeMenuOnSelect={true}
              // focusBorderColor="FFFFFF"
              selectedOptionStyle="check"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="number">Phone Number</FormLabel>
            <InputGroup>
              <Input
                id="phoneNumber"
                placeholder="Enter your number"
                type="number"
              />
            </InputGroup>
          </FormControl>
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
        <HStack>
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
            Sign up with Google
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
