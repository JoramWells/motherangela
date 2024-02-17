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
  handleNext, setNextOfKinData, handleBack, activeStep,
}) => {
  const { id } = useParams();

  const initialValues = {
    next_of_kin: '',
    next_of_kin_name: '',
    next_of_kin_cell_phone: '',
  };

  return (

    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setNextOfKinData(values);
        handleNext();
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
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
                value={values.next_of_kin}
                onChange={(kin) => setFieldValue('next_of_kin', kin)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Next of Kin Full Name</FormLabel>
              <Input
                name="next_of_kin_name"
                // size="lg"
                onChange={handleChange}
                value={values.next_of_kin_name}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Next of Kin Phone Number</FormLabel>
              <Input
                name="next_of_kin_cell_phone"
                // size="lg"
                onChange={handleChange}
                value={values.next_of_kin_cell_phone}
              />
            </FormControl>

            {/* stepper nav buttons */}
            <StepperNavButtons
              handleBack={handleBack}
              activeStep={activeStep}
            />
          </VStack>

        </form>
      )}
    </Formik>
  );
};

NextOfKin.propTypes = {
  activeStep: PropTypes.number,
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  setNextOfKinData: PropTypes.func,

};

NextOfKin.defaultProps = {
  activeStep: 1,
  handleNext: () => { },
  handleBack: () => { },
  setNextOfKinData: () => { },

};

// hospital details

export default NextOfKin;
