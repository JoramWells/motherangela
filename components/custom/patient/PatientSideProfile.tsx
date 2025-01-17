import { Link } from 'lucide-react';
import { PatientInterface } from 'motherangela';
import Image from 'next/image';
import React from 'react';

type SelectedPatientData = Pick<
  PatientInterface,
  'first_name' | 'middle_name' | 'cell_phone' | 'in_patient_file_no' | 'out_patient_file_no' | 'dob'
>;

function PatientSideProfile({
  first_name, middle_name, cell_phone, in_patient_file_no,
  out_patient_file_no, dob,

}: SelectedPatientData) {
  return (
    <div className="w-1/5 bg-white p-4 rounded-lg flex flex-col items-center space-y-2">
      <Image
        src="/assets/img/profile.png"
        alt="profile"
        width={50}
        height={50}
        className="rounded-full"
        style={{
          width: '50px',
          height: '50px',
          objectFit: 'contain',
        }}
      />

      <div className="flex flex-col items-center justify-center w-full">
        {first_name

          ? (
            <div className="flex flex-col items-center justify-center space-y-1">
              <p
                className="text-[14px] text-zinc-700"
              >
                {`${first_name} ${middle_name}`}
              </p>

              <div className="flex flex-row justify-between text-[12px] space-x-2 text-zinc-500">
                <p>Phone :</p>
                <p>{cell_phone}</p>
              </div>

              <div className="flex flex-row justify-between text-[12px] text-zinc-500">
                <p>In-patient File No.</p>
                <p>{in_patient_file_no}</p>
              </div>

              <div className="flex flex-row justify-between text-[12px] space-x-2 text-zinc-500">
                <p>Out-patient File No.</p>
                <p>{out_patient_file_no}</p>
              </div>
              <p
                className="text-[12px] text-zinc-500"
              >
                DOB:
                {' '}
                {dob}
              </p>
            </div>
          )
          : (
            <Link
              href="/"
              className="text-[12px] text-sky-600 underline hover:text-sky-700 "
            >
              Update Patient profile
            </Link>
          )}
      </div>
    </div>
  );
}

export default PatientSideProfile;
