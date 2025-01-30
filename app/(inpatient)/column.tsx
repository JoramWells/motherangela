/* eslint-disable max-len */
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import {
  AdmissionInterface, AntenatalProfileInterface, InpatientDoctorVisitsDoctor, InpatientNurseVisitsInterface, InpatientTreatmentChartInterface, InsuranceMedicineMappingInterface, InsuranceServiceCostMappingInterface,
  MaternityDeliveryInterface,
  MaternityProfileInterface,
} from 'motherangela';
import { useRouter } from 'next/navigation';
import { MoveRight } from 'lucide-react';
import moment from 'moment';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Avatar from '@/components/custom/Avatar';
import { formatCurrency } from '@/utils/number';

export const inpatientTreatmentChartColumn: ColumnDef<InpatientTreatmentChartInterface>[] = [
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
    accessorKey: 'patient_detail.first_name',
    header: 'Patient Name',
    cell: ({ row }) => {
      const first_name = row.original?.patient_detail?.first_name;
      const middle_name = row.original?.patient_detail?.middle_name;
      return (
        <div className="flex-row flex space-x-2 items-center">
          <Avatar
            name={`${first_name} ${middle_name}`}
          />
          <Link href={`/patients/${row.original?.patient_id}`} className="capitalize text-[12px] text-cyan-500 hover:underline ">
            {first_name}
            {' '}
            {middle_name}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'drug',
    header: 'Drug',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.drug}
      </p>
    ),
  },
  {
    accessorKey: 'dose',
    header: 'Dose',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.dose ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'duration',
    header: 'Duration',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.duration}</p>
      </div>
    ),
  },

  {
    accessorKey: 'date_of_treatment',
    header: 'Treated',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {moment(row.original.date_of_treatment).format('ll') ?? 'No date'}
      </p>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          size="sm"
          className="shadow-none"
          variant="outline"
          onClick={() => router.push(`/insurances/${row.original.inpatient_treatment_chart_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
//
export const admissionColumn: ColumnDef<AdmissionInterface>[] = [

  {
    accessorKey: 'first_name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex-row flex space-x-2 items-center">
        <Avatar
          name={`${row.original.patient_detail?.first_name} ${row.original.patient_detail?.middle_name}`}
        />
        <p className="capitalize text-[12px]">
          {row.original.patient_detail?.first_name}
          {' '}
          {row.original.patient_detail?.middle_name}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'user.full_name',
    header: 'Admitted By',
    cell: ({ row }) => (
      <div className=" text-[12px] capitalize text-slate-500">{row.original?.user?.full_name}</div>
    ),
  },
  {
    accessorKey: 'admission_date',
    header: 'Admitted',
    cell: ({ row }) => (
      <div
        className="text-[12px] text-slate-500"
      >
        <p>{moment(row.original.admission_date).format('ll')}</p>
        <p>{row.original.admission_time}</p>
      </div>
    ),
  },
  {
    accessorKey: 'ward.ward_description',
    header: 'Ward',
    cell: ({ row }) => (
      <div className="text-[12px] capitalize text-slate-500 ">
        <p>{row.original?.ward.ward_description.replace('WARD', '').trim().toLowerCase()}</p>
        <p />
      </div>
    ),
  },
  {
    accessorKey: 'ward_bed.bed_number',
    header: 'Bed Number',
    cell: ({ row }) => (
      <div className="lowercase text-[12px]">{row.original?.ward_bed.bed_number}</div>
    ),
  },
  {
    accessorKey: 'payment_status',
    header: 'Payment Status',
    cell: ({ row }) => (
      <div className="lowercase">
        {row.original.pay_status === 0 ? (
          <Badge
            className="capitalize bg-red-50 hover:bg-red-50 shadow-none text-red-500"
          >
            Not Paid
          </Badge>
        ) : (
          <Badge className="capitalize bg-emerald-50 text-emerald-500 shadow-none hover:bg-emerald-50">Paid</Badge>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'diagnosis',
    header: 'Diagnosis',
    cell: ({ row }) => (
      <div className="lowercase">
        {row.original.diagnosis}
      </div>
    ),
  },
  {
    accessorKey: 'discharge_date',
    header: 'Discharged',
    cell: ({ row }) => {
      const { discharge_date } = row.original;
      return (
        <div
          className="text-[12px] text-slate-500"
        >
          {discharge_date
            ? (
              <div>
                <p>{moment(row.original.discharge_date).format('ll')}</p>
                <p>{row.original.discharge_time}</p>
              </div>
            )
            : (
              <Badge
                className="shadow-none text-orange-500 border-orange-200"
                variant="outline"
              >
                Not Discharged
              </Badge>
            )}
        </div>
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
          className="shadow-none"
          variant="outline"
          onClick={() => router.push(`/in-patient/${row.original.admission_id}?patient_id=${row.original.patient_id}`)}
        >
          <MoveRight />
        </Button>
      );
    },
  },
];

//
export const insuranceServiceCostMappingColumns: ColumnDef<InsuranceServiceCostMappingInterface>[] = [
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
    accessorKey: 'service_type.service_type_description',
    header: 'Service Type',
    cell: ({ row }) => (

      <p className="capitalize text-[12px]">
        {row.original.service_type?.service_type_description}
      </p>
    ),
  },
  {
    accessorKey: 'insurance_detail',
    header: 'Insurance',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.insurance_detail?.insurance_name ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'cost',
    header: 'Cost',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.cost}</p>
      </div>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.service_cost_mapping_id}`}
      >
        View
      </Link>
    ),
  },
];

//
export const medicineMappingColumns: ColumnDef<InsuranceMedicineMappingInterface>[] = [
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
    accessorKey: 'medication.medication_name',
    header: 'Name',
    cell: ({ row }) => {
      const med_name = row.original.medication.medication_name;
      return (

        <p className="capitalize text-[12px]">
          { med_name.length > 20 ? `${row.original.medication?.medication_name.substring(0, 20)}...` : med_name}
        </p>
      );
    },
  },
  {
    accessorKey: 'insurance_detail',
    header: 'Insurance',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.insurance_detail?.insurance_name ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'visible',
    header: 'Visible',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        {row.original.visible === 'Y' ? (
          <Badge
            className="shadow-none bg-green-50 text-green-500 hover:bg-green-50"
          >
            Yes
          </Badge>
        ) : (
          <Badge
            className="shadow-none bg-red-50 text-red-500 hover:bg-red-50"
          >
            No
          </Badge>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <Link
        className="text-[12px]"
        href={`/maternity/${row.original.mapping_id}`}
      >
        View
      </Link>
    ),
  },
];

//
export const inpatientTreatmentDetailChartColumn: ColumnDef<InpatientTreatmentChartInterface>[] = [
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
    accessorKey: 'drug',
    header: 'Drug',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original.drug}
      </p>
    ),
  },
  {
    accessorKey: 'dose',
    header: 'Dose',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500 ">
        {row.original?.dose ?? 'N/A'}
      </div>
    ),
  },
  {
    accessorKey: 'duration',
    header: 'Duration',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.duration}</p>
      </div>
    ),
  },
  {
    accessorKey: 'route',
    header: 'Route',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.route}</p>
      </div>
    ),
  },
  {
    accessorKey: 'date_of_treatment',
    header: 'Treated',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {moment(row.original.date_of_treatment).format('ll') ?? 'No date'}
      </p>
    ),
  },
];

//
export const inpatientDoctorVisitColumns: ColumnDef<InpatientDoctorVisitsDoctor>[] = [
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
    accessorKey: 'user.full_name',
    header: 'Doctor',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original?.user?.full_name}
      </p>
    ),
  },
  {
    accessorKey: 'cost_of_visit',
    header: 'Cost',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{formatCurrency(row.original.cost_of_visit)}</p>
      </div>
    ),
  },
  {
    accessorKey: 'doctor_notes',
    header: 'Notes',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{row.original.doctor_notes}</p>
      </div>
    ),
  },
  {
    accessorKey: 'admission.admission_date',
    header: 'Admitted',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {moment(row.original.admission?.admission_date).format('ll') ?? 'No date'}
      </p>
    ),
  },
  {
    accessorKey: 'date_of_visit',
    header: 'Visited',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {moment(row.original.date_of_visit).format('ll') ?? 'No date'}
      </p>
    ),
  },
];

//
export const inpatientNurseVisitColumns: ColumnDef<InpatientNurseVisitsInterface>[] = [
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
    accessorKey: 'user.full_name',
    header: 'Doctor',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {row.original?.user?.full_name}
      </p>
    ),
  },
  {
    accessorKey: 'cost_of_visit',
    header: 'Cost',
    cell: ({ row }) => (
      <div className="text-[12px] text-slate-500">
        <p>{formatCurrency(row.original.cost_of_visit)}</p>
      </div>
    ),
  },
  {
    accessorKey: 'nurse_notes',
    header: 'Notes',
    cell: ({ row }) => {
      const { nurse_notes } = row.original;
      return (
        <div className="text-[12px] text-slate-500">
          <p>{nurse_notes.length > 25 ? `${nurse_notes.substring(0, 25)}..` : nurse_notes }</p>
        </div>
      );
    },
  },
  {
    accessorKey: 'admission.admission_date',
    header: 'Admitted',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {moment(row.original.admission?.admission_date).format('ll') ?? 'No date'}
      </p>
    ),
  },
  {
    accessorKey: 'date_of_visit',
    header: 'Visited',
    cell: ({ row }) => (
      <p className="text-[12px] text-slate-500">
        {moment(row.original.date_of_visit).format('ll') ?? 'No date'}
      </p>
    ),
  },
];

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
