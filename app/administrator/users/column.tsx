import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import { MedicationStockTakeInterface, MedicinePurchaseInterface, UserInterface } from 'motherangela';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MoveRight } from 'lucide-react';
import Avatar from '@/components/custom/Avatar';
import { Button } from '@/components/ui/button';

export const usersColumn: ColumnDef<UserInterface>[] = [

  {
    accessorKey: 'full_name',
    header: 'Name',
    cell: ({ row }) => (
      <div
        className="flex flex-row items-center space-x-2"
      >
        <Avatar
          name={row.original.full_name}
        />
        <p
          className="text-[12px]"
        >
          {row.original.full_name}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => {
      const { email } = row.original || {};
      return (
        <div className="text-[12px] text-slate-500 ">
          {email.length > 20 ? `${email.substring(0, 20)}..` : email}
        </div>
      );
    },
  },
  {
    accessorKey: 'user_type.user_type_desc',
    header: 'User Type',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.user_type?.user_type_desc}
      </div>
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
          onClick={() => router.push(`/administrator/users/${row.original.user_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const medicinePurchaseColumns: ColumnDef<MedicinePurchaseInterface>[] = [

  {
    accessorKey: 'medication.medication_name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <p className="capitalize text-[12px]">
          {row.original.medication?.medication_name}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'user.full_name',
    header: 'Ordered By',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.user.full_name}</p>
      </div>
    ),
  },
  {
    accessorKey: 'hospital_store.hospital_store_description',
    header: 'Store',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.hospital_store.hospital_store_description}
      </p>
    ),
  },
  {
    accessorKey:
      'medication_purchase_type.medication_purchase_type_description',
    header: 'Type',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {
            row.original.medication_purchase_type
              .medication_purchase_type_description
          }
      </p>
    ),
  },
  {
    accessorKey: 'supplier',
    header: 'Supplier',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.supplier?.supplier_name}
      </p>
    ),
  },
  {
    accessorKey: 'date_of_receipt',
    header: 'Receipt Date',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {moment(row.original?.date_of_receipt).format('ll')}
      </div>
    ),
  },

  {
    accessorKey: 'quantity',
    header: 'Quantity',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">{row.original.quantity}</p>
    ),
  },

  {
    accessorKey: 'action',
    header: 'Action',
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

  {
    accessorKey: 'medication_name',
    header: 'Name',
    cell: ({ row }) => {
      const { medication_name } = row.original;
      return (
        <div className="flex-row flex space-x-2 items-center">
          <p className="capitalize text-[12px]">{medication_name.length > 25 ? `${medication_name.substring(0, 25)}...` : medication_name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: 'medication_packaging_type_description',
    header: 'Package Type',
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
    accessorKey: 'unit_price',
    header: 'Price',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">{row.original.unit_price}</p>
    ),
  },
  {
    accessorKey: 'date_of_stock_take',
    header: 'Stock Take Date',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {moment(row.original?.date_of_stock_take).format('ll')}
      </div>
    ),
  },
  {
    accessorKey:
      'medication_purchase_type.medication_purchase_type_description',
    header: 'Initial Qty',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {
            row.original.correct_quantity

          }
      </p>
    ),
  },
  {
    accessorKey: 'current_quantity',
    header: 'Quantity',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.current_quantity}
      </p>
    ),
  },

  {
    accessorKey: 'action',
    header: 'Action',
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
