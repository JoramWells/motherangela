import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import Avatar from '@/components/custom/Avatar';

export const medicineStockColumns: ColumnDef<MedicineStockInterface>[] = [
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
    accessorKey: 'medication_name',
    header: 'Name',
    cell: ({ row }) => {
      const { medication_name } = row.original;
      return (
        <p className="capitalize text-[12px]">{medication_name.length > 40 ? `${medication_name.substring(0, 25)}...` : medication_name}</p>
      );
    },
  },
  {
    accessorKey: 'medication_category.category_name',
    header: 'Category',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.medication_category?.category_name}
      </div>
    ),
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <div className="flex flex-row space-x-2 items-center">
          <p>Price:</p>
          <p>{row.original.price}</p>
        </div>

        {/*  */}
        <div className="flex flex-row space-x-2 items-center">
          <p>Corporate:</p>
          <p>{row.original.price_corporate}</p>
        </div>

        {/*  */}
        <div className="flex flex-row space-x-2 items-center">
          <p>Foreigner:</p>
          <p>{row.original.price_foreigner}</p>
        </div>
      </div>
    ),
  },

  {
    accessorKey: 'quantity',
    header: 'Quantity',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.quantity}
      </p>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.medication_id}`}
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
