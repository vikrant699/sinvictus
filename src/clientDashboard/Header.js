import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Alert,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from '../Logo';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Header = () => {
  const [error, setError] = React.useState('');
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    setError('');
    try {
      await logOut();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  };

  return (
    <Box
      as="section"
      pb={{
        base: '0',
        md: '12',
      }}
    >
      <Box as="header" w="100%">
        <Container
          maxW="100%"
          py={{
            base: '3',
            lg: '4',
          }}
        >
          <Flex justify="space-around">
            <HStack spacing="4">
              <RouterLink to="/">
                <Logo />
              </RouterLink>
              {error && <Alert>{error}</Alert>}
            </HStack>
            <HStack spacing="4">
              <ColorModeSwitcher />
              <Text>{currentUser.displayName}</Text>
              <Button onClick={handleLogOut}>Log Out</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
