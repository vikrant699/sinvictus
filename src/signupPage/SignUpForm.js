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
import { GoogleIcon } from './ProviderIcons';
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
  const countryRef = React.useRef();
  const phoneNumberRef = React.useRef();
  const { signUp, currentUser } = useAuth();
  const [error, setError] = React.useState('');
  const [invalidInput, setInvalidInput] = React.useState(false);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      (firstNamedRef.current.value,
      lastNamedRef.current.value,
      phoneNumberRef.current.value,
      countryRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      passwordConfirmRef.current.value)
    ) {
      if (passwordRef.current.value === passwordConfirmRef.current.value) {
        try {
          setInvalidInput(false);
          setError('');
          setButtonLoading(true);
          await signUp(emailRef.current.value, passwordRef.current.value);
          navigate('/dashboard');
        } catch {
          setError('Failed to create an account');
        }
        setButtonLoading(false);
      } else {
        return setError('Passwords do not match'), setInvalidInput(true);
      }
    } else {
      return setError('One of the fields is empty');
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
            <FormControl>
              <FormLabel htmlFor="text">First Name</FormLabel>
              <Input
                id="firstName"
                placeholder="First"
                type="text"
                ref={firstNamedRef}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="text">Last Name</FormLabel>
              <Input
                id="lastName"
                placeholder="Last"
                type="text"
                ref={lastNamedRef}
              />
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
              ref={countryRef}
            />
          </FormControl>

          <FormControl>
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
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              ref={emailRef}
            />
          </FormControl>
          <Stack spacing="5" direction="row" maxW="100%">
            <FormControl>
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
            <FormControl>
              <FormLabel htmlFor="password">Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  isInvalid={invalidInput}
                  id="password"
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
