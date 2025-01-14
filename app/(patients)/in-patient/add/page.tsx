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
    label: 'In Patient',
    link: '',
  },
  {
    id: '3',
    label: 'New',
    link: '',
  },
];

function AddInpatient() {
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
    </div>
  );
}

export default AddInpatient;
