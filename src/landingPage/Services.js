import {
  Box,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { features } from './Services_Data';

export const Services = () => (
  <Box as="section" bg="bg-surface" pt="16">
    <Box
      maxW={{
        base: 'xl',
        md: '7xl',
      }}
      mx="auto"
      px={{
        base: '6',
        md: '8',
      }}
      pt={{
        base: '0',
        md: '24',
      }}
    >
      <Stack
        spacing={{
          base: '12',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '4',
            md: '5',
          }}
          align="center"
          textAlign="center"
        >
          <Stack spacing="3">
            <Heading
              as="h1"
              size="2xl"
              letterSpacing="tight"
              fontWeight="extrabold"
              textAlign="center"
            >
              What can you expect?
            </Heading>
          </Stack>
          <Text
            color="muted"
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            maxW="3xl"
          >
            A bundle of 210+ ready-to-use, responsive and accessible components
            with clever structured sourcode files.
          </Text>
        </Stack>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          columnGap={8}
          rowGap={{
            base: 10,
            md: 16,
          }}
        >
          {features.map(feature => (
            <Stack
              key={feature.name}
              spacing={{
                base: '4',
                md: '5',
              }}
              align="center"
              textAlign="center"
            >
              <Square
                size={{
                  base: '10',
                  md: '12',
                }}
                bg="brand.400"
                color="inverted"
                borderRadius="lg"
              >
                <Icon
                  as={feature.icon}
                  boxSize={{
                    base: '5',
                    md: '6',
                  }}
                />
              </Square>
              <Stack
                spacing={{
                  base: '1',
                  md: '2',
                }}
              >
                <Text
                  fontSize={{
                    base: 'lg',
                    md: 'xl',
                  }}
                  fontWeight="medium"
                >
                  {feature.name}
                </Text>
                <Text color="muted">{feature.description}</Text>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  </Box>
);
