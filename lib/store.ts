import { admissionApi } from "@/api/admission/admissions.api";
import { appointmentApi } from "@/api/appointments/appointments.api";
import { maternityAntenatalProfileApi } from "@/api/maternity/maternity-antenantal-profile.api";
import { maternityProfileApi } from "@/api/maternity/maternity.api";
import { medicationApi } from "@/api/medication/medication.api";
import { patientsApi } from "@/api/patients/patients.api";
import { payrollEmployeeBenefitsApi } from "@/api/payroll/payrollEmployeeBenefitsFile.api";
import { payrollEmployeeRecordsApi } from "@/api/payroll/payrollEmployeeRecords.api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [patientsApi.reducerPath]: patientsApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
    [maternityProfileApi.reducerPath]: maternityProfileApi.reducer,
    [maternityAntenatalProfileApi.reducerPath]:
      maternityAntenatalProfileApi.reducer,
    [payrollEmployeeRecordsApi.reducerPath]: payrollEmployeeRecordsApi.reducer,
    [payrollEmployeeBenefitsApi.reducerPath]:
      payrollEmployeeBenefitsApi.reducer,
    [medicationApi.reducerPath]: medicationApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(patientsApi.middleware)
      .concat(appointmentApi.middleware)
      .concat(admissionApi.middleware)
      .concat(maternityAntenatalProfileApi.middleware)
      .concat(maternityProfileApi.middleware)
      .concat(payrollEmployeeRecordsApi.middleware)
      .concat(payrollEmployeeBenefitsApi.middleware)
      .concat(medicationApi.middleware),
});