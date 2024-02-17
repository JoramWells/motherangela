/* eslint-disable no-unused-vars */

import {
  Button, HStack, Text, VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BedReallocation = () => {
  const data = [];
  const navigate = useNavigate();
  return (
    <VStack>
      <HStack
        w="full"
        justifyContent="space-between"
      >
        <Text>
          Bed
        </Text>
        <Button
          size="sm"
          border="2px"
          onClick={() => navigate('/add-patient-bed-allocation')}
        >
          Add
        </Button>
      </HStack>
    </VStack>
  );
};

export default BedReallocation;
