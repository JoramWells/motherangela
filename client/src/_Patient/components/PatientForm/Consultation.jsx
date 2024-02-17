/* eslint-disable no-unused-vars */
import { FormControl, FormLabel, VStack } from '@chakra-ui/react';
import Select from 'react-select';
import { useGetAllConsultationTypesQuery } from '../../../api/consultationType.api';

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

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '45px',
    height: '45px',
  }),
  input: (provided) => ({
    ...provided,
  }),
};

const Consultation = () => {
  const { data } = useGetAllConsultationTypesQuery();
  const consultationTypeOptions2 = data?.map((item) => ({
    value: item.consultation_type_id, label: item.consultation_type_description,
  }));

  return (
    <VStack spacing={8}>
      <FormControl>
        <FormLabel>Select Appointment Category</FormLabel>
        <Select styles={customStyles} options={appointmentCategoryOptions} />
      </FormControl>
      <FormControl>
        <FormLabel>Select Consultation Type</FormLabel>
        <Select styles={customStyles} options={consultationTypeOptions2} />
      </FormControl>
      <FormControl>
        <FormLabel>Is Referral?</FormLabel>
        <Select styles={customStyles} options={referralOptions} />
      </FormControl>
      <FormControl>
        <FormLabel>Select Clinic</FormLabel>
        <Select styles={customStyles} options={clinicOptions} />
      </FormControl>
    </VStack>
  );
};

export default Consultation;
