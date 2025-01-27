/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState } from 'react';
import moment from 'moment';
import { Loader2 } from 'lucide-react';
import InputSelect from '../forms/InputSelect';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetAllSpecimenTypesQuery } from '@/api/lab/specimenType.api';
import { useGetAllResultStatusQuery } from '@/api/lab/resultStatus.api';
import { Button } from '@/components/ui/button';
import { useUpdateInternalLabRequestCollectSampleMutation } from '@/api/lab/internalLabRequests.api';

function CollectLabSample({ request_id }:{request_id: string}) {
  const { data } = usePaginatedSearch({
    fetchQuery: useGetAllSpecimenTypesQuery,
    pageSize: 100,
  });

  const { data: resultStatusData } = usePaginatedSearch({
    fetchQuery: useGetAllResultStatusQuery,
    pageSize: 100,
  });

  const specimenTypeOptions = useCallback(() => data?.map((type) => ({
    id: type.specimen_type_id as unknown as string,
    label: type.specimen_type_description,
  })), [data])();

  const resultStatusOptions = useCallback(() => resultStatusData?.map((type) => ({
    id: type.results_status_id as unknown as string,
    label: type.results_status_description,
  })), [resultStatusData])();

  const [specimenType, setSpecimenType] = useState('');
  const [labResults, setLabResults] = useState('');
  const [results, setResults] = useState('');

  const inputValues = {
    id: request_id,
    specimen_type_id: specimenType,
    results_status_id: labResults,
    results,
    date_of_results: moment().format('ll'),
    status: 1,
  };

  const [updateInternalLabRequestCollectSample,
    { isLoading }] = useUpdateInternalLabRequestCollectSampleMutation();
  const handleUpdate = () => {
    updateInternalLabRequestCollectSample(inputValues);
  };

  return (
    <div className="flex flex-col space-y-2">
      <InputSelect
        label="Select Specimen Type"
        value={specimenType}
        onChange={setSpecimenType}
        data={specimenTypeOptions ?? []}
      />

      {/*  */}
      <InputSelect
        label="Select Results"
        value={labResults}
        onChange={setLabResults}
        data={resultStatusOptions}
      />
      <div className="flex flex-col space-y-1">
        <label htmlFor="" className="text-[14px] text-zinc-700 font-semibold">Result Description</label>
        <textarea
          placeholder="Enter Description"
          className="p-2 border border-slate-200 focus:bg-slate-50  rounded-lg flex-grow text-[12px] focus:border-slate-200 active:border-slate-200
        focus-within:ring-1 focus-within:ring-slate-200 outline-none
        "
          value={results}
          onChange={(e) => setResults(e.target.value)}
        />
      </div>

      <div className="w-full pt-2 flex justify-end">
        <Button
          className="shadow-none bg-emerald-600 hover:bg-emerald-700"
          size="sm"
          disabled={isLoading}
          onClick={handleUpdate}
        >
          {isLoading && <Loader2 className="animate-spin mr-2" size={16} />}
          Save
        </Button>
      </div>
    </div>
  );
}

export default CollectLabSample;
