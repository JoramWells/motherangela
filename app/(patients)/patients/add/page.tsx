/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

'use client';

import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import moment from 'moment/moment';
import { Loader2 } from 'lucide-react';
import PersonalDetail from '@/components/custom/patient/StepperForm/PersonalDetail';
import NextOfKin from '@/components/custom/patient/StepperForm/NextOfKin';
import { Button } from '@/components/ui/button';
import { SelectedPatientTypes, useAddPatientMutation } from '@/api/patients/patients.api';
import { useAddPersonalAccountChargeMutation } from '@/api/accounts/charges/personalAccountCharges.api';
import Stepper from '@/components/custom/nav/stepper/Stepper';
import PaymentDetail from '@/components/custom/patient/StepperForm/PaymentDetail';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useUserContext } from '@/context/UserContext';
import { SelectedAppointmentInterface, useAddAppointmentMutation } from '@/api/appointments/appointments.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Patients',
    link: '/patients',
  },
  {
    id: '3',
    label: 'Add',
    link: '',
  },
];

// const sunrise = moment('6:00 a.m', 'h:mm a');
// const sunset = moment('6:00 p.m', 'h:mm a');

// const isDay = () => {
//   const currentTime = moment();
//   return currentTime.isBetween(sunrise, sunset);
// };

function AddPatient() {
  const { user } = useUserContext();
  const [accountType, setAccountType] = useState('');
  const [insuranceAccount, setInsuranceAccount] = useState('');
  // const [cost, setCost] = useState(0);
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
  const [company, setCompany] = useState('');

  const steps = [
    {
      id: '1', title: 'Personal', description: 'Personal Info', link: '/add-patient/?step=personal',
    },
    {
      id: '2', title: 'Next of Kin', description: 'NofK Details', link: '/add-patient/?step=kin',
    },
    {
      id: '3', title: 'Payment', description: 'Payment Details', link: '/add-patient/?step=payment',
    },
    // { title: 'Finish', description: 'Complete Registration', link: '/' },
  ];

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleForward = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  // OPD DAY || OPD NIGHT
  const consultation_type = 'CONSULTATION-OPD DAY';
  // const service_desc = 'ANNUAL MEDICAL CARD FEE';

  // useMemo to memoize the input values
  const inputValues: SelectedPatientTypes = useMemo(
    () => ({
      company_id: company,
      first_name,
      middle_name,
      last_name,
      dob,
      email,
      nhif_no,
      patient_gender,
      id_number,
      residence,
      residence_id: '515',
      next_of_kin: '5',
      next_of_kin_name,
      nxt_of_kin_cell_phone: next_of_kin_cell_phone,
      hospital_id: user?.hospital_id as string,
    }),
    [
      company,
      first_name,
      middle_name,
      last_name,
      dob,
      email,
      nhif_no,
      id_number,
      next_of_kin_name,
      next_of_kin_cell_phone,
      patient_gender,
      residence,
      next_of_kin,
      user,
    ],
  );

  const [addPatient, {
    isLoading: isLoadingPatient,
    data: savePatientData,
  }] = useAddPatientMutation();
  const [addPersonalAccountCharge,
    { isLoading: isLoadingCharges, data: dataCharges }] = useAddPersonalAccountChargeMutation();

  const chargesInputValues = useMemo(() => [
    {
      // amount: cost,
      service_desc: consultation_type,
      date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
      time_of_charge: moment(new Date()).format('hh:mm:ss'),
      status: 0,
      patient_id: patientID,
      hospital_id: user?.hospital_id,
      quantity: 0,
      appointment_id: appointmentID,
      reference_account_id: accountType,
    },
  ], [appointmentID, consultation_type,
    patientID, user,
  ]);

  const appointmentInputValues: SelectedAppointmentInterface = useMemo(() => (
    {
      account_type_id: Number(accountType),
      doctor_id: user?.user_id as string,
      consultation_type: '28',
      company_id: '0',
      referral_type_id: '2',
      clinic_id: '1',
      consultation_group_id: '1',
      appointment_date: moment().format('YYYY-MM-DD'),
      hospital_id: user?.hospital_id as string,
    }
  ), [accountType, user, company]);

  const [addAppointment, {
    data: saveAppointmentData,
    isLoading: isLoadingAppointment,
  }] = useAddAppointmentMutation();

  // get the new patient id
  useEffect(() => {
    if (savePatientData?.patient_id) {
      setPatientID(savePatientData.patient_id.toString());
      addAppointment(appointmentInputValues);
    }
  }, [savePatientData]);

  useEffect(() => {
    if (saveAppointmentData?.appointment_id) {
      setAppointmentID(saveAppointmentData?.appointment_id);
      addPersonalAccountCharge(chargesInputValues[0]);
    }
  }, [saveAppointmentData, chargesInputValues]);

  const handleSubmit = useCallback(() => {
    addPatient(inputValues);
  }, [addPatient, inputValues,
  ]);

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2"
      >

        <div
          className="w-1/2"
        >
          <Stepper>
            {steps.map((step, idx) => (
              <>
                <div
                  className="flex space-x-2 items-center"
                >
                  <Button
                    title={step.title}
                    key={step.id}
                    size="sm"
                    className={`${idx + 1 === activeStep || activeStep > idx ? 'bg-sky-600 text-white hover:bg-sky-600' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-100'} shadow-none  rounded-full h-8 w-8`}
                  >
                    {idx + 1}
                  </Button>
                  <div className="flex-1">
                    <p
                      className="text-[14px] text-zinc-700 font-semibold"
                    >
                      {step.title}
                    </p>
                    <p className="text-[12px] text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
                {idx !== steps.length - 1
                && <div className={`flex-1 border-b ${activeStep > idx + 1 ? 'border-sky-600' : 'border-zinc-200'}`} />}
              </>
            ))}
          </Stepper>
        </div>

        <div
          className="p-4 rounded-lg bg-white border
        w-1/2 mt-2
        "
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
            accountType={accountType}
            insuranceAccount={insuranceAccount}
            setAccountType={setAccountType}
            setInsuranceAccount={setInsuranceAccount}
            // cost={cost}
            company={company}
            // setCost={setCost}
            setCompany={setCompany}
          />
          )}

          {/* complete info */}
          <div
            className="w-full pt-2 flex justify-end items-center space-x-2"
          >
            <Button
              onClick={() => handleBack()}
              size="sm"
              disabled={activeStep === 1}
              variant="outline"
              className="shadow-none"
            >
              Back
            </Button>
            <Button
            // onClick={() => handleSubmit()}
              // onClick={() => handleForward()}
              onClick={() => (activeStep === steps.length ? handleSubmit() : handleForward())}
              size="sm"
              variant="outline"
              className="shadow-none"
              disabled={
                isLoadingAppointment || isLoadingPatient || isLoadingCharges
              }
            >
              {(isLoadingAppointment || isLoadingPatient || isLoadingCharges)
              && <Loader2 size={14} className="animate-spin" />}
              {activeStep === steps.length
                ? 'Submit' : 'Next'}

            </Button>
          </div>

        </div>
      </div>
    </>
  );
}

export default AddPatient;
