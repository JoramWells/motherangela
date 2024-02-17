/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');

const sequelize = require('./db/connect');
const priceRoutes = require('./routes/pricelists.routes');
const itemTypeRoutes = require('./routes/itemType.routes');
const subItemRoutes = require('./routes/subItem.routes');
const priceListItemsRoutes = require('./routes/priceListItems.routes');
const departmentRoutes = require('./routes/department.routes');
const pharmaceuticalRoutes = require('./routes/pharmaceuticalStore.routes');
const wardRoutes = require('./routes/ward/ward.routes');
const wardBedRoutes = require('./routes/ward/wardBed.routes');
const userRoutes = require('./routes/user.routes');
// const groupPrivilegeRoutes = require('./routes/groupPrivileges.routes');
const drugRoutes = require('./routes/drugs.routes');
const userPrivilegeRoutes = require('./routes/userPrivilege.routes');
const physiotherapyRoutes = require('./routes/physiotherapy.routes');
const insuranceRoutes = require('./routes/insurance/insurance.routes');
const userTypeRoutes = require('./routes/userType.routes');
const measuringUnitRoutes = require('./routes/measuringUnit.routes');
const itemCategoryRoutes = require('./routes/itemCategory.routes');
const itemRoutes = require('./routes/item.routes');
const radiologyRoutes = require('./routes/radiology.routes');
const supplierRoutes = require('./routes/supplier.routes');
const supplierClassificationRoutes = require('./routes/supplierClassification.routes');
// const patientRoutes = require('./routes/patient.routes');

const outPatientServicesCHRoutes = require('./routes/outpatientServicesChildHealth.routes');
const inPatientCaseTypeRoutes = require('./routes/inPatientCaseTypes.routes');
const hospitalStoreRoutes = require('./routes/hospitalStore.routes');
const maternityAntenatalProfileRoutes = require('./routes/maternityAntenatalProfile.routes');
const maternityProfileRoutes = require('./routes/maternityProfile.routes');
const wardTypeRoutes = require('./routes/ward/wardType.routes');

const diseaseRoutes = require('./routes/disease.routes');
const diseaseMinistryRoutes = require('./routes/diseaseMinistry.routes');
const creditPaymentRoutes = require('./routes/creditPayment.routes');
const companyRoutes = require('./routes/companyDetails.routes');
const consultationTypeRoutes = require('./routes/consultationType.routes');
const medicationRoutes = require('./routes/medication/medication.routes');
const medicationCategoryRoutes = require('./routes/medication/medicationCategory.routes');
const medicinePurchaseRoutes = require('./routes/medicinePurchases.routes');
const medicationStockTakeRoutes = require('./routes/medication/medicationStockTake.routes');
const insuranceMedicationMapping = require('./routes/insurance/insuranceMedicationMapping.routes');
const insuranceServiceCostMapping = require('./routes/insurance/insuranceServiceCostMapping.routes');
const personalAccountChargeRoutes = require('./routes/charges/personalAccountCharges.routes');
const payrollDeductionsRoutes = require('./routes/payroll/payrollDeductions.routes');
const payrollEarningsRoutes = require('./routes/payroll/payrollEarnings.routes');
const payrollEmployeeRecordsRoutes = require('./routes/payroll/payrollEmployeeRecords.routes');
const payrollJobTitleRoutes = require('./routes/payroll/payrollJobTitle.routes');
const payrollEmployeeCategoryRoutes = require('./routes/payroll/payrollEmployeeCategory.routes');
const payrollPayTypeRoutes = require('./routes/payroll/payrollPayType.routes');
const payrollEmployeeBenefitsFileRoutes = require('./routes/payroll/payrollEmployeeBenefitFile.routes');
const payrollEmployeeDeductionsRoutes = require('./routes/payroll/payrollEmployeeDeductions.routes');
const userPrivilegeDetailRoutes = require('./routes/userPrivilegeDetail.routes');

const app = express();

const PORT = process.env.PORT || 5001;
const corsOption = {
  origin: ['http://localhost:3000'],
};

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));



// enable cors
app.use(cors(corsOption));

app.use('/item-type', itemTypeRoutes);
app.use('/departments', departmentRoutes);
app.use('/drugs', drugRoutes);
app.use('/pricelists', priceRoutes);
app.use('/subItem', subItemRoutes);
app.use('/price-list-items', priceListItemsRoutes);
app.use('/pharmaceutical', pharmaceuticalRoutes);
app.use('/wards', wardRoutes);
app.use('/ward-beds', wardBedRoutes);
app.use('/users', userRoutes);
app.use('/user-privileges', userPrivilegeRoutes);
// app.use('/group-privileges', groupPrivilegeRoutes);
app.use('/physiotherapy', physiotherapyRoutes);
app.use('/insurance', insuranceRoutes);
app.use('/user-type', userTypeRoutes);
app.use('/measuring-unit', measuringUnitRoutes);
app.use('/item-category', itemCategoryRoutes);
app.use('/items', itemRoutes);
app.use('/radiology', radiologyRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/supplier-classification', supplierClassificationRoutes);
// app.use('/patient', patientRoutes);

app.use('/out-patient-services-ch', outPatientServicesCHRoutes);
app.use('/in-patient-case-type', inPatientCaseTypeRoutes);
app.use('/hospital-store', hospitalStoreRoutes);
app.use('/maternity-antenatal-profile', maternityAntenatalProfileRoutes);
app.use('/maternity-profile', maternityProfileRoutes);
app.use('/ward-types', wardTypeRoutes);
app.use('/disease', diseaseRoutes);
app.use('/disease-ministry', diseaseMinistryRoutes);
app.use('/credit-payment', creditPaymentRoutes);
app.use('/company', companyRoutes);
app.use('/consultation-type', consultationTypeRoutes);
app.use('/medication', medicationRoutes);
app.use('/medication-category', medicationCategoryRoutes);
app.use('/medication-purchase', medicinePurchaseRoutes);
app.use('/medication-stock-take', medicationStockTakeRoutes);
app.use('/insurance-medication-mapping', insuranceMedicationMapping);
app.use('/insurance-service-cost-mapping', insuranceServiceCostMapping);
app.use('/personal-account-charge', personalAccountChargeRoutes);
app.use('/payroll-deductions', payrollDeductionsRoutes);
app.use('/payroll-earnings', payrollEarningsRoutes);
app.use('/payroll-employee-records', payrollEmployeeRecordsRoutes);
app.use('/payroll-job-title', payrollJobTitleRoutes);
app.use('/payroll-employee-category', payrollEmployeeCategoryRoutes);
app.use('/payroll-pay-type', payrollPayTypeRoutes);
app.use('/payroll-employee-benefits-file', payrollEmployeeBenefitsFileRoutes);
app.use('/payroll-employee-deductions', payrollEmployeeDeductionsRoutes);
app.use('/user-privilege-details', userPrivilegeDetailRoutes);

// app.use((err, req, res, next) => {
//   const errStatus = err.status || 500;
//   const errMessage = err.message || 'Something went wrong';
//   return res.status(errStatus).json(errMessage);
// });

const testConnection = async () => {
  await sequelize.authenticate().then(() => {
    console.log('Connected to database successfully');
  }).catch((error) => {
    console.error('Unable to connect to database: ', error);
  });
};

testConnection();

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
