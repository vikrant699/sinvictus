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
  Alert,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { GoogleIcon } from '../signupPage/ProviderIcons';
import { useAuth } from '../contexts/AuthContext';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export const LogInForm = props => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const { logIn, signInWithGoogle } = useAuth();
  const [error, setError] = React.useState('');
  const [invalidInput, setInvalidInput] = React.useState(false);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const [googleButtonLoading, setGoogleButtonLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if ((emailRef.current.value, passwordRef.current.value)) {
      try {
        setInvalidInput(false);
        setError('');
        setButtonLoading(true);
        await logIn(emailRef.current.value, passwordRef.current.value);
        navigate('/dashboard');
      } catch {
        setInvalidInput(true);
        setError('Failed to log in');
      }
      setButtonLoading(false);
    } else {
      return setError('One of the fields is empty');
    }
  };

  const handleGoogleSubmit = async e => {
    e.preventDefault();
    try {
      setInvalidInput(false);
      setError('');
      setGoogleButtonLoading(true);
      await signInWithGoogle();
      navigate('/dashboard');
    } catch {
      setError('Failed to log in');
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
            Log in here
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Not registered yet?</Text>
            <RouterLink to="/signup">
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </RouterLink>
          </HStack>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              ref={emailRef}
              isInvalid={invalidInput}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                placeholder="********"
                type={show ? 'text' : 'password'}
                ref={passwordRef}
                isInvalid={invalidInput}
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
          <RouterLink to="/forgot-password">
            <Button variant="link" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </RouterLink>
        </HStack>
        <Stack spacing="4">
          {error && <Alert status="error">{error}</Alert>}
          <Button
            onClick={handleSubmit}
            isLoading={buttonLoading}
            variant="primary"
          >
            Log in
          </Button>
          <Button
            isLoading={googleButtonLoading}
            onClick={handleGoogleSubmit}
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
