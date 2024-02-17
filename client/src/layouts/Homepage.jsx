import {
  Box, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { FaBookMedical } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import RecentAppointmentsCard from '../components/Dashboard/RecentAppointmentsCard';

const data = [
  {
    id: nanoid(),
    text: 'Total Registered Patients',
    quantity: '75',
    link: '/',
    // colorShceme
  },
  {
    id: nanoid(),
    text: 'Maternity Cases',
    quantity: 34,
    link: '/pharmaceuticals',
  },
  {
    id: nanoid(),
    text: 'Theatre',
    quantity: 50,
    link: '/',
  },
];

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <VStack
      mt="55px"
      w="full"
      h="100vh"
      bgColor="gray.50"
      p={3}
      alignItems="flex-start"
    >
      <VStack
        w="full"
        alignItems="flex-start"
      >
        <Text
          fontSize="18px"
          fontWeight="semibold"
          color="gray.800"
        >
          Overview

        </Text>
        <HStack w="full" alignItems="flex-start" justifyContent="space-between" spacing={4}>
          <HStack w="70%" justifyContent="space-between" spacing={4}>
            {data.map((item) => (
              <Box
                rounded="2xl"
                // boxShadow="lg"
                p={3}
                key={item.id}
                border="1px"
                flex={1}
                height="125px"
                borderColor="gray.200"
                onClick={() => navigate('/pharmaceuticals')}
                _hover={{
                  cursor: 'pointer',
                  boxShadow: 'sm',
                }}
                bgColor="white"
              >
                <IconButton
                  rounded="full"
                  size="md"
                  bgColor="green.50"
                >
                  <FaBookMedical
                    size={15}
                    color="green"
                  />
                </IconButton>
                <Box ml={10}>
                  <Text fontSize="xl" fontWeight="bold">
                    {item.quantity}
                  </Text>
                  <Text fontSize="16px" color="gray.500">
                    {item.text}
                  </Text>

                </Box>
              </Box>
            ))}
          </HStack>

          {/* get all recent patients */}

          <RecentAppointmentsCard />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Homepage;
