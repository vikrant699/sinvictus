import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Alert,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link as RouterLink } from 'react-router-dom';

export const ForgotPasswordForm = props => {
  const emailRef = React.useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = React.useState('');
  const [invalidInput, setInvalidInput] = React.useState(false);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (emailRef.current.value) {
      try {
        setInvalidInput(false);
        setMessage('');
        setError('');
        setButtonLoading(true);
        await resetPassword(emailRef.current.value);
        setMessage('Check your email for further instructions');
      } catch {
        setInvalidInput(true);
        setError('Failed to reset password');
      }
      setButtonLoading(false);
    } else {
      return setError('Please enter your email');
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
            Forgot your password?
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
        </Stack>

        <Stack spacing="4">
          {message && <Alert status="success">{message}</Alert>}
          {error && <Alert status="error">{error}</Alert>}
          <Button
            onClick={handleSubmit}
            isLoading={buttonLoading}
            variant="primary"
          >
            Reset Passowrd
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
