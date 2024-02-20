/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { HStack, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import CustomInput from '../../components/Forms/CustomInput';
import CustomSelect from '../../components/Forms/CustomSelect';

const PersonalDetail = ({
  first_name, setFirstName, last_name, setLastName, middle_name, setMiddleName,
  dob, setDOB, email, setEmail, nhif_no, setNHIF, patient_gender, setPatientGender,
  id_number, setID, residence, setResidence,
}) => {
  const residenceOptions = [
    { value: 'Nanyuki', label: 'Nanyuki' },
    { value: 'Nairobi', label: 'Nairobi' },
  ];

  const genderOptions = [
    { value: 'MALE', label: 'MALE' },
    { value: 'FEMALE', label: 'FEMALE' },
  ];

  return (
    <VStack spacing={[6, 6, 6, 6, 4, 6]}>

      <HStack w="full">
        <CustomInput
          label="Old Reference Number"
        />

        <CustomInput
          label="In-Patient File Number"
        />

      </HStack>
      <HStack w="full">

        <CustomInput
          label="First Name"
          name="first_name"
          value={first_name}
          onChange={setFirstName}
        />

        <CustomInput
          label="Second Name"
          name="middle_name"
          value={middle_name}
          onChange={setMiddleName}
        />

        <CustomInput
          label="Enter Last Name"
          name="last_name"
          value={last_name}
          onChange={setLastName}
        />

      </HStack>

      {/* DOB */}
      <CustomInput
        label="DOB"
        type="date"
        name="date"
        value={dob}
        onChange={setDOB}
      />

      {/* item code */}
      <CustomSelect
        label="Gender"
        options={genderOptions}
        value={patient_gender}
        onChange={setPatientGender}
      />

      <HStack
        w="full"
      >

        <CustomInput
          name="id_number"
          value={id_number}
          label="ID No."
          onChange={setID}
        />

        <CustomInput
                // type="email"
          name="email"
          label="Enter Email Address"
          value={email}
          onChange={setEmail}
        />
      </HStack>

      <CustomSelect
        label="Residence"
        options={residenceOptions}
        value={residence}
        onChange={setResidence}
      />

      <CustomInput
        name="nhif_no"
        label="NHIF NO."
        value={nhif_no}
        onChange={setNHIF}
      />

    </VStack>
  );
};

PersonalDetail.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  middle_name: PropTypes.string,
  dob: PropTypes.string,
  email: PropTypes.string,
  nhif_no: PropTypes.string,
  patient_gender: PropTypes.string,
  id_number: PropTypes.string,
  residence: PropTypes.string,

  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
  setMiddleName: PropTypes.func,
  setDOB: PropTypes.func,
  setEmail: PropTypes.func,
  setNHIF: PropTypes.func,
  setPatientGender: PropTypes.func,
  setID: PropTypes.func,
  setResidence: PropTypes.func,

};

PersonalDetail.defaultProps = {
  first_name: '',
  last_name: '',
  middle_name: '',
  dob: '',
  email: '',
  nhif_no: '',
  patient_gender: '',
  id_number: '',
  residence: '',

  setFirstName: () => {},
  setLastName: () => {},
  setMiddleName: () => {},
  setDOB: () => {},
  setEmail: () => {},
  setNHIF: () => {},
  setPatientGender: () => {},
  setID: () => {},
  setResidence: () => {},

};
export default PersonalDetail;
