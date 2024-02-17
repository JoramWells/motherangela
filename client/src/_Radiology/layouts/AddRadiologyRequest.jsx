/* eslint-disable no-unused-vars */

import {
  Avatar,
  Button,
  FormControl,
  FormLabel,
  HStack, IconButton, Input, Text, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import { useCallback, useEffect, useState } from 'react';
import moment from 'moment/moment';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { nanoid } from '@reduxjs/toolkit';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useGetProceduresQuery } from '../../_Procedure/api/procedureDetails.api';
import { useAddPersonalAccountChargeMutation } from '../../api/personalAccountCharges.api';
import { useAddInternalLabRequestMutation } from '../../api/internalLabRequests.api';
import { useGetAppointmentQuery } from '../../api/appointments.api';

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '43px',
    height: '43px',
    // backgroundColor: '#F7FAFC',
    borderColor: 'gray.200',
    fontSize: '14px',
    // fontWeight: 'bold',
  }),
  input: (provided) => ({
    ...provided,
  }),
};

const AddRadiologyRequest = () => {
  const [cost, setCost] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [procedureName, setProcedureName] = useState(0);
  const [urgency, setUrgency] = useState('');
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [procedure, setProcedure] = useState({
    cost: 0, value: '1', label: '',
  });
  const [addInternalLabRequest,
    { isLoading }] = useAddInternalLabRequestMutation();

  const [addPersonalAccountCharge,
    { isLoading: isLoadingCharges }] = useAddPersonalAccountChargeMutation();

  const { data: procedureData } = useGetProceduresQuery();
  const { data: appointmentData } = useGetAppointmentQuery(id);

  const patientID = searchParams.get('patient_id');

  const procedureCallback = useCallback(() => procedureData?.map((item) => (
    { value: item.procedure_id, label: item.procedure_name, cost: item.procedure_cost }
  )), [procedureData]);

  const procedureOptions = procedureCallback();

  const breadCrumbData = [
    {
      id: nanoid(),
      title: 'Patients',
      link: '/patients',
    },
    {
      id: nanoid(),
      title: `${appointmentData?.patient.first_name} ${appointmentData?.patient.middle_name}`,
      link: '/',
      // isCurrentPage: true,
    },
    {
      id: nanoid(),
      title: 'Radiology Rq.',
      link: '/',
      isCurrentPage: true,
    },
  ];

  useEffect(() => {
    setCost(procedure.cost);
    setProcedureName(procedure.value);
  }, [procedure.cost, procedure.value]);

  const inputValues = {
    appointment_id: id,
    cost,
    doctor: 683,
    procedure_id: procedureName,
    user_id: 671,
    date_of_request: moment(new Date()).format('MM-DD-YYYY'),
    time_of_request: moment(new Date()).format('hh:mm:ss'),
    status: 1,
    patient_id: patientID,
    hospital_id: 18,
    quantity,
    results_posting_locked: 'NO',
    notes: '',
    urgent: urgency === 'URGENT' ? 'YES' : 'NO',
  };

  const chargesInputValues = {
    amount: cost,
    service_desc: procedureName,
    // amount: procedure.procedure_cost,
    date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
    time_of_charge: moment(new Date()).format('hh:mm:ss'),
    status: 1,
    patient_id: patientID,
    hospital_id: 18,
    quantity,
    appointment_id: id,
  };

  const urgencyOptions = [
    { value: 1, label: 'ROUTINE' },
    { value: 2, label: 'URGENT' },
  ];

  const handleSubmit = () => {
    addInternalLabRequest(inputValues);
    addPersonalAccountCharge(chargesInputValues);
  };

  const navigate = useNavigate();

  // hello
  return (
    <VStack
      w="full"
      h="100vh"
      mt="65px"
      p={3}
    >
      <HStack
        w="full"
        bgColor="white"
        rounded="lg"
      >
        <BreadCrumbNav
          addBtn={false}
          breadCrumbData={breadCrumbData}
        />
        <Avatar
          size="sm"
          color="white"
          fontWeight="bold"
          marginLeft="1rem"
          name={`${appointmentData?.patient?.first_name} ${appointmentData?.patient?.last_name}`}
        />

      </HStack>
      <VStack
        w="xl"
        rounded="xl"
        p={4}
        alignItems="flex-start"
        bgColor="white"
        spacing={6}
                // boxShadow="lg"
        border="1px"
        // borderStyle="dashed"
        borderColor="gray.200"
      >
        <HStack
          w="full"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton
            size="sm"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </IconButton>
          <Text
            fontSize="16px"
            fontWeight="bold"
            color="gray.700"
          >
            Radiology REQ.

          </Text>
        </HStack>
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
            color="gray.700"
          >
            Search Lab Test

          </FormLabel>
          <Select
            styles={selectStyles}
            value={procedure}
            options={procedureOptions}
            onChange={(val) => setProcedure(val)}
          />

        </FormControl>

        {/*  */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
            color="gray.700"
          >
            Select Urgency

          </FormLabel>
          <Select
            styles={selectStyles}
            value={urgency}
            options={urgencyOptions}
            onChange={(val) => setUrgency(val)}
          />

        </FormControl>

        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
            color="gray.700"
          >
            Cost

          </FormLabel>
          <Input
                        // size="lg"
            // bgColor="gray.50"
            // border={0}
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </FormControl>

        {/*  */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
            color="gray.700"
          >
            Quantity

          </FormLabel>
          <Input
                        // size="lg"
            // bgColor="gray.50"
            // border={0}
            value={quantity}
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </FormControl>

        <Button
          colorScheme="blue"
          size="sm"
          onClick={() => handleSubmit(inputValues)}
          w="full"
          h="40px"
        >
          {isLoading ? 'loading...' : 'Save'}

        </Button>

      </VStack>

    </VStack>
  );
};

export default AddRadiologyRequest;
