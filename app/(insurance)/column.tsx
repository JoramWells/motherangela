import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import Link from 'next/link';
import Avatar from '@/components/custom/Avatar';

export const maternityProfileColumns: ColumnDef<InsuranceInterface>[] = [
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
    accessorKey: 'name_of_client',
    header: 'Name',
    cell: ({ row }) => (
      <p className="capitalize text-[12px]">{row.original.insurance_name}</p>
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
    accessorKey: 'edd',
    header: 'EDD',
    cell: ({ row }) => {
      const edd = row.original.edd as string;
      return (
        <p className="text-[12px] text-slate-500">
          {(edd && edd?.length > 0) ? moment(row.original?.edd).format('ll') : 'Update'}
        </p>
      );
    },
  },
  {
    accessorKey: 'action',
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

//
export const maternityAntenatalProfileColumns: ColumnDef<AntenatalProfileInterface>[] = [
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
    accessorKey: 'name_of_client',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={row.original.maternity_profile?.name_of_client as string}
        />
        <p className="capitalize text-[12px]">
          {row.original.maternity_profile?.name_of_client}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'blood_group',
    header: 'Blood Group',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.blood_group ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'hb',
    header: 'HP',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.hb}</p>
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
