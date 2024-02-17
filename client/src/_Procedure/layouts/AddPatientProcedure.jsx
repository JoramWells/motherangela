/* eslint-disable no-unused-vars */

import {
  Button,
  FormControl,
  FormLabel,
  HStack, IconButton, Input, Text, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import { useCallback, useEffect, useState } from 'react';
import moment from 'moment/moment';
import { useParams, useSearchParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useGetProceduresQuery } from '../api/procedureDetails.api';
import { useAddPersonalAccountChargeMutation } from '../../api/personalAccountCharges.api';

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '45px',
    height: '45px',
    backgroundColor: '#F7FAFC',
    border: 0,
  }),
  input: (provided) => ({
    ...provided,
  }),
};

const AddPatientProcedure = () => {
  const [cost, setCost] = useState(0);
  const [procedureName, setProcedureName] = useState(0);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [procedure, setProcedure] = useState({
    cost: 0, value: '1', label: '',
  });
  const [addPersonalAccountCharge,
    { isLoading }] = useAddPersonalAccountChargeMutation();

  const { data: procedureData } = useGetProceduresQuery();

  const patientID = searchParams.get('patient_id');

  const procedureCallback = useCallback(() => procedureData?.map((item) => (
    { value: item.procedure_id, label: item.procedure_name, cost: item.procedure_cost }
  )), [procedureData]);

  const procedureOptions = procedureCallback();

  useEffect(() => {
    setCost(procedure.cost);
    setProcedureName(procedure.label);
  }, [procedure.cost, procedure.label]);

  console.log(cost);

  const inputValues = {
    amount: cost,
    service_desc: procedureName,
    // amount: procedure.procedure_cost,
    date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
    time_of_charge: moment(new Date()).format('hh:mm:ss'),
    status: 1,
    patient_id: patientID,
    hospital_id: 18,
    quantity: 1,
    appointment_id: id,
  };

  return (
    <VStack
      w="full"
      h="100vh"
      mt="65px"
      p={3}
    >
      <BreadCrumbNav addBtn={false} />

      <VStack
        w="2xl"
        rounded="xl"
        p={4}
        alignItems="flex-start"
        bgColor="white"
        spacing={6}
        // boxShadow="lg"
        border="2px"
        // borderStyle="dashed"
        borderColor="gray.200"
      >
        <HStack
          w="full"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton>
            <FaArrowLeft />
          </IconButton>
          <Text
            fontSize="16px"
            fontWeight="bold"
            color="gray.700"
          >
            New Procedure

          </Text>
        </HStack>
        <FormControl>
          <FormLabel
            fontWeight="bold"
            color="gray.500"
          >
            Select Procedure

          </FormLabel>
          <Select
            // styles={selectStyles}
            value={procedure}
            options={procedureOptions}
            onChange={(val) => setProcedure(val)}
          />

        </FormControl>
        <FormControl>
          <FormLabel
            fontWeight="bold"
            color="gray.500"
            fontSize="14px"
          >
            Cost

          </FormLabel>
          <Input
            // size="lg"
            bgColor="gray.50"
            border={0}
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </FormControl>
        <HStack
          w="full"
          justifyContent="flex-end"
        >
          <Button
            colorScheme="blue"
            size="sm"
            onClick={() => addPersonalAccountCharge(inputValues)}
          >
            {isLoading ? 'loading...' : 'Save'}

          </Button>

        </HStack>
      </VStack>

    </VStack>
  );
};

export default AddPatientProcedure;
