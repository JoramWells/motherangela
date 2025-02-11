import React from 'react';
import { useGetPersonalAccountChargeByPatientIDQuery } from '@/api/accounts/charges/personalAccountCharges.api';

function PaymentChargeCard({ patient_id }:{patient_id:string}) {
  const { data } = useGetPersonalAccountChargeByPatientIDQuery(patient_id, { skip: !patient_id });
  console.log(data);
  return (
    <div
      className="w-1/4"
    >
      PaymentChargeCard
    </div>
  );
}

export default PaymentChargeCard;
