import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<PatientInterface>[] = [
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
    accessorKey: "first_name",
    header: "Name",
    cell: ({ row }) => (
      <p>
        {row.original.first_name} {row.original.middle_name}
      </p>
    ),
  },
  {
    accessorKey: "dob",
    header: "DOB",
    cell: ({ row }) => (
      <p>
        {row.original?.dob}
      </p>
    ),
  },
  {
    accessorKey: "cell_phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="lowercase">{row.original?.cell_phone}</div>
    ),
  },
];

// 
export const admissionColumn: ColumnDef<PatientInterface>[] = [
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
    accessorKey: "first_name",
    header: "Name",
    cell: ({ row }) => (
      <p>
        {row.original.first_name} {row.original.middle_name}
      </p>
    ),
  },
  {
    accessorKey: "dob",
    header: "DOB",
    cell: ({ row }) => <p>{row.original?.dob}</p>,
  },
  {
    accessorKey: "cell_phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="lowercase">{row.original?.cell_phone}</div>
    ),
  },
];
