/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { admissionApi } from '@/api/admission/admissions.api';
import { appointmentApi } from '@/api/appointments/appointments.api';
import { insuranceApi } from '@/api/insurance/insurance.api';
import { maternityAntenatalProfileApi } from '@/api/maternity/maternity-antenantal-profile.api';
import { maternityProfileApi } from '@/api/maternity/maternity.api';
import { medicineStockTakeApi } from '@/api/medication/medicationStockTake.api';
import { medicineApi } from '@/api/medication/medicine.api';
import { medicineCategoryApi } from '@/api/medication/medicineCategory.api';
import { medicinePurchasesApi } from '@/api/medication/medicinePurchases.api';
import { patientsApi } from '@/api/patients/patients.api';
import { payrollEmployeeBenefitsApi } from '@/api/payroll/payrollEmployeeBenefitsFile.api';
import { payrollEmployeeRecordsApi } from '@/api/payroll/payrollEmployeeRecords.api';
import { insuranceServiceCostMappingApi } from '@/api/insurance/insuranceServiceCostMapping.api';
import { insuranceMedicineMappingApi } from '@/api/insurance/insuranceMedicineMapping.api';

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
    [medicineApi.reducerPath]: medicineApi.reducer,
    [medicineCategoryApi.reducerPath]: medicineCategoryApi.reducer,
    [medicinePurchasesApi.reducerPath]: medicinePurchasesApi.reducer,
    [medicineStockTakeApi.reducerPath]: medicineStockTakeApi.reducer,
    [insuranceApi.reducerPath]: insuranceApi.reducer,
    [insuranceServiceCostMappingApi.reducerPath]: insuranceServiceCostMappingApi.reducer,
    [insuranceMedicineMappingApi.reducerPath]: insuranceMedicineMappingApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
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
    .concat(medicineApi.middleware)
    .concat(medicineCategoryApi.middleware)
    .concat(medicinePurchasesApi.middleware)
    .concat(medicineStockTakeApi.middleware)
    .concat(insuranceApi.middleware)
    .concat(insuranceServiceCostMappingApi.middleware)
    .concat(insuranceMedicineMappingApi.middleware),
});
