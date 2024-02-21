/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable camelcase */
import {
  Button,
  VStack,
} from '@chakra-ui/react';
import {  useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CustomInput from '../../../components/Forms/CustomInput';
import { useGetDiseasesDuplicatesQuery, useUpdateDiseasesDuplicatesMutation } from '../../../api/diseasesDuplicates.api';

// import { useAddVitalSignsMutation } from '../api/vitalSigns.api';

const AddDiseases = () => {
  const [diseaseName, setDiseaseName] = useState(null);
  const [searchParams] = useSearchParams();
  const stepSearch = searchParams.get('step');
  const diseaseID = searchParams.get('disease_id');

  const { data: diseaseData } = useGetDiseasesDuplicatesQuery(diseaseID);

  const [updateDiseasesDuplicates] = useUpdateDiseasesDuplicatesMutation();

  useEffect(() => {
    if (diseaseData) {
      setDiseaseName(diseaseData.disease_name);
    }
  }, [diseaseData]);

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

      <CustomInput
        label="Disease Name"
        color="gray.500"
        value={diseaseName}
        onChange={setDiseaseName}
      />

      {/* save btn */}
      <Button
        size="md"
        width="full"
        colorScheme="blue"
      >
        {/* {isLoading ? 'loading' : 'Save'} */}
        {diseaseID ? 'Update Disease Name' : 'Save Disease Name'}
      </Button>
    </VStack>
  );
};

export default AddDiseases;
