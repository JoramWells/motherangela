/* eslint-disable max-len */
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import Link from 'next/link';
import Avatar from '@/components/custom/Avatar';

export const insuranceColumns: ColumnDef<InsuranceInterface>[] = [
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
    accessorKey: 'insurance_name',
    header: 'Name',
    cell: ({ row }) => (
      <p className="capitalize text-[12px]">{row.original.insurance_name}</p>
    ),
  },
  {
    accessorKey: 'insurance_type',
    header: 'Type',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.insurance_type.insurance_type_description}
      </p>
    ),
  },
  {
    accessorKey: 'box_address',
    header: 'ANC',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.box_address ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'phone_no',
    header: 'Phone',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.phone_no}</p>
      </div>
    ),
  },

  {
    accessorKey: 'nhif_rebate',
    header: 'NHIF Rebate',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.nhif_rebate ?? 'No rebate'}
      </p>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.insurance_id}`}
      >
        View
      </Link>
    ),
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
    accessorKey: 'hiv',
    header: 'HIV',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">{row.original.hiv}</p>
    ),
  },
  {
    accessorKey: 'rhesus',
    header: 'Rhesus',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">{row.original.rhesus}</p>
    ),
  },
  {
    accessorKey: 'serology',
    header: 'Serology',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">{row.original.serology}</p>
    ),
  },
  {
    accessorKey: 'tb_screening',
    header: 'TB',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.tb_screening}
      </p>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.maternity_profile_id}`}
      >
        View
      </Link>
    ),
  },
];
