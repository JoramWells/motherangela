/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  FormControl, FormLabel, HStack, IconButton, Input, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import StepperNavButtons from './Nav/StepperNavButtons';
import { useGetPatientQuery } from '../../api/patients.api';
import CustomInput from './CustomInput';

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
  handleNext, handleBack, activeStep, setPersonalData,
}) => {
  const residenceOptions = [
    { value: 'Nanyuki', label: 'Nanyuki' },
    { value: 'Nairobi', label: 'Nairobi' },
  ];

  const genderOptions = [
    { value: 'MALE', label: 'MALE' },
    { value: 'FEMALE', label: 'FEMALE' },
  ];

  const initialValues = {
    first_name: '',
    last_name: '',
    middle_name: '',
    dob: '',
    email: '',
    nhif_no: '',
    patient_gender: { value: 'MALE', label: 'MALE' },
    id_number: '',
    residence: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setPersonalData(values);
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
          <VStack spacing={[6, 6, 6, 6, 4, 6]}>
            {/* <IconButton>
              <FaSearch />
            </IconButton> */}

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
                value={values.first_name}
                handleChange={handleChange}
              />

              <CustomInput
                label="Second Name"
                name="middle_name"
                value={values.middle_name}
                handleChange={handleChange}
              />

              <CustomInput
                label="Enter Last Name"
                name="last_name"
                value={values.last_name}
                handleChange={handleChange}
              />

            </HStack>

            {/* category */}
            <FormControl>
              <FormLabel
                fontSize="14px"

              >
                DOB

              </FormLabel>
              <Input
                name="dob"
                type="date"
                onChange={handleChange}
                value={values.dob}
              />
            </FormControl>

            {/* item code */}
            <FormControl>
              <FormLabel
                fontSize="14px"

              >
                Select Gender

              </FormLabel>
              <Select
                name="patient_gender"
                options={genderOptions}
                value={values.patient_gender}
                onChange={(val) => setFieldValue('patient_gender', val)}
              />

            </FormControl>

            <HStack
              w="full"
            >

              <CustomInput
                name="id_number"
                value={values.id_number}
                label="ID No."
                handleChange={handleChange}
              />

              <CustomInput
                // type="email"
                name="email"
                label="Enter Email Address"
                value={values.email}
                handleChange={handleChange}
              />
            </HStack>

            <FormControl>
              <FormLabel
                fontSize="14px"

              >
                Select Residence

              </FormLabel>
              <Select
                name="residence"
                options={residenceOptions}
                value={values.residence}
                onChange={(opt) => setFieldValue('residence', opt)}
              />

            </FormControl>

            <CustomInput
              name="nhif_no"
              label="NHIF NO."
              value={values.nhif_no}
              handleChange={handleChange}
            />

            {/* stepper navigation footer */}
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

PersonalDetail.propTypes = {
  activeStep: PropTypes.number,

  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  setPersonalData: PropTypes.func,

};

PersonalDetail.defaultProps = {
  activeStep: 1,

  handleNext: () => { },
  handleBack: () => { },
  setPersonalData: () => { },

};
export default PersonalDetail;
