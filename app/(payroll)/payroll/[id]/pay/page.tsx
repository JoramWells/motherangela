'use client';

import React, { use } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useGetPayrollEmployeePayCalculationsQuery } from '@/api/payroll/payrollEmployeePayCalculations.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetAllPayrollEmployeeMonthlyDeductionFileByPayrollIDQuery } from '@/api/payroll/payrollEmployeeMonthlyDeducationsFile.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { useGetAllPayrollEmployeeBenefitsFileByPayrollIDQuery } from '@/api/payroll/payrollEmployeeBenefitsFile.api';
import { calculateSum, formatCurrency, SumInterface } from '@/utils/number';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Requests',
    link: '',
  },
];

function PayrollPayPage({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const payroll_id = searchParams.get('payroll_id');
  const employee_id = searchParams.get('employee_id');
  const { data } = useGetPayrollEmployeePayCalculationsQuery(id, {
    skip: !id,
  });

  const { data: deductionData } = usePaginatedSearch({
    fetchQuery: useGetAllPayrollEmployeeMonthlyDeductionFileByPayrollIDQuery,
    id: payroll_id as string,
    employee_id: employee_id as string,
  });

  //   const { data: loanDeductionData } = usePaginatedSearch({
  //     fetchQuery: useGetAllPayrollEmployeeLoanDeductionByPayrollIDQuery,
  //     id: payroll_id as string,
  //     employee_id: employee_id as string,
  //   });

  const { data: benefitsData } = usePaginatedSearch({
    fetchQuery: useGetAllPayrollEmployeeBenefitsFileByPayrollIDQuery,
    id: payroll_id as string,
    employee_id: employee_id as string,
  });

  console.log(data);

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2 flex flex-row space-x-2 items-start"
      >
        <div className="w-1/4 bg-white p-4 rounded-lg flex flex-col items-center space-y-2">
          <Image
            src="/assets/img/profile.png"
            alt="profile"
            width={60}
            height={60}
            className="rounded-full"
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'contain',
            }}
          />

          <div className="flex flex-col items-center justify-center w-full">
            {data?.payroll_employee_record?.full_name

              ? (
                <div className="flex flex-col items-center justify-center">
                  <p
                    className="text-[14px] font-semibold text-zinc-700"
                  >
                    {data?.payroll_employee_record?.full_name}
                  </p>
                  <p
                    className="text-[12px] font-semibold text-zinc-700"
                  >
                    {/* {data.patient_detail.patient_gender === '0'
                      ? 'Male' : 'Female'} */}
                  </p>

                  {/*  */}
                  <p
                    className="text-[12px] font-semibold text-zinc-700"
                  >
                    {/* {data.patient_detail?.cell_phone} */}
                  </p>
                  <p
                    className="text-[12px] font-semibold text-zinc-700"
                  >
                    DOB:
                    {' '}
                    {/* {data.patient_detail?.dob} */}
                  </p>
                </div>
              )
              : (
                <Link
                  href="/"
                  className="text-[12px] text-sky-600 underline hover:text-sky-700 "
                >
                  Update Patient profile
                </Link>
              )}
          </div>
        </div>
        <div className="border-l h-[50vh]" />
        <div
          className="flex-1"
        >
          <div className="flex-1 rounded-lg flex space-x-1">
            {/* Benefits */}
            <div className="w-1/2  bg-white rounded-lg">

              <div className="p-2 border-b">
                <p>Earnings</p>
              </div>

              <div className="p-2 flex flex-col space-y-2">
                <div>
                  <p
                    className="text-[14px] font-semibold text-zinc-700"
                  >
                    Pay
                  </p>
                </div>
                <hr className="text-zinc-100 border-zinc-50" />
                <div
                  className="flex justify-between items-center text-[12px] text-zinc-500"
                >
                  <p>Basic Pay</p>
                  <p
                    className="text-zinc-700 text-[14px] font-semibold"
                  >
                    {formatCurrency(data?.basic_pay as unknown as number)}
                    {' '}
                    /=
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 p-2">
                <p
                  className="text-[14px] font-semibold text-zinc-700"
                >
                  Benefits
                </p>
                <hr className="border-zinc-50" />
                {benefitsData?.map((item, idx) => (
                  <>
                    <div
                      key={item.employee_benefits_file_id}
                      className="flex justify-between items-center text-[12px] text-zinc-500"
                    >
                      <p>
                        {item?.payroll_other_income_and_allowance?.other_income_description}
                      </p>
                      <p
                        className="text-emerald-500 font-semibold"
                      >
                        +
                        {formatCurrency(Number(item.amount))}
                      </p>
                    </div>
                    {benefitsData.length - 1 !== idx
                  && <hr className="border-zinc-50" />}
                  </>
                ))}
              </div>
              <hr />
              <div
                className="p-2 text-[14px] flex flex-row space-x-2 justify-end text-slate-500"
              >
                <p>
                  Earnings:
                </p>
                <p
                  className="text-zinc-700 font-semibold"
                >
                  {formatCurrency(calculateSum(benefitsData as SumInterface[])
                 + Number(data?.basic_pay))}
                  {' '}
                  /=

                </p>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-lg relative">
              <div
                className="p-2 border-b"
              >
                <p
                  className=" text-zinc-700"
                >
                  Deductions
                </p>

              </div>
              <div className="flex flex-col space-y-2 p-2">
                <div>
                  <p
                    className="text-[14px] font-semibold text-zinc-700"
                  >
                    Monthly Deductions
                  </p>
                </div>
                <hr className="border-zinc-50" />
                {deductionData?.map((item, idx) => (
                  <>
                    <div
                      key={item.monthly_deduction_file_id}
                      className="rounded-lg flex justify-between text-[12px] text-zinc-500"
                    >
                      <p>
                        {item.payroll_deduction.deduction_description}

                      </p>
                      <p
                        className="font-semibold text-red-500 "
                      >
                        -
                        {formatCurrency(item.amount as unknown as number)}
                      </p>
                    </div>
                    {idx !== deductionData.length - 1
              && <hr className="border-zinc-50" />}
                  </>
                ))}
              </div>
              <div
                className="absolute bottom-0 p-2 border-t w-full flex text-[14px] justify-end space-x-2"
              >
                <p className="text-zinc-500">
                  Deductions:
                </p>
                <p className="font-semibold text-zinc-700">
                  {calculateSum(deductionData)}
                  {' '}
                  /=
                </p>
              </div>
            </div>

          </div>
          <div
            className="flex justify-end mt-1 p-2 bg-white rounded-lg text-[14px] space-x-2"
          >
            <span
              className="text-zinc-500"
            >
              NET PAY:
            </span>

            <p className="font-bold text-zinc-700">
              KSH
              {' '}
              {formatCurrency(Number(data?.net_pay))}
              {' '}
              /=

            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default PayrollPayPage;
