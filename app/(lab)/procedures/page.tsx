'use client';

import React, { Suspense } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { procedureDetailsColumns } from '../column';
import { useGetAllProceduresQuery } from '@/api/lab/procedure/procedureDetails.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Patients',
    link: '',
  },
];

function Patients() {
  // const [serviceType, setServiceType] = useState('');
  // const [category, setCategory] = useState('');

  const {
    data, search, setSearch, total,
  } = usePaginatedSearch({ fetchQuery: useGetAllProceduresQuery });
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
          title="Procedure Details"
          columns={procedureDetailsColumns}
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

export default function WrappedPatients() {
  return (
    <Suspense>
      <Patients />
    </Suspense>
  );
}
