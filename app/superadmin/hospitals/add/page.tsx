'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import InputText from '@/components/custom/forms/InputText';
import { Button } from '@/components/ui/button';
import { useAddHospitalMutation } from '@/api/patients/hospital/hospital.api';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Hospitals',
    link: '/superadmin/hospitals',
  },
  {
    id: '3',
    label: 'Add',
    link: '',
  },
];
function AddHospital() {
  const router = useRouter();

  const [hospitalName, setHospitalName] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');

  const inputValues = {
    hospital_name: hospitalName,
    hospital_address: address,
    hospital_location: location,
    hospital_employer_number: phone,
  };

  const [addHospital, { isLoading, data }] = useAddHospitalMutation();
  useEffect(() => {
    if (data) {
      router.push('/superadmin/hospitals');
    }
  }, [data]);
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2"
      >
        <div
          className="w-1/2 bg-white rounded-lg border border-zinc-100"
        >
          <div
            className="p-2 bg-zinc-50 rounded-t-lg border-b"
          >
            <p
              className="font-semibold text-zinc-700"
            >
              Add Hospital
            </p>
          </div>
          <div className="p-2">
            <div
              className="  p-2 flex flex-col space-y-2"
            >
              <InputText
                label="Hospital Name"
                value={hospitalName}
                onChange={setHospitalName}
                placeholder="Enter hospital name"
              />
              <InputText
                label="Phone No"
                value={phone}
                onChange={setPhone}
                placeholder="Enter Phone Number"
              />
              <InputText
                label="Address"
                value={address}
                onChange={setAddress}
                placeholder="Enter Hospital Address"
              />

              <InputText
                label="Location"
                value={location}
                onChange={setLocation}
                placeholder="Enter hospital location"
              />
              <div
                className="flex justify-end"
              >
                <Button
                  className="shadow-none bg-emerald-600 hover:bg-emerald-700"
                  size="sm"
                  onClick={() => addHospital(inputValues)}
                >
                  {isLoading
                    && <Loader2 className="animate-spin mr-2" size={14} />}
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddHospital;
