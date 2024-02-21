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
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useAddPersonalAccountChargeMutation } from '../../api/personalAccountCharges.api';
import { useAddInternalLabRequestMutation } from '../../api/internalLabRequests.api';
import { useGetProceduresQuery } from '../api/procedureDetails.api';

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '43px',
    height: '43px',
    backgroundColor: '#F7FAFC',
    border: 0,
    fontSize: '14px',
    // fontWeight: 'bold',
  }),
  input: (provided) => ({
    ...provided,
  }),
};

const AddLabRequest = () => {
  const [cost, setCost] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [procedureName, setProcedureName] = useState();
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

  // const { data: procedureData } = useGetProcedureItemQuery();
  const { data: proceduresData } = useGetProceduresQuery();

  const patientID = searchParams.get('patient_id');

  const filteredData = useCallback(() => proceduresData?.filter((item) => item.procedure_category?.category_name.toLowerCase().includes('lab tests' || 'lab procedures')), [proceduresData]);
  console.log(filteredData());

  const procedureCallback = useCallback(() => filteredData()?.map((item) => (
    { value: item.procedure_id, label: item.procedure_name, cost: item.procedure_cost }
  )), [filteredData]);

  const procedureOptions = procedureCallback();

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
    status: 0,
    patient_id: patientID,
    hospital_id: 18,
    quantity,
    results_posting_locked: 'NO',
    notes: '',
    urgent: urgency.label,
  };

  const chargesInputValues = {
    amount: cost,
    service_desc: procedure?.label,
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

  return (
    <VStack
      w="full"
      h="100vh"
      mt="55px"
      p={2}
    >
      <BreadCrumbNav addBtn={false} />

      <VStack
        w="40%"
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
            // color="gray.700"
          >
            New Lab Test

          </Text>
        </HStack>
        <FormControl>
          <FormLabel
            fontSize="14px"
            // fontWeight="bold"
            // color="gray.500"
          >
            Select/Search Lab Test

          </FormLabel>
          <Select
            // styles={selectStyles}
            value={procedure}
            options={procedureOptions}
            onChange={(val) => setProcedure(val)}
          />

        </FormControl>

        {/*  */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            // fontWeight="bold"
            // color="gray.500"
          >
            Select Urgency

          </FormLabel>
          <Select
            // styles={selectStyles}
            value={urgency}
            options={urgencyOptions}
            onChange={(val) => setUrgency(val)}
          />

        </FormControl>

        <FormControl>
          <FormLabel
            fontSize="14px"
            // fontWeight="bold"
            // color="gray.500"
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
            // fontWeight="bold"
            // color="gray.500"
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
          width="full"
          height="40px"
          isLoading={isLoading}
          fontSize="18px"
          fontWeight="normal"
          color="blue.50"
        >
          Request Lab Test

        </Button>

      </VStack>

    </VStack>
  );
};

export default AddLabRequest;
