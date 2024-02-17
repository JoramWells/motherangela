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
import PriceLists from './layouts/PriceLists';
import Services from './layouts/Services';
import AddService from './layouts/AddService';
import AddSubItem from './layouts/AddSubItem';
import PriceListDetail from './layouts/PriceListDetail';
import Items from './layouts/Items';
import AddItem from './layouts/AddItem';
// import AddItemType from './layouts/AddItemType';
import PriceListItems from './layouts/PriceListItems';
import ItemType from './layouts/ItemType';
import Stores from './_Stores/layouts/Stores';
import Departments from './layouts/Departments';
import AddDepartment from './layouts/AddDepartment';
import DepartmentDetail from './layouts/DepartmentDetail';
import Pharmaceuticals from './layouts/Pharmaceuticals';
import AddPharmaceuticals from './layouts/AddPharceuticals';
import WardPrice from './layouts/WardPrices';
import Users from './_User/layout/Users';
import Privileges from './layouts/Privileges';
import GroupPrivileges from './layouts/GroupPrivileges';
import GroupPrivilegesDetails from './layouts/GroupPrivilegesDetail';
import Administration from './layouts/Administration';
import Drugs from './layouts/Drugs';
import Physiotherapy from './layouts/Physiotherapy';
import AddPhysiotherapyItems from './layouts/AddPhysiotherapy';
import DispensesPhysioTherapy from './layouts/DispensesPhysioTherapy';
import AddDispensePhysioItem from './layouts/AddDispensePhysioItem';
import Insurance from './_Insurance/layouts/Insurances';
import AddInsurance from './_Insurance/layouts/AddInsurance';
import UserTypes from './_User/layout/UserTypes';
import AddUserType from './layouts/AddUserType';
import DispenseDrugs from './layouts/DispenseDrugs';
import AddDispenseDrugs from './layouts/AddDispenseDrugs';
import Requisitions from './layouts/Requisitions';
import AddRequisitions from './layouts/AddRequisitions';
import MeasuringUnit from './layouts/MeasuringUnit';
import AddMeasuringUnit from './layouts/AddMeasuringUnit';
import ItemCategory from './layouts/ItemCategory';
import AddItemCategory from './layouts/AddItemCategory';
import Radiology from './_Radiology/layouts/Radiology';
import NursingStation from './layouts/NursingStation';
import Suppliers from './_Supplier/layouts/Suppliers';
import AddSuppliers from './layouts/AddSuppliers';
import SupplierClassification from './_Supplier/layouts/SupplierClassification';
import AddSupplierClassification from './layouts/AddSupplierClassification';
import SupplierClassificationDetail from './_Supplier/layouts/SupplierClassificationDetail';

import SupplierDetail from './_Supplier/layouts/SupplierDetail';
// import DoctorAdmission from './layouts/DoctorAdmission';
import DoctorAdmissionBedAllocation from './layouts/DoctorAdmissionBedAllocation';
import AddAdmissionCategory from './_Admission/layouts/AddAdmissionCategory';
import AdmissionType from './_Admission/layouts/AdmissionType';
import AdmissionBedAllocation from './_Admission/layouts/AdmissionBedAllocation';
import HospitalStores from './layouts/HospitalStores';
import WardType from './layouts/WardType';
import AddWardType from './layouts/AddWardType';
import ProceduresItems from './_Procedure/layouts/ProceduresItems';
// import DiseaseMinistry from './layouts/DiseaseMinistry';
import Charges from './layouts/Charges';
import ChargesDetail from './layouts/ChargesDetail';
import InsuranceMedicationMapping from './_Insurance/layouts/InsuranceMedicationMapping';
import InsuranceServiceCostMapping from './_Insurance/layouts/InsuranceServiceCostMapping';
import ConsultationTypes from './layouts/ConsultationTypes';
import AccountingSuppliers from './layouts/AccountingSuppliers';
import AccountingItem from './layouts/AccountingItem';
import AddAllergies from './layouts/AddAllergies';
import LabTestsSummarySubSection from './_Lab/layouts/LabTestsSummarySubSection';
import AddMaternityDeliveryDetails from './_Maternity/layouts/AddMaternityDeliveryDetails';
import AddMaternityDewormingDetail from './_Maternity/layouts/AddMaternityDewormingDetail';
import PayrollDeductions from './_Payroll/layouts/PayrollDeductions';
import PayrollEarnings from './_Payroll/layouts/PayrollEarnings';
import PayrollEmployeeRecords from './_Payroll/layouts/PayrollEmployeeRecords';
import AddEmployeeRecords from './layouts/AddEmployeePayrollRecords';
import PayrollEmployeeLoanDetails from './_Payroll/layouts/PayrollEmployeeLoanDetails';
import PayrollEmployeeBenefitsFile from './_Payroll/layouts/PayrollEmployeeBenefitsFile';
import PayrollEmployeeEarningRecords from './_Payroll/layouts/PayrollEmployeeEarningRecords';
import Medication from './_Medication/layouts/Medication';
import Disease from './_Diseases/layouts/Disease';
import DiseaseMinistry from './_Diseases/layouts/DiseaseMinistry';
import AddPrescription from './_Medication/layouts/AddPrescription';
import PatientReport from './_Patient/layouts/PatientReport';
import AddPatientProcedure from './_Procedure/layouts/AddPatientProcedure';
import AddLabRequest from './_Lab/layouts/AddLabRequest';
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
import LabRequestsSample from './_Lab/layouts/LabRequestsSample';
import CostCentre from './_CostCentre/layouts/CostCentre';
import AddCostCentre from './_CostCentre/layouts/AddCostCentre';
import IssueItemsCostCenter from './_Stores/layouts/IssueItemsCostCenter';
import AddJournal from './_Journal/layouts/AddJournal';
import Journal from './_Journal/layouts/Journal';

// Medication
const MedicationCategory = lazy(() => import('./_Medication/layouts/MedicationCategory'));
const MedicationPurchases = lazy(() => import('./_Medication/layouts/MedicationPurchases'));
const MedicationStockTake = lazy(() => import('./_Medication/layouts/MedicationStockTake'));

// Charges
const PersonalAccountCharges = lazy(() => import('./_Charges/layouts/PersonalAccountCharges'));
const PersonalAccountChargeDetail = lazy(() => import('./_Charges/layouts/PersonalAccountChargeDetail'));

// Procedures
const AddProcedureGroup = lazy(() => import('./_Procedure/layouts/AddProcedureGroup'));
const AddProcedures = lazy(() => import('./_Procedure/layouts/AddProcedures'));
const Procedures = lazy(() => import('./_Procedure/layouts/Procedures'));
const ProcedureGroups = lazy(() => import('./_Procedure/layouts/ProcedureGroups'));

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

// Lab
const InternalLabRequest = lazy(() => import('./_Lab/layouts/InternalLabRequest'));
const InternalLabRequestDetail = lazy(() => import('./_Lab/layouts/InternalLabRequestDetail'));
const LabTemplates = lazy(() => import('./_Lab/layouts/LabTemplates'));
const PharmacyRequest = lazy(() => import('./_Pharmacy/layouts/PharmacyRequest'));

const AddLabTest = lazy(() => import('./_Lab/layouts/AddLabTest'));
const AddVitals = lazy(() => import('./_VitalSigns/layouts/AddVitals'));
const AppointmentDetail = lazy(() => import('./_Appointment/layouts/AppointmentDetail'));
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
const MiscellaneousCharges = lazy(() => import('./layouts/MiscellaneousCharges'));
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
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/administration" element={<Administration />} />
            <Route path="/admin-drugs" element={<Drugs />} />
            <Route path="/dispense-drugs" element={<DispenseDrugs />} />
            <Route path="/add-dispense-drugs" element={<AddDispenseDrugs />} />

            <Route path="/accounting-suppliers" element={<AccountingSuppliers />} />
            <Route path="/accounting-items" element={<AccountingItem />} />
            <Route path="/register-cost-centre" element={<AddCostCentre />} />

            <Route path="/bed-allocation" element={<DoctorAdmissionBedAllocation />} />

            <Route path="/view-cost-centre" element={<CostCentre />} />

            <Route path="/charges" element={<Charges />} />
            <Route path="/charges-detail/:id" element={<ChargesDetail />} />

            <Route path="/diseases" element={<Disease />} />
            <Route path="/disease-ministry" element={<DiseaseMinistry />} />

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
            <Route path="/add-prescription/:id" element={<AddPrescription />} />
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
            <Route path="/lab-tests-summary-sub-section" element={<LabTestsSummarySubSection />} />
            <Route path="/lab-templates" element={<LabTemplates />} />
            <Route path="/add-lab-test" element={<AddLabTest />} />
            <Route path="/add-lab-request/:id" element={<AddLabRequest />} />
            <Route path="/internal-lab-request" element={<InternalLabRequest />} />
            <Route path="/internal-lab-request-detail/:id" element={<InternalLabRequestDetail />} />
            <Route path="/lab-request-sample/:id" element={<LabRequestsSample />} />

            <Route path="/miscellaneous-charges" element={<MiscellaneousCharges />} />

            <Route path="/requisitions" element={<Requisitions />} />
            <Route path="/add-requisitions" element={<AddRequisitions />} />

            <Route path="/physiotherapy" element={<Physiotherapy />} />
            <Route path="add-physiotherapy" element={<AddPhysiotherapyItems />} />
            <Route path="/dispenses-physiotherapy-items" element={<DispensesPhysioTherapy />} />
            <Route path="/add-physio-item-dispense" element={<AddDispensePhysioItem />} />

            <Route path="/admin-departments" element={<Departments />} />

            <Route path="/personal-account-charges" element={<PersonalAccountCharges />} />
            <Route path="/personal-account-charge-detail/:id" element={<PersonalAccountChargeDetail />} />

            <Route path="/appointments" element={<Appointments />} />
            <Route path="/appointment-detail/:id" element={<AppointmentDetail />} />
            <Route path="/add-admission/:id" element={<AddAdmission />} />

            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/add-suppliers" element={<AddSuppliers />} />
            <Route path="/supplier-detail/:id" element={<SupplierDetail />} />
            <Route path="/supplier-classification" element={<SupplierClassification />} />
            <Route path="/add-supplier-classification" element={<AddSupplierClassification />} />
            <Route path="/supplier-classification-detail" element={<SupplierClassificationDetail />} />

            <Route path="/admin-add-department" element={<AddDepartment />} />
            <Route path="/department-detail/:id" element={<DepartmentDetail />} />

            <Route path="/nursing-station" element={<NursingStation />} />
            <Route path="/nursing-station-patient-queue" element={<PatientQueueNursingStation />} />
            <Route path="/triaged-patients" element={<PatientsTriaged />} />
            <Route path="/walkin-patient-queue" element={<WalkInPatientQueue />} />
            <Route path="/patient-visits" element={<PatientVisits />} />

            <Route path="/add-allergies/:id" element={<AddAllergies />} />

            <Route path="/procedures" element={<Procedures />} />
            <Route path="/procedure-items" element={<ProceduresItems />} />
            <Route path="/add-procedure-details" element={<AddProcedures />} />
            <Route path="/procedure-groups" element={<ProcedureGroups />} />
            <Route path="/add-procedure-group" element={<AddProcedureGroup />} />

            <Route path="pharmaceuticals" element={<Pharmaceuticals />} />
            <Route path="add-pharmaceuticals" element={<AddPharmaceuticals />} />

            <Route path="measuring-unit" element={<MeasuringUnit />} />
            <Route path="add-measuring-unit" element={<AddMeasuringUnit />} />

            <Route path="/price-lists" element={<PriceLists />} />
            <Route path="/services-price-list" element={<PriceLists />} />

            <Route path="/price-list-items" element={<PriceListItems />} />
            <Route path="/pharmaceutical-price-list" element={<PriceListItems />} />

            <Route path="/pricelist-detail/:id" element={<PriceListDetail />} />

            <Route path="/items" element={<Items />} />
            <Route path="/add-item" element={<AddItem />} />

            {/* radiology */}
            <Route path="/radiology-requests" element={<Radiology />} />
            <Route path="/radiology-details/:id" element={<RadiologyDetails />} />
            <Route path="/add-radiology-request/:id" element={<AddRadiologyRequest />} />
            <Route path="/add-radiology-results/:id" element={<AddRadiologyResults />} />
            <Route path="/radiology-visits" element={<RadiologyVisits />} />

            <Route path="/add-subitem" element={<AddSubItem />} />
            <Route path="/item-type" element={<ItemType />} />
            <Route path="/item-category" element={<ItemCategory />} />
            <Route path="/add-item-category" element={<AddItemCategory />} />

            <Route path="/wards" element={<Wards />} />
            <Route path="/add-ward" element={<AddWard />} />
            <Route path="/add-ward-type" element={<AddWardType />} />
            <Route path="/ward-prices" element={<WardPrice />} />
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

            <Route path="/add-service" element={<AddService />} />
            <Route path="/admin-services" element={<Services />} />

            <Route path="/admin-users" element={<Users />} />
            <Route path="/user-detail/:id" element={<UserDetail />} />
            <Route path="/admin-add-user" element={<AddUser />} />

            <Route path="/admin-user-type" element={<UserTypes />} />
            <Route path="/admin-add-user-type" element={<AddUserType />} />

            <Route path="/admin-privileges" element={<Privileges />} />
            <Route path="/admin-group-privileges" element={<GroupPrivileges />} />
            <Route path="/admin-group-privileges-details/:id" element={<GroupPrivilegesDetails />} />

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
