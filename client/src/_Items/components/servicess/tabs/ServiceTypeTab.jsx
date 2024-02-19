/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable camelcase */
import {
  Button,
  VStack,
} from '@chakra-ui/react';
import {  useParams, useSearchParams } from 'react-router-dom';

import CustomInput from '../../../../components/Forms/CustomInput';
import CustomSelect from '../../../../components/Forms/CustomSelect';
// import { useAddVitalSignsMutation } from '../api/vitalSigns.api';

const ServiceTypeTab = () => {
  const [searchParams] = useSearchParams();
  const appointment_id = searchParams.get('appointment_id');

  const { id: patient_id } = useParams();

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

      <CustomInput
        label="Bed Number"
        color="gray.500"
      />
      <CustomSelect
        label="Select Ward"
        color="gray.500"
      />

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

export default ServiceTypeTab;
