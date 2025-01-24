import React, { useCallback, useState } from 'react';
import moment from 'moment';
import { Loader2 } from 'lucide-react';
import SearchInputDropDown, { SelectInputProps } from '../forms/SearchInputDropDown';
import { useSearchProcedureQuery } from '@/api/lab/procedure/procedureDetails.api';
import InputText from '../forms/InputText';
import InputSelect from '../forms/InputSelect';
import { Button } from '@/components/ui/button';
import { useAddInternalLabRequestMutation } from '@/api/lab/internalLabRequests.api';

export interface InterfaceInternalLabRequest {
appointment_id: string
patient_id: string
}

function InternalLabRequest({ appointment_id, patient_id }: InterfaceInternalLabRequest) {
  const [search, setSearch] = useState<SelectInputProps>({ id: '', label: '' });
  const { data } = useSearchProcedureQuery(
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

  console.log(data);
  const [quantity, setQuantity] = useState('');
  const [urgency, setUrgency] = useState('');

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

      <InputSelect
        label="Urgency"
        value={urgency}
        onChange={setUrgency}
        data={[
          {
            id: 'NO',
            label: 'Routine',
          },
          {
            id: 'YES',
            label: 'Urgent',
          },
        ]}
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

export default InternalLabRequest;
