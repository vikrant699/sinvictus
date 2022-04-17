import { Flex, useBreakpointValue } from '@chakra-ui/react';
import * as React from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function Structure() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Flex
        flexBasis="auto"
        as="section"
        direction={{
          base: 'column',
          lg: 'row',
        }}
        height="100vh"
        bg="bg-canvas"
        overflowY="auto"
      >
        {isDesktop ? <Sidebar /> : <Navbar />}
        <Outlet />
      </Flex>
    </>
  );
}
