/* eslint-disable array-callback-return */
import { Suspense, lazy, useEffect } from 'react';
import {
  ChakraProvider,
  Spinner,
  Text,
  VStack,
  extendTheme,
  theme,
} from '@chakra-ui/react';
import {
  Route, Routes, useLocation,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Services from './layouts/Services';
import ItemType from './layouts/ItemType';
import Stores from './_Stores/layouts/Stores';
import Users from './_User/layout/Users';
import Privileges from './layouts/Privileges';
import Administration from './layouts/Administration';
import DispensesPhysioTherapy from './layouts/DispensesPhysioTherapy';
import Insurance from './_Insurance/layouts/Insurances';
import AddInsurance from './_Insurance/layouts/AddInsurance';
import UserTypes from './_User/layout/UserTypes';
import Radiology from './_Radiology/layouts/Radiology';

import AddAdmissionCategory from './_Admission/layouts/AddAdmissionCategory';
import AdmissionType from './_Admission/layouts/AdmissionType';
import AdmissionBedAllocation from './_Admission/layouts/AdmissionBedAllocation';
import HospitalStores from './layouts/HospitalStores';
import WardType from './layouts/WardType';
// import ProceduresItems from './_Procedure/layouts/ProceduresItems';
// import DiseaseMinistry from './layouts/DiseaseMinistry';
import Charges from './layouts/Charges';
import ChargesDetail from './layouts/ChargesDetail';
import InsuranceMedicationMapping from './_Insurance/layouts/InsuranceMedicationMapping';
import InsuranceServiceCostMapping from './_Insurance/layouts/InsuranceServiceCostMapping';
import ConsultationTypes from './layouts/ConsultationTypes';
import AccountingSuppliers from './layouts/AccountingSuppliers';
import AccountingItem from './layouts/AccountingItem';
import AddMaternityDeliveryDetails from './_Maternity/layouts/AddMaternityDeliveryDetails';
import AddMaternityDewormingDetail from './_Maternity/layouts/AddMaternityDewormingDetail';
import PayrollDeductions from './_Payroll/layouts/PayrollDeductions';
import PayrollEarnings from './_Payroll/layouts/PayrollEarnings';
import PayrollEmployeeRecords from './_Payroll/layouts/PayrollEmployeeRecords';
import AddEmployeeRecords from './_Payroll/layouts/AddEmployeePayrollRecords';
import PayrollEmployeeLoanDetails from './_Payroll/layouts/PayrollEmployeeLoanDetails';
import PayrollEmployeeBenefitsFile from './_Payroll/layouts/PayrollEmployeeBenefitsFile';
import PayrollEmployeeEarningRecords from './_Payroll/layouts/PayrollEmployeeEarningRecords';
import Medication from './_Medication/layouts/Medication';
import Disease from './_Diseases/layouts/Disease';
import DiseaseMinistry from './_Diseases/layouts/DiseaseMinistry';
import PatientReport from './_Patient/layouts/PatientReport';
import AddPatientProcedure from './_Procedure/layouts/AddPatientProcedure';
import AddRadiologyRequest from './_Radiology/layouts/AddRadiologyRequest';
import ConfirmPatientCharges from './_Charges/layouts/ConfirmPatientCharges';
import BillTransport from './_Charges/layouts/BillTransport';
import AdmissionProfile from './_Admission/layouts/AdmissionProfile';
// import AddPatientBedAllocation from './_Admission/layouts/AddPatientBedAllocation';
import RadiologyDetails from './_Radiology/layouts/RadiologyDetails';
import VitalSignsAllergies from './_VitalSigns/layouts/VitalSignsAllergies';
import AddRadiologyResults from './_Radiology/layouts/AddRadiologyResults';
import RadiologyVisits from './_Radiology/layouts/RadiologyVisits';
import AddEligibilityScreening from './_Eligibility/layouts/AddEligibilityScreening';
import Eligibility from './_Eligibility/layouts/Eligibility';
import Hts from './_Eligibility/layouts/HTS';
import AddAdmission from './_Admission/layouts/AddAdmission';
import AddUser from './_User/layout/AddUser';
import CostCentre from './_CostCentre/layouts/CostCentre';
import AddCostCentre from './_CostCentre/layouts/AddCostCentre';
import IssueItemsCostCenter from './_Stores/layouts/IssueItemsCostCenter';
import AddJournal from './_Journal/layouts/AddJournal';
import Journal from './_Journal/layouts/Journal';
import ChartOfAccounts from './_ChartOfAccounts/layouts/ChartOfAccounts';
import ServiceTypes from './_ChartOfAccounts/layouts/ServiceTypes';
import ConsultationCreditAccounts from './_ChartOfAccounts/layouts/ConsultationCreditAccounts';
import ItemsRoutes from './routes/admin/Items.routes';
import LabRoutes from './routes/admin/Lab.routes';
import DiseasesDuplicates from './_Diseases/layouts/DiseasesDuplicates';
import NursingStation from './_Patient/layouts/NursingStation';
import AddAssetCategory from './_Assets/layouts/AddAssetCategory';
import AssetLocations from './_Assets/layouts/AssetLocations';
import AddAssetLocation from './_Assets/layouts/AddAssetLocation';
import AddAssets from './_Assets/layouts/AddAssets';

// Medication
const MedicationCategory = lazy(() => import('./_Medication/layouts/MedicationCategory'));
const MedicationPurchases = lazy(() => import('./_Medication/layouts/MedicationPurchases'));
const MedicationStockTake = lazy(() => import('./_Medication/layouts/MedicationStockTake'));

// Charges
const PersonalAccountCharges = lazy(() => import('./_Charges/layouts/PersonalAccountCharges'));
const PersonalAccountChargeDetail = lazy(() => import('./_Charges/layouts/PersonalAccountChargeDetail'));

// Doctor
const Doctor = lazy(() => import('./_Doctor/layouts/Doctor'));

// Patient
const AddPatient = lazy(() => import('./_Patient/layouts/AddPatient'));
const PatientPrescription = lazy(() => import('./_Patient/layouts/PatientPrescription'));
const Patients = lazy(() => import('./_Patient/layouts/Patients'));
const PatientVisits = lazy(() => import('./_Patient/layouts/PatientVisits'));
const PatientQueueNursingStation = lazy(() => import('./_Patient/layouts/PatientQueueNursingStation'));
const PatientDepartmentalStatus = lazy(() => import('./_Patient/layouts/PatientDepartmentalStatus'));
const PatientsTriaged = lazy(() => import('./_Patient/layouts/PatientsTriaged'));
const PatientQueue = lazy(() => import('./_Patient/layouts/PatientQueue'));

// Pharmacy
const AddPharmacyRequest = lazy(() => import('./_Pharmacy/layouts/AddPharmacyRequest'));
const OTCPatientQueue = lazy(() => import('./_Pharmacy/layouts/OTCPatientQueue'));
const WalkInPatientQueue = lazy(() => import('./_Pharmacy/layouts/WalkInPatientQueue'));
const PharmacyDrugsRequested = lazy(() => import('./_Pharmacy/layouts/PharmacyDrugsRequested'));

const Appointments = lazy(() => import('./_Appointment/layouts/Appointments'));

const AssetCategories = lazy(() => import('./_Assets/layouts/AssetCategories'));

// Lab
const PharmacyRequest = lazy(() => import('./_Pharmacy/layouts/PharmacyRequest'));

const AddVitals = lazy(() => import('./_VitalSigns/layouts/AddVitals'));
const Admission = lazy(() => import('./_Admission/layouts/Admission'));
const AdmissionCategory = lazy(() => import('./_Admission/layouts/AdmissionCategory'));
const AdmissionDetail = lazy(() => import('./_Admission/layouts/AdmissionDetail'));
const AddWard = lazy(() => import('./layouts/AddWard'));
// const Disease = lazy(() => import('./layouts/Disease'));
const AddMaternityProfile = lazy(() => import('./_Maternity/layouts/AddMaternityProfile'));
const MaternityProfileDetail = lazy(() => import('./_Maternity/layouts/MaternityProfileDetail'));
// const AddAdmission = lazy(() => import('./_Admission/layouts/AddAdmission'));
const MaternityAntenatalProfile = lazy(() => import('./_Maternity/layouts/MaternityAntenatalProfile'));
const MaternityProfile = lazy(() => import('./_Maternity/layouts/MaternityProfile'));
// const Admission = lazy(() => import('./layouts/Admission'));
const MaternityServices = lazy(() => import('./_Maternity/layouts/MaternityServices'));
const Homepage = lazy(() => import('./layouts/Homepage'));
const PatientDetail = lazy(() => import('./_Patient/layouts/PatientDetail'));
const Wards = lazy(() => import('./layouts/Wards'));

const UserDetail = lazy(() => import('./_User/layout/UserDetail'));

function App() {
  const extendedTheme = extendTheme({
    ...theme,
    styles: {
      global: {
        body: {
          bg: 'gray.50',
        },
      },
    },
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ChakraProvider theme={extendedTheme}>
      {/* <Routes>
        <Route path="/add-item-type" element={<AddItemType />} />
      </Routes> */}
      <Dashboard
        display={false}
      >

        <Suspense fallback={(
          <VStack
            w="full"
            h="100vh"
            alignItems="center"
            justifyContent="center"
            bgColor="gray.50"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
            <Text color="blue.500">Please wait...</Text>
          </VStack>
)}
        >

          <ItemsRoutes />
          <LabRoutes />

          <Routes>
            sss
            <Route path="/" element={<Homepage />} />

            <Route path="/asset-categories" element={<AssetCategories />} />
            <Route path="/add-asset-category/:id" element={<AddAssetCategory />} />
            <Route path="/assets-location" element={<AssetLocations />} />
            <Route path="/add-asset-location/:id" element={<AddAssetLocation />} />
            <Route path="/add-asset/:id" element={<AddAssets />} />

            <Route path="/administration" element={<Administration />} />

            <Route path="/accounting-suppliers" element={<AccountingSuppliers />} />
            <Route path="/accounting-items" element={<AccountingItem />} />
            <Route path="/register-cost-centre" element={<AddCostCentre />} />
            <Route path="/charts-of-account" element={<ChartOfAccounts />} />
            <Route path="/service-types" element={<ServiceTypes />} />
            <Route path="/consultation-credit-accounts" element={<ConsultationCreditAccounts />} />

            <Route path="/view-cost-centre" element={<CostCentre />} />

            <Route path="/charges" element={<Charges />} />
            <Route path="/charges-detail/:id" element={<ChargesDetail />} />

            <Route path="/diseases" element={<Disease />} />
            <Route path="/disease-ministry" element={<DiseaseMinistry />} />
            <Route path="/diseases-duplicates" element={<DiseasesDuplicates />} />

            <Route path="/doctor/:id" element={<Doctor />} />

            <Route path="/admin-insurances" element={<Insurance />} />
            <Route path="/add-insurance" element={<AddInsurance />} />

            <Route path="/consultation-types" element={<ConsultationTypes />} />

            <Route path="/medication" element={<Medication />} />
            <Route path="/medication-category" element={<MedicationCategory />} />
            <Route path="/medication-purchases" element={<MedicationPurchases />} />
            <Route path="/medication-stock-take" element={<MedicationStockTake />} />
            <Route path="/insurance-medication-mapping" element={<InsuranceMedicationMapping />} />
            <Route path="/insurance-service-cost-mapping" element={<InsuranceServiceCostMapping />} />

            {/* patient */}

            <Route path="/patients" element={<Patients />} />
            <Route path="/patient-queue" element={<PatientQueue />} />
            <Route path="/patient-departmental-status" element={<PatientDepartmentalStatus />} />
            <Route path="/add-patient" element={<AddPatient />} />
            <Route path="/patient-prescription/:id" element={<PatientPrescription />} />
            <Route path="/patient-detail/:id" element={<PatientDetail />} />
            <Route path="/patient-reports" element={<PatientReport />} />
            <Route path="/add-patient-procedure/:id" element={<AddPatientProcedure />} />
            <Route path="/confirm-patient-charges" element={<ConfirmPatientCharges />} />
            {/* <Route path="/add-patient-bed-allocation"

            element={<AddPatientBedAllocation />} /> */}
            <Route path="/bill-transport" element={<BillTransport />} />

            <Route path="/maternity" element={<MaternityServices />} />
            <Route path="/maternity-profile-detail/:id" element={<MaternityProfileDetail />} />

            <Route path="/pharmacy-request" element={<PharmacyRequest />} />
            <Route path="/add-pharmacy-request/:id" element={<AddPharmacyRequest />} />
            <Route path="/pharmacy-drugs-requested/:id" element={<PharmacyDrugsRequested />} />
            <Route path="/otc-patient-queue" element={<OTCPatientQueue />} />

            {/* <Route path="/admission" element={<DoctorAdmission />} /> */}

            <Route path="/admission" element={<Admission />} />
            <Route path="/add-patient/:id" element={<AddPatient />} />
            <Route path="/admission-type" element={<AdmissionType />} />
            <Route path="/admission-detail" element={<AdmissionDetail />} />
            <Route path="/admission-profile/:id" element={<AdmissionProfile />} />
            <Route path="/bed-allocation" element={<AdmissionBedAllocation />} />
            <Route path="/admission-category" element={<AdmissionCategory />} />
            <Route path="/add-admission-category" element={<AddAdmissionCategory />} />
            <Route path="/admission-detail/:id" element={<AdmissionDetail />} />

            {/* lab */}

            <Route path="/dispenses-physiotherapy-items" element={<DispensesPhysioTherapy />} />

            <Route path="/personal-account-charges" element={<PersonalAccountCharges />} />
            <Route path="/personal-account-charge-detail/:id" element={<PersonalAccountChargeDetail />} />

            <Route path="/appointments" element={<Appointments />} />
            <Route path="/add-admission/:id" element={<AddAdmission />} />

            <Route path="/nursing-station" element={<NursingStation />} />
            <Route path="/nursing-station-patient-queue" element={<PatientQueueNursingStation />} />
            <Route path="/triaged-patients" element={<PatientsTriaged />} />
            <Route path="/walkin-patient-queue" element={<WalkInPatientQueue />} />
            <Route path="/patient-visits" element={<PatientVisits />} />

            {/* radiology */}
            <Route path="/radiology-requests" element={<Radiology />} />
            <Route path="/radiology-details/:id" element={<RadiologyDetails />} />
            <Route path="/add-radiology-request/:id" element={<AddRadiologyRequest />} />
            <Route path="/add-radiology-results/:id" element={<AddRadiologyResults />} />
            <Route path="/radiology-visits" element={<RadiologyVisits />} />

            <Route path="/item-type" element={<ItemType />} />

            <Route path="/wards" element={<Wards />} />
            <Route path="/add-ward" element={<AddWard />} />
            <Route path="/ward-type" element={<WardType />} />

            <Route path="/stores" element={<Stores />} />
            <Route path="/issue-items-cost-center" element={<IssueItemsCostCenter />} />

            <Route path="/new-journal-entry" element={<AddJournal />} />
            <Route path="/journals" element={<Journal />} />

            <Route path="/payroll-deductions" element={<PayrollDeductions />} />
            <Route path="/payroll-employee-earnings" element={<PayrollEarnings />} />
            <Route path="/payroll-employee-earning-records" element={<PayrollEmployeeEarningRecords />} />
            <Route path="/payroll-employee-records" element={<PayrollEmployeeRecords />} />
            <Route path="/add-payroll-employee-records" element={<AddEmployeeRecords />} />
            <Route path="/payroll-employee-loan-details" element={<PayrollEmployeeLoanDetails />} />
            <Route path="/payroll-employee-benefits" element={<PayrollEmployeeBenefitsFile />} />

            <Route path="/maternity-antenatal-profile" element={<MaternityAntenatalProfile />} />
            <Route path="/maternity-profile" element={<MaternityProfile />} />
            <Route path="/add-maternity-profile" element={<AddMaternityProfile />} />
            <Route path="/add-maternity-delivery-details/:id" element={<AddMaternityDeliveryDetails />} />
            <Route path="/add-maternity-deworming-details/:id" element={<AddMaternityDewormingDetail />} />

            <Route path="/admin-services" element={<Services />} />

            <Route path="/admin-users" element={<Users />} />
            <Route path="/user-detail/:id" element={<UserDetail />} />
            <Route path="/admin-add-user" element={<AddUser />} />

            <Route path="/admin-user-type" element={<UserTypes />} />

            <Route path="/admin-privileges" element={<Privileges />} />

            <Route path="/hospital-stores" element={<HospitalStores />} />

            <Route path="/hts" element={<Hts />} />

            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/add-eligibility-screening/:id" element={<AddEligibilityScreening />} />

            <Route path="/vital-signs" element={<VitalSignsAllergies />} />
            <Route path="/add-vitals/:id" element={<AddVitals />} />

          </Routes>
        </Suspense>

      </Dashboard>

    </ChakraProvider>
  );
}

export default App;
