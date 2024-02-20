/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl, FormLabel, HStack, Input, Text, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import StepperNavButtons from '../Nav/StepperNavButtons';
import { useGetPatientQuery } from '../../../api/patients.api';

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

const nextOfKinOPtions = [
  { value: 1, label: 'BROTHER' },
  { value: 2, label: 'DAUGHTER' },
  { value: 3, label: 'FATHER' },
  { value: 4, label: 'FRIEND' },
  { value: 5, label: 'GUARDIAN' },
  { value: 6, label: 'MOTHER' },
  { value: 7, label: 'SELF' },
  { value: 8, label: 'SISTER' },
  { value: 9, label: 'SON' },
  { value: 10, label: 'SPOUSE' },
];
// hospital details
const NextOfKin = ({
  next_of_kin, setNextOfKin, next_of_kin_name, setNextOfKinName,
  next_of_kin_cell_phone, setNextOfKinCellPhone,
}) => {
  const { id } = useParams();

  const initialValues = {
    next_of_kin: '',
    next_of_kin_name: '',
    next_of_kin_cell_phone: '',
  };

  return (

    <VStack
      bgColor="white"
      spacing={8}
    >
      <FormControl>
        <FormLabel>Next of Kin</FormLabel>
        <Select
          name="next_of_kin"
                // styles={customStyles}
          options={nextOfKinOPtions}
          value={next_of_kin}
          onChange={(kin) => setNextOfKin(kin)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Next of Kin Full Name</FormLabel>
        <Input
          name="next_of_kin_name"
                // size="lg"
          onChange={(e) => setNextOfKinName(e.target.value)}
          value={next_of_kin_name}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Next of Kin Phone Number</FormLabel>
        <Input
          name="next_of_kin_cell_phone"
                // size="lg"
          onChange={(e) => setNextOfKinCellPhone(e.target.value)}
          value={next_of_kin_cell_phone}
        />
      </FormControl>
    </VStack>

  );
};

NextOfKin.propTypes = {
  next_of_kin: PropTypes.string,
  next_of_kin_name: PropTypes.string,
  next_of_kin_cell_phone: PropTypes.string,
  setNextOfKin: PropTypes.func,
  setNextOfKinName: PropTypes.func,
  setNextOfKinCellPhone: PropTypes.func,

};

NextOfKin.defaultProps = {
  next_of_kin: '',
  next_of_kin_name: '',
  next_of_kin_cell_phone: '',
  setNextOfKin: () => {},
  setNextOfKinName: () => {},
  setNextOfKinCellPhone: () => {},

};

// hospital details

export default NextOfKin;
