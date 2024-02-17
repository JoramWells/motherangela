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
import { addPhysioItem } from '../_reducers/physioItemSlice';

const AddPhysiotherapyItems = () => {
  const [itemName, setItemName] = useState('');
  const [unitMeasurement, setUnitMeasurement] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [physicalCount, setPhysicalCount] = useState('');
  const [variance, setVariance] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.physioItem);

  const inputValues = {
    itemName,
    unitMeasurement,
    unitPrice,
    quantity,
    physicalCount,
    variance,
  };

  const handleSubmit = () => {

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
        rounded="md"
        spacing={4}
      >
        <HStack
          w="full"
          justifyContent="space-between"
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
          >
            Add Physio Item
          </Text>
          <CloseButton />
        </HStack>
        {/* sub item */}
        <FormControl>
          <FormLabel fontSize="md">Item Name</FormLabel>
          <Input
            size="md"
            placeholder="Enter Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </FormControl>
        {/*  */}
        <FormControl>
          <FormLabel fontSize="md"> Unit Price</FormLabel>
          <Input
            size="md"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            type="number"
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md">Unit Measurement</FormLabel>
          <Input
            size="md"
            placeholder="Enter Item Name"
            value={unitMeasurement}
            onChange={(e) => setUnitMeasurement(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md">System Quantity</FormLabel>
          <Input
            size="md"
            placeholder="Enter Item Name"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md">Physical Count</FormLabel>
          <Input
            size="md"
            placeholder="Enter Item Name"
            value={physicalCount}
            onChange={(e) => setPhysicalCount(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md">Variance</FormLabel>
          <Input
            size="md"
            placeholder="Enter Variance"
            value={variance}
            onChange={(e) => setVariance(e.target.value)}
          />
        </FormControl>

        <HStack w="full" justifyContent="end">
          <Button
            size="md"
            colorScheme="blue"
            w="full"
            onClick={() => dispatch(addPhysioItem(inputValues))}
          >
            {loading ? 'loading...' : 'Save'}
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AddPhysiotherapyItems;
