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
    label: 'Maternity Delivery',
    link: '',
  },
];

const page = () => (
  <div>
    <BreadcrumbNav
      listItems={listItems}
    />
    Add
  </div>
);

export default page;
