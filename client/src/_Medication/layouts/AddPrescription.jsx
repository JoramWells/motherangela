/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Checkbox,
  CloseButton,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import moment from 'moment/moment';
import { addSuppliers } from '../../_reducers/supplierSlice';
import { getAllSupplierClassification } from '../../_reducers/supplierClassificationSlice';
import { useGetAllMedicationQuery } from '../api/medication.api';
import { useGetAllMedicationCategoryQuery } from '../api/medicationCategory.api';
import { selectStyles } from '../../utils/styles';
import { useAddCreditPaymentMutation } from '../../api/creditPayment.api';

const AddPrescription = () => {
  const { id } = useParams();
  const [medicationCategory, setMedicationCategory] = useState({ value: '', label: '' });
  const [mobileNo, setMobileNo] = useState('');
  const [medication, setMedication] = useState({ value: '', label: '' });
  const [prescription, setPrescription] = useState(
    { value: '1', label: '(QID) FOUR TIMES A DAY' },
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: medicationData } = useGetAllMedicationQuery();

  const { data: categoryData } = useGetAllMedicationCategoryQuery();

  const categoryOptions = categoryData?.map((item) => (
    {
      value: item.category_id,
      label: item.category_name,
    }
  ));

  // select category
  const selectedMedication = medicationData?.filter(
    (item) => String(item.medication_category_id).toLowerCase()
      .includes(String(medicationCategory?.value)),
  );

  const medicationOptions = selectedMedication?.map((item) => (
    {
      value: item.medication_id,
      label: item.medication_name,
      price: item.price,
    }
  ));

  const inputValues = {
    appointment_id: id,
    amount: medication.price,
    service_desc: medication.label,
    date_of_invoice: moment(new Date()).format('MM-DD-YYYY'),
    time_of_invoice: moment(new Date()).format('hh:mm:ss'),
    status: 0,
    quantity: 1,
  };

  const prescriptionOptions = [
    { value: '1', label: '(QID) FOUR TIMES A DAY' },
    { value: '2', label: 'BID (TWICE A DAY)' },
    { value: '3', label: 'OD' },
    { value: '4', label: 'PRN' },
    { value: '5', label: 'STAT' },
    { value: '6', label: 'TDS' },
    { value: '7', label: 'TID' },
    { value: '8', label: 'TWO TIMES A DAY' },
  ];

  const [addCreditPayment, { isLoading }] = useAddCreditPaymentMutation();

  return (
    <VStack
      w="full"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bgColor="gray.50"
    >
      <VStack
        bgColor="orange.50"
        borderLeft="4px"
        w="50%"
        borderColor="orange"
        height="120px"
        rounded="lg"
        alignItems="flex-start"
        pl={5}
      >
        <HStack w="full" justifyContent="flex-end">
          <CloseButton m={0} color="gray" />
        </HStack>
        <Text
          fontWeight="bold"
          color="gray.500"
        >
          Add New Prescription

        </Text>
        <Text
          color="orange.400"
          fontSize="lg"
          mt={0}
        >
          Select  Medication Category to automatically select Medication.

        </Text>
      </VStack>
      <VStack
        w="50%"
        mt={5}
        bgColor="white"
        boxShadow="sm"
        p={5}
        rounded="lg"
        spacing={10}
        border="1px"
        borderColor="gray.200"
      >

        <HStack w="full" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="semibold">New Prescription</Text>
          <CloseButton />
        </HStack>

        {/* select Department */}
        <FormControl>
          <HStack w="full" alignItems="center" justifyContent="space-between">
            <FormLabel fontSize="medium">Select Medication Category</FormLabel>
            <Tag
              onClick={() => navigate('/add-ward')}
              _hover={{
                cursor: 'pointer',
              }}
              colorScheme="green"
              mb={2}
            >
              NEW

            </Tag>

          </HStack>
          <Select
            options={categoryOptions}
            value={medicationCategory}
            styles={selectStyles}
            onChange={(e) => setMedicationCategory(e)}
          />

        </FormControl>

        <FormControl>
          <HStack w="full" alignItems="center" justifyContent="space-between">
            <FormLabel fontSize="medium">Select Medication</FormLabel>
            <Tag
              onClick={() => navigate('/add-supplier-classification')}
              _hover={{
                cursor: 'pointer',
              }}
              colorScheme="green"
              mb={2}
            >
              NEW

            </Tag>

          </HStack>
          <Select
            options={medicationOptions}
            value={medication}
            styles={selectStyles}
            onChange={(e) => setMedication(e)}
          />

        </FormControl>

        {/* select Store */}
        <FormControl>
          <FormLabel fontSize="medium">Select Prescription</FormLabel>
          <Select
            value={prescription}
            options={prescriptionOptions}
            styles={selectStyles}
            onChange={(e) => setPrescription(e)}
          />

        </FormControl>

        <HStack w="full" justifyContent="end">
          <Button
            size="lg"
            colorScheme="blue"
            onClick={() => addCreditPayment(inputValues)}
          >
            {isLoading ? 'loading...' : 'Save'}
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AddPrescription;
