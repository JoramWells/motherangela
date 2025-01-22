'use client';

import React, {
  use, useCallback, useEffect, useMemo, useState,
} from 'react';
import { ArrowRight, X } from 'lucide-react';
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
import InputText from '@/components/custom/forms/InputText';

function AddAppointmentPage({ params }:{params:Promise<{id:string}>}) {
  const { id } = use(params);
  const { data } = useGetPatientQuery(id, {
    skip: !id,
  });

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
      label: `${data?.first_name} ${data?.middle_name}`,
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
  ], [data]);

  const [category, setCategory] = useState('');
  const [consultation_type, setConsultationType] = useState('');
  const [consultation_category, setConsultationCategory] = useState('');
  const [accountType, setAccountType] = useState('');
  const [insurance, setInsurance] = useState('');

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

  const consultationTypeOptions = useCallback(() => consultationTypeData?.map((item) => ({
    id: item.consultation_type_id as unknown as string,
    label: item.consultation_type_description,
  })), [consultationTypeData])();

  const consultationGroupOptions = useCallback(() => consultationGroupData?.map((item) => ({
    id: item.consultation_group_id as unknown as string,
    label: item.consultation_group_description,
  })), [consultationTypeData])();

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

  useEffect(() => {
    if (accountTypeOptions?.length > 0) {
      const filteredAccountType = accountTypeOptions?.filter((item) => (item.id === accountType));
      setSelectedAccountType(filteredAccountType[0]?.label?.toLowerCase() ?? '');
    }
  }, [accountTypeOptions?.length, accountType]);

  const [insuranceNo, setInsuranceNo] = useState('');
  const [staffNo, setStaffNo] = useState('');
  const [principalMembershipNo, setPrincipalMembershipNo] = useState('');

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <div className=" border border-zinc-200 bg-white w-1/2 rounded-lg flex flex-col space-y-2">
          <div
            className="p-2 bg-zinc-50 border-b border-zinc-200 rounded-t-lg"
          >
            <p
              className="text-[14px] font-semibold text-zinc-700 "
            >
              { `${data?.first_name} ${data?.middle_name}`}

            </p>
          </div>
          <div className=" p-2 flex flex-col space-y-2">
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
              data={[{
                id: '1',
                label: 'data',
              }]}
              value={category}
              onChange={setCategory}
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
                value={insurance}
                onChange={setInsurance}
              />
              <InputText
                label="Staff Number"
                value={staffNo}
                onChange={setStaffNo}
              />

              <InputText
                label="Insurance Membership Number *"
                value={insuranceNo}
                onChange={setInsuranceNo}
              />
              <InputText
                label="Principal Member Number *"
                value={principalMembershipNo}
                onChange={setPrincipalMembershipNo}
              />
            </div>
            )}
            <div className="pt-4 flex justify-end flex-row space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="shadow-none"
              >
                Cancel
                <X />

              </Button>
              <Button
                size="sm"
                className="shadow-none bg-sky-600 hover:bg-sky-700"
              >
                Payment
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAppointmentPage;
