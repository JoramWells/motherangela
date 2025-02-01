import { Dispatch, SetStateAction, useCallback } from 'react';
import InputSelect from '../../forms/InputSelect';
import InputText from '../../forms/InputText';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import { useGetAllPeopleRelationsQuery } from '@/api/patients/people-relations.api';

export interface NextOfKinInterface{
    next_of_kin:string
    setNextOfKin:Dispatch<SetStateAction<string>>,
    next_of_kin_name:string
    setNextOfKinName:Dispatch<SetStateAction<string>>,
    next_of_kin_cell_phone:string
    setNextOfKinCellPhone:Dispatch<SetStateAction<string>>,

}

// hospital details
function NextOfKin({
  next_of_kin, setNextOfKin, next_of_kin_name, setNextOfKinName,
  next_of_kin_cell_phone, setNextOfKinCellPhone,
}:NextOfKinInterface) {
  const { data } = usePaginatedSearch({
    fetchQuery: useGetAllPeopleRelationsQuery,
  });

  const relationOptions = useCallback(
    () => data?.map((item) => ({
      id: item.id,
      label: item.description,
    })),
    [data],
  )();

  return (

    <div
      className="flex flex-col space-y-4 w-full"
    >
      <InputSelect
        label="Relationship"
        data={relationOptions}
        value={next_of_kin}
        onChange={setNextOfKin}
        placeholder="Spouse"
      />
      <InputText
        label="Full Name"
        name="next_of_kin_name"
        onChange={setNextOfKinName}
        value={next_of_kin_name}
        placeholder="Enter fullname"
      />

      <InputText
        label="Phone Number"
        name="next_of_kin_cell_phone"
                // size="lg"
        onChange={setNextOfKinCellPhone}
        value={next_of_kin_cell_phone}
        placeholder="+254"
      />
    </div>

  );
}

export default NextOfKin;
