import {
  Box, Button, FormControl, FormLabel, HStack, Input, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSubItem } from '../_reducers/subItemSlice';

const AddSubItem = () => {
  const dispatch = useDispatch();
  const [subItemName, setSubItemName] = useState();

  const inputValues = {
    subItemName,
  };
  return (
    <VStack
      h="100vh"
      w="full"
      bgColor="gray.50"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="45%" bgColor="white" rounded="lg" boxShadow="lg" p={5}>
        <FormControl>
          <FormLabel>Subitem name</FormLabel>
          <Input placeholder="Enter sub-item name" value={subItemName} onChange={(e) => setSubItemName(e.target.value)} />
        </FormControl>
        <HStack mt={5} w="full" justifyContent="flex-end">
          <Button
            colorScheme="blue"
            onClick={() => dispatch(addSubItem(inputValues))}
          >
            Save
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddSubItem;
