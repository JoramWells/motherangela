import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import {
  ProcedureInterface,
  ProcedureItemResultsInterface,
} from 'motherangela';
import { useRouter } from 'next/navigation';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Avatar from '@/components/custom/Avatar';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/number';

//
export const procedureDetailsColumns: ColumnDef<ProcedureInterface>[] = [
  {
    accessorKey: 'procedure_name',
    header: 'Procedure Name',
    cell: ({ row }) => (
      <p
        className="text-[12px]"
      >
        {row.original?.procedure_name}
      </p>
    ),
  },
  {
    accessorKey: 'procedure_category.category_name',
    header: 'Category',
    cell: ({ row }) => (
      <p
        className="text-[12px] text-zinc-500"
      >
        {row.original?.procedure_category?.category_name}
      </p>
    ),
  },
  {
    accessorKey: 'procedure_cost',
    header: 'Cost',
    cell: ({ row }) => (
      <p className="text-[12px] text-zinc-500">
        {formatCurrency(row.original.procedure_cost)}
      </p>
    ),
  },
  {
    accessorKey: 'procedure_cost_corporate',
    header: 'Cost Corporate',
    cell: ({ row }) => (
      <div className="lowercase text-[12px] text-zinc-500">{formatCurrency(row.original?.procedure_cost_corporate)}</div>
    ),
  },
];

//
export const procedureItemResultsColumn: ColumnDef<ProcedureItemResultsInterface &{
  count?: number
}>[] = [
  {
    accessorKey: 'first_name',
    header: 'Patient Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={`${row.original?.appointment?.patient_detail?.first_name} ${row.original?.appointment?.patient_detail?.middle_name}`}
        />
        <Link href={`/patients/${row.original.appointment?.patient_id}`} className="capitalize text-[12px] text-cyan-500 hover:underline ">
          {row.original?.appointment?.patient_detail?.first_name}
          {' '}
          {row.original?.appointment?.patient_detail?.middle_name}
        </Link>
      </div>
    ),
  },
  // {
  //   accessorKey: 'procedure_name',
  //   header: 'Procedure Name',
  //   cell: ({ row }) => (
  //     <p
  //       className="text-[12px]"
  //     >
  //       {row.original?.procedure_item?.procedure_item_description}
  //     </p>
  //   ),
  // },
  {
    accessorKey: 'count',
    header: 'Procedures',
    cell: ({ row }) => (
      <p
        className="text-[12px] text-zinc-500"
      >
        {row.original?.count}
      </p>
    ),
  },
  {
    accessorKey: 'appointment.appointment_date',
    header: 'Appointment Date',
    cell: ({ row }) => (
      <p className="text-[12px] text-zinc-500">
        {moment(row.original.appointment?.appointment_date).format('ll')}
      </p>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          className="shadow-none"
          variant="outline"
          onClick={() => router.push(`/procedure-results/${row.original.appointment_id}?patient_id=${row.original.appointment?.patient_detail.patient_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
//
export const procedureItemResultDetailsColumn: ColumnDef<ProcedureItemResultsInterface>[] = [
  // {
  //   accessorKey: 'procedure_name',
  //   header: 'Procedure Name',
  //   cell: ({ row }) => (
  //     <p
  //       className="text-[12px]"
  //     >
  //       {row.original?.procedure_item?.procedure_item_description}
  //     </p>
  //   ),
  // },
  {
    accessorKey: 'procedure_item.procedure_item_description',
    header: 'Procedure Name',
    cell: ({ row }) => (
      <p
        className="text-[12px] text-zinc-700"
      >
        {row.original?.procedure_item?.procedure_item_description}
      </p>
    ),
  },
  {
    accessorKey: 'appointment.appointment_date',
    header: 'Appointment Date',
    cell: ({ row }) => (
      <p className="text-[12px] text-zinc-500">
        {moment(row.original.appointment?.appointment_date).format('ll')}
      </p>
    ),
  },
  {
    accessorKey: 'input',
    header: 'Flag/Input',
    cell: ({ row }) => {
      const { input, normal_values } = row.original || {};
      const [lowerVal, higherVal] = normal_values.split('-');

      const compare = (value: number) => {
        if (value < Number(lowerVal)) {
          return -1;
        } if (value > Number(higherVal)) {
          return 1;
        }
        return 0;
      };

      return (
        <div className={`text-[12px] flex items-center space-x-2
        ${compare(Number(input)) < 0 && 'text-orange-500'}
        ${compare(Number(input)) > 0 && 'text-red-500'}
        ${compare(Number(input)) === 0 && 'text-green-500'}
        `}
        >
          <Badge
            className={`shadow-none rounded-full
            ${compare(Number(input)) < 0 && 'bg-orange-50 hover:bg-orange-100 border border-orange-200 text-orange-500'}
        ${compare(Number(input)) > 0 && 'bg-red-50 hover:bg-red-100 border border-red-200 text-red-500'}
        ${compare(Number(input)) === 0 && 'bg-green-50 hover:bg-green-100 border border-green-200 text-green-500'}
            `}
          >
            {compare(Number(input)) < 0 && 'LOW'}
            {compare(Number(input)) > 0 && 'HIGH'}
            {compare(Number(input)) === 0 && 'NORMAL'}
          </Badge>
          <p>
            {input}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: 'normal_values',
    header: 'Normal Values',
    cell: ({ row }) => (
      <p className="text-[12px] text-zinc-500">
        {row.original.normal_values}
      </p>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          className="shadow-none"
          variant="outline"
          onClick={() => router.push(`/procedure-results/${row.original.procedure_item_result_id}/info?patient_id=${row.original.appointment?.patient_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];
