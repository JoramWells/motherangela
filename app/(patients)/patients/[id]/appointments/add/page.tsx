import React, { use } from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Payroll Records',
    link: '',
  },
];
function AddAppointmentPage({ params }:{params:Promise<{id:string}>}) {
  const { id } = use(params);
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      {id}
    </div>
  );
}

export default AddAppointmentPage;
