import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import { AdmissionInterface, AppointmentInterface, PatientInterface } from 'motherangela';
import { useRouter } from 'next/navigation';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Avatar from '@/components/custom/Avatar';
import { Button } from '@/components/ui/button';

export const columns: ColumnDef<PatientInterface>[] = [

  {
    accessorKey: 'first_name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={`${row.original.first_name} ${row.original.middle_name}`}
        />
        <Link href={`/patients/${row.original.patient_id}`} className="capitalize text-[12px] text-cyan-500 hover:underline ">
          {row.original.first_name}
          {' '}
          {row.original.middle_name}
        </Link>
      </div>
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
export const admissionColumn: ColumnDef<AdmissionInterface>[] = [

  {
    accessorKey: 'first_name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={`${row.original.patient_detail?.first_name} ${row.original.patient_detail?.middle_name}`}
        />
        <p className="capitalize text-[12px]">
          {row.original.patient_detail?.first_name}
          {' '}
          {row.original.patient_detail?.middle_name}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'user.full_name',
    header: 'Admitted By',
    cell: ({ row }) => (
      <div className=" text-[12px] capitalize text-slate-500">{row.original?.user?.full_name}</div>
    ),
  },
  {
    accessorKey: 'admission_date',
    header: 'Admitted',
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
  {
    accessorKey: 'diagnosis',
    header: 'Diagnosis',
    cell: ({ row }) => (
      <div className="lowercase">
        {row.original.diagnosis}
      </div>
    ),
  },
  {
    accessorKey: 'discharge_date',
    header: 'Discharged',
    cell: ({ row }) => {
      const { discharge_date } = row.original;
      return (
        <div
          className="text-[12px] text-slate-500"
        >
          {discharge_date
            ? (
              <div>
                <p>{moment(row.original.discharge_date).format('ll')}</p>
                <p>{row.original.discharge_time}</p>
              </div>
            )
            : (
              <Badge
                className="shadow-none text-orange-500 border-orange-200"
                variant="outline"
              >
                Not Discharged
              </Badge>
            )}
        </div>
      );
    },
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
          onClick={() => router.push(`/in-patient/${row.original.admission_id}?patient_id=${row.original.patient_id}`)}
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
