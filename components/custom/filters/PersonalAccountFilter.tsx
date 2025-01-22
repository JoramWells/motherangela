import React from 'react';
import { type Dispatch, type SetStateAction } from 'react';
import SelectDropdownFilter from '../forms/SelectDropdownFilter';

interface PersonalAccountFilterInputProps {
  cleared: string | null
  setCleared: Dispatch<SetStateAction<string>>
}

function PersonalAccountFilter({
  cleared,
  setCleared,
}: PersonalAccountFilterInputProps) {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <SelectDropdownFilter
        label="Cleared"
        onChange={setCleared}
        paramValue="status"
        value={cleared as string}
        data={[{
          id: 'cleared',
          label: 'Cleared',
        }, {
          id: 'not cleared',
          label: 'Not Cleared',
        }]}
        placeholder="Cleared"
      />

    </div>
  );
}

export default PersonalAccountFilter;
