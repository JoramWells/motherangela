'use client';

import React from 'react';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Employee Records',
    link: '/employee-records',
  },
  {
    id: '3',
    label: 'Add New Employee Record',
    link: '',
  },
];
function EmployeeRecordsDetailPage() {
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
    </div>
  );
}

export default EmployeeRecordsDetailPage;
