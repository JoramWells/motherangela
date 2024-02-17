/* eslint-disable no-unused-vars */

import {
  Button, HStack, Text, VStack,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate, useParams } from 'react-router-dom';

const carouselData = [
  {
    id: nanoid(),
    text: 'Record Vitals',
  },
];

const Medical = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <VStack
      bgColor="white"
      // w="full"
      flex={1}
      height="50%"
      border="1px"
      borderColor="gray.200"
      rounded="lg"
      p={5}
    >
      <HStack
        w="full"
        flexWrap="wrap"
        spacing={4}
      >
        {/* <RecordVitals /> */}
        <Button
          size="sm"
          onClick={() => navigate({
            pathname: '/add-vitals',
            search: `?patient_id=${id}`,
          })}
        >
          Vitals

        </Button>
        <Button
          size="sm"
        >
          Procedure Services

        </Button>
        <Button
          size="sm"
        >
          Lab Requests

        </Button>
        <Button
          size="sm"
        >
          Radiology Requests

        </Button>
        <Button
          size="sm"
        >
          Pharmacy Requests

        </Button>
        <Button
          size="sm"
        >
          Department Drugs Requests

        </Button>

      </HStack>
    </VStack>
  );
};

export default Medical;
