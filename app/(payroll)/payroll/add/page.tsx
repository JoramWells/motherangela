'use client';

import React, { useCallback, useMemo, useState } from 'react';
import moment from 'moment';
import { Loader2 } from 'lucide-react';
import InputSelect from '@/components/custom/forms/InputSelect';
import InputText from '@/components/custom/forms/InputText';
import InputCheckbox from '@/components/custom/forms/InputCheckbox';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetPayrollEmployeeCategoriesQuery } from '@/api/payroll/payrollEmployeeCategory.api';
import { Button } from '@/components/ui/button';
import { useUserContext } from '@/context/UserContext';
import { useGetAllPayrollPayPeriodsQuery } from '@/api/payroll/payrollPayPeriods.api';
import { useAddPayrollPeriodsMutation } from '@/api/payroll/payrollPeriods';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Payroll Records',
    link: '',
  },
  {
    id: '3',
    label: 'Add',
    link: '',
  },
];

function AddPayrollPage() {
  const { data } = usePaginatedSearch({
    fetchQuery: useGetPayrollEmployeeCategoriesQuery,
  });
  const employeeCategoryOptions = useCallback(
    () => data?.map((item) => ({
      id: item.employee_category_id.toString(),
      label: item.employee_category_description,
    })),
    [data],
  )();

  const { data: payrollPayData } = usePaginatedSearch({
    fetchQuery: useGetAllPayrollPayPeriodsQuery,
  });

  const payPeriodOptionsData = useCallback(() => payrollPayData?.map((item) => ({
    id: item.pay_period_id,
    label: item.pay_description,
  })), [payrollPayData])();

  console.log(payrollPayData);

  const { user } = useUserContext();

  const findEndMonth = () => {
    const endOfMonth = new Date();
    endOfMonth.setMonth(endOfMonth.getMonth() + 1, 0);
    return endOfMonth.toISOString().split('T')[0];
  };

  const [employeeCategory, setEmployeeCategory] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(findEndMonth());
  const [deductNHIF, setDeductNHIF] = useState(false);
  const [deductNSSF, setDeductNSSF] = useState(false);
  const [payPeriod, setPayPeriod] = useState('');

  const [addPayrollPeriods, { isLoading }] = useAddPayrollPeriodsMutation();

  const inputValues = useMemo(() => [
    {
      deduct_nhif: deductNHIF ? 'YES' : 'NO',
      deduct_nssf: deductNSSF ? 'YES' : 'NO',
      employee_category_id: employeeCategory,
      end_date: endDate,
      fiscal_month: moment(startDate).month() + 1,
      fiscal_year: moment(startDate).year(),
      hospital_id: user?.hospital_id,
      pay_period_id: payPeriod,
      payroll_description: `${moment(startDate).format('MMMM')} ${moment(startDate).year() + 1} PAYROLL`.toUpperCase(),
      start_date: startDate,
    },
  ], [deductNHIF, deductNSSF, employeeCategory, endDate, startDate, user, payPeriod]);
  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2"
      >
        <div
          className="w-1/2 bg-white rounded-lg border border-zinc-100"
        >
          <div
            className="bg-zinc-50 p-2 rounded-t-lg border-b"
          >
            <p
              className="font-semibold text-zinc-700 text-[14px]"
            >
              New Payroll Record
            </p>
          </div>
          <div
            className=" flex p-2 flex-col space-y-4"
          >
            <InputSelect
              label="Payment Period"
              placeholder="Period"
              data={payPeriodOptionsData}
              value={payPeriod}
              onChange={setPayPeriod}
            />
            <InputSelect
              label="Employee Category"
              placeholder="Employee Category"
              data={employeeCategoryOptions}
              value={employeeCategory}
              onChange={setEmployeeCategory}
            />
            <div
              className="flex items-center space-x-2"
            >
              <InputText
                label="Start Date"
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={setStartDate}
              />
              <InputText
                label="End Date"
                placeholder="End Date"
                type="date"
                value={endDate}
                onChange={setEndDate}
              />
            </div>
            <InputCheckbox
              label="Deduct NHIF"
              value={deductNHIF}
              onChange={setDeductNHIF}
            />
            <InputCheckbox
              label="Deduct NSSF"
              value={deductNSSF}
              onChange={setDeductNSSF}
            />
            <div
              className="justify-end flex"
            >
              <Button
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 shadow-none"
                onClick={() => addPayrollPeriods(inputValues[0])}
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="animate-spin mr-2" size={16} />}
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPayrollPage;
