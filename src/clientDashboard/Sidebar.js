import {
  Text,
  Divider,
  Flex,
  Stack,
  Skeleton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import {
  FiBarChart2,
  FiHelpCircle,
  FiHome,
  FiSettings,
  FiSun,
  FiMoon,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Logo } from '../Logo';
import { NavButton } from './NavButton';
import { UserProfile } from './UserProfile';
import { useUserData } from '../contexts/UserDataContext';
import { Link as RouterLink } from 'react-router-dom';

export const Sidebar = () => {
  const { toggleColorMode } = useColorMode();
  const { userData } = useUserData();
  const SwitchIcon = useColorModeValue(FiMoon, FiSun);

  return (
    <Flex as="section" minH="100vh" bg="bg-canvas">
      <Flex
        flex="1"
        bg="bg-surface"
        overflowY="auto"
        boxShadow={useColorModeValue('2xl', '2xl-dark')}
        maxW={{
          base: 'full',
          sm: 'xs',
        }}
        py={{
          base: '6',
          sm: '8',
        }}
        px={{
          base: '4',
          sm: '6',
        }}
      >
        <Stack justify="space-between" spacing="1">
          <Stack
            spacing={{
              base: '5',
              sm: '6',
            }}
            shouldWrapChildren
          >
            <Skeleton isLoaded={userData ? true : false}>
              <RouterLink to="/">
                <Logo />
              </RouterLink>
            </Skeleton>
            <Skeleton isLoaded={userData ? true : false}>
              <Text textTransform="capitalize" fontSize="xl" fontWeight="bold">
                {userData
                  ? 'Welcome ' + userData.FirstName + '!'
                  : 'Welcome User!'}
              </Text>
            </Skeleton>
            <Stack spacing="1">
              <Skeleton isLoaded={userData ? true : false}>
                <RouterLink to="/dashboard/home">
                  <NavButton w="100%" label="Home" icon={FiHome} />
                </RouterLink>
              </Skeleton>
              <Skeleton isLoaded={userData ? true : false}>
                <RouterLink to="/dashboard/data-report">
                  <NavButton
                    w="100%"
                    label="Dashboard"
                    icon={FiBarChart2}
                    aria-current="page"
                  />
                </RouterLink>
              </Skeleton>
              <Skeleton isLoaded={userData ? true : false}>
                <RouterLink to="/dashboard/wa-automation">
                  <NavButton
                    w="100%"
                    label="WhatsApp Automation"
                    icon={FaWhatsapp}
                    aria-current="page"
                  />
                </RouterLink>
              </Skeleton>
            </Stack>
          </Stack>
          <Stack
            spacing={{
              base: '5',
              sm: '6',
            }}
          >
            <Stack spacing="1">
              <Skeleton isLoaded={userData ? true : false}>
                <RouterLink to="/support">
                  <NavButton w="100%" label="Help" icon={FiHelpCircle} />
                </RouterLink>
              </Skeleton>
              <Skeleton isLoaded={userData ? true : false}>
                <RouterLink to="/dashboard/user-settings">
                  <NavButton label="Settings" icon={FiSettings} />
                </RouterLink>
              </Skeleton>
              <Skeleton isLoaded={userData ? true : false}>
                <NavButton
                  onClick={toggleColorMode}
                  label={useColorModeValue(
                    'Toggle Dark Mode',
                    'Toggle Light Mode'
                  )}
                  icon={SwitchIcon}
                />
              </Skeleton>
            </Stack>
            <Divider />
            <UserProfile />
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
