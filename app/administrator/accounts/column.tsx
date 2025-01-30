/* eslint-disable import/prefer-default-export */
import { ColumnDef } from '@tanstack/react-table';
import { AccountDetailsInterface } from 'motherangela';
import Link from 'next/link';

export const accountsColumns: ColumnDef<AccountDetailsInterface>[] = [

  {
    accessorKey: 'account_name',
    header: 'Account Name',
    cell: ({ row }) => (
      <p className="capitalize text-[12px]">{row.original.account_name}</p>
    ),
  },
  {
    accessorKey: 'accounting_group.account_group_description',
    header: 'Type',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.accounting_group?.account_group_description}
      </p>
    ),
  },
  {
    accessorKey: 'accounting_department',
    header: 'Department',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.accounting_department?.department_name ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/account/${row.original.account_id}`}
      >
        View
      </Link>
    ),
  },
];
