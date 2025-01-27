import React from 'react';
import { useGetAllInternalLabRequestsByAppointmentIDQuery } from '@/api/lab/internalLabRequests.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '../table/TableContainer';
import { internalLabRequestDetailColumns } from '@/app/(lab)/column';
import CustomDialog from '../CustomDialog';
import AddInternalLabRequest from './AddInternalLabRequest';

function InternalLabRequest({ appointment_id, patient_id }:{appointment_id:string,
  patient_id: string}) {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllInternalLabRequestsByAppointmentIDQuery,
    id: appointment_id,
  });
  console.log(data);
  return (
    data && data.length > 0
      ? (
        <div
          className="mt-2"
        >
          <TableContainer
            title="Internal Lab Requests"
            columns={internalLabRequestDetailColumns}
            data={data ?? []}
            total={total as number}
            search={search}
            setSearch={setSearch}
          />
        </div>
      )
      : (
        <div>
          <div className="flex justify-between items-center bg-zinc-50 p-1 pl-2 pr-2 rounded-t-lg ">
            <p className="text-[14px] font-semibold">
              Internal Lab Request
            </p>
            <CustomDialog
              label="NEW"
              description="Add New Lab Request"
            >
              <AddInternalLabRequest
                appointment_id={appointment_id}
                patient_id={patient_id!}
              />

            </CustomDialog>

          </div>
        </div>
      )
  );
}

export default InternalLabRequest;
