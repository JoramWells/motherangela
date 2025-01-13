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
import { payrollEmployeeDeductionsApi } from '@/api/payroll/payrollEmployeeDeductions';
import { payrollPeriodsApi } from '@/api/payroll/payrollPeriods';
import { payrollMonthlyDeductionsApi } from '@/api/payroll/payrollMonthlyDeductions.api';
import { payrollEmployeeLoanRecordsApi } from '@/api/payroll/payrollEmployeeLoanRecords.api';
import { appointmentDiagnosesApi } from '@/api/appointments/appointmentDiagnoses.api';
import { maternityDeliveriesApi } from '@/api/maternity/maternity-deliveries.api';
import { internalPharmacyRequestsApi } from '@/api/medication/internalPharmacyRequest.api';
import { accountingAccountDetailsApi } from '@/api/accounts/accountingAccountDetails.api';
import { accountingAssetApi } from '@/api/accounts/accounting_assets/accountingAsset.api';
import { accountingDocumentsApi } from '@/api/accounts/accountingDocuments.api';

export const store = configureStore({
  reducer: {
    [patientsApi.reducerPath]: patientsApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [accountingAccountDetailsApi.reducerPath]: accountingAccountDetailsApi.reducer,
    [accountingDocumentsApi.reducerPath]: accountingDocumentsApi.reducer,
    [accountingAssetApi.reducerPath]: accountingAssetApi.reducer,
    [appointmentDiagnosesApi.reducerPath]: appointmentDiagnosesApi.reducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
    [maternityProfileApi.reducerPath]: maternityProfileApi.reducer,
    [maternityAntenatalProfileApi.reducerPath]:
      maternityAntenatalProfileApi.reducer,
    [maternityDeliveriesApi.reducerPath]: maternityDeliveriesApi.reducer,
    [payrollEmployeeRecordsApi.reducerPath]: payrollEmployeeRecordsApi.reducer,
    [payrollEmployeeBenefitsApi.reducerPath]:
      payrollEmployeeBenefitsApi.reducer,
    [medicineApi.reducerPath]: medicineApi.reducer,
    [medicineCategoryApi.reducerPath]: medicineCategoryApi.reducer,
    [medicinePurchasesApi.reducerPath]: medicinePurchasesApi.reducer,
    [medicineStockTakeApi.reducerPath]: medicineStockTakeApi.reducer,
    [internalPharmacyRequestsApi.reducerPath]: internalPharmacyRequestsApi.reducer,
    [insuranceApi.reducerPath]: insuranceApi.reducer,
    [insuranceServiceCostMappingApi.reducerPath]: insuranceServiceCostMappingApi.reducer,
    [insuranceMedicineMappingApi.reducerPath]: insuranceMedicineMappingApi.reducer,
    [payrollEmployeeDeductionsApi.reducerPath]: payrollEmployeeDeductionsApi.reducer,
    [payrollPeriodsApi.reducerPath]: payrollPeriodsApi.reducer,
    [payrollMonthlyDeductionsApi.reducerPath]: payrollMonthlyDeductionsApi.reducer,
    [payrollEmployeeLoanRecordsApi.reducerPath]: payrollEmployeeLoanRecordsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
    immutableCheck: false,
    serializableCheck: false,
  })
    .concat(patientsApi.middleware)
    .concat(appointmentApi.middleware)
    .concat(accountingAccountDetailsApi.middleware)
    .concat(accountingAssetApi.middleware)
    .concat(accountingDocumentsApi.middleware)
    .concat(appointmentDiagnosesApi.middleware)
    .concat(admissionApi.middleware)
    .concat(maternityAntenatalProfileApi.middleware)
    .concat(maternityProfileApi.middleware)
    .concat(maternityDeliveriesApi.middleware)
    .concat(payrollEmployeeRecordsApi.middleware)
    .concat(payrollEmployeeBenefitsApi.middleware)
    .concat(medicineApi.middleware)
    .concat(medicineCategoryApi.middleware)
    .concat(medicinePurchasesApi.middleware)
    .concat(medicineStockTakeApi.middleware)
    .concat(internalPharmacyRequestsApi.middleware)
    .concat(insuranceApi.middleware)
    .concat(insuranceServiceCostMappingApi.middleware)
    .concat(insuranceMedicineMappingApi.middleware)
    .concat(payrollEmployeeDeductionsApi.middleware)
    .concat(payrollPeriodsApi.middleware)
    .concat(payrollMonthlyDeductionsApi.middleware)
    .concat(payrollEmployeeLoanRecordsApi.middleware),
});
