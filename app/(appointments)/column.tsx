import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import { AppointmentDiagnosisInterface, AppointmentInterface } from 'motherangela';
import { MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Avatar from '@/components/custom/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/number';

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
    accessorKey: 'patient_detail.first_name',
    header: 'Patient Name',
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
    accessorKey: 'user.full_name',
    header: 'Attended By',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.user?.full_name}</p>
      </div>
    ),
  },
  {
    accessorKey: 'appointment_date',
    header: 'Date',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{moment(row.original?.appointment_date).format('ll')}</p>
        {/* <p>{row.original.appointment_time}</p> */}
      </div>
    ),
  },
  {
    accessorKey: 'charges',
    header: 'Charges',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {formatCurrency(row.original?.charges) ?? 0}
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
          onClick={() => router.push(`/visits/${row.original.appointment_id}?patient_id=${row.original.patient_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const diagnosesColumns: ColumnDef<AppointmentDiagnosisInterface>[] = [
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
    accessorKey: 'appointment.patient_detail.first_name',
    header: 'Name',
    cell: ({ row }) => {
      const first_name = row.original.appointment?.patient_detail?.first_name;
      const middle_name = row.original.appointment?.patient_detail?.middle_name;
      return (
        <div className="flex-row flex space-x-2 items-center">
          <Avatar
            name={`${first_name} ${middle_name}`}
          />
          <Link href={`/patients/${row.original.appointment?.patient_id}`} className="capitalize text-[12px] text-cyan-500 hover:underline ">
            {first_name}
            {' '}
            {middle_name}
          </Link>
        </div>
      );
    },
  },

  {
    accessorKey: 'appointment_date',
    header: 'Appointment Date',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{moment(row.original?.appointment?.appointment_date).format('ll')}</p>
      </div>
    ),
  },
  {
    accessorKey: 'charges',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original?.appointment?.appointment_status;
      return (
        <div className="text-[12px] text-slate-500 ">
          {status === 'Seen' ? (
            <Badge
              className="shadow-none bg-emerald-50 text-emerald-500 hover:bg-emerald-50 "
            >
              {status}
            </Badge>
          ) : (
            <Badge
              className="shadow-none bg-red-50 text-red-500 hover:bg-red-50 "
            >
              {status}
            </Badge>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'diagnosis_for',
    header: 'Diagnoses',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.diagnosis_for ?? 'N/A'}
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
          onClick={() => router.push(`/diagnoses/${row.original.appointment_id}?patient_id=${row.original.appointment?.patient_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];
