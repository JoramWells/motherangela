import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import {

  PatientAccountsInterface,
  PersonalAccountChargeInterface,
  PersonalChargesPaymentsInterface,
} from 'motherangela';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { MoveRight } from 'lucide-react';
import { formatCurrency } from '@/utils/number';
import Avatar from '@/components/custom/Avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const personalAccountColumns: ColumnDef<PersonalAccountChargeInterface>[] = [

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
          <Link href={`/patients/${row.original?.patient_id_pac}`} className="capitalize text-[12px] text-cyan-500 hover:underline ">
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
        {row.original?.doctor_name ?? 'N/A'}
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
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <Badge
          className={`${status === 1 ? 'bg-emerald-50 text-emerald-500' : 'bg-red-50 text-red-500'} shadow-none`}
        >
          {status === 1 ? 'Cleared' : 'Not Cleared'}
        </Badge>
      );
    },
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
    accessorKey: 'quantity',
    header: 'Qty',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {formatCurrency(row.original?.quantity) ?? 0}
      </div>
    ),
  },
  {
    accessorKey: 'date_of_charge',
    header: 'Date Charged',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{moment(row.original?.date_of_charge).format('ll')}</p>
        {/* <p>{row.original.appointment_time}</p> */}
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
          onClick={() => router.push(`/personal-account-charges/${row.original.personal_account_charge_id}?patient_id=${row.original.patient_id_pac}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//

export const personalChargesPaymentColumns: ColumnDef<PersonalChargesPaymentsInterface>[] = [

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
