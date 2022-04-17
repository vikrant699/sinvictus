import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  Stack,
  Text,
  useBreakpointValue,
  Alert,
} from '@chakra-ui/react';
import * as React from 'react';
import { Select } from 'chakra-react-select';
import { groupedCountries } from './Country_Data';
import { useAuth } from '../contexts/AuthContext';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export const SignUpForm = props => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const passwordConfirmRef = React.useRef();
  const firstNamedRef = React.useRef();
  const lastNamedRef = React.useRef();
  const [countryRef, setCountryRef] = React.useState();
  const phoneNumberRef = React.useRef();
  const { signUp, currentUser, addUserToDb } = useAuth();
  const [error, setError] = React.useState('');
  const [invalidInput, setInvalidInput] = React.useState(false);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setCountryRef(e.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      (firstNamedRef.current.value,
      lastNamedRef.current.value,
      phoneNumberRef.current.value,
      countryRef,
      emailRef.current.value,
      passwordRef.current.value,
      passwordConfirmRef.current.value)
    ) {
      if (passwordRef.current.value === passwordConfirmRef.current.value) {
        try {
          setInvalidInput(false);
          setError('');
          setButtonLoading(true);
          await signUp(
            emailRef.current.value,
            passwordRef.current.value,
            'RegisteredUsers',
            {
              FirstName: String(firstNamedRef.current.value),
              LastName: String(lastNamedRef.current.value),
              Country: String(countryRef),
              PhoneNumber: Number(phoneNumberRef.current.value),
              Email: String(emailRef.current.value),
            }
          );
          navigate('/dashboard');
        } catch {
          setButtonLoading(false);
          setError('Failed to create an account');
        }
        setButtonLoading(false);
        // addUserToDb('RegisteredUsers', currentUser.uid, {
        //   FirstName: String(firstNamedRef.current.value),
        //   LastName: String(lastNamedRef.current.value),
        //   Country: String(countryRef),
        //   PhoneNumber: Number(phoneNumberRef.current.value),
        //   Email: String(emailRef.current.value),
        // });
      } else {
        return [setError('Passwords do not match'), setInvalidInput(true)];
      }
    } else {
      return setError('One or more fields are empty');
    }
  };

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
            <RouterLink to="/login">
              <Button variant="link" colorScheme="blue">
                Log in
              </Button>
            </RouterLink>
          </HStack>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <Stack spacing="5" direction="row" maxW="100%">
            <FormControl isRequired>
              <FormLabel htmlFor="text">First Name</FormLabel>
              <Input
                id="firstName"
                placeholder="First"
                type="text"
                ref={firstNamedRef}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="text">Last Name</FormLabel>
              <Input
                id="lastName"
                placeholder="Last"
                type="text"
                ref={lastNamedRef}
              />
            </FormControl>
          </Stack>
          <FormControl isRequired>
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
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="number">Phone Number</FormLabel>
            <InputGroup>
              <Input
                id="phoneNumber"
                placeholder="Enter your number"
                type="number"
                ref={phoneNumberRef}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              ref={emailRef}
            />
          </FormControl>
          <Stack spacing="5" direction="row" maxW="100%">
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <Input
                  isInvalid={invalidInput}
                  id="password"
                  placeholder="********"
                  type={show ? 'text' : 'password'}
                  ref={passwordRef}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Check Password</FormLabel>
              <InputGroup>
                <Input
                  isInvalid={invalidInput}
                  id="confirmPassword"
                  placeholder="********"
                  type={show ? 'text' : 'password'}
                  ref={passwordConfirmRef}
                />
              </InputGroup>
            </FormControl>
          </Stack>
        </Stack>
        <HStack>
          <Button
            variant="link"
            colorScheme="blue"
            size="sm"
            onClick={handleClick}
          >
            {show ? 'Hide password' : 'Show password'}
          </Button>
        </HStack>
        <Stack spacing="4">
          {error && <Alert status="error">{error}</Alert>}
          <Button
            isLoading={buttonLoading}
            loadingText="Submitting"
            variant="primary"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
