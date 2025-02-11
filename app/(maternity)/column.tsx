import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import Link from 'next/link';
import {
  AntenatalProfileInterface, MaternityDeliveryInterface,
  MaternityPostNatalExaminationInterface,
  MaternityProfileInterface, MaternityVisitsInterface,
} from 'motherangela';
import { useRouter } from 'next/navigation';
import { MoveRight } from 'lucide-react';
import Avatar from '@/components/custom/Avatar';
import { Button } from '@/components/ui/button';

export const maternityProfileColumns: ColumnDef<MaternityProfileInterface>[] = [

  {
    accessorKey: 'name_of_client',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar name={row.original.name_of_client as string} />
        <p className="capitalize text-[12px]">{row.original.name_of_client}</p>
      </div>
    ),
  },
  {
    accessorKey: 'anc_number',
    header: 'ANC',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.anc_number ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'telephone',
    header: 'Phone',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.telephone}</p>
      </div>
    ),
  },

  {
    accessorKey: 'address',
    header: 'Address',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.address ?? 'No Address'}
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
          {(edd && edd?.length > 0) ? moment(row.original?.edd, 'DD/MM/YYYY').format('ll') : 'Update'}
        </p>
      );
    },
  },
  {
    accessorKey: 'action',
    header: 'Details',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          className="shadow-none text-sky-600 border-sky-200"
          variant="outline"
          onClick={() => router.push(`/maternity/${row.original.maternity_profile_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const maternityAntenatalProfileColumns: ColumnDef<AntenatalProfileInterface>[] = [

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
export const maternityDeliveriesColumns: ColumnDef<MaternityDeliveryInterface>[] = [

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
    accessorKey: 'duration_of_pregnancy',
    header: 'Duration of Pregnancy',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.duration_of_pregnancy ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'date_of_delivery',
    header: 'Date of Delivery',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>
          {
        row.original.date_of_delivery
          ? moment(row.original.date_of_delivery).format('ll')
          : 'Update'
      }
        </p>

      </div>
    ),
  },

  {
    accessorKey: 'mode_of_delivery',
    header: 'Mode',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">{row.original.mode_of_delivery}</p>
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
          className="shadow-none text-sky-600 border-sky-200"
          variant="outline"
          onClick={() => router.push(`/deliveries/${row.original.maternity_delivery_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const maternityVisitsColumn: ColumnDef<MaternityVisitsInterface>[] = [

  {
    accessorKey: 'name_of_client',
    header: 'Name of Client',
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
    accessorKey: 'urine',
    header: 'Urine',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.urine ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'date_of_visit',
    header: 'Date of Visit',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>
          {
        row.original.date_of_visit
          ? moment(row.original.date_of_visit).format('ll')
          : 'Update'
      }
        </p>

      </div>
    ),
  },

  {
    accessorKey: 'bp',
    header: 'Blood Pressure',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">{row.original.bp}</p>
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
          className="shadow-none text-sky-600 border-sky-200"
          variant="outline"
          onClick={() => router.push(`/deliveries/${row.original.maternity_visit_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const maternityPostnatalExaminationColumn:
 ColumnDef<MaternityPostNatalExaminationInterface>[] = [

   {
     accessorKey: 'name_of_client',
     header: 'Name of Client',
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
   //  {
   //    accessorKey: 'urine',
   //    header: 'Urine',
   //    cell: ({ row }) => (
   //      <div className="text-[12px] text-slate-500 ">
   //        {row.original?.urine ?? 'N/A'}
   //      </div>
   //    ),
   //  },
   {
     accessorKey: 'date_of_visit_1',
     header: 'Date of Visit',
     cell: ({ row }) => (
       <div className="text-[12px] text-slate-500">
         <p>
           {
        row.original.date_of_visit_1
          ? moment(row.original.date_of_visit_1).format('ll')
          : 'Update'
      }
         </p>

       </div>
     ),
   },

   {
     accessorKey: 'blood_pressure_1',
     header: 'Blood Pressure',
     cell: ({ row }) => (
       <p className="text-[12px] text-slate-500">{row.original.blood_pressure_1}</p>
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
           className="shadow-none text-sky-600 border-sky-200"
           variant="outline"
           onClick={() => router.push(`/deliveries/${row.original.maternity_post_natal_examination_id}`)}
         >
           <MoveRight />
         </Button>
       );
     },
   },
 ];
