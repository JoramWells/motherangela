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

const AddPharmaceuticals = () => {
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

        {/* select drug */}
        <FormControl mt={5}>
          <FormLabel fontSize="medium">Select Drug Name</FormLabel>
          <Select options={options} />

        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Enter Buying Price</FormLabel>
          <Input type="number" />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Is Taxed</FormLabel>
          <Stack direction="row" spacing={4}>
            <Checkbox>Yes</Checkbox>
            <Checkbox>No</Checkbox>
          </Stack>
        </FormControl>

        <FormControl mt={5}>
          <FormLabel>Enter Quantity</FormLabel>
          <Input type="number" />
        </FormControl>
        {/* sub item */}
        <FormControl mt={5}>
          <FormLabel fontSize="md">Serial Number</FormLabel>
          <Input
            placeholder="Enter Serial Number"
            value={itemTypeName}
            onChange={(e) => setItemType(e.target.value)}
          />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel fontSize="md">Expiry Date</FormLabel>
          <Input
            type="datetime-local"

          />
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

export default AddPharmaceuticals;
