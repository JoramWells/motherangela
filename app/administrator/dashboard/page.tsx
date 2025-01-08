'use client';

import React from 'react';
import { useGetMedicineStockTakeSeriesQuery } from '@/api/medication/medicationStockTake.api';

function DashboardPage() {
  const { data } = useGetMedicineStockTakeSeriesQuery();
  console.log(data, 'koi');
  return (
    <div>DashboardPage</div>
  );
}

export default DashboardPage;
