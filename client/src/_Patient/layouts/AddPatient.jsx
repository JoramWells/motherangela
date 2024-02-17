/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  Box, Button, VStack,
} from '@chakra-ui/react';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import moment from 'moment/moment';
import { useAddPatientMutation } from '../../api/patients.api';
import PaymentDetail from '../components/PaymentDetail';
import StepperNav from '../components/Nav/StepperNav';
import PersonalDetail from '../components/PersonalDetail';
import NextOfKin from '../components/PatientForm/NextOfKin';
import { useAddPersonalAccountChargeMutation } from '../../api/personalAccountCharges.api';

const sunrise = moment('6:00 a.m', 'h:mm a');
const sunset = moment('6:00 p.m', 'h:mm a');

const isDay = () => {
  const currentTime = moment();
  return currentTime.isBetween(sunrise, sunset);
};

const AddPatient = () => {
  const [personalData, setPersonalData] = useState({});
  const [nextOfKinData, setNextOfKinData] = useState({});
  const [insuranceAccount, setInsuranceAccount] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [cost, setCost] = useState(0);
  const [patientID, setPatientID] = useState('');
  const [appointmentID, setAppointmentID] = useState('');

  const [activeStep, setActiveStep] = useState(1);
  const [account_type_id, setAccountTypeID] = useState('');
  const { id } = useParams();

  const steps = [
    { title: 'Personal', description: 'Personal Info', link: '/add-patient/?step=personal' },
    { title: 'Next of Kin', description: 'NofK Details', link: '/add-patient/?step=kin' },
    { title: 'Payment', description: 'Payment Details', link: '/add-patient/?step=payment' },
    { title: 'Finish', description: 'Complete Registration', link: '/' },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    // navigate({
    //   pathname: '/add-invoice',
    //   search: `?id=${invoiceId}`,
    // });
    setSearchParams(activeStep);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // DATA STRUCTURE
  // personalData={
  //   patient_gender:{value:'MALE', label:'MALE'}
  // residence:{value:1, label:'Nanyuki}
  // }
  useEffect(() => {
    personalData.patient_gender = personalData.patient_gender?.value;
    personalData.residence = personalData.residence?.value;
    nextOfKinData.next_of_kin = nextOfKinData.next_of_kin?.value;
  }, [personalData, nextOfKinData]);

  // OPD DAY || OPD NIGHT
  const consultation_type = 'CONSULTATION CONSULTATION-OPD DAY';
  const service_desc = 'ANNUAL MEDICAL CARD FEE';
  const accountType = paymentType?.paymentType?.value;

  const inputValues = useMemo(() => [

    {
      account_type_id: accountType,
      consultation_type: '28',
      insuranceAccount,
      patient_gender: personalData.patient_gender?.value,
      ...personalData,
      ...nextOfKinData,
    },
  ], [accountType, personalData, nextOfKinData, insuranceAccount]);

  const [addPatient, { isLoading, data }] = useAddPatientMutation();
  const [addPersonalAccountCharge,
    { isLoading: isLoadingCharges }] = useAddPersonalAccountChargeMutation();

  const chargesInputValues2 = useMemo(() => [
    {
      amount: 50,
      service_desc,
      date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
      time_of_charge: moment(new Date()).format('hh:mm:ss'),
      status: 0,
      patient_id: patientID,
      hospital_id: 18,
      quantity: 0,
      appointment_id: appointmentID,
    },
  ], [appointmentID, patientID]);

  const chargesInputValues = useMemo(() => [
    {
      amount: cost,
      service_desc: consultation_type,
      date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
      time_of_charge: moment(new Date()).format('hh:mm:ss'),
      status: 0,
      patient_id: patientID,
      hospital_id: 18,
      quantity: 0,
      appointment_id: appointmentID,
    },
  ], [appointmentID, consultation_type,
    patientID,
    cost,
  ]);

  const cashInputValues = useMemo(() => [
    {
      amount: 100,
      service_desc: consultation_type,
      date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
      time_of_charge: moment(new Date()).format('hh:mm:ss'),
      status: 0,
      patient_id: patientID,
      hospital_id: 18,
      quantity: 0,
      appointment_id: appointmentID,
    },
  ], [appointmentID, patientID, consultation_type,
  ]);

  const handleSteps = () => {
    setActiveStep((prev) => (3 - prev) % 4 + 1);
    console.log('HGY');
  };

  useEffect(() => {
    // if (searchParams.get('step') === 'kin') {
    //   handleSteps();
    // }

    if (data) {
      setPatientID(data?.patient_id);
      setAppointmentID(data?.appointment_id);
    }
    if (patientID) {
      if (insuranceAccount) {
        addPersonalAccountCharge(chargesInputValues[0]);
      } else {
        addPersonalAccountCharge(cashInputValues[0]);
        addPersonalAccountCharge(chargesInputValues2[0]);
      }
    }
  }, [data, addPersonalAccountCharge, cashInputValues, insuranceAccount, chargesInputValues2,
    patientID, chargesInputValues, searchParams,

  ]);

  const handleSubmit = useCallback(() => {
    addPatient(inputValues[0]);

    // timeout
    // setTimeout(() => {
    //   addPersonalAccountCharge(chargesInputValues);
    // }, 3000);
  }, [addPatient,
    // appointmentID, patientID,
    inputValues,
  ]);

  console.log(personalData, 'personal');

  return (
    <VStack w="full" h="100vh" bgColor="gray.50" mt="50px">

      {/* stepper navigation */}
      <StepperNav activeStep={activeStep} steps={steps} />

      <Box
        w={['50%', '50%', '50%', '50%', '60%', '50%']}
        p={5}
        rounded="lg"
        bgColor="white"
        border="1px"
        borderColor="gray.200"
      >

        {/* PERSONAL DETAILS */}
        {activeStep === 1 && (
        <PersonalDetail
          handleNext={handleNext}
          handleBack={handleBack}
          setPersonalData={setPersonalData}
          activeStep={activeStep}
        />
        )}

        {/* NEXT OF KIN */}
        {activeStep === 2 && (
        <NextOfKin
          handleNext={handleNext}
          handleBack={handleBack}
          setNextOfKinData={setNextOfKinData}
          activeStep={activeStep}
        />
        )}

        {/* payment detail */}
        {activeStep === 3 && (
        <PaymentDetail
          paymentType={paymentType}
          setPaymentType={setPaymentType}
          inputValues={inputValues}
          insuranceAccount={insuranceAccount}
          setInsuranceAccount={setInsuranceAccount}
          cost={cost}
          setCost={setCost}
          handleNext={handleNext}
          handleBack={handleBack}
          activeStep={activeStep}
        />
        )}

        {/* complete info */}
        {activeStep === 4 && (
          <Button
            colorScheme="green"
            onClick={() => handleSubmit()}
          >
            {isLoading || isLoadingCharges ? 'loading...' : 'Save Patient'}

          </Button>
        )}

      </Box>
    </VStack>
  );
};

export default AddPatient;
