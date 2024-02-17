/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

import {
  Avatar,
  Button,
  Divider,
  FormControl, FormLabel, HStack, IconButton, Input, Text, Textarea,
  VStack, useToast,
} from '@chakra-ui/react';
import Select from 'react-select';
import { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import { useParams, useSearchParams } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useGetAllMedicationQuery } from '../../_Medication/api/medication.api';
import { useGetAllMedicationCategoryQuery } from '../../_Medication/api/medicationCategory.api';
import { useAddInternalPharmacyRequestMutation } from '../api/internalPharmacyRequest.api';
import { useAddPersonalAccountChargeMutation } from '../../api/personalAccountCharges.api';
import { useGetPatientQuery } from '../../api/patients.api';

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    // minHeight: '45px',
    height: '2.5rem',
    // backgroundColor: '#F7FAFC',
    border: '1px solid #f0f0f0',
    borderColor: 'gray',
    color: 'gray.200',
    borderRadius: '6px',
  }),
  input: (provided) => ({
    ...provided,
  }),
};

const AddPharmacyRequest = () => {
  const { id } = useParams();
  const { data } = useGetAllMedicationQuery();
  const [medication, setMedication] = useState({
    value: '',
    label: '',
    category: '',
    cost: 0,
  });
  const [category, setCategory] = useState('');
  const [measuringUnit, setMeasuringUnit] = useState('');
  const [cost, setCost] = useState(medication?.cost);
  const [quantity, setQuantity] = useState(0);
  const [prescriptionQuantity, setPrescriptionQuantity] = useState(0);
  const [prescription, setPrescription] = useState(0);
  const [instructions, setInstructions] = useState('');
  const [noOfDays, setNoOfDays] = useState('');

  const { data: medicationCategoryData } = useGetAllMedicationCategoryQuery();
  const [addInternalPharmacyRequest, { isLoading }] = useAddInternalPharmacyRequestMutation();
  const [addPersonalAccountCharge,
    { isLoading: isLoadingCharges }] = useAddPersonalAccountChargeMutation();

  const medicationCategoryCallback = useCallback(() => medicationCategoryData?.map((item) => ({
    value: item.category_id,
    label: item.category_name,
  })), [medicationCategoryData]);

  const medicationCallback = useCallback(() => data?.map((item) => ({
    value: item.medication_id,
    label: item.medication_name,
    category: item.medication_category?.category_name || '',
    cost: item.price,
    medicationPackaging: item?.medication_packaging_type?.package_description,
  })), [data]);

  const prescriptionOptions = [
    { value: 1, label: '(QID) FOUR TIMES A DAY' },
    { value: 2, label: 'BID (TWICE A DAY)' },
    { value: 3, label: 'OD' },
    { value: 4, label: 'PRN' },
    { value: 5, label: 'STAT' },
    { value: 6, label: 'TDS' },
    { value: 7, label: 'TID' },
    { value: 8, label: 'TWO TIMES A DAY' },
  ];

  const toast = useToast();
  const displayToast = useCallback(() => (
    toast({
      title: 'Medicine out of stock.',
      status: 'warning',
      isClosable: 'true',
      position: 'top-right',
      variant: ['subtle', 'left-accent'],
      description: 'Request sent to admin. Kindly request another medicine.',
    })
  ), [toast]);

  let medicationOptions = medicationCallback();
  const filteredMedicationOptions = useCallback(() => medicationOptions?.filter(
    (item) => item.category.toLowerCase()
      .includes(category.label?.toLowerCase()),
  ), [category, medicationOptions]);

  const categoryOptions = medicationCategoryCallback();
  medicationOptions = filteredMedicationOptions();

  const [searchParams] = useSearchParams();
  const patient_id = searchParams.get('patient_id');

  const inputValues = {
    appointment_id: id,
    patient_id,
    doctor_id: 712,
    medication_id: medication?.value,
    delivery_status: 1,
    cost: medication?.cost,
    quantity: prescriptionQuantity,
    hospital_id: 18,
    pay_status: 1,
    prescription_term: prescription?.label,
    user_id: 709,
    batch_no: 1,
    date_of_request: moment(new Date()).format('MM-DD-YYYY'),
    time_of_request: moment(new Date()).format('hh:mm:ss'),
    discharge_drug: 'NO',
    number_of_days: noOfDays,
    hospital_store_id: 1,
    date_dispensed: moment(new Date()).format('MM-DD-YYYY'),
    time_dispensed: moment(new Date()).format('hh:mm:ss'),
    is_exclusion: 'NO',
  };

  const chargesInputValues = {
    amount: cost,
    service_desc: medication?.label,
    // amount: procedure.procedure_cost,
    date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
    time_of_charge: moment(new Date()).format('hh:mm:ss'),
    status: 0,
    patient_id,
    hospital_id: 18,
    quantity: prescriptionQuantity,
    appointment_id: id,
  };

  const { data: patientData } = useGetPatientQuery(id);

  useEffect(() => {
    setCategory(medication?.category);
    setMeasuringUnit(medication?.medicationPackaging);
    setCost(medication?.cost);
    if (!quantity) {
      displayToast();
    }
  }, [displayToast, medication, quantity]);

  const handleSubmit = () => {
    addInternalPharmacyRequest(inputValues);
    addPersonalAccountCharge(chargesInputValues);
  };

  return (
    <VStack
      h="100vh"
      w="full"
      bgColor="gray.50"
      mt="65px"
      p={3}
    >
      <HStack
        w="full"
      >
        <BreadCrumbNav
          addBtn={false}
        />
        <Avatar
          name={`${patientData?.patient?.first_name} ${patientData?.patient?.last_name}`}
          size="sm"
          fontWeight="bold"
        />
      </HStack>

      <VStack
        w="70%"
        bgColor="white"
        // boxShadow="lg"
        rounded="xl"
        border="1px"
        borderColor="gray.200"
        p={3}
      >
        <HStack
          w="full"
          justifyContent="space-between"
          p={1}
          bgColor="gray.50"
          rounded="lg"
          border="1px"
          borderColor="gray.200"
        >
          <IconButton
            size="sm"
          >
            <FaArrowLeft />
          </IconButton>
          <Text
            fontSize="16px"
            fontWeight="bold"
            marginRight=".5rem"
          >
            Pharmacy Request

          </Text>
        </HStack>
        <HStack
          w="full"
          // spacing={2}
          alignItems="flex-start"
          justifyContent="center"

        >

          <VStack
            w="50%"
            // bgColor="red"
            border="1px"
            spacing={6}
            p={2}
            rounded="md"
            borderColor="gray.200"
          >
            <HStack
              w="full"
            >
              <Text
                fontSize="18px"
                color="gray.700"
                // fontWeight="bold"
              >
                Medication Details

              </Text>
            </HStack>
            {/* <Divider /> */}
            {/*  */}
            <FormControl>
              <FormLabel
                color="gray.700"
                fontWeight="bold"
                fontSize="14px"
              >
                Select Medication Category

              </FormLabel>
              <Select
                styles={selectStyles}
                options={categoryOptions}
                onChange={(val) => setCategory(val)}
              />
            </FormControl>

            {/*  */}
            <FormControl>
              <FormLabel
                fontWeight="bold"
                color="gray.700"
                fontSize="14px"
              >
                Select Medication

              </FormLabel>
              <Select
                styles={selectStyles}
                options={medicationOptions}
                onChange={(val) => setMedication(val)}
              />
            </FormControl>

            {/*  */}
            <FormControl>
              <FormLabel
                fontWeight="bold"
                // color="gray.700"
                fontSize="14px"
              >
                Measuring Unit

              </FormLabel>
              <Input
                // size="lg"
                value={measuringUnit}
                onChange={(e) => setMeasuringUnit(e)}
                // bgColor="gray.50"
                // border={0}
                fontSize="14px"
                // fontWeight="bold"
                // color="gray.700"
              />
            </FormControl>

            {/*  */}
            <FormControl>
              <FormLabel
                fontSize="14px"
                fontWeight="bold"
              >
                Price (KSH)
              </FormLabel>
              <Input
                // size="lg"
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                // bgColor="gray.50"
                // border={0}
                fontSize="14px"
                fontWeight="bold"
                // color="gray.700"
              />
            </FormControl>

            {/*  */}
            <FormControl>
              <HStack
                alignContent="center"
                color={quantity ? 'gray.500' : 'red.400'}
                // bgColor="green"
                padding="0"
              >
                {/* <FaExclamationTriangle /> */}
                <FormLabel
                  // mt={2}
                  fontSize="14px"
                  fontWeight="bold"
                >
                  {quantity ? 'Available Quantity' : 'Not In Stock'}
                </FormLabel>

              </HStack>
              {' '}
              <Input
                // size="lg"
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                // bgColor="gray.50"
                // border={0}
                fontSize="md"
                fontWeight="bold"
                color="gray.700"
              />
            </FormControl>

          </VStack>

          {/*  */}
          <VStack
            w="50%"
            bgColor="white"
            spacing={6}
            border="1px"
            borderColor="gray.200"
            p={2}
            rounded="md"
          >
            <HStack
              w="full"
            >
              <Text
                fontSize="18px"
                color="gray.700"
                // fontWeight="bold"
              >
                Prescription Details

              </Text>
            </HStack>

            {/*  */}
            <FormControl>
              <FormLabel
                fontSize="14px"
                fontWeight="bold"
              >
                Select Prescription
              </FormLabel>
              <Select
                styles={selectStyles}
                options={prescriptionOptions}
                onChange={(val) => setPrescription(val)}
              />
            </FormControl>

            {/*  */}
            <FormControl>
              <FormLabel
                fontWeight="bold"
                fontSize="14px"
              >
                Number of Days
              </FormLabel>
              <Input
                // size="lg"
                value={noOfDays}
                onChange={(e) => setNoOfDays(e.target.value)}
              />
            </FormControl>

            {/*  */}
            <FormControl>
              <FormLabel
                fontWeight="bold"
                fontSize="14px"
              >
                Instruction
              </FormLabel>
              <Textarea
                // cols={3}
                rows={5}
              />
            </FormControl>

            {/*  */}
            <FormControl>
              <FormLabel
                fontWeight="bold"
                fontSize="14px"
              >
                Quantity
              </FormLabel>
              <Input
                // size="lg"
                value={prescriptionQuantity}
                onChange={(e) => setPrescriptionQuantity(e.target.value)}
              />
            </FormControl>

          </VStack>
        </HStack>
        <VStack
          // p="10px"
          w="full"
        >
          <Button
            // bgColor="blue.500"
            // color="white"
            colorScheme="blue"
            // border
            w="100%"
            // variant="outline"
            onClick={() => handleSubmit()}
          >
            {isLoading ? 'loading...' : 'Save'}

          </Button>
        </VStack>
      </VStack>

    </VStack>
  );
};

export default AddPharmacyRequest;
