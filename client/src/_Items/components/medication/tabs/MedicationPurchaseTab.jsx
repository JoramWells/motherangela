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

const MedicationPurchaseTab = () => {
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
      spacing="1.3rem"
      // p={5}
    >
      {/* sub item */}

      <HStack
        w="full"
      >
        <CustomSelect
          label="Medicine Name"
          color="gray.500"
        />
        <CustomSelect
          label="Supplier"
          color="gray.500"
        />
      </HStack>

      <HStack
        w="full"
      >
        <CustomInput
          label="Receipt Invoice No."
          color="gray.500"
        />
        <CustomInput
          label="Batch No."
          color="gray.500"
        />
      </HStack>
      {/*  */}
      <HStack
        w="full"
      >
        <CustomInput
          label="Purchase Date"
          color="gray.500"
          type="date"
        />
        <CustomInput
          label="Expiry Date"
          color="gray.500"
          type="date"
        />
      </HStack>

      <HStack>
        <CustomInput
          label="Unit Buying Price"
          color="gray.500"
        />

        <CustomInput
          label="Quantity"
          color="gray.500"
        />
        <CustomInput
          label="Sub Total"
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

export default MedicationPurchaseTab;
