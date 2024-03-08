import { SidebarButton } from "./SidebarButton"
import {SidebarCollapseButton} from './SidebarCollapseButton'
const SidebarItems = () => {
  return (
    <div>
      <SidebarButton />
      <SidebarCollapseButton label="Accounts"
      link='/accounts'
      />
      <SidebarCollapseButton label="Admission" />
      <SidebarCollapseButton label="Appointments" />
      <SidebarCollapseButton label="Assets" />
      <SidebarCollapseButton label="Banking" />
      <SidebarCollapseButton label="Bank Loans" />
      <SidebarCollapseButton label="CCC" />
      <SidebarCollapseButton label="Charts Of Account" />
      <SidebarCollapseButton label="Cost Centre" />
      <SidebarCollapseButton label="Charges" />
      <SidebarCollapseButton label="Doctor" />
      <SidebarCollapseButton label="General Journal" />
      <SidebarCollapseButton label="Hospital" />
      <SidebarCollapseButton label="Lab" />
      <SidebarCollapseButton label="Maternity" />
      <SidebarCollapseButton label="Ministry Of Health" />
      <SidebarCollapseButton label="Nursing Station" />
      <SidebarCollapseButton label="Patient Invoices" />
      <SidebarCollapseButton label="Patients" />
      <SidebarCollapseButton label="Payroll Items" />
      <SidebarCollapseButton label="Payroll Transactions" />
      <SidebarCollapseButton label="Petty Cash" />
      <SidebarCollapseButton label="Pharmacy" />
      <SidebarCollapseButton label="Physiotherapy" />
      <SidebarCollapseButton label="Price Lists" />
      <SidebarCollapseButton label="Procedures" />
      <SidebarCollapseButton label="Radiology" />
      <SidebarCollapseButton label="Store Requisitions" />
      <SidebarCollapseButton label="Stores" />
      <SidebarCollapseButton label="Suppliers" />
      <SidebarCollapseButton label="Tax" />
      <SidebarCollapseButton label="Items" />
      <SidebarCollapseButton label="Vehicles" />
      <SidebarCollapseButton label="Wards" />
    </div>
  );
}

export default SidebarItems