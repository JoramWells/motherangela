'use client';

import React, {
  use, useCallback, useMemo, useState,
} from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetInsuranceQuery } from '@/api/insurance/insurance.api';
import InputText from '@/components/custom/forms/InputText';
import InputSelect from '@/components/custom/forms/InputSelect';
import { useGetAllAccountingBankAccountsQuery } from '@/api/accounts/bank/accountingBankAccounts.api';
import { useGetAllCashPaymentModesQuery } from '@/api/accounts/cashPaymentModes.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { Button } from '@/components/ui/button';

function InsuranceDetailsPage({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const { data } = useGetInsuranceQuery(id);
  const listItems = useMemo(
    () => [
      {
        id: '1',
        label: 'home',
        link: '/',
      },
      {
        id: '2',
        label: 'Insurances',
        link: '/insurances',
      },
      {
        id: '3',
        label: `${data?.insurance_name}`,
        link: '',
      },
    ],
    [data],
  );
  const { data: bankDatas } = useGetAllAccountingBankAccountsQuery();

  const { data: cashPayData } = usePaginatedSearch({
    fetchQuery: useGetAllCashPaymentModesQuery,
  });

  const bankAccountOptions = useCallback(() => bankDatas?.map((item) => ({
    id: item?.bank_name,
    label: item?.bank_name,
  })), [bankDatas]);

  const cashPayDataOptions = useCallback(
    () => cashPayData?.map((item) => ({
      id: item.cash_payment_mode_description,
      label: item.cash_payment_mode_description,
    })),
    [cashPayData],
  );

  // console.log(bankDatas);

  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [paymentMode, setPaymentMode] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [receivingAccount, setReceivingAccount] = useState('');

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />

      <div className="p-2">
        <div className="w-1/2 bg-white rounded-lg border border-zinc-100">
          <div
            className="p-2 bg-zinc-50 rounded-t-lg border-b border-zinc-100"
          >
            <p>New Payment</p>
          </div>
          <div className="p-4 flex flex-col space-y-2">
            <InputText
              type="date"
              label="Date"
              onChange={setDate}
              value={date}
            />
            <InputText
              value={description}
              onChange={setDescription}
              label="Description"
              placeholder="Enter description"
            />
            <InputText
              value={amount}
              onChange={setAmount}
              label="Amount"
              type="number"
            />

            <InputSelect
              value={paymentMode}
              onChange={setPaymentMode}
              label="Payment Mode"
              data={cashPayDataOptions() ?? []}
            />
            <InputText
              label="Reference/Cheque number"
              onChange={setReferenceNo}
              value={referenceNo}
            />
            <InputSelect
              value={receivingAccount}
              onChange={setReceivingAccount}
              label="Receiving Bank Account"
              data={bankAccountOptions() ?? []}
            />
            <div className="pt-2">
              <Button
                className="shadow-none bg-sky-600 hover:bg-sky-700

            "
                size="sm"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsuranceDetailsPage;
