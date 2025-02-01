'use client';

import React, {
  use, useCallback, useEffect, useMemo, useState,
} from 'react';
import { Loader2 } from 'lucide-react';
import moment from 'moment';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetPatientQuery } from '@/api/patients/patients.api';
import InputSelect from '@/components/custom/forms/InputSelect';
import { Button } from '@/components/ui/button';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetAllConsultationTypesQuery } from '@/api/consultation/consultationType.api';
import { useGetAllConsultationTypesWithCreditAccountsQuery } from '@/api/consultation/consultationTypesWithCreditAccounts.api';
import { useGetAllAccountTypesQuery } from '@/api/accounts/accountType.api';
import { useGetAllInsurancesQuery } from '@/api/insurance/insurance.api';
import { useGetAllCompaniesQuery } from '@/api/insurance/company.api';
import { useGetAllReferralTypesQuery } from '@/api/appointments/referralType.api';
import PatientSideProfile from '@/components/custom/patient/PatientSideProfile';
import { SelectedAppointmentInterface, useAddAppointmentMutation } from '@/api/appointments/appointments.api';
import { useUserContext } from '@/context/UserContext';

function AddAppointmentPage({ params }:{params:Promise<{id:string}>}) {
  const { id } = use(params);
  const { data: patientData } = useGetPatientQuery(id, {
    skip: !id,
  });

  const {
    patient_id, cell_phone, dob, first_name, in_patient_file_no, middle_name, out_patient_file_no,
  } = patientData || {};

  const listItems = useMemo(() => [
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
      label: `${first_name} ${middle_name}`,
      link: `/patients/${id}`,
    },
    {
      id: '4',
      label: 'Appointments',
      link: `/patients/${id}/appointments`,

    },
    {
      id: '5',
      label: 'Add',
      link: '/patients',
    },
  ], [first_name, middle_name]);

  const [category, setCategory] = useState('');
  const [consultation_type, setConsultationType] = useState('');
  const [consultation_category, setConsultationCategory] = useState('');
  const [accountType, setAccountType] = useState('');
  const [insurance, setInsurance] = useState('');
  const [referralType, setReferralType] = useState('');
  const [company_id, setCompany] = useState('');

  const { data: accountTypeData } = usePaginatedSearch({
    fetchQuery: useGetAllAccountTypesQuery,
    pageSize: 100,
  });

  const { data: consultationTypeData } = usePaginatedSearch({
    fetchQuery: useGetAllConsultationTypesQuery,
    pageSize: 100,
  });

  const { data: consultationGroupData } = usePaginatedSearch({
    fetchQuery: useGetAllConsultationTypesWithCreditAccountsQuery,
    pageSize: 100,
  });

  const { data: insuranceData } = usePaginatedSearch({
    fetchQuery: useGetAllInsurancesQuery,
    pageSize: 100,
  });

  const { data: companiesData } = usePaginatedSearch({
    fetchQuery: useGetAllCompaniesQuery,
    pageSize: 1000,
  });

  const { data: referralTypeData } = usePaginatedSearch({
    fetchQuery: useGetAllReferralTypesQuery,
    pageSize: 1000,
  });

  const consultationTypeOptions = useCallback(() => consultationTypeData?.map((item) => ({
    id: item.consultation_type_id as unknown as string,
    label: item.consultation_type_description,
  })), [consultationTypeData])();

  const consultationGroupOptions = useCallback(() => consultationGroupData?.map((item) => ({
    id: item.consultation_group_id as unknown as string,
    label: item.consultation_group_description,
  })), [consultationGroupData])();

  const accountTypeOptions = useCallback(() => accountTypeData?.map((item) => ({
    id: item.account_type_id as unknown as string,
    label: item.account_type_description,
  })), [accountTypeData])();

  const insuranceOptions = useCallback(() => insuranceData?.map((item) => ({
    id: item.insurance_id as unknown as string,
    label: item.insurance_name,
  })), [insuranceData])();

  const [selectedAccountType, setSelectedAccountType] = useState('');

  const companiesOptions = useCallback(() => companiesData?.map((item) => ({
    id: item.company_id as unknown as string,
    label: item.company_name,
  })), [companiesData])();

  const referralTypeOptions = useCallback(() => referralTypeData?.map((item) => ({
    id: item.referral_type_id as unknown as string,
    label: item.referral_type_description,
  })), [referralTypeData])();

  useEffect(() => {
    if (accountTypeOptions?.length > 0) {
      const filteredAccountType = accountTypeOptions?.filter((item) => (item.id === accountType));
      setSelectedAccountType(filteredAccountType[0]?.label?.toLowerCase() ?? '');
    }
  }, [accountTypeOptions?.length, accountType]);
  const { user } = useUserContext();

  const inputValues: SelectedAppointmentInterface = useMemo(() => (
    {
      account_type_id: Number(accountType),
      doctor_id: user?.user_id as string,
      consultation_type,
      company_id,
      referral_type_id: referralType,
      clinic_id: '1',
      consultation_group_id: consultation_category,
      appointment_date: moment().format('YYYY-MM-DD'),
      hospital_id: user?.hospital_id as string,
      patient_id: patient_id as unknown as string,
    }
  ), [accountType, user, consultation_type, company_id, referralType,
    consultation_category, patient_id,
  ]);

  const [addAppointment, { isLoading }] = useAddAppointmentMutation();

  const handleSave = useCallback(async () => {
    await addAppointment(inputValues);
  }, [inputValues, patientData]);

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2 flex flex-row items-start space-x-2">
        <PatientSideProfile
          cell_phone={cell_phone!}
          dob={dob!}
          first_name={first_name!}
          in_patient_file_no={in_patient_file_no!}
          middle_name={middle_name!}
          out_patient_file_no={out_patient_file_no!}
        />
        <div className="h-[75vh] border-l" />
        <div className=" border border-zinc-200 bg-white w-1/2 rounded-lg flex flex-col space-y-2">
          <div
            className="p-2 bg-zinc-50 rounded-t-lg border-b"
          >
            <p>Create New Appointment</p>
          </div>
          <div className=" p-4 flex flex-col space-y-4">
            <InputSelect
              data={[{
                id: '1',
                label: 'data',
              }]}
              label="Appointment Category"
              value={category}
              onChange={setCategory}
            />
            <InputSelect
              label="Select Consultation Type"
              data={consultationTypeOptions}
              value={consultation_type}
              onChange={setConsultationType}
            />
            <InputSelect
              label="Select Consultation Category"
              data={consultationGroupOptions}
              value={consultation_category}
              onChange={setConsultationCategory}
            />
            <InputSelect
              label="Select Referral Type"
              data={referralTypeOptions}
              value={referralType}
              onChange={setReferralType}
            />
            <InputSelect
              label="Account Type"
              data={accountTypeOptions}
              value={accountType}
              onChange={setAccountType}
            />
            {selectedAccountType === 'corporate'
            && (
            <div
              className="flex flex-col space-y-2"
            >
              <InputSelect
                label="Account Type"
                data={insuranceOptions}
                value={insurance}
                onChange={setInsurance}
              />
              <InputSelect
                label="Company (name)"
                data={companiesOptions}
                value={company_id}
                onChange={setCompany}
              />
            </div>
            )}
            <div className="pt-4 flex justify-end flex-row space-x-4">

              <Button
                size="sm"
                className="shadow-none bg-sky-600 hover:bg-sky-700"
                onClick={() => handleSave()}
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="animate-spin mr-2" size={16} /> }
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAppointmentPage;
