/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable camelcase */
import {
  Button,
  VStack,
} from '@chakra-ui/react';
import {  useParams, useSearchParams } from 'react-router-dom';
import CustomInput from '../../../components/Forms/CustomInput';

// import { useAddVitalSignsMutation } from '../api/vitalSigns.api';

const AddDiseases = () => {
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
      w="50%"
            // boxShadow="lg"
      p={5}
      spacing="1.3rem"
      bgColor="white"
      rounded="lg"
      border="1px"
      borderColor="gray.200"
    >

      <CustomInput
        label="Disease Name"
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

export default AddDiseases;
