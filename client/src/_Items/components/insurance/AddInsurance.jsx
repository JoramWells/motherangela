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
import CustomSelect from '../../../components/Forms/CustomSelect';
import CustomInput from '../../../components/Forms/CustomInput';
// import { useAddVitalSignsMutation } from '../api/vitalSigns.api';

const AddInsurance = () => {
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
      w="45%"
            // boxShadow="lg"
      p={5}
      spacing="1.3rem"
      bgColor="white"
      rounded="lg"
      border="1px"
      borderColor="gray.200"
    >
      {/* sub item */}

      <HStack
        w="full"
      >
        <CustomInput
          label="Insurance Name"
          color="gray.500"
        />
        <CustomSelect
          label="Insurance Type"
          color="gray.500"
        />
      </HStack>

      <CustomInput
        label="Box Address"
        color="gray.500"
      />
      <CustomInput
        label="Phone No."
        color="gray.500"
      />

      <CustomInput
        label="Email Address"
        color="gray.500"
      />
      <HStack
        w="full"
      >

        <CustomInput
          label="Payment Percentage(Out-Patient)"
          color="gray.500"
        />
        <CustomInput
          label="Payment Percentage(In-Patient)"
          color="gray.500"
        />
      </HStack>

      <HStack
        w="full"
      >
        <CustomInput
          label="NHIF Rebate"
          color="gray.500"
        />
        <CustomInput
          label="Withholding Tax"
          color="gray.500"
        />
      </HStack>

      <Divider />

      <HStack
        alignItems="flex-start"
        w="full"
      >

        <CustomInput
          label="Discount Percentage"
          color="gray.500"
        />
        <CustomSelect
          label="Full Discount on All Services"
          color="gray.500"
        />

      </HStack>

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

export default AddInsurance;
