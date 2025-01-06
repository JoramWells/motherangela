/* eslint-disable react/react-in-jsx-scope */
import Avatar from "@/components/custom/Avatar";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const employeeRecordsColumn: ColumnDef<PayrollEmployeeRecordsInterface>[] = [

  {
    accessorKey: "full_name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar name={row.original.full_name as string} />
        <p className="capitalize text-[12px]">{row.original.full_name}</p>
      </div>
    ),
  },
  {
    accessorKey: "job_number",
    header: "Job No.",
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.job_number ?? "N/A"}
      </div>
    ),
  },
  {
    accessorKey: "active_status",
    header: "Status",
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.active_status}</p>
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
    accessorKey: "cellphone",
    header: "Phone",
    cell: ({ row }) => {
      return (
        <p className="text-[12px] text-slate-500">
          {row.original.cellphone}
        </p>
      );
    },
  },
  {
    accessorKey: "action",
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.employee_id}`}
      >
        View
      </Link>
    ),
  },
];

// 
export const maternityAntenatalProfileColumns: ColumnDef<AntenatalProfileInterface>[] =
  [
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
      accessorKey: "blood_group",
      header: "Blood Group",
      cell: ({ row }) => (
        <div className="text-[12px] text-slate-500 ">
          {row.original?.blood_group ?? "N/A"}
        </div>
      ),
    },
    {
      accessorKey: "hb",
      header: "HP",
      cell: ({ row }) => (
        <div className="text-[12px] text-slate-500">
          <p>{row.original.hb}</p>
        </div>
      ),
    },

    {
      accessorKey: "hiv",
      header: "HIV",
      cell: ({ row }) => (
        <p className="text-[12px] text-slate-500">{row.original.hiv}</p>
      ),
    },
    {
      accessorKey: "rhesus",
      header: "Rhesus",
      cell: ({ row }) => {
        return (
          <p className="text-[12px] text-slate-500">{row.original.rhesus}</p>
        );
      },
    },
    {
      accessorKey: "serology",
      header: "Serology",
      cell: ({ row }) => {
        return (
          <p className="text-[12px] text-slate-500">{row.original.serology}</p>
        );
      },
    },
    {
      accessorKey: "tb_screening",
      header: "TB",
      cell: ({ row }) => {
        return (
          <p className="text-[12px] text-slate-500">
            {row.original.tb_screening}
          </p>
        );
      },
    },
    {
      accessorKey: "Action",
      header:'Action',
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
