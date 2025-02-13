import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import {
  PayrollEmployeeBenefitsFileInterface, PayrollEmployeeDeductionInterface,
  PayrollEmployeeLoanRecordsInterface, PayrollEmployeeMonthlyDeductionFileInterface,
  PayrollEmployeeMonthlyDeductionInterface,
  PayrollEmployeeRecordsInterface,
  PayrollPeriodEmployeePayCalculationsInterface, PayrollPeriodsInterface,
} from 'motherangela';
import moment from 'moment';
import { EyeOff, MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Avatar from '@/components/custom/Avatar';
import { Button } from '@/components/ui/button';
import { formatCurrency, obfuscatePhoneNumber } from '@/utils/number';

export const employeeRecordsColumn: ColumnDef<PayrollEmployeeRecordsInterface>[] = [
  {
    accessorKey: 'full_name',
    header: 'Staff Name',
    cell: ({ row }) => {
      const { full_name } = row.original || {};
      const nameArr = full_name?.split(' ');
      return (
        <div className="flex-row flex space-x-2 items-center">
          <Avatar
            name={row.original.full_name as string}
          />
          <Link
            className="capitalize text-[12px] text-cyan-500 hover:underline "
            href="/"
          >
            {nameArr ? `${nameArr[0]} ${nameArr[1]?.charAt(1)}.` : 'No name'}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'job_number',
    header: 'Job No.',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.job_number ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'active_status',
    header: 'Status',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.active_status}</p>
      </div>
    ),
  },

  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.address ?? 'No Address'}
      </p>
    ),
  },
  {
    accessorKey: 'cell_phone',
    header: 'Phone',
    cell: ({ row }) => {
      const { cellphone } = row.original || {};
      const [visible, setVisible] = useState(false);
      const toggleVisibility = () => setVisible((prev) => !prev);
      return (
        <div className="text-zinc-500 flex flex-row items-center space-x-2">
          <p
            className="text-[12px]"
          >
            {cellphone
      && visible ? cellphone : obfuscatePhoneNumber(cellphone!)}
          </p>
          <EyeOff size={14} onClick={toggleVisibility} />
        </div>
      );
    },
  },
  {
    accessorKey: 'Action',
    header: 'View',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          variant="outline"
          className="shadow-none"
          onClick={() => router.push(`/deductions/${row.original.employee_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const employeeBenefitsColumns: ColumnDef<PayrollEmployeeBenefitsFileInterface>[] = [
  {
    accessorKey: 'payroll_employee_record.fullname',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={row.original.payroll_employee_record?.full_name as string}
        />
        <p className="capitalize text-[12px]">
          {row.original.payroll_employee_record?.full_name}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.amount ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'Action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.employee_benefits_file_id}`}
      >
        View
      </Link>
    ),
  },
];

//
export const payrollEmployeeDeductionsColumns: ColumnDef<PayrollEmployeeDeductionInterface>[] = [
  {
    accessorKey: 'payroll_employee_record.fullname',
    header: 'Name',
    cell: ({ row }) => {
      const { full_name } = row.original.payroll_employee_record || {};
      const nameArr = full_name?.split(' ');
      return (
        <div className="flex-row flex space-x-2 items-center">
          <Avatar
            name={row.original.payroll_employee_record?.full_name as string}
          />
          <Link
            className="capitalize text-[12px] text-cyan-500 hover:underline "
            href="/"
          >
            {nameArr ? `${nameArr[0]} ${nameArr[1]?.charAt(1)}.` : 'No name'}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'payroll_deduction.deduction_description',
    header: 'Type',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.payroll_deduction.deduction_description ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'fixed_amount',
    header: 'Amount',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.fixed_amount ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'fiscal_year',
    header: 'Timeline',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        <p>
          Year:
          {' '}
          {row.original?.fiscal_year ?? 'N/A'}
        </p>

        {/*  */}
        <p>
          Month:
          {row.original?.fiscal_month ?? 'N/A'}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'Action',
    header: 'View',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          variant="outline"
          className="shadow-none"
          onClick={() => router.push(`/deductions/${row.original.employee_deduction_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const payrollColumns: ColumnDef<PayrollPeriodsInterface>[] = [
  {
    accessorKey: 'payroll_description',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Link
          className="capitalize text-[12px] text-cyan-500 hover:underline"
          href={`/payroll/${row.original.payroll_id}/payments`}
        >
          {row.original.payroll_description}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: 'fixed_amount',
    header: 'Category',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.payroll_employee_category?.employee_category_description ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'start_date',
    header: 'Date',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        <p>
          Start:
          {' '}
          {moment(row.original?.start_date).format('ll')}
        </p>
        <p>
          End:
          {' '}
          {moment(row.original?.end_date).format('ll')}

        </p>
      </div>
    ),
  },
  {
    accessorKey: 'fiscal_year',
    header: 'Timeline',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        <p>
          Year:
          {' '}
          {row.original?.fiscal_year ?? 'N/A'}
        </p>

        {/*  */}
        <p>
          Month:
          {row.original?.fiscal_month ?? 'N/A'}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Details',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          className="shadow-none text-sky-600 border-sky-200"
          variant="outline"
          onClick={() => router.push(`/payroll/${row.original.payroll_id}/payments`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const payrollMonthlyDeductionsColumns: ColumnDef<
PayrollEmployeeMonthlyDeductionInterface>[] = [
  {
    accessorKey: 'payroll_employee_record.fullname',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={row.original.payroll_employee_record?.full_name as string}
        />
        <p className="capitalize text-[12px]">
          {row.original.payroll_employee_record?.full_name}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'payroll_deduction.deduction_description',
    header: 'Type',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.payroll_deduction.deduction_description ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.amount ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'Action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.monthly_deduction_id}`}
      >
        View
      </Link>
    ),
  },
];

//
export const payrollEmployeeLoanRecordsColumns: ColumnDef<
PayrollEmployeeLoanRecordsInterface>[] = [
  {
    accessorKey: 'payroll_employee_record.fullname',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={row.original.payroll_employee_record?.full_name as string}
        />
        <p className="capitalize text-[12px]">
          {row.original.payroll_employee_record?.full_name}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'loan_description',
    header: 'Description',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.loan_description ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.loan_amount ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'Action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.loan_id}`}
      >
        View
      </Link>
    ),
  },
];

//
export const employeeEmployeePayCalculationsColumn:
ColumnDef<PayrollPeriodEmployeePayCalculationsInterface>[] = [

  {
    accessorKey: 'payroll_employee_record.fullname',
    header: 'Staff Name',
    cell: ({ row }) => {
      const { full_name } = row.original.payroll_employee_record || {};
      const nameArr = full_name?.split(' ');
      return (
        <div className="flex-row flex space-x-2 items-center">
          <Avatar
            name={row.original.payroll_employee_record?.full_name as string}
          />
          <Link
            className="capitalize text-[12px] text-cyan-500 hover:underline "
            href={`/payroll/payments/${row.original.payroll_period_employee_pay_calculation_id}/pay?payroll_id=${row.original.payroll_id}&employee_id=${row.original.employee_id}`}
          >
            {nameArr ? `${nameArr[0]} ${nameArr[1]?.charAt(1)}.` : 'No name'}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'basic_pay',
    header: 'Basic Pay',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{formatCurrency(Number(row.original.basic_pay))}</p>
      </div>
    ),
  },
  {
    accessorKey: 'advance_pay',
    header: 'Advance Pay',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.advance_pay ?? 'No Advance'}
      </p>
    ),
  },
  {
    accessorKey: 'job_number',
    header: 'Job No.',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.job_number ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'bank_account_number',
    header: 'Bank A/C',
    cell: ({ row }) => {
      const { bank_account_number } = row.original || {};
      const [visible, setVisible] = useState(false);
      const toggleVisibility = () => setVisible((prev) => !prev);
      return (
        <div className="text-zinc-500 flex flex-row items-center space-x-2">
          <p
            className="text-[12px]"
          >
            {bank_account_number
      && visible ? bank_account_number : obfuscatePhoneNumber(bank_account_number!)}
          </p>
          <EyeOff size={14} onClick={toggleVisibility} />
        </div>
      );
    },
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          variant="outline"
          className="shadow-none"
          onClick={() => router.push(`/payroll/payments/${row.original.payroll_period_employee_pay_calculation_id}/pay?payroll_id=${row.original.payroll_id}&employee_id=${row.original.employee_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const payrollMonthlyDeductionsFileColumns: ColumnDef<
PayrollEmployeeMonthlyDeductionFileInterface>[] = [

  {
    accessorKey: 'payroll_deduction.deduction_description',
    header: 'Type',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.payroll_deduction.deduction_description ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.amount ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'Action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.monthly_deduction_file_id}`}
      >
        View
      </Link>
    ),
  },
];
