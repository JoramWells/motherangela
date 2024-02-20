import {
  FaCalendarTimes,
  FaCar,
  FaChild,
  FaFileInvoiceDollar,
  FaFirstAid,
  FaHome, FaHospitalAlt, FaListOl, FaMoneyBill, FaMoneyCheck, FaPills,
  FaProcedures,
  FaRadiation, FaRegCheckCircle, FaRegMoneyBillAlt,
  FaStore, FaToolbox, FaTools, FaTrain, FaUser, FaUserNurse,
} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import SidebarItemButton from './SidebarItemButton';
import SidebarItemLink from './SidebarItemLink';

const SidebarListItems = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const { onToggle } = useDisclosure();

  return (
    <>
      <SidebarItemButton
        selected={pathname === '/'}
        onClick={() => navigate('/')}
        text="dashboard"
        icon={<FaHome size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/accounts'
          || pathname.includes('accounting-suppliers')
          || pathname.includes('accounting-items')}
        onClick={onToggle}
        text="Accounts"
        // link="/accounts"
        itemList={[
          { id: nanoid(), title: 'Items', link: '/accounting-items' },
          { id: nanoid(), title: 'Suppliers', link: '/accounting-suppliers' },
          { id: nanoid(), title: 'General Ledger', link: '/accounting-suppliers' },
          { id: nanoid(), title: 'General Ledger (Inclusive of Patient Invoices Yet to be finalized)', link: '/accounting-suppliers' },
          { id: nanoid(), title: 'Trial Balance', link: '/accounting-suppliers' },
          { id: nanoid(), title: 'Profit & Loss', link: '/accounting-suppliers' },
          { id: nanoid(), title: 'Profit & Loss Inclusive Of Invoices Yet to be finalized', link: '/accounting-suppliers' },
          { id: nanoid(), title: 'Profit & Loss (Month Comparison)', link: '/accounting-suppliers' },
          { id: nanoid(), title: 'Balance Sheet', link: '/accounting-suppliers' },
          { id: nanoid(), title: 'Accounts Payable Aging Report', link: '/accounting-suppliers' },
          { id: nanoid(), title: 'Accounts Payable Aging Report (Totals Only)', link: '/accounting-suppliers' },
          { id: nanoid(), title: 'Supplier Balances Report', link: '/accounting-suppliers' },
          { id: nanoid(), title: 'Supplier Ledger Report', link: '/accounting-suppliers' },
        ]}
        icon={<FaMoneyCheck size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/administration'
        || pathname.includes('administration')
          || pathname.includes('admin')
          || pathname.includes('user-detail')
          || pathname.includes('insurance')
          || pathname.includes('register-items')
          || pathname.includes('view-items')
        || pathname.includes('add-service')}
        onClick={onToggle}
        text="Administration"
        link="/administration"
        itemList={[
          { id: nanoid(), title: 'View Items', link: 'view-items' },
          { id: nanoid(), title: 'Register Items', link: 'register-items' },
          { id: nanoid(), title: 'Departments', link: '/admin-departments' },
          { id: nanoid(), title: 'Diseases', link: '/diseases' },
          { id: nanoid(), title: 'Drugs', link: '/admin-drugs' },
          { id: nanoid(), title: 'Hospital Branch', link: '/general-store' },
          { id: nanoid(), title: 'Insurances', link: '/admin-insurances' },
          { id: nanoid(), title: 'Ministry Diseases', link: '/disease-ministry' },
          { id: nanoid(), title: 'Privileges', link: '/admin-privileges' },
          { id: nanoid(), title: 'Services', link: '/admin-services' },
          { id: nanoid(), title: 'User Type', link: '/admin-user-type' },
          { id: nanoid(), title: 'Users', link: '/admin-users' },

        ]}
        icon={<FaUser size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/appointments'
          || pathname.includes('/appointment-checklist')
          || pathname.includes('/appointment-diagnosis')
          || pathname.includes('/patient-queue')
          || pathname.includes('/patient-visits')
          || pathname.includes('/patient-prescription')
          || pathname.includes('/add-prescription')
          || pathname.includes('/patient-departmental-status')
          || pathname.includes('/patient-reports')
          || pathname.includes('/doctor')
          || pathname.includes('/appointment-detail')}
        onClick={onToggle}
        text="Appointments"
        link="/appointments"
        itemList={[
          { id: nanoid(), title: 'Appointment Checklist', link: '/appointment-checklist' },
          { id: nanoid(), title: 'Appointment Diagnosis', link: '/appointment-diagnosis' },
          { id: nanoid(), title: 'Patient Departmental Status', link: '/patient-departmental-status' },
          { id: nanoid(), title: 'Patient Queue', link: '/patient-queue' },
          { id: nanoid(), title: 'Patient Visits', link: '/patient-visits' },
          { id: nanoid(), title: 'Patient Reports', link: '/patient-reports' },
        ]}
        icon={<FaCalendarTimes size={15} />}
      />

      {/*  */}
      <SidebarItemLink
        selected={pathname === '/ccc'
          || pathname.includes('/eligibility')
          || pathname.includes('/hts')}
        onClick={onToggle}
        text="CCC"
        link="/ccc"
        itemList={[
          { id: nanoid(), title: 'Eligibility', link: '/eligibility' },
          { id: nanoid(), title: 'HTS', link: '/hts' },
        ]}
        icon={<FaFirstAid size={15} />}
      />

      {/*  */}
      <SidebarItemLink
        selected={pathname === '/charts-of-account' || pathname.includes('/service-types')
          || pathname.includes('/view-cost-centre')}
        onClick={onToggle}
        text="Charts of Account"
        // link="/ccc"
        itemList={[
          { id: nanoid(), title: 'View Charts', link: '/charts-of-account' },
          { id: nanoid(), title: 'Chart Reports', link: '/view-cost-centre' },
          { id: nanoid(), title: 'Service Types', link: '/service-types' },
          { id: nanoid(), title: 'Consultation Categories Credit Accounts', link: '/consultation-credit-accounts' },
        ]}
        icon={<FaCar size={15} />}
      />

      {/*  */}
      <SidebarItemLink
        selected={pathname === '/register-cost-centre'
          || pathname.includes('/view-cost-centre')}
        onClick={onToggle}
        text="Cost Centre"
        // link="/ccc"
        itemList={[
          { id: nanoid(), title: 'Register', link: '/register-cost-centre' },
          { id: nanoid(), title: 'View', link: '/view-cost-centre' },
        ]}
        icon={<FaRegCheckCircle size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/charges'
          || pathname.includes('/charges-checklist')
          || pathname.includes('/charges-diagnosis')
          || pathname.includes('/personal-account-charge-detail')
          || pathname.includes('/personal-account-charges')
          || pathname.includes('/confirm-patient-charges')
          || pathname.includes('/charges-detail')}
        onClick={onToggle}
        text="Charges"
        link="/charges"
        itemList={[
          { id: nanoid(), title: 'Bill Transport', link: '/bill-transport' },
          { id: nanoid(), title: 'Bill Services', link: '/bill-services' },
          { id: nanoid(), title: 'Confirm Patient Charges', link: '/confirm-patient-charges' },
          { id: nanoid(), title: 'Personal Account Charges', link: '/personal-account-charges' },
        ]}
        icon={<FaCalendarTimes size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/new-journal-entry' || pathname.includes('/journals')}
        onClick={onToggle}
        text="General Journal"
        link="/hospitals"
        itemList={[
          { id: nanoid(), title: 'New Entry', link: '/new-journal-entry' },
          { id: nanoid(), title: 'Journal', link: '/journals' },
        ]}
        icon={<FaHospitalAlt size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/hospitals'
          || pathname.includes('/hospital-clinics')
          || pathname.includes('/hospital-stores')
          || pathname.includes('/hospital-types')}
        onClick={onToggle}
        text="Hospitals"
        link="/hospitals"
        itemList={[
          { id: nanoid(), title: 'Clinics', link: '/hospital-clinics' },
          { id: nanoid(), title: 'Stores', link: '/hospital-stores' },
          { id: nanoid(), title: 'Types', link: '/hospital-types' },
        ]}
        icon={<FaHospitalAlt size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/lab' || pathname.includes('/internal-lab-request')
          || pathname.includes('/lab-templates')
          || pathname.includes('/add-lab-request')
          || pathname.includes('/add-lab-test')
          || pathname.includes('/add-lab-test')}
        onClick={onToggle}
        text="Lab"
        link="/lab"
        itemList={[
          { id: nanoid(), title: 'Lab Requests (In-Patient)', link: '/lab-requests-in' },
          { id: nanoid(), title: 'Lab Requests (Out-Patient)', link: '/internal-lab-request' },
          { id: nanoid(), title: 'Internal Patient Lab Visits', link: '/all-reports' },
          { id: nanoid(), title: 'Test Summary', link: '/lab-tests-summary-sub-section' },
          { id: nanoid(), title: 'Lab Test Prices', link: '/lab-test-prices' },
          { id: nanoid(), title: 'View Lab Templates', link: '/lab-templates' },
          { id: nanoid(), title: 'Register Lab Templates', link: '/add-lab-test' },
        ]}
        icon={<FaTools size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/maternity-profile'
          || pathname.includes('/maternity-antenatal-profile')
          || pathname.includes('/add-maternity-antenatal-profile')
          || pathname.includes('/add-maternity-profile')
          || pathname.includes('/add-maternity-delivery-details')
          || pathname.includes('/add-maternity-deworming-details')
        || pathname.includes('/maternity-profile')}
        onClick={onToggle}
        text="Maternity"
        link="/maternity-profile"
        itemList={[
          { id: nanoid(), title: 'Maternity Antenatal Profile', link: '/maternity-antenatal-profile' },

        ]}
        icon={<FaChild size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/nursing-station' || pathname.includes('triaged-patients') || pathname.includes('/vital-signs') || pathname.includes('/add-vitals')}
        onClick={onToggle}
        text="Nursing Station"
        link="/nursing-station"
        itemList={[
          { id: nanoid(), title: 'Dialysis Package', link: '/ward-prices' },
          { id: nanoid(), title: 'Patient Queue', link: '/nursing-station-patient-queue' },
          { id: nanoid(), title: 'Pharmacy Requests', link: '/pharmeuticals' },
          { id: nanoid(), title: 'Procedure Reports', link: '/pharmeuticals' },
          { id: nanoid(), title: 'Triaged Patients', link: '/triaged-patients' },
          { id: nanoid(), title: 'Vital Signs & Allergies', link: '/vital-signs' },

        ]}
        icon={<FaUserNurse size={15} />}
      />
      <SidebarItemLink
        selected={pathname === '/patient-invoices'}
        onClick={onToggle}
        text="Patient Invoices"
        link="/patient-invoices"
        itemList={[
          { id: nanoid(), title: 'Individual Accounts', link: '/individual-accounts' },
          { id: nanoid(), title: 'Invoices', link: '/invoices' },
          { id: nanoid(), title: 'Discharged Patients', link: '/discharged-patients' },
          { id: nanoid(), title: 'Miscellaneous Income Invoices', link: '/miscellaneous-invoices' },
          { id: nanoid(), title: 'Consultation Retainer Invoice', link: '/consultation-retainer' },
          { id: nanoid(), title: 'Dispatched Invoices', link: '/dispatched-invoices' },

        ]}
        icon={<FaFileInvoiceDollar size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/patients' || pathname.includes('/patient-detail')
          || pathname.includes('/add-patient')
          || pathname.includes('/add-admission')
          || pathname.includes('/admission')}
        onClick={onToggle}
        text="Patients"
        link="/patients"
        itemList={[
          { id: nanoid(), title: 'Admitted Patients', link: '/admission' },
          { id: nanoid(), title: 'Out-Patient', link: '/out-patient' || pathname.includes('/add-patient') },
          { id: nanoid(), title: 'Patient Reports', link: '/patient-reports' },
          { id: nanoid(), title: 'View Patients', link: '/patients' },
        ]}
        icon={<FaHospitalAlt size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/payroll'
          || pathname.includes('/payroll-deductions')
        || pathname.includes('/payroll-employee-records')
          || pathname.includes('/payroll-earnings')}
        onClick={onToggle}
        text="Payroll Items"
        link="/payroll"
        itemList={[
          { id: nanoid(), title: 'Benefit Type', link: '/all-reports' },
          { id: nanoid(), title: 'Employee Category', link: '/admit-patient' },
          { id: nanoid(), title: 'Employees', link: '/payroll-employee-records' },
          { id: nanoid(), title: 'Tax Status', link: '/out-patient' || pathname.includes('/add-patient') },
          { id: nanoid(), title: 'Overtime Type', link: '/all-reports' },
          { id: nanoid(), title: 'Loan Type', link: '/all-reports' },
          { id: nanoid(), title: 'Register Earning', link: '/payroll-employee-earnings' },
          { id: nanoid(), title: 'Tax Deduction', link: '/payroll-deductions' },
          { id: nanoid(), title: 'Job Title', link: '/all-reports' },
          { id: nanoid(), title: 'Register Bank', link: '/all-reports' },
          { id: nanoid(), title: 'Provident Fund Bracket', link: '/all-reports' },
        ]}
        icon={<FaHospitalAlt size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/payroll-transactions' || pathname.includes('/payroll-employee-loan-details')
          || pathname.includes('/payroll-employee-benefits')}
        onClick={onToggle}
        text="Payroll Transactions"
        link="/payroll"
        itemList={[
          { id: nanoid(), title: 'Payroll', link: '/payroll-details' },
          { id: nanoid(), title: 'Employee Loans', link: '/payroll-employee-loan-details' || pathname.includes('/add-patient') },
          { id: nanoid(), title: 'Regular Time Details', link: '/all-reports' },
          { id: nanoid(), title: 'Overtime', link: '/all-reports' },
          { id: nanoid(), title: 'Tardiness', link: '/all-reports' },
          { id: nanoid(), title: 'Employee Benefits', link: '/payroll-employee-benefits' },
          { id: nanoid(), title: 'Employee Monthly deduction', link: '/payroll-deductions' },
          { id: nanoid(), title: 'Employee Earning', link: '/payroll-employee-earning-records' },
          { id: nanoid(), title: 'Register Bank', link: '/all-reports' },
          { id: nanoid(), title: 'Provident Fund Bracket', link: '/all-reports' },
        ]}
        icon={<FaHospitalAlt size={15} />}
      />

      <SidebarItemLink
        selected={
          pathname === '/pharmacy' || pathname.includes('walkin-patient-queue')
          || pathname.includes('pharmacy-request')
          || pathname.includes('medication')
          || pathname.includes('pharmacy-drugs-requested')
          || pathname.includes('otc-patient-queue')
}
        onClick={onToggle}
        text="Pharmacy"
        link="/pharmacy"
        itemList={[
          { id: nanoid(), title: 'Over Counter Request', link: '/services-price-list' },
          { id: nanoid(), title: 'OTC Patient Queue', link: '/otc-patient-queue' },
          { id: nanoid(), title: 'Walk-In Patient Queue', link: '/walkin-patient-queue' },
          { id: nanoid(), title: 'Pharmacy Request', link: '/pharmacy-request' },
          { id: nanoid(), title: 'Dispense Drugs', link: '/dispense-drugs' },
          { id: nanoid(), title: 'Medicine Stock Take', link: '/medication' },

        ]}
        icon={<FaPills size={15} />}
      />

      {/* physiotherapy */}
      <SidebarItemLink
        selected={pathname === '/physiotherapy' || pathname.includes('physiotherapy')}
        onClick={onToggle}
        text="Physiotherapy"
        link="/physiotherapy"
        itemList={[
          { id: nanoid(), title: 'Dispenses', link: '/dispenses-physiotherapy-items' },

        ]}
        icon={<FaToolbox size={15} />}
      />

      {/* price lists */}
      <SidebarItemLink
        selected={pathname === '/price-lists'
        || pathname.includes('services-price-list')
        || pathname.includes('pharmaceutical-price-list')}
        onClick={onToggle}
        text="Price Lists"
        link="/price-lists"
        itemList={[
          { id: nanoid(), title: 'Services', link: '/services-price-list' },
          { id: nanoid(), title: 'Pharmaceuticals', link: '/pharmaceutical-price-list' },
          { id: nanoid(), title: 'Non-Pharmaceuticals', link: '/pharmeuticals' },
          { id: nanoid(), title: 'Ward Charges', link: '/ward-prices' },

        ]}
        icon={<FaMoneyBill size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/procedures' || pathname.includes('/procedure-items')}
        onClick={onToggle}
        text="Procedures"
        link="/procedures"
        itemList={[
          { id: nanoid(), title: 'Items', link: '/procedure-items' },

        ]}
        icon={<FaProcedures size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/radiology' || pathname.includes('/add-radiology-request')
          || pathname.includes('/radiology-details')
          || pathname.includes('/radiology-visits')
          || pathname.includes('/add-radiology-results')}
        onClick={onToggle}
        text="Radiology"
        link="/radiology"
        itemList={[
          { id: nanoid(), title: 'Radiology Requests', link: '/radiology-requests' },
          { id: nanoid(), title: 'Radiology Visits', link: '/radiology-visits' },
          { id: nanoid(), title: 'Radiology Test Prices', link: '/radiology-test-prices' },
        ]}
        icon={<FaRadiation size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/requisitions' || pathname.includes('/add-requisitions')}
        onClick={onToggle}
        text="Store Requisitions"
        link="/requisitions"
        itemList={[
          { id: nanoid(), title: 'Requisitions', link: '/requisitions' },
          { id: nanoid(), title: 'Order Note', link: '/general-store' },
        ]}
        icon={<FaStore size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/stores' || pathname.includes('pharmaceuticals')}
        onClick={onToggle}
        text="Stores"
        link="/stores"
        itemList={[
          { id: nanoid(), title: 'View Stores', link: '/stores' },
          { id: nanoid(), title: 'Issue Items to Cost Center', link: '/issue-items-cost-center' },
          { id: nanoid(), title: 'Pharmaceutical', link: '/pharmaceuticals' },
          { id: nanoid(), title: 'Non Pharmaceutical', link: '/non-pharmaceuticals' },

        ]}
        icon={<FaStore size={15} />}
      />

      <SidebarItemButton
        selected={pathname === '/suppliers' || pathname.includes('add-suppliers') || pathname.includes('supplier-classification')}
        onClick={() => navigate('/suppliers')}
        text="suppliers"
        icon={<FaTrain />}
      />

      <SidebarItemButton
        selected={pathname === '/tax'}
        onClick={() => navigate('/tax')}
        text="tax"
        icon={<FaRegMoneyBillAlt size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/items' || pathname.includes('/add-measuring-unit')}
        onClick={onToggle}
        text="Items"
        link="/items"
        itemList={[
          { id: nanoid(), title: 'Brand', link: '/brand' },
          { id: nanoid(), title: 'Item Category', link: '/item-category' },
          { id: nanoid(), title: 'Measuring Unit', link: '/measuring-unit' },
          { id: nanoid(), title: 'Non Pharmaceutical', link: '/non-pharmaceuticals' },

        ]}
        icon={<FaListOl size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/vehicles' || pathname.includes('pharmaceuticals')}
        onClick={onToggle}
        text="Vehicles"
        link="/vehicles"
        itemList={[
          { id: nanoid(), title: 'Vehicle Category', link: '/non-pharmaceuticals' },
          { id: nanoid(), title: 'Vehicles', link: '/vehicles' },
          { id: nanoid(), title: 'Mileage', link: '/mileage' },

        ]}
        icon={<FaCar size={15} />}
      />

      <SidebarItemLink
        selected={pathname === '/wards' || pathname.includes('add-ward')
        || pathname.includes('ward-type')
        || pathname.includes('add-ward-type')}
        onClick={onToggle}
        text="Wards"
        link="/wards"
        itemList={[
          { id: nanoid(), title: 'Ward Type', link: '/ward-type' },

        ]}
        icon={<FaHospitalAlt size={15} />}
      />
      <SidebarItemLink
        selected={pathname === '/items' || pathname.includes('/add-measuring-unit')}
        onClick={onToggle}
        text="Items"
        link="/items"
        itemList={[
          { id: nanoid(), title: 'Brand', link: '/brand' },
          { id: nanoid(), title: 'Item Category', link: '/item-category' },
          { id: nanoid(), title: 'Measuring Unit', link: '/measuring-unit' },
          { id: nanoid(), title: 'Non Pharmaceutical', link: '/non-pharmaceuticals' },

        ]}
        icon={<FaListOl size={15} />}
      />

    </>
  );
};

export default SidebarListItems;
