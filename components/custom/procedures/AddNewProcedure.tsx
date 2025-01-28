import React, { useCallback, useState } from 'react';
import moment from 'moment';
import { Loader2 } from 'lucide-react';
import SearchInputDropDown, { SelectInputProps } from '../forms/SearchInputDropDown';
import InputText from '../forms/InputText';
import { useAddInternalLabRequestMutation } from '@/api/lab/internalLabRequests.api';
import { Button } from '@/components/ui/button';
import { useSearchRadiologyProcedureQuery } from '@/api/lab/internalRadiologyRequests.api';

function AddNewProcedure({ appointment_id, patient_id }:{
    appointment_id: string, patient_id: string
}) {
  const [search, setSearch] = useState<SelectInputProps>({ id: '', label: '' });

  const { data } = useSearchRadiologyProcedureQuery(
    {
      searchQuery: search?.label as string,
    },
    {
      skip: !search?.label || search?.label?.length as number < 0,
    },
  );

  const procedureDetailOptions = useCallback(() => data?.map((procedure) => ({
    id: procedure.procedure_id as unknown as string,
    label: procedure.procedure_name,
  })), [data]);

  const [quantity, setQuantity] = useState('');

  const inputValues = {
    appointment_id,
    patient_id,
    procedure_id: search.id,
    status: 0,
    pay_status: 0,
    quantity,
    date_of_request: moment().format('YYYY-MM-DD'),
  };

  const [addInternalLabRequest, { isLoading }] = useAddInternalLabRequestMutation();

  const handleSave = async () => addInternalLabRequest(inputValues);

  return (
    <div
      className="min-h-[250px] flex flex-col space-y-2"
    >
      <SearchInputDropDown
        search={search}
        setSearch={setSearch}
        data={procedureDetailOptions() ?? []}
      />
      <InputText
        label="Quantity"
        type="number"
        value={quantity}
        onChange={setQuantity}
      />

      <div className="flex flex-row space-x-2 items-center justify-end">
        <Button
          className="shadow-none"
          variant="outline"
          size="sm"
        >
          Cancel
        </Button>
        <Button
          className="shadow-none"
          size="sm"
          disabled={isLoading}
          onClick={handleSave}
        >
          {isLoading && <Loader2 className="animate-spin mt-2" size={16} />}
          Save
        </Button>
      </div>
    </div>
  );
}

export default AddNewProcedure;
