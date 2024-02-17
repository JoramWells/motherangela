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
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { addPhysioItem } from '../_reducers/physioItemSlice';

const AddDispensePhysioItem = () => {
  const [itemName, setItemName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [outPatientNo, setOutPatientNo] = useState('');
  const [patientCategory, setPatientCategory] = useState('');
  const [variance, setVariance] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.physioItem);

  const inputValues = {
    itemName,
    startDate,
    endDate,
    outPatientNo,
    patientCategory,
    variance,
  };

  const handleSubmit = () => {

  };

  const options = [{ value: 'Arm', name: 'Arm' }];

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
            Dispense Physio Item
          </Text>
          <CloseButton />
        </HStack>
        {/* sub item */}
        {/* select physio item */}
        <FormControl>
          <FormLabel fontSize="md">Select Physio Item</FormLabel>
          <Select options={options} />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md">Start Date</FormLabel>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </FormControl>
        {/*  */}
        <FormControl>
          <FormLabel fontSize="md"> End Start</FormLabel>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md">Select Patient Name</FormLabel>
          <Input
            size="md"
            placeholder="Enter Item Name"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md">Outpatient No</FormLabel>
          <Input
            size="md"
            value={outPatientNo}
            onChange={(e) => setOutPatientNo(e.target.value)}
            type="number"
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="md">Select Patient Category</FormLabel>
          <Select options={options} />
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

export default AddDispensePhysioItem;
