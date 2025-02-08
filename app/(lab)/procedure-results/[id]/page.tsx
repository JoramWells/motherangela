'use client';

import React, { use, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { useGetAllProcedureItemResultsByAppointmentIDQuery } from '@/api/lab/procedure/procedureItemResults.api';
import { procedureItemResultDetailsColumn } from '../../column';
import { useGetPatientQuery } from '@/api/patients/patients.api';

function ProcedureDetails({ params }:{params:Promise<{id: string}>}) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const patient_id = searchParams.get('patient_id');

  const {
    data, search, setSearch, total,
  } = usePaginatedSearch({
    fetchQuery: useGetAllProcedureItemResultsByAppointmentIDQuery,
    id: id as string,
  });

  const { data: patientData } = useGetPatientQuery(patient_id as string, {
    skip: !patient_id,
  });

  const {
    first_name,
  } = patientData || {};

  const listItems = useMemo(() => [
    {
      id: '1',
      label: 'home',
      link: '/',
    },
    {
      id: '2',
      label: 'Procedure Results',
      link: '',
    },
    {
      id: '3',
      label: first_name!,
      link: '',
    },
  ], [first_name]);

  // console.log(data);
  // const router = useRouter();
  // const [pageSize, setPageSize] = useState(1);

  // const { data: serviceTypeData } = usePaginatedSearch({
  //   fetchQuery: useGetAllServiceTypeQuery,
  //   pageSize: 100,
  // });

  // const { data: procedureCategoryData } = usePaginatedSearch({
  //   fetchQuery: useGetAllProcedureCategoriesQuery,
  // });

  // const serviceTypeOptions = useCallback(() => serviceTypeData?.map((item) => ({
  //   id: item.service_type_id.toString(),
  //   label: item.service_type_description,
  // })), [serviceTypeData])();

  // const procedureCategoryOptions = useCallback(() => procedureCategoryData?.map((category) => ({
  //   id: category.procedure_category_id.toString(),
  //   label: category.procedure_name,
  // })), [procedureCategoryData])();

  return (
    <>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title={` ${first_name} procedure results`}
          columns={procedureItemResultDetailsColumn}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
//           filter={(
//             <ProcedureFilter
//               category={category}
//               // categoryOptions={procedureCategoryOptions}
//               setCategory={setCategory}
//               setPageSize={setPageSize}
//               pageSize={pageSize}
//               total={total as number}
//               serviceType={serviceType}
//               setServiceType={setServiceType}
//               serviceTypeOptions={serviceTypeOptions}
//             />
// )}
        />

      </div>
    </>
  );
}

export default ProcedureDetails;

// export default function WrappedProcedureDetails() {
//   return (
//     <Suspense>
//       <ProcedureDetails {...props} />
//     </Suspense>
//   );
// }
