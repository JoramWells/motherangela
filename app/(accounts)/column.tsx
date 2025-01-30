/* eslint-disable no-nested-ternary */
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import {
  AccountDetailsInterface,
  AccountingAssetsInterface, AccountingDepartmentInterface, AccountingDocumentsInterface,
  InvoicePaymentInterface,
  PatientAccountsInterface,
  PersonalChargesPaymentsInterface,
} from 'motherangela';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { MoveRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/utils/number';
import Avatar from '@/components/custom/Avatar';
import { Button } from '@/components/ui/button';

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
    cell: ({ row }) => {
      const { asset_status_description: status } = row.original.accounting_asset_status || {};
      return (
        status === 'GOOD CONDITION'
          ? (
            <Badge
              className="text-emerald-500 bg-white hover:bg-white border-emerald-200"
              variant="outline"
            >
              {status}
            </Badge>
          ) : status === 'REPAIRABLE'
            ? (
              <Badge
                className="text-orange-500 bg-white hover:bg-white border-orange-200"
                variant="outline"
              >
                {status}
              </Badge>
            ) : (
              <Badge
                className="text-red-500 bg-white hover:bg-white border-red-200"
                variant="outline"
              >
                {status}
              </Badge>
            )
      );
    },
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

//
export const invoicePaymentsColumns: ColumnDef<InvoicePaymentInterface>[] = [

  {
    accessorKey: 'item_description',
    header: 'Name',
    cell: ({ row }) => {
      const med_name = row.original.service_desc;
      return (

        <p className="capitalize text-[12px]">
          { med_name.length > 20 ? `${med_name.substring(0, 20)}...` : med_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'insurance_name_invoice_payments',
    header: 'Invoice Name',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.insurance_name_invoice_payments ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'user?.full_name',
    header: 'By',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.user?.full_name ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {formatCurrency(row.original?.amount) ?? 'N/A'}
      </div>
    ),
  },
  // {
  //   accessorKey: 'date_authorized',
  //   header: 'Authorized',
  //   cell: ({ row }) => {
  //     const authorized = row.original.date_authorized;
  //     return (
  //       <div className="text-[12px] text-slate-500 ">
  //         {authorized.toString().length > 0
  //           ? moment(row.original?.date_authorized).format('ll')
  //           : (
  //             <Badge
  //               className="shadow-none"
  //               variant="outline"
  //             >
  //               Not Authorized
  //             </Badge>
  //           )}
  //       </div>
  //     );
  //   },
  // },
  // {
  //   accessorKey: 'date_approved',
  //   header: 'Approved',
  //   cell: ({ row }) => {
  //     const approved = row.original.date_approved;
  //     return (
  //       <div className="text-[12px] text-slate-500 ">
  //         {approved.toString().length > 0
  //           ? moment(row.original?.date_approved).format('ll')
  //           : (
  //             <Badge
  //               className="shadow-none"
  //               variant="outline"
  //             >
  //               Not approved
  //             </Badge>
  //           )}
  //       </div>
  //     );
  //   },
  // },
  {
    accessorKey: 'date_of_payment',
    header: 'Payment',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {moment(row.original?.date_of_payment).format('ll')}
      </div>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.invoice_payment_id}`}
      >
        View
      </Link>
    ),
  },
];

//

export const personalAccountColumns: ColumnDef<PersonalChargesPaymentsInterface>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: 'patient_detail.first_name',
    header: 'Personal Account Name',
    cell: ({ row }) => {
      const first_name = row.original?.patient_detail?.first_name;
      const middle_name = row.original?.patient_detail?.middle_name;
      return (
        <div className="flex-row flex space-x-2 items-center">
          <Avatar
            name={`${first_name} ${middle_name}`}
          />
          <Link href={`/patients/${row.original?.patient_id_personal_charge_payments}`} className="capitalize text-[12px] text-cyan-500 hover:underline ">
            {first_name}
            {' '}
            {middle_name}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'user?.fullname',
    header: 'By',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original?.user?.full_name ?? 'N/A'}
      </p>
    ),
  },
  {
    accessorKey: 'service_desc',
    header: 'Service',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.service_desc ?? 'N/A'}
      </p>
    ),
  },
  {
    accessorKey: 'date_of_payment',
    header: 'Date',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{moment(row.original?.date_of_payment).format('ll')}</p>
        {/* <p>{row.original.appointment_time}</p> */}
      </div>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Charge Amount',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {formatCurrency(row.original?.amount) ?? 0}
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
          className="shadow-none"
          variant="outline"
          onClick={() => router.push(`/visits/${row.original.charge_payment_id}?patient_id=${row.original.patient_id_personal_charge_payments}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//

export const patientAccountColumns: ColumnDef<PatientAccountsInterface>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: 'patient_detail.first_name',
    header: 'Personal Account Name',
    cell: ({ row }) => {
      const first_name = row.original?.patient_detail?.first_name;
      const middle_name = row.original?.patient_detail?.middle_name;
      return (
        <div className="flex-row flex space-x-2 items-center">
          <Avatar
            name={`${first_name} ${middle_name}`}
          />
          <Link href={`/patients/${row.original?.patient_id}`} className="capitalize text-[12px] text-cyan-500 hover:underline ">
            {first_name}
            {' '}
            {middle_name}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'account_type.account_type_description',
    header: 'Account Type',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original?.account_type?.account_type_description ?? 'N/A'}
      </p>
    ),
  },
  {
    accessorKey: 'accounting_account_detail.account_name',
    header: 'Account Name',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.accounting_account_detail?.account_name ?? 'N/A'}
      </p>
    ),
  },
  // {
  //   accessorKey: 'date_of_payment',
  //   header: 'Date',
  //   cell: ({ row }) => (
  //     <div className="text-[12px] text-slate-500">
  //       <p>{moment(row.original?.date_of_payment).format('ll')}</p>
  //       {/* <p>{row.original.appointment_time}</p> */}
  //     </div>
  //   ),
  // },
  // {
  //   accessorKey: 'amount',
  //   header: 'Charge Amount',
  //   cell: ({ row }) => (
  //     <div className="text-[12px] text-slate-500 ">
  //       {formatCurrency(row.original?.amount) ?? 0}
  //     </div>
  //   ),
  // },

  {
    accessorKey: 'action',
    header: 'Details',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          className="shadow-none"
          variant="outline"
          onClick={() => router.push(`/visits/${row.original.patient_account_id}?patient_id=${row.original.patient_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];
