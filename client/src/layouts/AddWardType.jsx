/* eslint-disable no-unused-vars */
import {
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Select from 'react-select';
import { addWard } from '../_reducers/wardSlice';
import { addWardType } from '../_reducers/wardTypeSlice';

const AddWardType = () => {
  const [hospital, setHospital] = useState();
  const [wardDescription, setWardDescription] = useState();

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.wardType);

  const inputValues = {
    hospital_id: '18',
    wardDescription,

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
      <VStack
        w="50%"
        mt={5}
        bgColor="white"
        // boxShadow="lg"
        border="1px"
        borderColor="gray.200"
        p={5}
        rounded="lg"
        spacing={8}
      >

        <HStack w="full" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="semibold">New Ward Type</Text>
          <CloseButton />
        </HStack>

        <FormControl>
          <FormLabel fontSize="medium" color="gray.500">Select Hospital</FormLabel>
          <Select options={options} value={hospital} onChange={(value) => setHospital(value)} />

        </FormControl>

        <FormControl>
          <FormLabel color="gray.500">Enter Ward Type Description</FormLabel>
          <Input type="text" value={wardDescription} onChange={(e) => setWardDescription(e.target.value)} />
        </FormControl>

        <Button
          size="lg"
          colorScheme="blue"
          onClick={() => dispatch(addWardType(inputValues))}
          w="full"
        >
          {loading ? 'loading...' : 'Save'}
        </Button>
      </VStack>
    </VStack>
  );
};

export default AddWardType;
