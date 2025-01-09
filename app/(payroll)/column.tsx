import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { PayrollEmployeeBenefitsFileInterface, PayrollEmployeeRecordsInterface } from 'motherangela';
import moment from 'moment';
import Avatar from '@/components/custom/Avatar';

export const employeeRecordsColumn: ColumnDef<PayrollEmployeeRecordsInterface>[] = [

  {
    accessorKey: 'full_name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar name={row.original.full_name as string} />
        <p className="capitalize text-[12px]">{row.original.full_name}</p>
      </div>
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
    accessorKey: 'cellphone',
    header: 'Phone',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.cellphone}
      </p>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.employee_id}`}
      >
        View
      </Link>
    ),
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
export const payrollEmployeeDeductionsColumns: ColumnDef<PayrollEmployeeBenefitsFileInterface>[] = [
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
export const payrollColumns: ColumnDef<PayrollEmployeeBenefitsFileInterface>[] = [
  {
    accessorKey: 'payroll_description',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <p className="capitalize text-[12px]">
          {row.original.payroll_description}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'fixed_amount',
    header: 'Category',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.payroll_employee_category.employee_category_description ?? 'N/A'}
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
    accessorKey: 'Action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/payroll/${row.original.payroll_id}`}
      >
        View
      </Link>
    ),
  },
];

//
export const payrollMonthlyDeductionsColumns: ColumnDef<PayrollEmployeeBenefitsFileInterface>[] = [
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
        href={`/maternity/${row.original.employee_benefits_file_id}`}
      >
        View
      </Link>
    ),
  },
];
