
import React from 'react'
import { pageNumber } from '@/utils/pageNumber'
import { type Dispatch, type SetStateAction } from 'react'
import SelectDropdownFilter from '../forms/SelectDropdownFilter'

interface AppointmentFilterInputProps {
  age: string | null
  gender: string
  total?: number | string
  pageSize: number
  setAge: Dispatch<SetStateAction<string | null>>
  setPageSize: Dispatch<SetStateAction<number>>
  setGender: Dispatch<SetStateAction<string>>
}

function AppointmentFilter ({
  age,
  setAge,
  pageSize,
  setPageSize,
  total,
  gender,
  setGender,
}: AppointmentFilterInputProps) {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <SelectDropdownFilter
        label="Age (years)"
        onChange={setAge}
        paramValue="tab"
        value={age as string}
        data={[
          {
            id: 'All',
            label: 'All'
          },
          {
            id: '0-9 years',
            label: '01-09'
          },
          {
            id: '10-14 years',
            label: '10-14'
          },
          {
            id: '15-20 years',
            label: '15-19'
          },
          {
            id: '20 years',
            label: '20-24'
          }
        ]}
        placeholder="Age"
      />
      <SelectDropdownFilter
        label={`Page No :- ${pageNumber(total as number, 10)}`}
        paramValue="page"
        onChange={setPageSize}
        value={`${pageSize}`}
        data={Array.from(
          { length: pageNumber(total as number, 10) },
          (_, index) => ({ id: `${index + 1}`, label: `${index + 1}` })
        )}
        placeholder="Page"
      />
      <SelectDropdownFilter
        label={`Gender :- ${pageNumber(total as number, 10)}`}
        paramValue="gender"
        onChange={setGender}
        value={gender}
        data={[{
            id: 'male',
            label: 'Male'
        },{
            id:'female',
            label: 'Female'
        }]}
        placeholder="Gender"
      />
    </div>
  )
}

export default AppointmentFilter
