/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {
  FormControl, FormLabel, HStack, Input, Text, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import PropTypes from 'prop-types';

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

const PersonalDetail = ({
  first_name, setFirstName, last_name,
  setLastName, middle_name, setMiddleName, dob, setDOB,
  gender, setGender, ID, setID, residence, setResidence,
}) => {
  const options = [
    { value: 'SINGLE', label: 'SINGLE' },
    { value: 'MARRIED', label: 'MARRIED' },
  ];

  const genderOptions = [
    { value: 'MALE', label: 'MALE' },
    { value: 'FEMALE', label: 'FEMALE' },
  ];

  return (
    <VStack spacing={8}>
      <HStack w="full">
        <FormControl isRequired>

          <FormLabel mt={1}>First Name</FormLabel>
          <Input
            size="lg"
            placeholder="Enter First Name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />

        </FormControl>

        <FormControl isRequired>

          <FormLabel mt={1}>Middle Name</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Second Name"
            value={middle_name}
            onChange={(e) => setMiddleName(e.target.value)}
          />

        </FormControl>
        <FormControl isRequired>

          <FormLabel mt={1}>Last Name</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />

        </FormControl>
      </HStack>

      {/* category */}
      <FormControl isRequired>
        <FormLabel>DOB</FormLabel>
        <Input
          size="lg"
          type="date"
          onChange={(e) => setDOB(e.target.value)}
          value={dob}
        />
      </FormControl>

      {/* item code */}
      <FormControl isRequired>
        <FormLabel>Select Gender</FormLabel>
        <Select
          options={genderOptions}
          styles={customStyles}
          onChange={(genderValue) => setGender(genderValue.value)}
        />

      </FormControl>

      <FormControl isRequired>
        <FormLabel>ID/Passport Number</FormLabel>
        <Input
          size="lg"
          placeholder="Enter phone number"
        />
      </FormControl>
    </VStack>
  );
};

PersonalDetail.propTypes = {
  first_name: PropTypes.string,
  middle_name: PropTypes.string,
  last_name: PropTypes.string,
  dob: PropTypes.string,
  gender: PropTypes.string,
  residence: PropTypes.string,
  ID: PropTypes.string,

  setFirstName: PropTypes.func,
  setMiddleName: PropTypes.func,
  setLastName: PropTypes.func,
  setDOB: PropTypes.func,
  setGender: PropTypes.func,
  setResidence: PropTypes.func,
  setID: PropTypes.func,
};

PersonalDetail.defaultProps = {
  first_name: '',
  middle_name: '',
  last_name: '',
  dob: '',
  gender: '',
  residence: '',
  ID: '',

  setFirstName: () => { },
  setMiddleName: () => { },
  setLastName: () => { },
  setDOB: () => { },
  setGender: () => { },
  setResidence: () => { },
  setID: () => { },
};

// hospital details
const PayrollContacts = ({ nhif_no, setNHIFNo }) => {
  const data = [];
  const options = [
    { value: 'SINGLE', label: 'SINGLE' },
    { value: 'MARRIED', label: 'MARRIED' },
  ];
  return (
    <VStack
      bgColor="white"
      spacing={8}
    >
      <FormControl>
        <FormLabel>Cell Phone</FormLabel>
        <Input
          size="lg"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          size="lg"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Address</FormLabel>
        <Input
          size="lg"
        />
      </FormControl>

      <FormControl>
        <FormLabel>City of Residence</FormLabel>
        <Select options={options} styles={customStyles} />

      </FormControl>
      <FormControl>
        <FormLabel>Country of Origin</FormLabel>
        <Select options={options} styles={customStyles} />

      </FormControl>
    </VStack>
  );
};

PayrollContacts.propTypes = {
  nhif_no: PropTypes.string,
  setNHIFNo: PropTypes.func,

};

PayrollContacts.defaultProps = {
  nhif_no: '',
  setNHIFNo: () => { },

};

// hospital details
const AssociatedUserAccount = ({ nhif_no, setNHIFNo }) => {
  const data = [];
  const options = [
    { value: 'SINGLE', label: 'SINGLE' },
    { value: 'MARRIED', label: 'MARRIED' },
  ];
  return (
    <VStack
      bgColor="white"
      spacing={8}
    >
      <FormControl>
        <FormLabel>Select User Account</FormLabel>
        <Select options={options} styles={customStyles} />

      </FormControl>
    </VStack>
  );
};

AssociatedUserAccount.propTypes = {
  nhif_no: PropTypes.string,
  setNHIFNo: PropTypes.func,

};

AssociatedUserAccount.defaultProps = {
  nhif_no: '',
  setNHIFNo: () => { },

};

// hospital details

export {
  PersonalDetail, PayrollContacts, AssociatedUserAccount,
};
