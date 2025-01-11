import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { AntenatalProfileInterface, InternalPharmacyRequestInterface, MedicineStockInterface } from 'motherangela';
import moment from 'moment';
import Avatar from '@/components/custom/Avatar';
import { Badge } from '@/components/ui/badge';

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

//
export const internalPharmacyRequestColumns: ColumnDef<InternalPharmacyRequestInterface>[] = [
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
          { medication_name?.length > 20 ? `${`${medication_name?.substring(0, 20)}..`}` : medication_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'appointment.appointment_date',
    header: 'Appointment Date',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{moment(row.original.appointment.appointment_date).format('ll')}</p>
      </div>
    ),
  },

  {
    accessorKey: 'date_of_request',
    header: 'Date of Request',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">{moment(row.original.date_of_request).format('ll')}</p>
    ),
  },

  {
    accessorKey: 'delivery_status',
    header: 'Delivery Status',
    cell: ({ row }) => (
      row.original.delivery_status === 1 ? (
        <Badge
          className="bg-emerald-50 hover:bg-emerald-100 text-emerald-500 shadow-none"
        >
          Yes
        </Badge>
      ) : (
        <Badge
          className="bg-red-50 hover:bg-red-100 text-red-500 shadow-none"
        >
          No
        </Badge>
      )
    ),
  },
  {
    accessorKey: 'pay_status',
    header: 'Pay Status',
    cell: ({ row }) => (
      row.original.pay_status ? (
        <Badge
          className="bg-emerald-50 hover:bg-emerald-100 text-emerald-500 shadow-none"
        >
          Paid
        </Badge>
      ) : (
        <Badge
          className="bg-red-50 hover:bg-red-100 text-red-500 shadow-none"
        >
          Unpaid
        </Badge>
      )
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
