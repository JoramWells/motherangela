import {
  Button, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { FaArrowRight, FaBed, FaCalendar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

const dataList = [
  {
    id: nanoid(),
    text: 'Admission',
    description: 'Continue to Admission',
    icon: <FaBed />,

  },
  {
    id: nanoid(),
    text: 'Appointments',
    description: 'Continue to Appointments',
    icon: <FaCalendar />,

  },
];

const AdmissionAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <VStack
      alignItems="center"
      mt="55px"
      p={3}
      h="100vh"
      justify="center"
      w="full"
    >
      <HStack
        w="full"
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >

        {dataList.map((item) => (
          <VStack
            key={item.id}
            h="400px"
            bgColor="white"
            w="25%"
            border="1px"
            borderColor="gray.200"
            p={5}
            rounded="xl"
            alignItems="center"
            justifyContent="center"
            spacing={4}
            position="relative"
          >
            <IconButton
              rounded="full"
              position="absolute"
              left="10px"
              top="10px"
              colorScheme="green"
            >
              {item.icon}
            </IconButton>
            <VStack
              spacing={0}
            >
              <Text
                fontSize="22px"
                fontWeight="bold"
              >
                {item.text}
              </Text>
              <Text
                fontSize="16px"
                color="gray.500"
              >
                {item.description}
              </Text>
            </VStack>

            <Button
                            // colorScheme="blue"
              rightIcon={<FaArrowRight />}
              rounded="full"
              onClick={() => navigate(`/add-appointment/${id}`)}
            >
              Continue
            </Button>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
};

export default AdmissionAppointment;
