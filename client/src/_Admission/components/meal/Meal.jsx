import { Button, HStack } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

const Meal = () => (
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

export default Meal;
