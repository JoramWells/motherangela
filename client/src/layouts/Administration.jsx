import {
  Box, HStack, Tag, Text, VStack,
} from '@chakra-ui/react';
import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import BreadCrumbNav from '../components/BreadCrumbNav';

const items = [
  {
    id: nanoid(),
    title: 'Departments',
  },
  {
    id: nanoid(),
    title: 'Drugs',
  },
  {
    id: nanoid(),
    title: 'Hospital Branch',
  },
  {
    id: nanoid(),
    title: 'Privileges',
  },
  {
    id: nanoid(),
    title: 'Services',
  },
  {
    id: nanoid(),
    title: 'Users',
  },
];

const Administration = () => (
  <VStack
    bgColor="gray.50"
    h="100vh"
    w="full"
  >
    <VStack w="full" p={3} mt={8}>
      <BreadCrumbNav />
      <HStack
        mt={12}
        w="full"
        spacing={12}
        flexWrap="wrap"
      >
        {items.map((item) => (
          <Box
            w="200px"
            h="105px"
            bgColor="white"
            bgGradient="linear(to-r, blue.200, blue.100)"
            boxShadow="lg"
            rounded="lg"
            p={3}
            key={item.id}
          >
            <Text
              fontSize="xl"
              fontWeight="semibold"
              color="blue.700"
            >
              {item.title}
            </Text>
            <Tag rounded="full" fontWeight="bold">5</Tag>

            <Text
              fontSize="sm"
              color="gray.500"
              fontWeight="semibold"
              mt={2}
            >
              Last Updated 45mins

            </Text>
          </Box>
        ))}

      </HStack>
    </VStack>
  </VStack>
);

export default Administration;
