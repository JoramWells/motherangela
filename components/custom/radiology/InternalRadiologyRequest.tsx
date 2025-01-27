import React from 'react';
import CustomDialog from '../CustomDialog';
import AddNewInternalRadiologyRequest from './AddNewInternalRadiologyRequest';

function InternalRadiologyRequest({ appointment_id, patient_id }:{
    appointment_id: string, patient_id: string
}) {
  return (
    <div>
      InternalRadiologyRequest

      <CustomDialog
        label="New"
      >
        <AddNewInternalRadiologyRequest
          appointment_id={appointment_id}
          patient_id={patient_id}
        />

      </CustomDialog>
    </div>
  );
}

export default InternalRadiologyRequest;
