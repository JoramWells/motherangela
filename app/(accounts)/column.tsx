import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import {
  AccountDetailsInterface,
  AccountingAssetsInterface, AccountingDepartmentInterface, AccountingDocumentsInterface,
} from 'motherangela';
import moment from 'moment';
import { Badge } from '@/components/ui/badge';

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

//
export const accountingAssetsColumns: ColumnDef<AccountingAssetsInterface>[] = [

  {
    accessorKey: 'asset_description',
    header: 'Name',
    cell: ({ row }) => (

      <p className="capitalize text-[12px]">
        {row.original.asset_description}
      </p>
    ),
  },
  {
    accessorKey: 'accounting_asset_category.asset_category_description',
    header: 'Category',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.accounting_asset_category?.asset_category_description ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'accounting_asset_location.asset_location_description',
    header: 'Location',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.accounting_asset_location?.asset_location_description}</p>
      </div>
    ),
  },
  {
    accessorKey: 'accounting_asset_status?.asset_status_description',
    header: 'Status',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.accounting_asset_status?.asset_status_description}</p>
      </div>
    ),
  },
  {
    accessorKey: 'date_of_last_physical_check',
    header: 'Last Check',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{moment(row.original.date_of_last_physical_check).format('ll')}</p>
      </div>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/assets/${row.original.asset_id}`}
      >
        View
      </Link>
    ),
  },
];

//
export const accountingDocumentsColumns: ColumnDef<AccountingDocumentsInterface>[] = [

  {
    accessorKey: 'item_description',
    header: 'Name',
    cell: ({ row }) => {
      const med_name = row.original.item_description;
      return (

        <p className="capitalize text-[12px]">
          { med_name.length > 20 ? `${med_name.substring(0, 20)}...` : med_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'accounting_client.client_name',
    header: 'Client',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.accounting_client?.client_name ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'accounting_document_type.document_type_description',
    header: 'Type',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.accounting_document_type?.document_type_description ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'accounting_store?.store_description',
    header: 'Store',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.accounting_store?.store_description ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'cleared',
    header: 'Cleared',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        {row.original.cleared === 'YES' ? (
          <Badge
            className="shadow-none bg-green-50 text-green-500 hover:bg-green-50"
          >
            Yes
          </Badge>
        ) : (
          <Badge
            className="shadow-none bg-red-50 text-red-500 hover:bg-red-50"
          >
            No
          </Badge>
        )}
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
    accessorKey: 'date_authorized',
    header: 'Authorized',
    cell: ({ row }) => {
      const authorized = row.original.date_authorized;
      return (
        <div className="text-[12px] text-slate-500 ">
          {authorized.toString().length > 0
            ? moment(row.original?.date_authorized).format('ll')
            : (
              <Badge
                className="shadow-none"
                variant="outline"
              >
                Not Authorized
              </Badge>
            )}
        </div>
      );
    },
  },
  {
    accessorKey: 'date_approved',
    header: 'Approved',
    cell: ({ row }) => {
      const approved = row.original.date_approved;
      return (
        <div className="text-[12px] text-slate-500 ">
          {approved.toString().length > 0
            ? moment(row.original?.date_approved).format('ll')
            : (
              <Badge
                className="shadow-none"
                variant="outline"
              >
                Not approved
              </Badge>
            )}
        </div>
      );
    },
  },
  {
    accessorKey: 'date_created',
    header: 'Created',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {moment(row.original?.date_created).format('ll')}
      </div>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.document_id}`}
      >
        View
      </Link>
    ),
  },
];

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
