import { configureStore } from '@reduxjs/toolkit';
import { patientsApi } from './api/patients.api';
import { wardApi } from './api/ward.api';
import { admissionApi } from './api/admissions.api';
import { appointmentApi } from './api/appointments.api';
import { hospitalApi } from './api/hospital.api';
import { maternityProfileApi } from './api/maternity.api';
import { userApi } from './api/users.api';
import { userTypeApi } from './api/userType.api';
import { procedureApi } from './api/procedureDetails.api';
import { procedureItemApi } from './api/procedureItem.api';
import { supplierApi } from './api/suppliers.api';
import { insuranceApi } from './api/insurance.api';
import { diseaseApi } from './api/disease.api';
import { diseaseMinistryApi } from './api/diseaseMinistry.api copy';
import { creditPaymentApi } from './api/creditPayment.api';
import { companyApi } from './api/company.api';
import { consultationTypeApi } from './api/consultation/consultationType.api';
import { medicationApi } from './_Medication/api/medication.api';
import { medicationCategoryApi } from './_Medication/api/medicationCategory.api';
import { medicationPurchasesApi } from './_Medication/api/medicationPurchases.api';
import { medicationStockTakeApi } from './_Medication/api/medicationStockTake.api';
import { insuranceMedicationMappingApi } from './api/insuranceMedicationMapping.api';
import { insuranceServiceCostMappingApi } from './api/insuranceServiceCostMapping.api';
import { personalAccountChargeApi } from './api/personalAccountCharges.api';
import { accountingSupplierApi } from './api/accountingSuppliers.api';
import { accountingItemApi } from './api/accountingItem.api';
import { labTestsSummarySubSectionApi } from './api/labTestsSummarySubSection.api';
import { userPrivilegesApi } from './api/userPrivileges.api';
import { payrollDeductionsApi } from './api/payrollDeductions.api';
import { payrollEarningsApi } from './api/payrollEarnings.api';
import { payrollEmployeeRecordsApi } from './api/payrollEmployeeRecords.api';
import { payrollEmployeeCategoryApi } from './api/payrollEmployeeCategory.api';
import { payrollPayTypeApi } from './api/payrollPayType.api';
import { payrollEmployeeBenefitsApi } from './api/payrollEmployeeBenefitsFile.api';
import { userPrivilegeDetailsApi } from './api/userPrivilegeDetail.api';
import { accountTypeApi } from './api/accountType.api';
import { serviceTypeApi } from './api/serviceType.api';
import { internalLabRequestsApi } from './api/internalLabRequests.api';
import { aLabApi } from './_Lab/api/alab.api';
import { internalPharmacyRequestApi } from './_Pharmacy/api/internalPharmacyRequest.api';
import { wardTypesApi } from './api/wardType.api';
import { admissionCategoryApi } from './api/admissionCategory.api';
import { wardBedsApi } from './api/wardBed.api';
import { vitalSignsApi } from './_VitalSigns/api/vitalSigns.api';
import { eligibilityApi } from './_Eligibility/api/eligibility.api';
import { priceListItemApi } from './api/pricelListItems.api';
import { accountingStoresApi } from './api/accounts/accountingStore.api';
import { accountingCostCentreApi } from './api/accounts/accountingCostCentre.api';
import { specimenTypeApi } from './_Lab/api/specimenType.api';
import { accountingDepartmentApi } from './api/accounts/accountingDepartment.api';
import { accountingJournalApi } from './api/accounts/accountingJournal.api';
import { accountingAccountDetailsApi } from './api/accounts/accountingAccountDetails.api';
import {
  consultationTypesWitCreditAccountsApi,
} from './api/consultation/consultationTypesWitCreditAccounts';

export const store = configureStore({
  reducer: {
    [patientsApi.reducerPath]: patientsApi.reducer,
    [wardApi.reducerPath]: wardApi.reducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [hospitalApi.reducerPath]: hospitalApi.reducer,
    [maternityProfileApi.reducerPath]: maternityProfileApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [userTypeApi.reducerPath]: userTypeApi.reducer,
    [procedureApi.reducerPath]: procedureApi.reducer,
    [procedureItemApi.reducerPath]: procedureItemApi.reducer,
    [supplierApi.reducerPath]: supplierApi.reducer,
    [insuranceApi.reducerPath]: insuranceApi.reducer,
    [diseaseApi.reducerPath]: diseaseApi.reducer,
    [diseaseMinistryApi.reducerPath]: diseaseMinistryApi.reducer,
    [creditPaymentApi.reducerPath]: creditPaymentApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [consultationTypeApi.reducerPath]: consultationTypeApi.reducer,
    [medicationApi.reducerPath]: medicationApi.reducer,
    [medicationCategoryApi.reducerPath]: medicationCategoryApi.reducer,
    [medicationPurchasesApi.reducerPath]: medicationPurchasesApi.reducer,
    [medicationStockTakeApi.reducerPath]: medicationStockTakeApi.reducer,
    [insuranceMedicationMappingApi.reducerPath]: insuranceMedicationMappingApi.reducer,
    [insuranceServiceCostMappingApi.reducerPath]: insuranceServiceCostMappingApi.reducer,
    [personalAccountChargeApi.reducerPath]: personalAccountChargeApi.reducer,
    [accountingSupplierApi.reducerPath]: accountingSupplierApi.reducer,
    [accountingItemApi.reducerPath]: accountingItemApi.reducer,
    [labTestsSummarySubSectionApi.reducerPath]: labTestsSummarySubSectionApi.reducer,
    [userPrivilegesApi.reducerPath]: userPrivilegesApi.reducer,
    [payrollDeductionsApi.reducerPath]: payrollDeductionsApi.reducer,
    [payrollEarningsApi.reducerPath]: payrollEarningsApi.reducer,
    [payrollEmployeeRecordsApi.reducerPath]: payrollEmployeeRecordsApi.reducer,
    [payrollEmployeeCategoryApi.reducerPath]: payrollEmployeeCategoryApi.reducer,
    [payrollPayTypeApi.reducerPath]: payrollPayTypeApi.reducer,
    [payrollEmployeeBenefitsApi.reducerPath]: payrollEmployeeBenefitsApi.reducer,
    [userPrivilegeDetailsApi.reducerPath]: userPrivilegeDetailsApi.reducer,
    [accountTypeApi.reducerPath]: accountTypeApi.reducer,
    [serviceTypeApi.reducerPath]: serviceTypeApi.reducer,
    [internalLabRequestsApi.reducerPath]: internalLabRequestsApi.reducer,
    [aLabApi.reducerPath]: aLabApi.reducer,
    [internalPharmacyRequestApi.reducerPath]: internalPharmacyRequestApi.reducer,
    [wardTypesApi.reducerPath]: wardTypesApi.reducer,
    [wardBedsApi.reducerPath]: wardBedsApi.reducer,
    [admissionCategoryApi.reducerPath]: admissionCategoryApi.reducer,
    [vitalSignsApi.reducerPath]: vitalSignsApi.reducer,
    [eligibilityApi.reducerPath]: eligibilityApi.reducer,
    [priceListItemApi.reducerPath]: priceListItemApi.reducer,
    [accountingCostCentreApi.reducerPath]: accountingCostCentreApi.reducer,
    [accountingStoresApi.reducerPath]: accountingStoresApi.reducer,
    [accountingDepartmentApi.reducerPath]: accountingDepartmentApi.reducer,
    [accountingJournalApi.reducerPath]: accountingJournalApi.reducer,
    [accountingAccountDetailsApi.reducerPath]: accountingAccountDetailsApi.reducer,
    [consultationTypesWitCreditAccountsApi.reducerPath
    ]: consultationTypesWitCreditAccountsApi.reducer,
    [specimenTypeApi.reducerPath]: specimenTypeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(patientsApi.middleware)
    .concat(wardApi.middleware)
    .concat(admissionApi.middleware)
    .concat(appointmentApi.middleware)
    .concat(hospitalApi.middleware)
    .concat(maternityProfileApi.middleware)
    .concat(userApi.middleware)
    .concat(userTypeApi.middleware)
    .concat(procedureApi.middleware)
    .concat(procedureItemApi.middleware)
    .concat(supplierApi.middleware)
    .concat(insuranceApi.middleware)
    .concat(diseaseApi.middleware)
    .concat(diseaseMinistryApi.middleware)
    .concat(creditPaymentApi.middleware)
    .concat(companyApi.middleware)
    .concat(consultationTypeApi.middleware)
    .concat(medicationApi.middleware)
    .concat(medicationCategoryApi.middleware)
    .concat(medicationPurchasesApi.middleware)
    .concat(medicationStockTakeApi.middleware)
    .concat(insuranceMedicationMappingApi.middleware)
    .concat(insuranceServiceCostMappingApi.middleware)
    .concat(personalAccountChargeApi.middleware)
    .concat(accountingItemApi.middleware)
    .concat(accountingSupplierApi.middleware)
    .concat(labTestsSummarySubSectionApi.middleware)
    .concat(userPrivilegesApi.middleware)
    .concat(payrollDeductionsApi.middleware)
    .concat(payrollEarningsApi.middleware)
    .concat(payrollEmployeeRecordsApi.middleware)
    .concat(payrollEmployeeCategoryApi.middleware)
    .concat(payrollPayTypeApi.middleware)
    .concat(payrollEmployeeBenefitsApi.middleware)
    .concat(userPrivilegeDetailsApi.middleware)
    .concat(accountTypeApi.middleware)
    .concat(serviceTypeApi.middleware)
    .concat(internalLabRequestsApi.middleware)
    .concat(aLabApi.middleware)
    .concat(internalPharmacyRequestApi.middleware)
    .concat(wardTypesApi.middleware)
    .concat(wardBedsApi.middleware)
    .concat(admissionCategoryApi.middleware)
    .concat(vitalSignsApi.middleware)
    .concat(eligibilityApi.middleware)
    .concat(priceListItemApi.middleware)
    .concat(accountingCostCentreApi.middleware)
    .concat(accountingStoresApi.middleware)
    .concat(accountingDepartmentApi.middleware)
    .concat(accountingJournalApi.middleware)
    .concat(accountingAccountDetailsApi.middleware)
    .concat(consultationTypesWitCreditAccountsApi.middleware)
    .concat(specimenTypeApi.middleware)
  ,
});
