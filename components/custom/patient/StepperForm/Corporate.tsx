import {
  Dispatch, SetStateAction, useCallback, useEffect, useState,
} from 'react';
import InputSelect from '../../forms/InputSelect';
import InputText from '../../forms/InputText';
import { useGetAllInsurancesQuery } from '@/api/insurance/insurance.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetInsuranceServiceCostMappingQuery } from '@/api/insurance/insuranceServiceCostMapping.api';
import { useGetAllCompaniesQuery } from '@/api/insurance/company.api';

export interface CorporateInterface{
insuranceAccount: string
cost: string
company: string
setCompany:Dispatch<SetStateAction<string>>,
setInsuranceAccount:Dispatch<SetStateAction<string>>,
setCost:Dispatch<SetStateAction<string>>,

}

function Corporate({
  insuranceAccount, setInsuranceAccount, cost, setCost,
  company,
  setCompany,
}:CorporateInterface) {
  const [mobileNo, setMobileNo] = useState('');
  const [insurance_membership_number, setInsuranceMemberShipNo] = useState('');
  // const [insuranceAccount, setInsuranceAccount] = useState({ value: '', label: '' });

  const { data } = usePaginatedSearch({
    fetchQuery: useGetAllInsurancesQuery,
  });

  const { data: insuranceServiceCostData } = useGetInsuranceServiceCostMappingQuery(
    insuranceAccount?.value ? insuranceAccount?.value : 0,
  );

  const insuranceOptionsCallback = useCallback(() => data?.map((item) => (
    { id: item.insurance_id.toString(), label: item.insurance_name }
  )), [data]);

  const insuranceOptions = insuranceOptionsCallback();

  const { data: schemeData } = usePaginatedSearch({
    fetchQuery: useGetAllCompaniesQuery,
    pageSize: 1000,
  });

  const schemeOptions = useCallback(
    () => schemeData?.map((scheme) => ({
      id: scheme.company_id.toString(),
      label: scheme.company_name,
    })),
    [schemeData],
  )();

  useEffect(() => {
    setCost(insuranceServiceCostData?.cost);
    if (!cost) { setCost(insuranceServiceCostData?.cost); }
  }, [setCost, insuranceServiceCostData?.cost, cost]);

  return (

    <div
      className="flex flex-col space-y-2 mt-4"
    >
      <InputSelect
        label="Insurance Account"
        data={insuranceOptions}
        // isLoading={isLoadingInsurance}
        value={insuranceAccount}
        onChange={setInsuranceAccount}
      />

      {/* select Departmident */}
      <InputSelect
        label="Company Scheme"
        data={schemeOptions}
        value={company}
        onChange={setCompany}
      />

      <InputText
        label="Staff No."
        placeholder="Enter Staff Number"
        value={mobileNo}
        onChange={setMobileNo}
      />

      <InputText
        label="Insurance Membership Number"
        value={insurance_membership_number}
        onChange={setInsuranceMemberShipNo}
      />

      <InputText
        label="Principal Member Name"
        value={mobileNo}
        onChange={setMobileNo}
      />
    </div>
  );
}

export default Corporate;
