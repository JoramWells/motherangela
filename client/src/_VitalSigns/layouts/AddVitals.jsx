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
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useAddVitalSignsMutation } from '../api/vitalSigns.api';

const AddVitals = () => {
  const [searchParams] = useSearchParams();
  const appointment_id = searchParams.get('appointment_id');

  const { id: patient_id } = useParams();
  const [vitalValues, setVitalValues] = useState({
    temperature: '',
    pulseRate: '',
    respiratoryRate: '',
    systolic: '',
    diastolic: '',
    weight: '',
    height: '',
    bmi: '',
    sp02: '',
  });

  const navigate = useNavigate();

  const [addVitalSigns, { isLoading, error }] = useAddVitalSignsMutation();

  const inputValues = {
    patient_id,
    appointment_id,
    ...vitalValues,
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
      title: 'Add Vitals',
      link: '/',
      isCurrentPage: true,
    },
  ];

  return (
    <VStack
      w="full"
      h="100vh"
      // alignItems="center"
      // justifyContent="center"
      bgColor="gray.50"
      mt="60px"
      p={3}
    >
      <HStack
        w="full"
        bgColor="white"
      >
        <BreadCrumbNav
          addBtn={false}
          breadCrumbData={breadCrumbData}
        />
        <Avatar
          // name={`${data?.patient?.first_name} ${data?.patient?.last_name}`}
          name="jay"
          size="sm"
          fontWeight="bold"
        />
      </HStack>
      <VStack
        w="45%"
        bgColor="white"
        // boxShadow="lg"
        p={5}
        rounded="lg"
        border="1px"
        borderColor="gray.200"
        spacing="1.3rem"
      >
        <HStack w="full" justifyContent="space-between">
          <IconButton
            size="sm"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </IconButton>
          <Text
            fontSize="16px"
            fontWeight="semibold"
            // color="gray.500"
          >
            Add Vital Signs
          </Text>
        </HStack>
        {/* sub item */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Temperature (°C)
          </FormLabel>
          <Input
            // size="lg"
            placeholder="Enter Temperature"
            // value={temperature}
            onChange={(e) => setVitalValues({ ...vitalValues, temperature: e.target.value })}
          />
        </FormControl>

        {/* item code prefix */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Pulse Rate (BPMs)
          </FormLabel>
          <Input
            // size="14px"
            placeholder="Enter Pulse Rate"
            // value={pulseRate}
            onChange={(e) => setVitalValues({ ...vitalValues, pulseRate: e.target.value })}
          />
        </FormControl>

        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Respiratory Rate
          </FormLabel>
          <Input
            // size="lg"
            placeholder="Enter Respiratory Rate"
            // value={respiratory_rate}
            onChange={(e) => setVitalValues({ ...vitalValues, respiratoryRate: e.target.value })}
          />
        </FormControl>

        <HStack w="full">
          <FormControl>
            <FormLabel
              fontSize="14px"
              fontWeight="bold"
            >
              Systolic Rate (mmHg)
            </FormLabel>
            <Input
              // size="lg"
              placeholder="Enter Systolic Rate"
              // value={systolic}
              onChange={(e) => setVitalValues({ ...vitalValues, systolic: e.target.value })}
            />
          </FormControl>
          <FormControl>

            <FormLabel
              fontSize="14px"
              fontWeight="bold"
            >
              Diastolic value (mmHg)
            </FormLabel>
            <Input
              placeholder="Enter Diastolic value"
              // value={diastolic}
              onChange={(e) => setVitalValues({ ...vitalValues, diastolic: e.target.value })}
            />
          </FormControl>

        </HStack>
        <HStack w="full">
          <FormControl>

            <FormLabel
              fontSize="14px"
              fontWeight="bold"
            >
              Weight (Kg)
            </FormLabel>
            <Input
              placeholder="Enter Weight"
              // value={weight}
              onChange={(e) => setVitalValues({ ...vitalValues, weight: e.target.value })}
            />
          </FormControl>
          <FormControl>

            <FormLabel
              fontSize="14px"
              fontWeight="bold"
            >
              Height (m)
            </FormLabel>
            <Input
              // size="lg"
              placeholder="Enter Height"
              // value={height}
              onChange={(e) => setVitalValues({ ...vitalValues, height: e.target.value })}
            />
          </FormControl>
        </HStack>

        <FormControl>

          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            BMI (Kg/m²)
          </FormLabel>
          <Input
            // size="lg"
            placeholder="Enter BMI"
            // value={bmi}
            onChange={(e) => setVitalValues({ ...vitalValues, bmi: e.target.value })}
          />
        </FormControl>
        <FormControl>

          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            SP02 (%)
          </FormLabel>
          <Input
            placeholder="Enter SP02"
            // value={sp02}
            onChange={(e) => setVitalValues({ ...vitalValues, sp02: e.target.value })}
          />
        </FormControl>

        {/* save btn */}
        <Button
          size="md"
          width="full"
          colorScheme="blue"
          onClick={() => addVitalSigns(inputValues)}
        >
          {isLoading ? 'loading' : 'Save'}
        </Button>
      </VStack>
    </VStack>
  );
};

export default AddVitals;
