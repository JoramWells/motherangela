/* eslint-disable react/react-in-jsx-scope */
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import Link from "next/link";

export const medicineCategoryColumns: ColumnDef<MedicineCategoryInterface>[] = [
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
    accessorKey: "category_name",
    header: "Name",
    cell: ({ row }) => {
      const category_name = row.original.category_name;
      return (
        <p className="capitalize text-[12px]">
          {category_name.length > 25
            ? `${category_name.substring(0, 25)}...`
            : category_name}
        </p>
      );
    },
  },
  // {
  //   accessorKey: "medication_category.category_name",
  //   header: "Category",
  //   cell: ({ row }) => (
  //     <div className="text-[12px] text-slate-500 ">
  //       {row.original?.medication_category?.category_name}
  //     </div>
  //   ),
  // },

  // {
  //   accessorKey: "action",
  //   header: "Action",
  //   cell: ({ row }) => (
  //     <Link
  //       className="text-[12px]"
  //       href={`/maternity/${row.original.medication_id}`}
  //     >
  //       View
  //     </Link>
  //   ),
  // },
];

// 
export const medicinePurchaseColumns: ColumnDef<MedicinePurchaseInterface>[] = [
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
    accessorKey: "medication.medication_name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <p className="capitalize text-[12px]">
          {row.original.medication?.medication_name}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "user.full_name",
    header: "Ordered By",
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.user.full_name}</p>
      </div>
    ),
  },
  {
    accessorKey: "hospital_store.hospital_store_description",
    header: "Store",
    cell: ({ row }) => {
      return (
        <p className="text-[12px] text-slate-500">
          {row.original.hospital_store.hospital_store_description}
        </p>
      );
    },
  },
  {
    accessorKey:
      "medication_purchase_type.medication_purchase_type_description",
    header: "Type",
    cell: ({ row }) => {
      return (
        <p className="text-[12px] text-slate-500">
          {
            row.original.medication_purchase_type
              .medication_purchase_type_description
          }
        </p>
      );
    },
  },
  {
    accessorKey: "supplier",
    header: "Supplier",
    cell: ({ row }) => {
      return (
        <p className="text-[12px] text-slate-500">
          {row.original.supplier?.supplier_name}
        </p>
      );
    },
  },
  {
    accessorKey: "date_of_receipt",
    header: "Receipt Date",
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {moment(row.original?.date_of_receipt).format("ll")}
      </div>
    ),
  },

  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">{row.original.quantity}</p>
    ),
  },

  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.purchase_id}`}
      >
        View
      </Link>
    ),
  },
];


export const medicineStockTakeColumns: ColumnDef<MedicationStockTakeInterface>[] = [
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
    accessorKey: "medication_name",
    header: "Name",
    cell: ({ row }) => {
      const medication_name = row.original.medication_name
      return (
      <div className="flex-row flex space-x-2 items-center">
        <p className="capitalize text-[12px]">{medication_name.length > 25 ? `${medication_name.substring(0,25)}...`: medication_name}</p>
      </div>
    )
    }
  },
  {
    accessorKey: "medication_packaging_type_description",
    header: "Package Type",
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.medication_packaging_type_description}</p>
      </div>
    ),
  },
  // {
  //   accessorKey: "hospital_store.hospital_store_description",
  //   header: "Store",
  //   cell: ({ row }) => {
  //     return (
  //       <p className="text-[12px] text-slate-500">
  //         {/* {row.original.hospital_store.hospital_store_description} */}
  //       </p>
  //     );
  //   },
  // },

  {
    accessorKey: "unit_price",
    header: "Price",
    cell: ({ row }) => {
      return (
        <p className="text-[12px] text-slate-500">{row.original.unit_price}</p>
      );
    },
  },
  {
    accessorKey: "date_of_stock_take",
    header: "Stock Take Date",
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {moment(row.original?.date_of_stock_take).format("ll")}
      </div>
    ),
  },
  {
    accessorKey:
      "medication_purchase_type.medication_purchase_type_description",
    header: "Initial Qty",
    cell: ({ row }) => {
      return (
        <p className="text-[12px] text-slate-500">
          {
            row.original.correct_quantity
              
          }
        </p>
      );
    },
  },
  {
    accessorKey: "current_quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.current_quantity}
      </p>
    ),
  },

  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.medication_stock_take_id}`}
      >
        View
      </Link>
    ),
  },
];