/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Select from 'react-select';
import moment from 'moment';
import PropTypes from 'prop-types';
import CustomInput from '../../../../components/Forms/CustomInput';
// import { useAddVitalSignsMutation } from '../api/vitalSigns.api';

const testedOptions = [
  { value: 0, label: 'NO' },
  { value: 1, label: 'YES' },
];

const keyPopulationOptions = [
  { value: 1, label: 'MSM' },
  { value: 2, label: 'IDU' },
  { value: 3, label: 'Sex Worker' },
  { value: 4, label: 'Others' },
];

const tbOptions = [
  { value: 1, label: 'Presumed TB-Pr TB' },
  { value: 2, label: 'On TB Treatment-TB Tx' },
  { value: 3, label: 'No Signs-NS' },
];

const gbvOptions = [
  { value: 1, label: 'Sexual' },
  { value: 2, label: 'Physical' },
  { value: 3, label: 'Emotional' },
  { value: 4, label: 'NA' },
  { value: 5, label: 'Not Done' },
];

const TestedForm = ({
  date, onDateChange, results, onResultsChange,
}) => (
  <>
    <FormControl>
      <FormLabel
        fontWeight="bold"
        fontSize="14px"
      >
        Date
      </FormLabel>
      <Input
        type="date"
        value={date}
        onChange={onDateChange}
      />
    </FormControl>

    {/*  */}
    <FormControl>
      <FormLabel
        fontWeight="bold"
        fontSize="14px"
      >
        Test Results
      </FormLabel>
      <Input
        value={results}
        onChange={onResultsChange}
      />
    </FormControl>
  </>
);

TestedForm.propTypes = {
  results: PropTypes.string,
  date: PropTypes.string,
  onDateChange: PropTypes.func,
  onResultsChange: PropTypes.func,
};

TestedForm.defaultProps = {
  results: '',
  date: '',
  onDateChange: () => { },
  onResultsChange: () => { },
};

const MedicationTab = () => {
  const [searchParams] = useSearchParams();
  const appointment_id = searchParams.get('appointment_id');
  const [isTested, setIsTested] = useState('');

  const { id: patient_id } = useParams();

  const [eligible, setEligible] = useState('');
  const [date, setDate] = useState(null);
  const [result, setResult] = useState('');
  const [keyPopulation, setKeyPopulation] = useState('');
  const [tbScreening, setTBScreening] = useState('');
  const [gbvScreening, setGBVScreening] = useState('');
  const [reason, setReason] = useState('');
  const [tested, setTested] = useState('');

  const navigate = useNavigate();

  // const [addEligibility, { isLoading, error }] = useAddEligibilityMutation();

  const inputValues = {
    patient_id,
    appointment_id,
    isTested: isTested.label,
    eligible: eligible.label,
    date,
    result,
    keyPopulation: keyPopulation.label,
    tbScreening: tbScreening.label,
    gbvScreening: gbvScreening.label,
    reason,
    tested,
  };

  const breadCrumbData = [
    {
      id: nanoid(),
      title: 'Patients',
      link: '/patients',
    },
    {
      id: nanoid(),
      // title: `${data?.patient.first_name} ${data?.patient.middle_name}`,
      title: 'Nursing Station',
      link: '/nursing-station',
    },
    {
      id: nanoid(),
      // title: `${data?.patient.first_name} ${data?.patient.middle_name}`,
      title: 'Eligibility',
      link: '/',
      isCurrentPage: true,
    },
  ];

  return (

    <VStack
      w="full"
            // boxShadow="lg"
      p={5}
      spacing="1.3rem"
    >
      {/* sub item */}

      <FormControl>
        <FormLabel
        //   fontWeight="bold"
          fontSize="14px"
          color="gray.500"
        >
          Medication Category
        </FormLabel>
        <Select
          options={testedOptions}
          value={isTested}
          onChange={(val) => setIsTested(val)}
        />
      </FormControl>

      {/* item code prefix */}
      <FormControl>
        <FormLabel
          fontSize="14px"
        //   fontWeight="bold"
          color="gray.500"

        >
          Package Type
        </FormLabel>
        <Select
          options={keyPopulationOptions}
          value={keyPopulation}
          onChange={(val) => setKeyPopulation(val)}
        />
      </FormControl>

      {/*  */}
      <CustomInput
        label="Medication Name"
        color="gray.500"
      />

      <HStack
        w="full"
      >
        <CustomInput
          label=""
          color="gray.500"
        />
        <CustomInput
          label=""
          color="gray.500"
        />
        <CustomInput
          label=""
          color="gray.500"
        />
      </HStack>

      <FormControl>
        <FormLabel
          fontSize="14px"
          fontWeight="bold"
        >
          TB Screening
        </FormLabel>
        <Select
          options={tbOptions}
          value={tbScreening}
          onChange={(val) => setTBScreening(val)}
        />
      </FormControl>

      <FormControl>
        <FormLabel
          fontSize="14px"
          fontWeight="bold"
        >
          GBV
        </FormLabel>
        <Select
          options={gbvOptions}
          value={gbvScreening}
          onChange={(val) => setGBVScreening(val)}
        />
      </FormControl>
      <FormControl>

        <FormLabel
          fontSize="14px"
          fontWeight="bold"
        >
          Eligible for Testing
        </FormLabel>
        <Select
          options={testedOptions}
          value={eligible}
          onChange={setEligible}
        />
      </FormControl>

      <FormControl>

        <FormLabel
          fontSize="14px"
          fontWeight="bold"
        >
          Reason for Testing
        </FormLabel>
        <Input
          value={reason}
                    // value={bmi}
          onChange={(e) => setReason(e.target.value)}
        />
      </FormControl>

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

export default MedicationTab;
