/* eslint-disable import/prefer-default-export */
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import Link from 'next/link';
import Avatar from '@/components/custom/Avatar';

export const columns: ColumnDef<AppointmentInterface>[] = [
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
    accessorKey: 'patient.first_name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={`${row.original.patient?.first_name} ${row.original.patient?.middle_name}`}
        />
        <p className="capitalize text-[12px]">
          {row.original.patient.first_name}
          {' '}
          {row.original.patient.middle_name}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'appointment_date',
    header: 'Date',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{moment(row.original?.appointment_date).format('ll')}</p>
        <p>{row.original.appointment_time}</p>
      </div>
    ),
  },
  {
    accessorKey: 'charges',
    header: 'Charges',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.charges ?? 0}
      </div>
    ),
  },
  {
    accessorKey: 'insurance_detail.insurance_name',
    header: 'Insurance',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.insurance_detail?.insurance_name ?? 'N/A'}
      </p>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/visits/${row.original.appointment_id}`}
      >
        View
      </Link>
    ),
  },
];
