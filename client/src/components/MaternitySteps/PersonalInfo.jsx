/* eslint-disable no-unused-vars */
import {
  Badge,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

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

const PersonalInfo = () => {
  const navigate = useNavigate();
  const options = [
    { value: 'SINGLE', label: 'SINGLE' },
    { value: 'MARRIED', label: 'MARRIED' },
  ];

  return (
    <VStack spacing={8}>
      <FormControl>

        <FormLabel mt={1}>Name  of Client</FormLabel>
        <Input size="lg" placeholder="Enter Name of the Client" />

      </FormControl>

      {/* category */}
      <FormControl>
        <FormLabel>DOB</FormLabel>
        <Input size="lg" type="date" />
      </FormControl>

      {/* item code */}
      <FormControl>
        <FormLabel>Marital Status</FormLabel>
        <Select options={options} styles={customStyles} />

      </FormControl>

      <FormControl>
        <FormLabel>Phone Number</FormLabel>
        <Input
          size="lg"
          placeholder="Enter phone number"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Occupation</FormLabel>
        <Input
          size="lg"
          placeholder="Enter Occupation"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Address</FormLabel>
        <Input
          size="lg"
          placeholder="Enter Address"
        />
      </FormControl>

    </VStack>
  );
};

export default PersonalInfo;
