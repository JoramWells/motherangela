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
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import Select from 'react-select';
// import { addWard } from '../_reducers/wardSlice';
import { useAddWardMutation } from '../api/ward.api';

const AddWard = () => {
  const [branchName, setBranchName] = useState();
  const [wardType, setWardType] = useState();
  const [wardDescription, setWardDescription] = useState();
  const [admissionChargeNonCorporate, setAdmissionChargeNonCorporate] = useState();
  const [admissionChargeCorporate, setAdmissionChargeCorporate] = useState();
  const [dailyRateNonCorporate, setDailyRateNonCorporate] = useState();
  const [dailyRateCorporate, setDailyRateCorporate] = useState();
  const [nursingDailyChargeNonCorporate, setNursingDailyChargeNonCorporate] = useState();
  const [nursingDailyChargeCorporate, setNursingDailyChargeCorporate] = useState();

  const toast = useToast();
  const errorToastId = 'error-toast';

  const [addWard, {
    isLoading, isError, isSuccess, error,
  }] = useAddWardMutation();

  const inputValues = {
    branchName: branchName?.value,
    wardType: wardType?.value,
    wardDescription,
    admissionChargeCorporate,
    admissionChargeNonCorporate,
    dailyRateNonCorporate,
    dailyRateCorporate,
    nursingDailyChargeCorporate,
    nursingDailyChargeNonCorporate,

  };

  const options = [{ value: '85A', label: '85A' }];
  console.log(isSuccess, 'yht');

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
          <Text fontSize="2xl" fontWeight="semibold">New Ward</Text>
          <CloseButton />
        </HStack>

        {/* select drug */}
        <FormControl>
          <FormLabel fontSize="medium" color="gray.500">Select Branch Name</FormLabel>
          <Select options={options} value={branchName} onChange={(value) => setBranchName(value)} />

        </FormControl>

        <FormControl>
          <FormLabel fontSize="medium" color="gray.500">Select Ward Type</FormLabel>
          <Select options={options} value={wardType} onChange={(value) => setWardType(value)} />

        </FormControl>

        <FormControl>
          <FormLabel color="gray.500">Enter Ward Description</FormLabel>
          <Input type="text" value={wardDescription} onChange={(e) => setWardDescription(e.target.value)} />
        </FormControl>

        <HStack w="full">
          <FormControl>
            <FormLabel color="gray.500">Admission Charge (Non Corporate)</FormLabel>
            <Input
              type="number"
              value={admissionChargeNonCorporate}
              onChange={(e) => setAdmissionChargeNonCorporate(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel color="gray.500">Admission Charge (Corporate)</FormLabel>
            <Input
              type="number"
              value={admissionChargeCorporate}
              onChange={(e) => setAdmissionChargeCorporate(e.target.value)}
            />
          </FormControl>
        </HStack>

        <HStack w="full">
          <FormControl>
            <FormLabel color="gray.500">Daily Rate (Non Corporate)</FormLabel>
            <Input type="number" value={dailyRateNonCorporate} onChange={(e) => setDailyRateNonCorporate(e.target.value)} />
          </FormControl>

          <FormControl>
            <FormLabel color="gray.500">Daily Rate (Corporate)</FormLabel>
            <Input type="number" value={dailyRateCorporate} onChange={(e) => setDailyRateCorporate(e.target.value)} />
          </FormControl>
        </HStack>

        <HStack w="full">
          <FormControl>
            <FormLabel color="gray.500">Nursing Daily Charge (Non Corporate)</FormLabel>
            <Input
              type="number"
              value={nursingDailyChargeNonCorporate}
              onChange={(e) => setNursingDailyChargeNonCorporate(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel color="gray.500">Nursing Daily Charge (Corporate)</FormLabel>
            <Input
              type="number"
              value={nursingDailyChargeCorporate}
              onChange={(e) => setNursingDailyChargeCorporate(e.target.value)}
            />
          </FormControl>
        </HStack>

        <Button
          size="lg"
          colorScheme="blue"
          onClick={() => addWard(inputValues)}
          w="full"
        >
          {isLoading ? 'loading...' : 'Save'}
        </Button>
        {/* <Text>
          {isSuccess === '1' ? 'success' : 'waiting..'}
        </Text> */}
        {/* {isError && (
          toast.isActive(errorToastId) && toast({
            title: 'The following error occurred.',
            description: error.status,
            status: 'error',
            isClosable: true,
            position: 'top-right',
          })
        )} */}
      </VStack>
    </VStack>
  );
};

export default AddWard;
