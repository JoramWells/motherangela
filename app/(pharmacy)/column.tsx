import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import {
  InternalPharmacyRequestInterface, MedicationStockTakeInterface, MedicineInterface,
  MedicinePurchaseInterface,
} from 'motherangela';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { MoveRight } from 'lucide-react';
import Avatar from '@/components/custom/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const medicineStockColumns: ColumnDef<MedicationStockTakeInterface>[] = [

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
    accessorKey: 'medication_packaging_type_description',
    header: 'Category',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        <p>
          {row.original?.medication_packaging_type_description}

        </p>
      </div>
    ),
  },
  {
    accessorKey: 'current_quantity',
    header: 'Current',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <div className="flex flex-row space-x-2 items-center">
          {/* <p>Price:</p> */}
          <p>{row.original.current_quantity}</p>
        </div>

        {/*  */}
        {/* <div className="flex flex-row space-x-2 items-center">
          <p>Corporate:</p>
          <p>{row.original.price_corporate}</p>
        </div> */}

        {/*  */}
        {/* <div className="flex flex-row space-x-2 items-center">
          <p>Foreigner:</p>
          <p>{row.original.price_foreigner}</p>
        </div> */}
      </div>
    ),
  },
  {
    accessorKey: 'correct_quantity',
    header: 'Counted',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <div className="flex flex-row space-x-2 items-center">
          {/* <p>Price:</p> */}
          <p>{row.original.correct_quantity}</p>
        </div>

        {/*  */}
        {/* <div className="flex flex-row space-x-2 items-center">
          <p>Corporate:</p>
          <p>{row.original.price_corporate}</p>
        </div> */}

        {/*  */}
        {/* <div className="flex flex-row space-x-2 items-center">
          <p>Foreigner:</p>
          <p>{row.original.price_foreigner}</p>
        </div> */}
      </div>
    ),
  },
  {
    accessorKey: 'quantity_variance',
    header: 'Qty. Variance',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.quantity_variance}
      </p>
    ),
  },
  {
    accessorKey: 'latestStockTakeDate',
    header: 'Date',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {moment(row.original.latest_stock_take_date).format('ll')}
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
          className="text-[12px] shadow-none"
          variant="outline"
          size="sm"
          onClick={() => router.push(`/medicine-stock-take/${row.original.medication_stock_take_id}?medicine_id=${row.original.medication_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

export const medicineColumns: ColumnDef<MedicineInterface>[] = [

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
        <Badge
          className="shadow-none bg-zinc-100 text-zinc-500 border border-zinc-100 hover:bg-zinc-100"
        >
          {row.original?.medication_category?.category_name}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <div className="flex flex-row space-x-2 items-center">
          {/* <p>Price:</p> */}
          <p>{row.original.price}</p>
        </div>

        {/*  */}
        {/* <div className="flex flex-row space-x-2 items-center">
          <p>Corporate:</p>
          <p>{row.original.price_corporate}</p>
        </div> */}

        {/*  */}
        {/* <div className="flex flex-row space-x-2 items-center">
          <p>Foreigner:</p>
          <p>{row.original.price_foreigner}</p>
        </div> */}
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
export const internalPharmacyRequestColumns: ColumnDef<InternalPharmacyRequestInterface>[] = [

  {
    accessorKey: 'patient_detail?.first_name',
    header: 'Patient Name',
    cell: ({ row }) => {
      const first_name = row.original.patient_detail?.first_name;
      const middle_name = row.original.patient_detail?.middle_name;
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
    accessorKey: 'user.full_name',
    header: 'Attended By',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.user?.full_name ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'medication.medication_name',
    header: 'Medicine',
    cell: ({ row }) => {
      const medication_name = row.original.medication?.medication_name.substring(0, 20);
      return (
        <p className="text-[12px] text-slate-500">
          {(medication_name && medication_name?.length > 20) ? `${`${medication_name?.substring(0, 20)}..`}` : medication_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'appointment.appointment_date',
    header: 'Appointment Date',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{moment(row.original?.appointment?.appointment_date).format('ll')}</p>
      </div>
    ),
  },

  {
    accessorKey: 'prescription_term',
    header: 'Term',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">{row.original.prescription_term}</p>
    ),
  },

  {
    accessorKey: 'medication?.price',
    header: 'Price',
    cell: ({ row }) => (
      <p
        className="text-[12px] text-slate-700 font-semibold"
      >
        {row.original.medication?.price}
      </p>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <div
          className="flex flex-row items-center space-x-2"
        >
          {!row.original.pay_status && (
          <Button
            size="sm"
            className="shadow-none bg-emerald-600 hover:bg-emerald-700 "
          >
            Confirm
          </Button>
          )}
          <Button
            className="text-[12px] shadow-none"
            variant="outline"
            size="sm"
            onClick={() => router.push(`/requests/${row.original.pharmacy_request_id}`)}
          >
            <MoveRight />
          </Button>
        </div>
      );
    },
  },
];

//
export const medicinePurchaseColumns: ColumnDef<MedicinePurchaseInterface>[] = [

  {
    accessorKey: 'medication.medication_name',
    header: 'Medicine',
    cell: ({ row }) => {
      const medication_name = row.original.medication?.medication_name.substring(0, 20);
      return (
        <p className="text-[12px] text-slate-500">
          { medication_name?.length > 20 ? `${`${medication_name?.substring(0, 20)}..`}` : medication_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'user.full_name',
    header: 'Ordered By',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.user?.full_name ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'hospital_store.hospital_store_description',
    header: 'Store',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        {row.original.hospital_store.hospital_store_description}
      </div>
    ),
  },
  {
    accessorKey: 'medication_purchase_type.medication_purchase_type_description',
    header: 'Type',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        {row.original.medication_purchase_type.medication_purchase_type_description}
      </div>
    ),
  },
  {
    accessorKey: 'real_quantity',
    header: 'Quantity',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>
          Qty:
          {row.original.quantity}

        </p>
        <p>
          Real Qty:
          {row.original.real_quantity}

        </p>
      </div>
    ),
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        {row.original.price}

      </div>
    ),
  },
  {
    accessorKey: 'date_of_receipt',
    header: 'Date of Receipt',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">{moment(row.original.date_of_receipt).format('ll')}</p>
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
