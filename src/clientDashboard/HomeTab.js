import {
  Button,
  Box,
  Container,
  Heading,
  Flex,
  HStack,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiDownloadCloud } from 'react-icons/fi';
import { ButtonCard, WideCard } from './Cards';
import { useUserData } from '../contexts/UserDataContext';

export default function HomeTab() {
  const { userData } = useUserData();
  return (
    <Flex justify="space-around" w="100%">
      <Box py={{ base: '0', lg: '8' }}>
        <Stack spacing="6">
          <Box align="center" pb="5">
            <Skeleton isLoaded={userData ? true : false}>
              <Heading
                as="h1"
                size="3xl"
                color={mode('brand.600', 'brand.400')}
                mt="8"
                fontWeight="extrabold"
                letterSpacing="tight"
              >
                {userData
                  ? 'Hello ' + userData.FirstName + '!'
                  : 'Hello FirstName!'}
              </Heading>
            </Skeleton>
          </Box>
          <Box>
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: '5', lg: '6' }}
              my={{ base: '0', lg: '2%' }}
              mx="2%"
              justify="space-around"
            >
              <ButtonCard
                text="New to our service? Have a look at these video tutorials to master your way around our this place."
                buttonText="Tutorials"
              />
              <ButtonCard
                text="Get product details, competitor research, in debth analysis of any kind of import export commodity here."
                buttonText="Dashboard"
              />
              <ButtonCard
                text="Go to our automations section to check our business utilities. You can get various kind of services here."
                buttonText="Automation"
              />
            </Stack>
          </Box>
          <Box>
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: '5', lg: '6' }}
              my={{ base: '0', lg: '2%' }}
              mx="2%"
            >
              <WideCard
                text="As she sat watching the world go by, something caught her eye. It wasn't so much its color or shape, but the way it was moving. She squinted to see if she could better understand what it was and where it was going, but it didn't help. As she continued to stare into the distance, she didn't understand why this uneasiness was building inside her body. She felt like she should get up and run. If only she could make out what it was. At that moment, she comprehended what it was and where it was heading, and she knew her life would never be the same. According to the caption on the bronze marker placed by the Multnomah Chapter of the Daughters of the American Revolution on May 12, 1939, “College Hall (is) the oldest building in continuous use for Educational purposes west of the Rocky Mountains. Here were educated men and women who have won recognition throughout the world in all the learned professions.”"
                buttonText="Contact Support"
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}
