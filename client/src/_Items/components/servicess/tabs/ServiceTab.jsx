/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  Button,
  Divider,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import CustomInput from '../../../../components/Forms/CustomInput';
import CustomSelect from '../../../../components/Forms/CustomSelect';
// import { useAddVitalSignsMutation } from '../api/vitalSigns.api';

const ServiceTab = () => {
  const [searchParams] = useSearchParams();
  const appointment_id = searchParams.get('appointment_id');

  const { id: patient_id } = useParams();

  const navigate = useNavigate();

  // const [addEligibility, { isLoading, error }] = useAddEligibilityMutation();

  const inputValues = {
    patient_id,
    appointment_id,
  };

  return (

    <VStack
      w="full"
            // boxShadow="lg"
      // p={5}
      spacing="1.3rem"
    >
      {/* sub item */}

      {/*  */}
      <VStack
        w="full"
        spacing="1rem"
        alignItems="flex-start"
      >
        <Text
          fontWeight="bold"
          fontSize="16px"
        >
          Service Details
        </Text>

        <HStack
          w="full"
        >
          <CustomInput
            label="Name"
            color="gray.500"
          />
          <CustomSelect
            label="Type"
            color="gray.500"
          />
        </HStack>
      </VStack>

      <Divider />

      <VStack
        alignItems="flex-start"
      >
        <Text
          fontSize="16px"
          fontWeight="bold"
        >
          Service Cost
        </Text>
        <HStack
          w="full"
        >
          <CustomInput
            label="Cash"
            color="gray.500"
          />
          <CustomInput
            label="Corporate"
            color="gray.500"
          />
          <CustomInput
            label="Non-Corporate"
            color="gray.500"
          />
          <CustomInput
            label="Foreigner"
            color="gray.500"
          />
        </HStack>
      </VStack>

      <Divider />

      <VStack
        alignItems="flex-start"
        w="full"
        spacing="1rem"
      >
        <Text
          fontSize="16px"
          fontWeight="bold"
        >
          Daily Rate
        </Text>
        <HStack
          w="full"
        >
          <CustomInput
            label="Corporate"
            color="gray.500"
          />
          <CustomInput
            label="Non-Corporate"
            color="gray.500"
          />
          <CustomInput
            label="Foreigner"
            color="gray.500"
          />
        </HStack>
      </VStack>

      <Divider />

      {/*  */}
      <VStack
        alignItems="flex-start"
        w="full"
        spacing="1rem"
      >
        <Text
          fontSize="16px"
          fontWeight="bold"
        >
          Nursing Charges per Day
        </Text>
        <HStack
          w="full"
        >
          <CustomInput
            label="Corporate"
            color="gray.500"
          />
          <CustomInput
            label="Non-Corporate"
            color="gray.500"
          />
          <CustomInput
            label="Foreigner"
            color="gray.500"
          />
        </HStack>
      </VStack>

      <Divider />

      <VStack
        alignItems="flex-start"
        w="full"
        spacing="1rem"
      >
        <Text
          fontSize="16px"
          fontWeight="bold"
        >
          Doctor Charges per Day
        </Text>
        <HStack
          w="full"
        >
          <CustomInput
            label="Corporate"
            color="gray.500"
          />
          <CustomInput
            label="Non-Corporate"
            color="gray.500"
          />
          <CustomInput
            label="Foreigner"
            color="gray.500"
          />
        </HStack>
      </VStack>

      {/* save btn */}
      <Button
        size="md"
        width="full"
        colorScheme="blue"
      >
        {/* {isLoading ? 'loading' : 'Save'} */}
        Save
      </Button>
    </VStack>
  );
};

export default ServiceTab;
