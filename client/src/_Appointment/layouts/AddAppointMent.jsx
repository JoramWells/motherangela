/* eslint-disable no-unused-vars */
import {
  Avatar,
  Button, Text, VStack,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAddAppointmentMutation } from '../../api/appointments.api';
import { useGetPatientQuery } from '../../api/patients.api';
import CustomSelect from '../../components/Forms/CustomSelect';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import CustomInput from '../../components/Forms/CustomInput';
import { useGetAllConsultationTypesQuery } from '../../api/consultation/consultationType.api';

const appointmentCategoryOptions = [
  { value: '1', label: 'General Doctor Appointment' },
  { value: '2', label: 'Specialist Appointment' },
  { value: '3', label: 'Nursing Appointment' },
];

const referralOptions = [
  { value: '1', label: 'NON REFERRAL' },
  { value: '1', label: 'REFERRAL FROM COMMUNITY UNIT' },
  { value: '1', label: 'REFERRAL FROM OTHER HEALTH FACILITY' },
];

const clinicOptions = [
  { value: '1', label: 'MAIN BRANCH' },
];
const AddAppointMent = () => {
  const [appointmentCategory, setAppointmentCategory] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [referral, setReferral] = useState('');
  const [clinic, setClinic] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: consultationTypeData,
    isLoading: isConsultationLoading,
  } = useGetAllConsultationTypesQuery();
  const consultationTypesOptions = useCallback(() => consultationTypeData?.map((item) => ({
    value: item.consultation_type_id, label: item.consultation_type_description,
  })), [consultationTypeData]);

  const inputValues = {
    appointmentCategory, consultationType, referral, clinic,
  };

  const { data: patientData } = useGetPatientQuery(id);

  const [addAppointment, { isLoading }] = useAddAppointmentMutation();

  return (
    <VStack
      mt="50px"
      p={3}
      w="full"
      alignItems="center"
    >
      <BreadCrumbNav />
      <VStack
        spacing={8}
        w="40%"
        bgColor="white"
        p={5}
        border="1px"
        borderColor="gray.200"
        rounded="lg"
      >

        <VStack>
          <Avatar
            name={`${patientData?.first_name} ${patientData?.middle_name}`}
            // size="lg"
            fontWeight="bold"
          />
          <Text
            fontSize="18px"
            fontWeight="bold"
          >
            {`${patientData?.first_name} ${patientData?.middle_name}`}
          </Text>
        </VStack>
        <CustomInput
          label="Appointment Date"
          type="date"
        />

        <CustomSelect
          label="Appointment Category"
          options={appointmentCategoryOptions}
          onChange={setAppointmentCategory}
        />

        <CustomSelect
          label="Consultation Type"
          options={consultationTypesOptions()}
          isLoading={isConsultationLoading}
          onChange={setConsultationType}
          value={consultationType}
        />

        <CustomSelect
          label="Referral Type"
          options={referralOptions}
          onChange={setReferral}
        />
        <CustomSelect
          label="Clinic"
          options={clinicOptions}
          onChange={setClinic}
        />
        <Button
          size="md"
          colorScheme="blue"
          // rounded
          w="full"
          onClick={() => navigate('/payment-detail')}
        >
          {isLoading ? 'loading..' : 'Save'}
        </Button>
      </VStack>
    </VStack>
  );
};

export default AddAppointMent;
