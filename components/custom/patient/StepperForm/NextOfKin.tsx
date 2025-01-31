import { Dispatch, SetStateAction } from 'react';
import InputSelect from '../../forms/InputSelect';
import InputText from '../../forms/InputText';

export interface NextOfKinInterface{
    next_of_kin:string
    setNextOfKin:Dispatch<SetStateAction<string>>,
    next_of_kin_name:string
    setNextOfKinName:Dispatch<SetStateAction<string>>,
    next_of_kin_cell_phone:string
    setNextOfKinCellPhone:Dispatch<SetStateAction<string>>,

}

const nextOfKinOPtions = [
  { id: '1', label: 'BROTHER' },
  { id: '2', label: 'DAUGHTER' },
  { id: '3', label: 'FATHER' },
  { id: '4', label: 'FRIEND' },
  { id: '5', label: 'GUARDIAN' },
  { id: '6', label: 'MOTHER' },
  { id: '7', label: 'SELF' },
  { id: '8', label: 'SISTER' },
  { id: '9', label: 'SON' },
  { id: '10', label: 'SPOUSE' },
];
// hospital details
function NextOfKin({
  next_of_kin, setNextOfKin, next_of_kin_name, setNextOfKinName,
  next_of_kin_cell_phone, setNextOfKinCellPhone,
}:NextOfKinInterface) {
  return (

    <div
      className="flex flex-col space-y-4 w-full"
    >
      <InputSelect
        label="Relationship"
        data={nextOfKinOPtions}
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
