import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import {
  AdmissionInterface, AppointmentInterface, InternalLabRequestInterface,
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

export const internalLabRequestColumns: ColumnDef<InternalLabRequestInterface>[] = [

  {
    accessorKey: 'first_name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={`${row.original?.patient_detail?.first_name} ${row.original?.patient_detail?.middle_name}`}
        />
        <Link href={`/patients/${row.original.patient_id}`} className="capitalize text-[12px] text-cyan-500 hover:underline ">
          {row.original?.patient_detail?.first_name}
          {' '}
          {row.original?.patient_detail?.middle_name}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: 'user.full_name',
    header: 'Performed By',
    cell: ({ row }) => (
      <p
        className="text-[12px] text-zinc-500"
      >
        {row.original?.user?.full_name}
      </p>
    ),
  },
  {
    accessorKey: 'appointment.appointment_date',
    header: 'Appointment Date',
    cell: ({ row }) => (
      <p
        className="text-[12px] text-zinc-500"
      >
        {moment(row.original?.appointment?.appointment_date).format('ll')}
      </p>
    ),
  },
  {
    accessorKey: 'procedure_detail.procedure_name',
    header: 'Procedure',
    cell: ({ row }) => {
      const { procedure_name } = row.original.procedure_detail || {};
      return (
        <p className="text-[12px] text-zinc-500">
          {procedure_name && procedure_name?.length > 25 ? `${procedure_name.substring(0, 25)}..` : procedure_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'cost',
    header: 'Cost',
    cell: ({ row }) => (
      <div className="lowercase text-[12px] text-zinc-500 font-semibold">{formatCurrency(row.original?.cost)}</div>
    ),
  },
  {
    accessorKey: 'results',
    header: 'Results',
    cell: ({ row }) => {
      const { results } = row.original;
      return (
        <div className="lowercase text-[12px] text-zinc-500">{results?.length > 25 ? `${results.substring(0, 25)}..` : results}</div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <div className="lowercase">
          {status === 1
            ? (
              <Badge
                className="bg-emerald-50 text-emerald-500 hover:bg-emerald-100 shadow-none"
              >
                Completed
              </Badge>
            ) : (
              <Badge
                className="bg-orange-50 text-orange-500 hover:bg-orange-100 shadow-none"
              >
                Pending
              </Badge>
            )}
        </div>
      );
    },
  },
  {
    accessorKey: 'action',
    header: 'Actions',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          className="shadow-none"
          variant="outline"
          onClick={() => router.push(`/patients/${row.original.patient_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const recentLabRequestColumn: ColumnDef<InternalLabRequestInterface>[] = [

  {
    accessorKey: 'first_name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={`${row.original?.patient_detail?.first_name} ${row.original?.patient_detail?.middle_name}`}
        />
        <Link href={`/patients/${row.original.patient_id}`} className="capitalize text-[12px] text-cyan-500 hover:underline ">
          {row.original?.patient_detail?.first_name}
          {' '}
          {row.original?.patient_detail?.middle_name}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: 'user.full_name',
    header: 'Performed By',
    cell: ({ row }) => (
      <p
        className="text-[12px] text-zinc-500"
      >
        {row.original?.user?.full_name}
      </p>
    ),
  },
  {
    accessorKey: 'appointment.appointment_date',
    header: 'Appointment Date',
    cell: ({ row }) => (
      <p
        className="text-[12px] text-zinc-500"
      >
        {moment(row.original?.appointment?.appointment_date).format('ll')}
      </p>
    ),
  },
  {
    accessorKey: 'procedure_detail.procedure_name',
    header: 'Procedure',
    cell: ({ row }) => {
      const { procedure_name } = row.original.procedure_detail || {};
      return (
        <p className="text-[12px] text-zinc-500">
          {procedure_name && procedure_name?.length > 25 ? `${procedure_name.substring(0, 25)}..` : procedure_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'cost',
    header: 'Cost',
    cell: ({ row }) => (
      <div className="lowercase text-[12px] text-zinc-500 font-semibold">{formatCurrency(row.original?.cost)}</div>
    ),
  },
  {
    accessorKey: 'results',
    header: 'Results',
    cell: ({ row }) => {
      const { results } = row.original;
      return (
        <div className="lowercase text-[12px] text-zinc-500">{results?.length > 25 ? `${results.substring(0, 25)}..` : results}</div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <div className="lowercase">
          {status === 1
            ? (
              <Badge
                className="bg-emerald-50 text-emerald-500 hover:bg-emerald-100 shadow-none"
              >
                Completed
              </Badge>
            ) : (
              <Badge
                className="bg-orange-50 text-orange-500 hover:bg-orange-100 shadow-none"
              >
                Pending
              </Badge>
            )}
        </div>
      );
    },
  },
  {
    accessorKey: 'action',
    header: 'Actions',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          className="shadow-none"
          variant="outline"
          onClick={() => router.push(`/lab-requests/${row.original.lab_request_id}?patient_id=${row.original.patient_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

export const appointmentDetailColumns: ColumnDef<AppointmentInterface>[] = [

  {
    accessorKey: 'user.full_name',
    header: 'Attended By',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={`${row.original.user?.full_name}`}
        />
        <p className="capitalize text-[12px]">
          {row.original.user?.full_name}
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
    header: 'Details',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          className="shadow-none"
          variant="outline"
          onClick={() => router.push(`/visits/${row.original.appointment_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const admissionDetailColumns: ColumnDef<AdmissionInterface>[] = [

  // {
  //   accessorKey: 'first_name',
  //   header: 'Name',
  //   cell: ({ row }) => (
  //     <div className="flex-row flex space-x-2 items-center">
  //       <Avatar
  //         name={`${row.original.patient_detail?.first_name}
  // ${row.original.patient_detail?.middle_name}`}
  //       />
  //       <p className="capitalize text-[12px]">
  //         {row.original.patient_detail?.first_name}
  //         {' '}
  //         {row.original.patient_detail?.middle_name}
  //       </p>
  //     </div>
  //   ),
  // },
  {
    accessorKey: 'admission_date',
    header: 'Admission Date',
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
    accessorKey: 'diagnosis',
    header: 'Diagnosis',
    cell: ({ row }) => (
      <div className="lowercase text-[12px]">{row.original?.diagnosis}</div>
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

//
export const internalLabRequestDetailColumns: ColumnDef<InternalLabRequestInterface>[] = [
  {
    accessorKey: 'user.full_name',
    header: 'Performed By',
    cell: ({ row }) => (
      <p
        className="text-[12px] text-zinc-500"
      >
        {row.original?.user?.full_name}
      </p>
    ),
  },
  {
    accessorKey: 'appointment.appointment_date',
    header: 'Appointment Date',
    cell: ({ row }) => (
      <p
        className="text-[12px] text-zinc-500"
      >
        {moment(row.original?.appointment?.appointment_date).format('ll')}
      </p>
    ),
  },
  {
    accessorKey: 'procedure_detail.procedure_name',
    header: 'Procedure',
    cell: ({ row }) => {
      const { procedure_name } = row.original.procedure_detail || {};
      return (
        <p className="text-[12px] text-zinc-500">
          {procedure_name && procedure_name?.length > 25 ? `${procedure_name.substring(0, 25)}..` : procedure_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'cost',
    header: 'Cost',
    cell: ({ row }) => (
      <div className="lowercase text-[12px] text-zinc-500 font-semibold">{formatCurrency(row.original?.cost)}</div>
    ),
  },
  {
    accessorKey: 'results',
    header: 'Results',
    cell: ({ row }) => {
      const { results } = row.original;
      return (
        <div className="lowercase text-[12px] text-zinc-500">{results?.length > 25 ? `${results.substring(0, 25)}..` : results}</div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <div className="lowercase">
          {status === 1
            ? (
              <Badge
                className="bg-emerald-50 text-emerald-500 hover:bg-emerald-100 shadow-none"
              >
                Completed
              </Badge>
            ) : (
              <Badge
                className="bg-orange-50 text-orange-500 hover:bg-orange-100 shadow-none"
              >
                Pending
              </Badge>
            )}
        </div>
      );
    },
  },
];

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
