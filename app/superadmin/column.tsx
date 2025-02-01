/* eslint-disable import/prefer-default-export */
import { ColumnDef } from '@tanstack/react-table';
import { MoveRight } from 'lucide-react';
import { HospitalInterface } from 'motherangela';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export const hospitalColumns: ColumnDef<HospitalInterface>[] = [

  {
    accessorKey: 'hospital_name',
    header: 'Name',
    cell: ({ row }) => {
      const { hospital_name } = row.original;
      return (
        <p className="capitalize text-[12px]">
          {hospital_name.length > 25
            ? `${hospital_name.substring(0, 25)}...`
            : hospital_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'hospital_address',
    header: 'Address',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.hospital_address}
      </div>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Actions',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          className="shadow-none"
          variant="outline"
          onClick={() => router.push(`hospitals/${row.original.hospital_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];
