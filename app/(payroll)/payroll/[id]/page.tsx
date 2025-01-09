'use client';

import React, { use, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetPayrollMonthlyDeductionByPayrollIDQuery } from '@/api/payroll/payrollMonthlyDeductions.api';
import usePreprocessData from '@/hooks/usePreprocessData';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { DataTable } from '@/components/custom/table/DataTable';
import { payrollMonthlyDeductionsColumns } from '../../column';
import useSearch from '@/hooks/useSearch';

function PayrollDetails({ params }:{params:any}) {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const { id } = use(params);
  const { data: payrollMonthlyData } = useGetPayrollMonthlyDeductionByPayrollIDQuery({
    id,
    page: Number(page),
    pageSize: 10,
    searchQuery: search,
  });
  const { data, total } = usePreprocessData(payrollMonthlyData);
  useSearch({ search, setSearch });

  return (
    <div>
      <BreadcrumbNav />
      <div className="p-2">
        <div className="w-full bg-white rounded-lg border">
          <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-slate-200">
            <h2 className="text-lg  text-slate-700">
              Payrolls Deductions
            </h2>
          </div>
          <DataTable
            columns={payrollMonthlyDeductionsColumns}
            data={data ?? []}
            total={total}
            search={search}
            setSearch={setSearch}
            isSearch
          />
        </div>
      </div>
    </div>
  );
}

export default PayrollDetails;
