/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-mixed-operators */
/* eslint-disable camelcase */
import {
  Button, HStack, VStack,
} from '@chakra-ui/react';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import moment from 'moment/moment';
import { useAddPatientMutation } from '../../api/patients.api';
import PaymentDetail from '../components/PaymentDetail';
import StepperNav from '../components/Nav/StepperNav';
import PersonalDetail from '../components/PersonalDetail';
import NextOfKin from '../components/PatientForm/NextOfKin';
import { useAddPersonalAccountChargeMutation } from '../../api/personalAccountCharges.api';
import StepperNavButtons from '../components/Nav/StepperNavButtons';

const sunrise = moment('6:00 a.m', 'h:mm a');
const sunset = moment('6:00 p.m', 'h:mm a');

const isDay = () => {
  const currentTime = moment();
  return currentTime.isBetween(sunrise, sunset);
};

const AddPatient = () => {
  const [insuranceAccount, setInsuranceAccount] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [cost, setCost] = useState(0);
  const [patientID, setPatientID] = useState('');
  const [appointmentID, setAppointmentID] = useState('');

  const [activeStep, setActiveStep] = useState(1);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [middle_name, setMiddleName] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [nhif_no, setNHIF] = useState('');
  const [patient_gender, setPatientGender] = useState('');
  const [id_number, setID] = useState('');
  const [residence, setResidence] = useState('');
  const [next_of_kin, setNextOfKin] = useState('');
  const [next_of_kin_name, setNextOfKinName] = useState('');
  const [next_of_kin_cell_phone, setNextOfKinCellPhone] = useState('');
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

  // OPD DAY || OPD NIGHT
  const consultation_type = 'CONSULTATION CONSULTATION-OPD DAY';
  const service_desc = 'ANNUAL MEDICAL CARD FEE';
  const accountType = paymentType?.paymentType?.value;

  const inputValues = useMemo(() => [

    {
      account_type_id: accountType,
      consultation_type: '28',
      insuranceAccount,
      first_name,
      middle_name,
      last_name,
      dob,
      email,
      nhif_no,
      patient_gender: patient_gender?.value,
      id_number,
      residence: residence?.value,
      next_of_kin: next_of_kin?.value,
      next_of_kin_name,
      next_of_kin_cell_phone,
    },
  ], [accountType, insuranceAccount, first_name,
    middle_name, last_name, dob, email, nhif_no, id_number,
    next_of_kin_name, next_of_kin_cell_phone, patient_gender?.value,
    residence?.value, next_of_kin?.value,
  ]);

  const [addPatient, { isLoading, data }] = useAddPatientMutation();
  const [addPersonalAccountCharge,
    { isLoading: isLoadingCharges, data: dataCharges }] = useAddPersonalAccountChargeMutation();

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

  const navigate = useNavigate();

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

    if (dataCharges) {
      navigate(-1);
    }
  }, [data, addPersonalAccountCharge, cashInputValues,
    insuranceAccount, chargesInputValues2, patientID,
    chargesInputValues, searchParams, isLoading,
    isLoadingCharges, dataCharges, navigate]);

  const handleSubmit = useCallback(() => {
    addPatient(inputValues[0]);
  }, [addPatient, inputValues,
  ]);

  return (
    <VStack w="full" h="100vh" bgColor="gray.50" mt="50px">

      {/* stepper navigation */}
      <StepperNav activeStep={activeStep} steps={steps} />

      <VStack
        w={['50%', '50%', '50%', '50%', '60%', '50%']}
        p={5}
        rounded="lg"
        bgColor="white"
        border="1px"
        borderColor="gray.200"
        spacing={4}
      >

        {/* PERSONAL DETAILS */}
        {activeStep === 1 && (
        <PersonalDetail
          first_name={first_name}
          last_name={last_name}
          middle_name={middle_name}
          dob={dob}
          email={email}
          nhif_no={nhif_no}
          patient_gender={patient_gender}
          id_number={id_number}
          residence={residence}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setMiddleName={setMiddleName}
          setDOB={setDOB}
          setEmail={setEmail}
          setNHIF={setNHIF}
          setPatientGender={setPatientGender}
          setID={setID}
          setResidence={setResidence}
        />
        )}

        {/* NEXT OF KIN */}
        {activeStep === 2 && (
        <NextOfKin
          next_of_kin={next_of_kin}
          setNextOfKin={setNextOfKin}
          next_of_kin_name={next_of_kin_name}
          setNextOfKinName={setNextOfKinName}
          next_of_kin_cell_phone={next_of_kin_cell_phone}
          setNextOfKinCellPhone={setNextOfKinCellPhone}
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
        />
        )}

        {/* complete info */}
        {activeStep === 3 ? (
          <HStack
            w="full"
            justifyContent="flex-end"
          >
            <Button
              onClick={() => handleBack()}
              size="sm"
            >
              Back
            </Button>
            <Button
              colorScheme="green"
              onClick={() => handleSubmit()}
              size="sm"
              isLoading={isLoadingCharges}
            >
              Complete

            </Button>
          </HStack>
        )

          : (
            <StepperNavButtons
              handleBack={handleBack}
              activeStep={activeStep}
              handleNext={handleNext}
            />
          )}

      </VStack>
    </VStack>
  );
};

export default AddPatient;
