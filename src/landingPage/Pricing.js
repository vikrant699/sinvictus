import {
  Box,
  Center,
  createIcon,
  Button,
  Flex,
  Heading,
  Divider,
  List,
  ListItem,
  Img,
  Stack,
  Text,
  chakra,
  useColorModeValue as mode,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import * as React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

export const Pricing = () => {
  return (
    <Box as="section" bg={mode('gray.100', '#141214')} pb="24">
      <Box
        maxW={{
          base: 'xl',
          md: '5xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
        textAlign="center"
      >
        <Flex direction="column" align="center" maxW="2xl" mx="auto">
          <Heading
            as="h1"
            size="2xl"
            letterSpacing="tight"
            fontWeight="extrabold"
          >
            Find the perfect plan for you
          </Heading>
          <Text mt="4" fontSize="xl" color={mode('#141214', 'whiteAlpha.900')}>
            For growing teams and businesses
          </Text>
          <DurationSwitcher mt="10" />
        </Flex>

        <Flex
          direction={{
            base: 'column',
            lg: 'row',
          }}
          maxW={{
            base: '560px',
            lg: 'unset',
          }}
          mx="auto"
          mt="10"
          bg={mode('white', '#242424')}
          rounded="xl"
        >
          <PricingCard
            flex="1"
            colorScheme="blue"
            name="Basic"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price="$10"
            duration="Per user per month"
            extras="Additional storage: $25 / TB / month"
            features={[
              '100 GB per user',
              'Support for all file types',
              'PDF reviews',
              'Commenting and notifications',
            ]}
          />
          <Box
            w={{
              base: 'unset',
              lg: '1px',
            }}
            minH="0"
            h={{
              base: '1px',
              lg: 'unset',
            }}
            bg={mode('gray.100', 'gray.600')}
          />
          <PricingCard
            flex="1"
            colorScheme="red"
            name="Plus"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price="$50"
            duration="Per user per month"
            extras="Additional storage: $25 / TB / month"
            features={[
              '100 GB per user',
              'Support for all file types',
              'PDF reviews',
              'Commenting and notifications',
            ]}
          />
        </Flex>
        <Box
          mt="10"
          px="12"
          py="10"
          bg={mode('gray.200', '#242424')}
          rounded="xl"
        >
          <Flex
            align="center"
            direction={{
              base: 'column',
              md: 'row',
            }}
          >
            <Stack w="full" align="center" direction="row" spacing="8">
              <Img
                w={{
                  base: '6rem',
                  md: '8rem',
                }}
                h={{
                  base: '6rem',
                  md: '8rem',
                }}
                rounded="full"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1506880135364-e28660dc35fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhZHklMjB3aXRoJTIwdGVsZXBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Customer Service"
              />
              <Box maxW="400px">
                <Text fontSize="xl" fontWeight="bold">
                  Need help or have questions?
                </Text>
                <Text mt="2">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </Text>
              </Box>
            </Stack>
            <Button
              colorScheme="blue"
              size="lg"
              mt={{
                base: '6',
                md: '0',
              }}
              w={{
                base: 'full',
                md: 'auto',
              }}
              minW="10rem"
              flexShrink={0}
              fontSize="md"
            >
              Book a Demo
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

const ActiveIndicatorImpl = chakra('div', {
  baseStyle: {
    w: 'full',
    h: 'full',
    rounded: 'full',
    pos: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
});

const ActiveIndicator = motion(ActiveIndicatorImpl);

const CurvedLine = createIcon({
  viewBox: '0 0 38 20',
  path: (
    <path
      fill="none"
      d="M1.5 18.5H21C29.8366 18.5 37 11.3366 37 2.5V1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

const RadioButton = props => {
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useRadio(props);
  return (
    <Box as="label" pos="relative" {...getLabelProps()} textAlign="center">
      <input {...getInputProps()} />
      <Center
        {...getCheckboxProps()}
        cursor="pointer"
        pos="relative"
        zIndex={1}
        h="12"
        px="8"
        textAlign="center"
        transition="all 0.2s"
        minW="8rem"
        fontWeight="medium"
        _checked={{
          color: mode('blue.600', 'blue.200'),
          fontWeight: 'bold',
        }}
      >
        {props.children}
      </Center>
      {state.isChecked && (
        <ActiveIndicator
          bg={mode('white', '#424242')}
          layoutId="highlight"
          transition={{
            duration: '0.2',
          }}
        />
      )}
    </Box>
  );
};

const DurationSwitcher = props => {
  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'monthly',
  });
  return (
    <Box pos="relative" textAlign="center">
      <AnimateSharedLayout>
        <Flex
          display="inline-flex"
          align="center"
          bg={mode('gray.200', '#242424')}
          rounded="full"
          {...getRootProps(props)}
        >
          <RadioButton
            {...getRadioProps({
              value: 'monthly',
            })}
          >
            Monthly
          </RadioButton>
          <RadioButton
            {...getRadioProps({
              value: 'yearly',
            })}
          >
            Yearly
          </RadioButton>
        </Flex>
      </AnimateSharedLayout>
      <Box
        color={mode('blue.600', 'blue.400')}
        pos="absolute"
        right="-7rem"
        top="6"
      >
        <Text lineHeight="1" fontWeight="bold">
          Save 18%
        </Text>
        <CurvedLine fontSize="2.5rem" pos="relative" right="8" bottom="1" />
      </Box>
    </Box>
  );
};

const CheckIcon = createIcon({
  viewBox: '0 0 17 12',
  d: 'M0 5.82857L1.64571 4.11429L5.48571 7.2L14.8114 0L16.4571 1.71429L5.48571 12L0 5.82857Z',
});
const PricingDetail = props => {
  const { children, iconColor, ...rest } = props;
  return (
    <ListItem
      display="flex"
      alignItems="flex-start"
      fontWeight="medium"
      maxW="260px"
      {...rest}
    >
      <CheckIcon marginEnd="3" mt="1" color={iconColor} />
      <Text as="span" display="inline-block">
        {children}
      </Text>
    </ListItem>
  );
};

const PricingCard = props => {
  const {
    features,
    name,
    description,
    duration,
    price,
    extras,
    onClick,
    colorScheme: c,
    ...rest
  } = props;
  return (
    <Box
      p={{
        base: '10',
        md: '16',
      }}
      {...rest}
      textAlign="center"
    >
      <Heading>{name}</Heading>
      <Divider
        opacity={1}
        borderWidth="2px"
        borderColor={mode(`${c}.500`, `${c}.200`)}
        my="6"
        w="100%"
      />

      <Text maxW="280px" fontSize="lg">
        {description}
      </Text>

      <Box mt="2" textAlign="center">
        <Text
          fontSize={{
            base: '6xl',
            md: '7xl',
          }}
          fontWeight="extrabold"
        >
          {price}
        </Text>
        <Text casing="uppercase" fontWeight="bold">
          {duration}
        </Text>
        <Text mt="2" color={mode('gray.600', 'gray.400')}>
          {extras}
        </Text>
      </Box>

      <Button my="8" size="lg" fontSize="md" colorScheme={c} onClick={onClick}>
        Start free trial
      </Button>

      <Box textAlign="center">
        <Text fontWeight="bold" mb="4">
          What you get:
        </Text>
        <Center>
          <List spacing="4">
            {features.map((feature, index) => (
              <PricingDetail
                key={index}
                iconColor={mode(`${c}.500`, `${c}.200`)}
              >
                {feature}
              </PricingDetail>
            ))}
          </List>
        </Center>
      </Box>
    </Box>
  );
};
