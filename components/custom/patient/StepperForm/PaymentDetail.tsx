import {
  Dispatch, SetStateAction, useCallback, useState,
} from 'react';
import Corporate from './Corporate';
import { useGetAllAccountTypesQuery } from '@/api/accounts/accountType.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import InputSelect from '../../forms/InputSelect';

export interface PaymentDetailInterface{
  accountType: string
  company: string
  insuranceAccount:string
  setAccountType:Dispatch<SetStateAction<string>>,
  setInsuranceAccount:Dispatch<SetStateAction<string>>,
  setCompany:Dispatch<SetStateAction<string>>,
}

function PaymentDetail({
  accountType,
  company,
  insuranceAccount,
  setAccountType,
  setCompany,
  setInsuranceAccount,
}:PaymentDetailInterface) {
  const [cost, setCost] = useState('');
  // const [accountType, setAccountType] = useState({ value: '', label: '' });
  // const [paymentOption, setPaymentOption] = useState({ value: '', label: '' });

  const { data } = usePaginatedSearch({
    fetchQuery: useGetAllAccountTypesQuery,
  });

  // const consultationOPDay = { value: '', label: 'CONSULTATION OPD DAY' };
  // const consultationOPDNight = 'CONSULTATION OPD NIGHT';

  // const datax = useCallback(()=>{},)

  const accountTypeOptions = useCallback(() => data?.map((item) => ({
    id: item.account_type_id.toString(),
    label: item.account_type_description,
  })), [data])();

  return (

    <div>
      <InputSelect
        label="Payment Type"
        data={accountTypeOptions}
        //   isLoading={isLoading}
        value={accountType}
        onChange={setAccountType}
      />

      {/* {values.} */}
      {accountType === '1' && (
        <Corporate
          insuranceAccount={insuranceAccount}
          setInsuranceAccount={setInsuranceAccount}
          setCost={setCost}
          cost={cost}
          company={company}
          setCompany={setCompany}
        />
      )}

    </div>

  );
}

export default PaymentDetail;
