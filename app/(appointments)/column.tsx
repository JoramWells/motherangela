import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import Link from 'next/link';
import { AppointmentDiagnosisInterface, AppointmentInterface } from 'motherangela';
import { MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Avatar from '@/components/custom/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
          <p className="capitalize text-[12px]">
            {first_name}
            {' '}
            {middle_name}
          </p>

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
          {status ? (
            <Badge
              className="shadow-none bg-emerald-50 text-emerald-500 hover:bg-emerald-50 "
            >
              Seen
            </Badge>
          ) : (
            <Badge
              className="shadow-none bg-red-50 text-red-500 hover:bg-red-50 "
            >
              Not Seen
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
