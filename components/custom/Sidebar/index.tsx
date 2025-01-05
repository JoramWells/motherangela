import React from 'react'

import {
  Box,
} from '@chakra-ui/react';
import SidebarListItems from './SidebarListItems';

function index() {
  return (
    <Box
      w={{ base: '100%', sm: '230px' }}
      h="100vh"
      overflowX="auto"
      bgColor="blue.900"
      display={{ base: 'none', sm: 'block' }}
      // pt={14}
      // borderRight="1px"
      // borderColor="gray.100"
      position="fixed"
      top="55px"
      // p={1}
    >

      <SidebarListItems />

    </Box>
  );
}

export default index;
