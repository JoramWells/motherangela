/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Select from 'react-select';
import { addItemType } from '../_reducers/itemTypeSlice';

const AddRequisitions = () => {
  const [itemTypeName, setItemType] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.itemType);

  const inputValues = {
    itemTypeName,
  };

  const options = [{ value: '85A', label: '85A' }];

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
        p={3}
        rounded="lg"
      >

        {/* select Department */}
        <FormControl mt={5}>
          <FormLabel fontSize="medium">Select Department</FormLabel>
          <Select options={options} />

        </FormControl>

        {/* select Store */}
        <FormControl mt={5}>
          <FormLabel fontSize="medium">Select Issuing Store</FormLabel>
          <Select options={options} />

        </FormControl>

        <HStack mt={5} w="full" justifyContent="end">
          <Button
            size="lg"
            colorScheme="blue"
            onClick={() => dispatch(addItemType(inputValues))}
          >
            {loading ? 'loading...' : 'Save'}
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddRequisitions;
