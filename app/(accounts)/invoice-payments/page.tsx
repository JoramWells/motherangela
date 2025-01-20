'use client';

import React from 'react';
import { useGetAllInvoicePaymentQuery } from '@/api/accounts/invoice/invoicePayments.api';
import usePaginatedSearch from '@/hooks/usePaginatedSearch';
import TableContainer from '@/components/custom/table/TableContainer';
import { invoicePaymentsColumns } from '../column';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';

const listItems = [
  {
    id: '1',
    label: 'home',
    link: '/',
  },
  {
    id: '2',
    label: 'Invoice Payment',
    link: '',
  },
];

function InvoicePayments() {
  const {
    data, total, search, setSearch,
  } = usePaginatedSearch({
    fetchQuery: useGetAllInvoicePaymentQuery,
  });
  console.log(data);
  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div className="p-2">
        <TableContainer
          title="Invoice Payments"
          columns={invoicePaymentsColumns}
          data={data ?? []}
          total={total as number}
          search={search}
          setSearch={setSearch}
        />

      </div>
    </div>
  );
}

export default InvoicePayments;
