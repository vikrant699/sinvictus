import {
  Avatar,
  Box,
  HStack,
  Text,
  Stack,
  SkeletonText,
  SkeletonCircle,
} from '@chakra-ui/react';
import * as React from 'react';
import { useUserData } from '../contexts/UserDataContext';

export const UserProfile = () => {
  const { userData } = useUserData();
  return (
    <HStack spacing="4" ps="2">
      <SkeletonCircle size="10" isLoaded={userData ? true : false}>
        <Avatar
          name={
            userData
              ? userData.FirstName + ' ' + userData.LastName
              : 'Fetching Name'
          }
          boxSize="10"
        />
      </SkeletonCircle>
      <Box>
        <Stack>
          <SkeletonText noOfLines={2} isLoaded={userData ? true : false}>
            <Text
              textTransform="capitalize"
              pb={1}
              fontWeight="medium"
              fontSize="sm"
            >
              {userData
                ? userData.FirstName + ' ' + userData.LastName
                : 'Fetching Name'}
            </Text>
            <Text color="muted" fontSize="sm">
              {userData ? userData.Email : 'Fetching Email'}
            </Text>
          </SkeletonText>
        </Stack>
      </Box>
    </HStack>
  );
};
