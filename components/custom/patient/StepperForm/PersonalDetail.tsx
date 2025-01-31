import { Dispatch, SetStateAction } from 'react';
import InputText from '../../forms/InputText';
import InputSelect from '../../forms/InputSelect';

export interface PersonalDetailInterface {
    first_name: string,
    setFirstName:Dispatch<SetStateAction<string>>,
    last_name:string
    setLastName:Dispatch<SetStateAction<string>>,
    middle_name:string
    setMiddleName:Dispatch<SetStateAction<string>>,
    dob:string
    setDOB:Dispatch<SetStateAction<string>>,
    email:string
    setNHIF:Dispatch<SetStateAction<string>>,
    nhif_no:string
    setEmail:Dispatch<SetStateAction<string>>,
    patient_gender:string
    setPatientGender:Dispatch<SetStateAction<string>>,
    setID:Dispatch<SetStateAction<string>>,
    id_number:string

    setResidence:Dispatch<SetStateAction<string>>,
    residence:string

}

function PersonalDetail({
  first_name, setFirstName, last_name, setLastName, middle_name, setMiddleName,
  dob, setDOB, email, setEmail, nhif_no, setNHIF, patient_gender, setPatientGender,
  id_number, setID, residence, setResidence,
}:PersonalDetailInterface) {
  const residenceOptions = [
    { id: 'Nanyuki', label: 'Nanyuki' },
    { id: 'Nairobi', label: 'Nairobi' },
  ];

  const genderOptions = [
    { id: '1', label: 'MALE' },
    { id: '2', label: 'FEMALE' },
  ];

  return (
    <div
      className="flex flex-col space-y-4 w-full"
    >

      {/* <HStack w="full"> */}
      {/* <InputText
          label="Old Reference Number"
        />

        <InputText
          label="In-Patient File Number"
        /> */}

      {/* </HStack> */}
      <div className="flex flex-row space-x-2 items-center">

        <InputText
          label="First Name*"
          name="first_name"
          value={first_name}
          onChange={setFirstName}
          placeholder="Enter first name"
        />

        <InputText
          label="Second Name"
          name="middle_name"
          value={middle_name}
          onChange={setMiddleName}
          placeholder="Enter middle name"
        />

        <InputText
          label="Enter Last Name"
          name="last_name"
          value={last_name}
          onChange={setLastName}
          placeholder="Enter last name"

        />

      </div>

      {/* DOB */}
      <InputText
        label="DOB"
        type="date"
        name="date"
        value={dob}
        onChange={setDOB}
      />

      {/* item code */}
      <InputSelect
        label="Gender"
        data={genderOptions}
        value={patient_gender}
        onChange={setPatientGender}
      />

      <div
        className="flex space-x-2 items-center"
      >

        <InputText
          name="id_number"
          value={id_number}
          label="ID No."
          onChange={setID}
        />

        <InputText
                // type="email"
          name="email"
          label="Enter Email Address"
          value={email}
          onChange={setEmail}
        />
      </div>

      <InputSelect
        label="Residence"
        data={residenceOptions}
        value={residence}
        onChange={setResidence}
      />

      <InputText
        name="nhif_no"
        label="NHIF NO."
        value={nhif_no}
        onChange={setNHIF}
      />

    </div>
  );
}

export default PersonalDetail;
