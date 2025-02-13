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
import { accountingDepartmentApi } from '@/api/accounts/accountingDepartment.api';
import { accountingBankAccountApi } from '@/api/accounts/bank/accountingBankAccounts.api';
import { cashPaymentModesApi } from '@/api/accounts/cashPaymentModes.api';
import { payrollEmployeePayCalculationsApi } from '@/api/payroll/payrollEmployeePayCalculations.api';
import { payrollEmployeeMonthlyDeductionsFileApi } from '@/api/payroll/payrollEmployeeMonthlyDeducationsFile.api';
import { payrollEmployeePayrollDeductionsApi } from '@/api/payroll/payrollEmployeePayrollDeductions.api';
import { doctorNotesApi } from '@/api/doctor/doctor-notes.api';
import { inpatientTreatmentChartApi } from '@/api/admission/inpatient-treatment-chart.api';
import { inpatientDoctorVisitsApi } from '@/api/admission/inpatient-doctor-visits.api';
import { inpatientNurseVisitsApi } from '@/api/admission/inpatient-nurse-visits.api';
import { inpatientPhysiotherapistVisitsApi } from '@/api/admission/inpatient-physiotherapist-visits.api';
import { internalLabRequestsApi } from '@/api/lab/internalLabRequests.api';
import { invoicePaymentsApi } from '@/api/accounts/invoice/invoicePayments.api';
import { personalAccountChargeApi } from '@/api/accounts/charges/personalAccountCharges.api';
import { personalChargesPaymentApi } from '@/api/accounts/charges/personalChargesPayment.api';
import { consultationTypeApi } from '@/api/consultation/consultationType.api';
import { consultationTypeGroupApi } from '@/api/consultation/consultationTypeGroup.api';
import { consultationTypeSubGroupApi } from '@/api/consultation/consultationTypeSubGroup.api';
import { consultationTypesWithCreditAccountsApi } from '@/api/consultation/consultationTypesWithCreditAccounts.api';
import { accountTypeApi } from '@/api/accounts/accountType.api';
import { companyApi } from '@/api/insurance/company.api';
import { referralTypeApi } from '@/api/appointments/referralType.api';
import { procedureApi } from '@/api/lab/procedure/procedureDetails.api';
import { specimenTypeApi } from '@/api/lab/specimenType.api';
import { resultStatusApi } from '@/api/lab/resultStatus.api';
import { hospitalApi } from '@/api/patients/hospital/hospital.api';
import { userApi } from '@/api/users/users.api';
import { internalRadiologyRequestsApi } from '@/api/lab/internalRadiologyRequests.api';
import { serviceTypeApi } from '@/api/services/serviceType.api';
import { procedureCategoryApi } from '@/api/lab/procedure/procedureCategory.api';
import { patientAccountApi } from '@/api/accounts/patient/patientAccount.api';
import { procedureItemResultsApi } from '@/api/lab/procedure/procedureItemResults.api';
import { peopleRelationsApi } from '@/api/patients/people-relations.api';
import { residenceDetailsApi } from '@/api/patients/residence-details.api';
import { maternityVisitsApi } from '@/api/maternity/maternity-visits.api';
import { maternityPostnatalExaminationApi } from '@/api/maternity/maternity-postnatal-examination';
import { maternityPhysicalExaminationApi } from '@/api/maternity/maternity-physical-examination.api';
import { payrollEmployeeCategoryApi } from '@/api/payroll/payrollEmployeeCategory.api';
import { payrollPayPeriodApi } from '@/api/payroll/payrollPayPeriods.api';

export const store = configureStore({
  reducer: {
    [patientsApi.reducerPath]: patientsApi.reducer,
    [patientAccountApi.reducerPath]: patientAccountApi.reducer,
    [peopleRelationsApi.reducerPath]: peopleRelationsApi.reducer,
    [residenceDetailsApi.reducerPath]: residenceDetailsApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [accountingAccountDetailsApi.reducerPath]: accountingAccountDetailsApi.reducer,
    [accountTypeApi.reducerPath]: accountTypeApi.reducer,
    [accountingDocumentsApi.reducerPath]: accountingDocumentsApi.reducer,
    [accountingAssetApi.reducerPath]: accountingAssetApi.reducer,
    [accountingDepartmentApi.reducerPath]: accountingDepartmentApi.reducer,
    [accountingBankAccountApi.reducerPath]: accountingBankAccountApi.reducer,
    [appointmentDiagnosesApi.reducerPath]: appointmentDiagnosesApi.reducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
    [doctorNotesApi.reducerPath]: doctorNotesApi.reducer,
    [cashPaymentModesApi.reducerPath]: cashPaymentModesApi.reducer,
    [consultationTypeApi.reducerPath]: consultationTypeApi.reducer,
    [consultationTypeGroupApi.reducerPath]: consultationTypeGroupApi.reducer,
    [consultationTypeSubGroupApi.reducerPath]: consultationTypeSubGroupApi.reducer,
    [consultationTypesWithCreditAccountsApi.reducerPath]:
    consultationTypesWithCreditAccountsApi.reducer,
    [hospitalApi.reducerPath]: hospitalApi.reducer,
    [maternityProfileApi.reducerPath]: maternityProfileApi.reducer,
    [maternityAntenatalProfileApi.reducerPath]:
      maternityAntenatalProfileApi.reducer,
    [maternityVisitsApi.reducerPath]: maternityVisitsApi.reducer,
    [maternityPostnatalExaminationApi.reducerPath]: maternityPostnatalExaminationApi.reducer,
    [maternityDeliveriesApi.reducerPath]: maternityDeliveriesApi.reducer,
    [maternityPhysicalExaminationApi.reducerPath]: maternityPhysicalExaminationApi.reducer,

    [companyApi.reducerPath]: companyApi.reducer,
    [payrollEmployeeRecordsApi.reducerPath]: payrollEmployeeRecordsApi.reducer,
    [payrollEmployeeBenefitsApi.reducerPath]:
      payrollEmployeeBenefitsApi.reducer,
    [payrollEmployeeMonthlyDeductionsFileApi.reducerPath]:
      payrollEmployeeMonthlyDeductionsFileApi.reducer,
    [payrollEmployeePayrollDeductionsApi.reducerPath]:
      payrollEmployeePayrollDeductionsApi.reducer,
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
    [payrollEmployeePayCalculationsApi.reducerPath]: payrollEmployeePayCalculationsApi.reducer,
    [payrollEmployeeCategoryApi.reducerPath]: payrollEmployeeCategoryApi.reducer,
    [payrollPayPeriodApi.reducerPath]: payrollPayPeriodApi.reducer,
    [inpatientTreatmentChartApi.reducerPath]: inpatientTreatmentChartApi.reducer,
    [inpatientDoctorVisitsApi.reducerPath]: inpatientDoctorVisitsApi.reducer,
    [inpatientNurseVisitsApi.reducerPath]: inpatientNurseVisitsApi.reducer,
    [inpatientPhysiotherapistVisitsApi.reducerPath]: inpatientPhysiotherapistVisitsApi.reducer,
    [internalLabRequestsApi.reducerPath]: internalLabRequestsApi.reducer,
    [invoicePaymentsApi.reducerPath]: invoicePaymentsApi.reducer,
    [personalAccountChargeApi.reducerPath]: personalAccountChargeApi.reducer,
    [personalChargesPaymentApi.reducerPath]: personalChargesPaymentApi.reducer,
    [procedureApi.reducerPath]: procedureApi.reducer,
    [procedureCategoryApi.reducerPath]: procedureCategoryApi.reducer,
    [procedureItemResultsApi.reducerPath]: procedureItemResultsApi.reducer,
    [referralTypeApi.reducerPath]: referralTypeApi.reducer,
    [internalRadiologyRequestsApi.reducerPath]: internalRadiologyRequestsApi.reducer,
    [resultStatusApi.reducerPath]: resultStatusApi.reducer,
    [specimenTypeApi.reducerPath]: specimenTypeApi.reducer,
    [serviceTypeApi.reducerPath]: serviceTypeApi.reducer,
    [userApi.reducerPath]: userApi.reducer,

  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
    immutableCheck: false,
    serializableCheck: false,
  })
    .concat(patientsApi.middleware)
    .concat(patientAccountApi.middleware)
    .concat(peopleRelationsApi.middleware)
    .concat(residenceDetailsApi.middleware)
    .concat(appointmentApi.middleware)
    .concat(accountingAccountDetailsApi.middleware)
    .concat(accountingAssetApi.middleware)
    .concat(accountTypeApi.middleware)
    .concat(accountingDocumentsApi.middleware)
    .concat(accountingDepartmentApi.middleware)
    .concat(appointmentDiagnosesApi.middleware)
    .concat(accountingBankAccountApi.middleware)
    .concat(admissionApi.middleware)
    .concat(cashPaymentModesApi.middleware)
    .concat(companyApi.middleware)
    .concat(doctorNotesApi.middleware)
    .concat(hospitalApi.middleware)
    .concat(maternityAntenatalProfileApi.middleware)
    .concat(maternityProfileApi.middleware)
    .concat(maternityDeliveriesApi.middleware)
    .concat(maternityVisitsApi.middleware)
    .concat(maternityPostnatalExaminationApi.middleware)
    .concat(maternityPhysicalExaminationApi.middleware)
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
    .concat(payrollEmployeeLoanRecordsApi.middleware)
    .concat(payrollEmployeePayCalculationsApi.middleware)
    .concat(payrollEmployeeMonthlyDeductionsFileApi.middleware)
    .concat(payrollEmployeePayrollDeductionsApi.middleware)
    .concat(payrollEmployeeCategoryApi.middleware)
    .concat(payrollPayPeriodApi.middleware)
    .concat(inpatientTreatmentChartApi.middleware)
    .concat(inpatientDoctorVisitsApi.middleware)
    .concat(inpatientNurseVisitsApi.middleware)
    .concat(inpatientPhysiotherapistVisitsApi.middleware)
    .concat(internalLabRequestsApi.middleware)
    .concat(invoicePaymentsApi.middleware)
    .concat(personalAccountChargeApi.middleware)
    .concat(personalChargesPaymentApi.middleware)
    .concat(procedureApi.middleware)
    .concat(procedureCategoryApi.middleware)
    .concat(procedureItemResultsApi.middleware)
    .concat(consultationTypeApi.middleware)
    .concat(consultationTypeGroupApi.middleware)
    .concat(consultationTypeSubGroupApi.middleware)
    .concat(consultationTypesWithCreditAccountsApi.middleware)
    .concat(internalRadiologyRequestsApi.middleware)
    .concat(referralTypeApi.middleware)
    .concat(resultStatusApi.middleware)
    .concat(specimenTypeApi.middleware)
    .concat(serviceTypeApi.middleware)
    .concat(userApi.middleware),

});
