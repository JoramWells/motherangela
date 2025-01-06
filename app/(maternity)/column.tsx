/* eslint-disable react/react-in-jsx-scope */
import Avatar from "@/components/custom/Avatar";
import { ColumnDef } from "@tanstack/react-table";
import moment from 'moment'
import Link from "next/link";
export const maternityProfileColumns: ColumnDef<MaternityProfileInterface>[] = [
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
    accessorKey: "name_of_client",
    header: "Name",
    cell: ({ row }) => (
      <div
      className="flex-row flex space-x-2 items-center"
      >
        <Avatar name={row.original.name_of_client as string} />
        <p className="capitalize text-[12px]">{row.original.name_of_client}</p>
      </div>
    ),
  },
  {
    accessorKey: "anc_number",
    header: "ANC",
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.anc_number ?? "N/A"}
      </div>
    ),
  },
  {
    accessorKey: "telephone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.telephone}</p>
      </div>
    ),
  },

  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.address ?? "No Address"}
      </p>
    ),
  },
  {
    accessorKey: "action",
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
