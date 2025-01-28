import React from 'react';
import { ArchiveX } from 'lucide-react';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '../table/TableContainer';
import { internalLabRequestDetailColumns } from '@/app/(lab)/column';
import CustomDialog from '../CustomDialog';
import { useGetAllInternalRadiologyRequestsByAppointmentIDQuery } from '@/api/lab/internalRadiologyRequests.api';
import AddNewProcedure from './AddNewProcedure';

function ProceduresPerformed({ appointment_id, patient_id }:{appointment_id:string,
  patient_id: string}) {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllInternalRadiologyRequestsByAppointmentIDQuery,
    id: appointment_id,
  });
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
        <div
          className="border mt-2 rounded-lg h-[150px] bg-blue-50
          flex flex-col items-center justify-center border-dashed border-blue-200
          "
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-[16px] text-zinc-500">
              No Procedures Performed!!
            </p>
            <ArchiveX className="text-zinc-500" />
            <CustomDialog
              label="NEW"
              description="Add New Procedure"
            >
              <AddNewProcedure
                appointment_id={appointment_id}
                patient_id={patient_id!}
              />

            </CustomDialog>

          </div>
        </div>
      )
  );
}

export default ProceduresPerformed;
