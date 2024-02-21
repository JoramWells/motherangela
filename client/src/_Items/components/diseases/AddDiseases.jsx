/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable camelcase */
import {
  Button,
  HStack,
  VStack,
} from '@chakra-ui/react';
import {  useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CustomInput from '../../../components/Forms/CustomInput';
import {
  useAddDiseasesDuplicatesMutation, useDeleteDiseasesDuplicatesMutation,
  useGetDiseasesDuplicatesQuery, useUpdateDiseasesDuplicatesMutation,
} from '../../../api/diseasesDuplicates.api';

// import { useAddVitalSignsMutation } from '../api/vitalSigns.api';

const AddDiseases = () => {
  const [diseaseName, setDiseaseName] = useState(null);
  const [searchParams] = useSearchParams();
  const stepSearch = searchParams.get('step');
  const diseaseID = searchParams.get('disease_id');

  const { data: diseaseData } = useGetDiseasesDuplicatesQuery(diseaseID);

  const [updateDiseasesDuplicates, { isLoading }] = useUpdateDiseasesDuplicatesMutation();
  const [addDiseasesDuplicates,
    { isLoading: isSavingDuplicates }] = useAddDiseasesDuplicatesMutation();

  const [deleteDiseasesDuplicates,
    { isLoading: isDeleting, data: deletingData }] = useDeleteDiseasesDuplicatesMutation();

  console.log(deletingData);

  const updateValues = {
    id: diseaseID,
    disease_name: diseaseName,
  };

  const inputValues = {
    disease_name: diseaseName,
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      navigate('/diseases-duplicates');
    }
  }, [isLoading, navigate]);

  useEffect(() => {
    if (deletingData) {
      return navigate('/diseases-duplicates');
    }
  }, [deletingData, navigate]);

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
      spacing="1.5rem"
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

      {diseaseID

        ? (
          <HStack
            width="full"
            justifyContent="flex-end"
          >
            <Button
              size="sm"
              variant="outline"
              colorScheme="red"
              isLoading={isDeleting}
              onClick={() => deleteDiseasesDuplicates(diseaseID)}
            >
              Delete
            </Button>
            <Button
              size="sm"
              colorScheme="blue"
              onClick={() => updateDiseasesDuplicates(updateValues)}
              isLoading={isLoading}
            >
              Update
            </Button>
          </HStack>
        )
        : (
          <Button
            size="sm"
            width="full"
            colorScheme="blue"
            onClick={diseaseID
              ? () => updateDiseasesDuplicates(updateValues)
              : () => addDiseasesDuplicates(inputValues)}
            isLoading={isLoading || isSavingDuplicates}
          >
            {/* {isLoading ? 'loading' : 'Save'} */}
            {diseaseID ? 'Update Disease Name' : 'Save Disease Name'}
          </Button>
        )}
    </VStack>
  );
};

export default AddDiseases;
