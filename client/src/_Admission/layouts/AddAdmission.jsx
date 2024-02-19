/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  Avatar,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Select from 'react-select';
import moment from 'moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useGetWardsQuery } from '../../api/ward.api';
import { useGetAllBedsQuery } from '../../api/wardBed.api';
import { useGetAllAdmissionCategoriesQuery } from '../../api/admissionCategory.api';
import { useGetUsersQuery } from '../../api/users.api';
import { useAddAdmissionMutation } from '../../api/admissions.api';
import { useAddAdmissionBedAllocationMutation } from '../../api/admission/admissionBedAllocation.api';
// import { useAddVitalSignsMutation } from '../api/vitalSigns.api';

const AddAdmission = () => {
  const [searchParams] = useSearchParams();
  const appointment_id = searchParams.get('appointment_id');
  const [doctor_id, setDoctor_id] = useState('');
  const [ward_id, setWard_id] = useState('');
  const [bed_id, setWard_bed_id] = useState('');
  const [admission_category_id, setAdmission_category_id] = useState('');
  const [referralType, setReferralType] = useState('');
  const [admissionID, setAdmissionID] = useState(null);

  const { id: patient_id } = useParams();

  const referralTypeOptions = [
    { value: 1, label: 'REFERRAL FROM OTHER HEALTH FACILITY' },
    { value: 2, label: 'REFERRAL TO OTHER HEALTH FACILITY' },
    { value: 3, label: 'REFERRAL FROM COMMUNITY UNIT' },
    { value: 4, label: 'REFERRAL TO COMMUNITY UNIT' },
  ];

  const navigate = useNavigate();

  // const [addVitalSigns, { isLoading, error }] = useAddVitalSignsMutation();

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

  const { data } = useGetWardsQuery();

  const { data: wardBedData } = useGetAllBedsQuery();

  const { data: admissionCategoryData } = useGetAllAdmissionCategoriesQuery();
  const [addAdmissionBedAllocation, {
    isLoading: admissionBedAllocationLoading,
  }] = useAddAdmissionBedAllocationMutation();

  const { data: userData } = useGetUsersQuery();

  const [addAdmission, {
    isLoading: admissionLoading,
    data: admissionSaveData,
  }] = useAddAdmissionMutation();

  console.log(admissionSaveData);

  const wardsOptions = useCallback(() => data?.map((item) => ({
    value: item.ward_id, label: item.ward_description,
  })), [data]);

  const wardBedDataOptions = useCallback(() => wardBedData?.map((item) => ({
    value: item.bed_id, label: item.bed_number, ward_id: item.ward_id,
  })), [wardBedData]);

  const admissionCategoryOptions = useCallback(() => admissionCategoryData?.map(
    (item) => ({ value: item.admission_category_id, label: item.admission_category_description }),
  ), [admissionCategoryData]);

  const filterWardBeds = wardBedDataOptions()?.filter(
    (item) => String(item.ward_id) === String(ward_id?.value),
  );

  const userDataOptions = useCallback(() => {
    const tempData = userData?.filter((item) => item.user_type.user_type_desc
      .toLowerCase().includes('Doctor'.toLowerCase()));
    return tempData?.map((item) => ({
      value: item.user_id, label: item.full_name,
    }));
  }, [userData]);

  const inputValues = {
    patient_id,
    appointment_id,
    doctor_id: doctor_id.value,
    ward_id: ward_id.value,
    bed_id: bed_id.value,
    admission_type_id: admission_category_id.value,
    referralType,
    hospital_id: 18,
    admission_date: moment(new Date(), 'YYYY-MM-DD'),
    admission_time: moment(new Date()).format('HH:mm:ss'),
  };

  const bedAllocationInputValue = useMemo(() => [
    {
      admission_id: admissionID,
      patient_id,
      appointment_id,
      ward_id: ward_id.value,
      bed_id: bed_id.value,
    },
  ], [admissionID, patient_id, appointment_id, ward_id, bed_id]);

  useEffect(() => {
    // check if admissions has been created successfully
    if (admissionSaveData) {
      setAdmissionID(admissionSaveData?.admission_id);
    }

    if (admissionID) {
      addAdmissionBedAllocation(bedAllocationInputValue[0]);
      if (!admissionBedAllocationLoading) {
        navigate(-1);
      }
    }
  }, [admissionSaveData, addAdmissionBedAllocation,
    admissionID, admissionID?.patientID,
    bedAllocationInputValue, admissionBedAllocationLoading,
    navigate,
  ]);

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
            fontSize="18px"
            fontWeight="semibold"
          // color="gray.500"
          >
            New Admission
          </Text>
        </HStack>
        {/* sub item */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Select Doctor
          </FormLabel>
          <Select
            options={userDataOptions()}
            value={doctor_id}
            onChange={setDoctor_id}
          />
        </FormControl>

        {/* item code prefix */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Select Ward
          </FormLabel>
          <Select
            options={wardsOptions()}
            onChange={setWard_id}
            value={ward_id}
          />
        </FormControl>

        <FormControl>
          <HStack
            alignContent="flex-end"
            alignItems="center"
          >
            <FormLabel
              fontSize="14px"
              fontWeight="bold"
              pt={2}
            >
              Select Bed Number
              {' '}
            </FormLabel>
            <Tag
              size="sm"
              bgColor="blue.500"
              fontWeight="bold"
              color="white"
            >
              {filterWardBeds?.length}
            </Tag>
          </HStack>

          <Select
            options={filterWardBeds}
            value={bed_id}
            onChange={setWard_bed_id}
          />
        </FormControl>

        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Select Admission Category
          </FormLabel>
          <Select
            options={admissionCategoryOptions()}
            value={admission_category_id}
            onChange={setAdmission_category_id}
          />
        </FormControl>
        <FormControl>

          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Referral Type
          </FormLabel>
          <Select
            options={referralTypeOptions}
            value={referralType}
            onChange={setReferralType}
          />
        </FormControl>

        <FormControl>

          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Branch
          </FormLabel>
          <Input />
        </FormControl>

        {/* save btn */}
        <Button
          size="md"
          width="full"
          // colorScheme="blue"
          bgColor="blue.700"
          color="white"
          // bgGradient={'linear'}
          onClick={() => addAdmission(inputValues)}
          _hover={{
            bgColor: 'blue.600',
          }}
        >
          {admissionLoading || admissionBedAllocationLoading ? 'loading' : 'Save'}
        </Button>
      </VStack>
    </VStack>
  );
};

export default AddAdmission;
