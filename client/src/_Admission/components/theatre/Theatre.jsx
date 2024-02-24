import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Theatre = () => (
  <div>
    <HStack>

      <Button
        size="sm"
        colorScheme="green"
        leftIcon={<FaPlus />}
      >
        Add
      </Button>
    </HStack>

  </div>
);

export default Theatre;
