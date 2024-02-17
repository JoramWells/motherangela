/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  FormControl, FormLabel, Text, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import moment from 'moment/moment';
import { Formik } from 'formik';
import { useCallback } from 'react';
import Corporate from './Cooporate';
import { useGetAllAccountTypesQuery } from '../../api/accountType.api';
import { useAddPatientMutation } from '../../api/patients.api';
import StepperNavButtons from './Nav/StepperNavButtons';

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

const PaymentDetail = ({
  inputValues, insuranceAccount,
  setInsuranceAccount, paymentType, setPaymentType,
  handleNext, handleBack, activeStep, cost, setCost,
}) => {
  // const [accountType, setAccountType] = useState({ value: '', label: '' });
  // const [paymentOption, setPaymentOption] = useState({ value: '', label: '' });

  const [addPatient] = useAddPatientMutation();

  const { data } = useGetAllAccountTypesQuery();

  const consultationOPDay = { value: '', label: 'CONSULTATION OPD DAY' };
  const consultationOPDNight = 'CONSULTATION OPD NIGHT';

  const consultationOPayPrices = [
    { price: 350, label: 'NON-CORPORATE' },
    { price: 600, label: 'CORPORATE' },
  ];

  // const datax = useCallback(()=>{},)

  const accountTypeOptionsCallback = useCallback(() => data?.map((item) => ({
    value: item.account_type_id,
    label: item.account_type_description,
  })), [data]);

  const accountTypeOptions = accountTypeOptionsCallback();

  return (

    <Formik
      initialValues={{
        paymentType: '',
        insuranceAccount: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setPaymentType(values);
        setSubmitting(false);
        handleNext();
      }}
    >
      {({
        values,
        setFieldValue,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <VStack
            spacing={8}
            w="full"
          >
            <FormControl>
              <FormLabel fontSize="14px">Select Payment Type</FormLabel>
              <Select
                options={accountTypeOptions}
                // styles={customStyles}
                value={values.paymentType}
                onChange={(type) => setFieldValue('paymentType', type)}
              />

              {/* {values.} */}
              {values.paymentType?.value === '1' && (
                <Corporate
                  insuranceAccount={insuranceAccount}
                  setInsuranceAccount={setInsuranceAccount}
                  setCost={setCost}
                  cost={cost}
                />
              )}

            </FormControl>

            <StepperNavButtons
              handleBack={handleBack}
              activeStep={activeStep}
            />
          </VStack>
        </form>
      )}

      {/* <HStack w="full" justifyContent="flex-end">
        <Button
          colorScheme="green"
          onClick={() => addPatient(inputValues)}
        >
          Complete
        </Button>
      </HStack> */}
    </Formik>

  );
};

export default PaymentDetail;
