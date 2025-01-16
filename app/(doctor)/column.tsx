/* eslint-disable max-len */
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import {
  DoctorNotesInterface, InsuranceMedicineMappingInterface, InsuranceServiceCostMappingInterface,
} from 'motherangela';
import { useRouter } from 'next/navigation';
import { MoveRight } from 'lucide-react';
import moment from 'moment';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Avatar from '@/components/custom/Avatar';

export const doctorNotesColumns: ColumnDef<DoctorNotesInterface>[] = [
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
    accessorKey: 'treatment',
    header: 'Treatment',
    cell: ({ row }) => {
      const { treatment } = row.original;
      return (
        <p className="text-[12px] text-slate-500">
          {treatment?.length > 25
            ? `${treatment.substring(0, 25)}...` : treatment}
        </p>
      );
    },
  },
  {
    accessorKey: 'diagnosis',
    header: 'Diagnosis',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.diagnosis ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'date_of_saving',
    header: 'Date',
    cell: ({ row }) => (
      <p className="capitalize text-[12px]">{moment(row.original.date_of_saving).format('ll')}</p>
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
          onClick={() => router.push(`/notes/${row.original.note_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const insuranceServiceCostMappingColumns: ColumnDef<InsuranceServiceCostMappingInterface>[] = [
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
    accessorKey: 'service_type.service_type_description',
    header: 'Service Type',
    cell: ({ row }) => (

      <p className="capitalize text-[12px]">
        {row.original.service_type?.service_type_description}
      </p>
    ),
  },
  {
    accessorKey: 'insurance_detail',
    header: 'Insurance',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.insurance_detail?.insurance_name ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'cost',
    header: 'Cost',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.cost}</p>
      </div>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.service_cost_mapping_id}`}
      >
        View
      </Link>
    ),
  },
];

//
export const medicineMappingColumns: ColumnDef<InsuranceMedicineMappingInterface>[] = [
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
    accessorKey: 'medication.medication_name',
    header: 'Name',
    cell: ({ row }) => {
      const med_name = row.original.medication.medication_name;
      return (

        <p className="capitalize text-[12px]">
          { med_name.length > 20 ? `${row.original.medication?.medication_name.substring(0, 20)}...` : med_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'insurance_detail',
    header: 'Insurance',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.insurance_detail?.insurance_name ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'visible',
    header: 'Visible',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        {row.original.visible === 'Y' ? (
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
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.mapping_id}`}
      >
        View
      </Link>
    ),
  },
];
