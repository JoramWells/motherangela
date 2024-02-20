/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { addInsurance } from '../../_reducers/insuranceSlice';

const AddInsurance = () => {
  const [insuranceName, setInsuranceName] = useState('');
  const [insuranceCategory, setInsuranceCategory] = useState('');
  const [charges, setCharges] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.insurances);

  const inputValues = {
    insuranceName,
    insuranceCategory,
    charges,
  };

  return (
    <VStack
      w="full"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bgColor="gray.50"
      pt="55px"
    >
      <VStack
        w="50%"
        bgColor="white"
        boxShadow="md"
        p={5}
        rounded="lg"
        spacing={5}
      >
        <HStack
          w="full"
          justifyContent="space-between"
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Add Insurance Item
          </Text>
          <CloseButton />
        </HStack>
        {/* sub item */}
        <FormControl>
          <FormLabel fontSize="lg">Insurance Name</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Insurance Name"
            value={insuranceName}
            onChange={(e) => setInsuranceName(e.target.value)}
          />
        </FormControl>
        {/*  */}
        <FormControl>
          <FormLabel fontSize="lg"> Insurance Category</FormLabel>
          <Input
            size="lg"
            value={charges}
            onChange={(e) => setCharges(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Charges</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Item Name"
            value={insuranceCategory}
            onChange={(e) => setInsuranceCategory(e.target.value)}
          />
        </FormControl>

        <HStack w="full" justifyContent="end">
          <Button
            size="lg"
            colorScheme="blue"
            w="full"
            // onClick={() => dispatch(addInsurance(inputValues))}
          >
            {loading ? 'loading...' : 'Save'}
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AddInsurance;
