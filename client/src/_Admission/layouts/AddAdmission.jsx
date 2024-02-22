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
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
import CustomSelect from '../../components/Forms/CustomSelect';
import CustomInput from '../../components/Forms/CustomInput';
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

  const { data: userData, isLoading } = useGetUsersQuery();

  const [addAdmission, {
    isLoading: admissionLoading,
    data: admissionSaveData,
  }] = useAddAdmissionMutation();

  useEffect(() => {
    if (admissionSaveData) {
      navigate(-1);
    }
  }, [admissionSaveData, navigate]);

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
      mt="50px"
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
        // border="1px"
        // borderColor="gray.200"
        spacing="1.5rem"
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
        <CustomSelect
          label="Doctor"
          options={userDataOptions()}
          value={doctor_id}
          onChange={setDoctor_id}
          isLoading={isLoading}
        />

        {/* item code prefix */}

        <CustomSelect
          label="Ward"
          options={wardsOptions()}
          onChange={setWard_id}
          value={ward_id}
        />

        <FormControl>
          <HStack
            alignContent="flex-end"
            alignItems="center"
          >
            <FormLabel
              fontSize="14px"
              // fontWeight="bold"
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

        <CustomSelect
          label="Admission Category"
          options={admissionCategoryOptions()}
          value={admission_category_id}
          onChange={setAdmission_category_id}
        />

        <CustomSelect
          label="Referral Type"
          options={referralTypeOptions}
          value={referralType}
          onChange={setReferralType}
        />

        <CustomInput label="Branch" />

        {/* save btn */}
        <Button
          size="md"
          width="full"
          colorScheme="blue"
          color="white"
          // bgGradient={'linear'}
          onClick={() => addAdmission(inputValues)}
          // fontWeight="normal"
          fontSize="16px"
          rightIcon={<FaArrowRight />}
          isLoading={admissionLoading || admissionBedAllocationLoading}
        >
          New Patient Admission
        </Button>
      </VStack>
    </VStack>
  );
};

export default AddAdmission;
