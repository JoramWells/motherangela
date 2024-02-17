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
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addItemCategory } from '../_reducers/itemCategorySlice';

const AddItemCategory = () => {
  const [itemCategoryName, setItemCategory] = useState('');
  const [itemCodePrefix, setItemCodePrefix] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.itemCategory);

  const inputValues = {
    itemCategoryName,
    itemCodePrefix,
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
          <IconButton onClick={() => navigate('/admin-departments')}>
            <FaArrowLeft />
          </IconButton>
          <Text fontSize="xl" fontWeight="semibold" color="gray.500">
            Add Item Category
          </Text>
        </HStack>
        {/* sub item */}
        <FormControl mt={5}>
          <FormLabel fontSize="lg">Item Category</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Item Category"
            value={itemCategoryName}
            onChange={(e) => setItemCategory(e.target.value)}
          />
        </FormControl>

        {/* item code prefix */}
        <FormControl mt={5}>
          <FormLabel fontSize="lg">Item Code Prefix</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Item Code Prefix"
            value={itemCodePrefix}
            onChange={(e) => setItemCodePrefix(e.target.value)}
          />
        </FormControl>
        <HStack mt={5} w="full" justifyContent="end">
          <Button
            size="md"
            colorScheme="blue"
            onClick={() => dispatch(addItemCategory(inputValues))}
          >
            {loading ? 'loading...' : 'Save'}
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddItemCategory;
