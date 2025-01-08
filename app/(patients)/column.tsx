import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import { Badge } from '@/components/ui/badge';

export const columns: ColumnDef<PatientInterface>[] = [
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
    accessorKey: 'first_name',
    header: 'Name',
    cell: ({ row }) => (
      <p>
        {row.original.first_name}
        {' '}
        {row.original.middle_name}
      </p>
    ),
  },
  {
    accessorKey: 'dob',
    header: 'DOB',
    cell: ({ row }) => (
      <p>
        {row.original?.dob}
      </p>
    ),
  },
  {
    accessorKey: 'cell_phone',
    header: 'Phone',
    cell: ({ row }) => (
      <div className="lowercase">{row.original?.cell_phone}</div>
    ),
  },
];

//
export const admissionColumn: ColumnDef<AdmissionInterface>[] = [
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
    accessorKey: 'first_name',
    header: 'Name',
    cell: ({ row }) => (
      <p className="text-[12px]">
        {row.original.patient_detail?.first_name}
        {' '}
        {row.original.patient_detail.middle_name}
      </p>
    ),
  },
  {
    accessorKey: 'admission_date',
    header: 'Date',
    cell: ({ row }) => (
      <div
        className="text-[12px] text-slate-500"
      >
        <p>{moment(row.original.admission_date).format('ll')}</p>
        <p>{row.original.admission_time}</p>
      </div>
    ),
  },
  {
    accessorKey: 'ward.ward_description',
    header: 'Ward',
    cell: ({ row }) => (
      <div className="text-[12px] capitalize text-slate-500 ">
        <p>{row.original?.ward.ward_description.replace('WARD', '').trim().toLowerCase()}</p>
        <p />
      </div>
    ),
  },
  {
    accessorKey: 'ward_bed.bed_number',
    header: 'Bed Number',
    cell: ({ row }) => (
      <div className="lowercase text-[12px]">{row.original?.ward_bed.bed_number}</div>
    ),
  },
  {
    accessorKey: 'payment_status',
    header: 'Payment Status',
    cell: ({ row }) => (
      <div className="lowercase">
        {row.original.pay_status === 0 ? (
          <Badge
            className="capitalize bg-red-50 hover:bg-red-50 shadow-none text-red-500"
          >
            Not Paid
          </Badge>
        ) : (
          <Badge className="capitalize bg-emerald-50 text-emerald-500 shadow-none hover:bg-emerald-50">Paid</Badge>
        )}
      </div>
    ),
  },
];
