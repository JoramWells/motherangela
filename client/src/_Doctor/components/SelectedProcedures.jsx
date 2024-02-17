/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box, Button, CloseButton, HStack, IconButton, Spinner, Tag, Text, VStack,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import { useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAddPersonalAccountChargeMutation, useDeletePersonalAccountChargeMutation } from '../api/personalAccountCharges.api';
import { useGetUserPersonalAccountDetailQuery } from '../../api/personalAccountCharges.api';

const SelectedProcedures = ({ tableInstance }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { data: personalData } = useGetUserPersonalAccountDetailQuery(id);
  const patientID = searchParams.get('patient_id');
  const [addPersonalAccountCharge,
    { isLoading, data: personalAccountSaveData }] = useAddPersonalAccountChargeMutation();

  const [deletePersonalAccountCharge,
    { isLoading: deleteLoading }] = useDeletePersonalAccountChargeMutation();

  const inputValues = {
    services: JSON.stringify(data),

  };

  const handleData = useCallback(() => {
    tableInstance.getSelectedRowModel()
      .flatRows.forEach((el) => setData((prev) => [
        ...prev,
        {
          service_desc: el.original.procedure_name,
          amount: el.original.procedure_cost,
          date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
          time_of_charge: moment(new Date()).format('hh:mm:ss'),
          status: 1,
          patient_id: patientID,
          hospital_id: 18,
          quantity: 1,
          appointment_id: id,
        }]));

    // send to backend
  }, [tableInstance]);

  console.log(tableInstance.getSelectedRowModel()
    .flatRows.length);

  useEffect(() => {
    if (data.length !== 0) {
      addPersonalAccountCharge(inputValues);
      setData([]);
    }
  }, [addPersonalAccountCharge, inputValues]);

  console.log(personalData);

  return (
    <VStack
      w="1/2"
      flex={1}
      alignItems="flex-start"
      // bgColor="gray.50"
      rounded="xl"
      position="relative"
    >

      <VStack
        h="500px"
        overflowY="auto"
        w="lg"
        // flex={1}
        spacing={4}
        alignItems="flex-start"
        pr={2}

      >
        {personalData?.map((el) => (
          <Box
            border="1px"
            p={5}
            borderColor="gray.200"
            rounded="xl"
            h="160px"
            w="100%"
            bgColor="white"
            boxShadow="lg"
            position="relative"
          >
            <HStack
              w="full"
              justifyContent="space-between"
            >
              <Text
                color="gray.600"
                fontWeight="bold"
              >
                {(el.service_desc)}

              </Text>
              {!deleteLoading
                ? (
                  <CloseButton
                    color="gray"
                    onClick={() => deletePersonalAccountCharge(el.personal_account_charge_id)}
                  />
                )
                : <Spinner />}
            </HStack>
            <VStack
              alignItems="flex-start"
              w="full"
              mt={2}
            >

              <HStack>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                >
                  KSH
                  {' '}
                  {(parseInt(el.amount, 10).toLocaleString())}
                </Text>
                <Tag
                  colorScheme="blue"
                  rounded="full"
                  fontWeight="bold"
                >
                  CASH

                </Tag>
              </HStack>
              <Text color="gray.500" fontSize="md">Qty: 1</Text>
            </VStack>
          </Box>
        ))}
      </VStack>

      <Button
        onClick={() => handleData()}
        w="lg"
        size="lg"
        mt={4}
        bgColor="blue.600"
        color="white"
        isDisabled={tableInstance
          .getSelectedRowModel().flatRows.length === 0}
        _hover={{
          bgColor: 'blue.600',
        }}
      >
        {isLoading ? 'Loading...'
          : 'Save'}
      </Button>
    </VStack>
  );
};

export default SelectedProcedures;
