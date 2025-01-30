/* eslint-disable import/prefer-default-export */

import { ColumnDef } from '@tanstack/react-table';
import { AccountingDepartmentInterface } from 'motherangela';
import Link from 'next/link';

//
export const accountingDepartmentsColumns: ColumnDef<AccountingDepartmentInterface>[] = [

  {
    accessorKey: 'department_name',
    header: 'Name',
    cell: ({ row }) => {
      const med_name = row.original.department_name;
      return (

        <p className="capitalize text-[12px]">
          { med_name.length > 20 ? `${med_name.substring(0, 20)}...` : med_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'hospital_store',
    header: 'Store',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.hospital_store?.hospital_store_description ?? 'N/A'}
      </div>
    ),
  },

  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.department_id}`}
      >
        View
      </Link>
    ),
  },
];
