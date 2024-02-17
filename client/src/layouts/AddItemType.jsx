import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addItemType } from '../_reducers/itemTypeSlice';

const AddItemType = () => {
  const [itemTypeName, setItemType] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.itemType);

  const inputValues = {
    itemTypeName,
  };

  return (
    <VStack
      w="full"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bgColor="gray.50"
    >
      <Box
        w="50%"
        mt={5}
        bgColor="white"
        boxShadow="lg"
        p={5}
        rounded="lg"
      >
        <HStack w="full" justifyContent="space-between">
          <IconButton onClick={() => navigate('/add-item')}>
            <FaArrowLeft />
          </IconButton>
          <Text fontSize="2xl" fontWeight="bold">
            Register Item Type
          </Text>
        </HStack>
        {/* sub item */}
        <FormControl mt={5}>
          <FormLabel fontSize="xl">Item Type</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Sub Item of"
            value={itemTypeName}
            onChange={(e) => setItemType(e.target.value)}
          />
        </FormControl>
        <HStack mt={5} w="full" justifyContent="end">
          <Button
            size="lg"
            leftIcon={<FaPlus />}
            colorScheme="blue"
            onClick={() => dispatch(addItemType(inputValues))}
          >
            {loading ? 'loading...' : 'Save Item Type'}
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddItemType;
