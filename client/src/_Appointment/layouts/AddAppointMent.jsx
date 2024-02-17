import {
  Button, FormControl, FormLabel, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Select from 'react-select';
import { useAddAppointmentMutation } from '../../api/appointments.api';

const appointmentCategoryOptions = [
  { value: '1', label: 'General Doctor Appointment' },
  { value: '2', label: 'Specialist Appointment' },
  { value: '3', label: 'Nursing Appointment' },
];

const consultationTypeOptions = [
  { value: '1', label: 'ANC VISIT LINDA MAMA' },
  { value: '2', label: 'CONSULTATION-(CWC)' },
  { value: '3', label: 'CONSULTATION-CHEMO' },
  { value: '4', label: 'CONSULTATION-DM CLINIC' },
  { value: '5', label: 'CONSULTATION-DENTAL' },
  { value: '6', label: 'CONSULTATION-GYNAE' },
  { value: '7', label: 'CONSULTATION-NUTRITIONIST(CHILD)' },
  { value: '8', label: 'CONSULTATION-OPD DAY' },
  { value: '9', label: 'CONSULTATION-OPD NIGHT' },
  { value: '10', label: 'CONSULTATION-NUTRITIONIST' },
  { value: '11', label: 'CONSULTATION-CCC' },
  { value: '12', label: 'CONSULTATION-ANC' },
  { value: '13', label: 'CONSULTATION-PHYSIOTHERAPY' },
  { value: '14', label: 'DENTAL REVIEW' },
  { value: '15', label: 'E.N.T CONSULTATION' },
  { value: '16', label: 'FREE CONSULTATION' },
  { value: '17', label: 'NORMAL CONSULTATION' },
  { value: '18', label: 'SECOND-LINDA MAMA' },
  { value: '19', label: 'SPECIALIST CONSULTATION' },
  { value: '20', label: 'SURGEON-SOPC' },
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

  const inputValues = {
    appointmentCategory, consultationType, referral, clinic,
  };

  const [addAppointment, { isLoading }] = useAddAppointmentMutation();

  return (
    <VStack spacing={8}>
      <FormControl>
        <FormLabel>Select Appointment Category</FormLabel>
        <Select
          options={appointmentCategoryOptions}
          onChange={(category) => setAppointmentCategory(category)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Select Consultation Type</FormLabel>
        <Select
          options={consultationTypeOptions}
          onChange={(consultation) => setConsultationType(consultation)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Is Referral?</FormLabel>
        <Select
          options={referralOptions}
          onChange={(newReferral) => setReferral(newReferral)}

        />
      </FormControl>
      <FormControl>
        <FormLabel>Select Clinic</FormLabel>
        <Select
          options={clinicOptions}
          onChange={(newClinic) => setClinic(newClinic)}
        />
      </FormControl>
      <Button onClick={() => addAppointment(inputValues)}>
        {isLoading ? 'loading..' : 'Save'}
      </Button>
    </VStack>
  );
};

export default AddAppointMent;
