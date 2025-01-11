'use client';

import React, { use } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetMedicineStockTakeDetailsQuery } from '@/api/medication/medicationStockTake.api';
import TimeSeriesChart from '@/components/custom/charts/TimeSeriesChart';

function StockDetailPage({ params }:{params:any}) {
  const searchParams = useSearchParams();
  const medicine_id = searchParams.get('medicine_id');
  const { id } = use(params);

  const { data } = useGetMedicineStockTakeDetailsQuery(medicine_id, {
    skip: !medicine_id,
  });

  const filteredData = data?.filter((item) => Number(item.current_quantity) > 0);

  console.log(filteredData);

  return (
    <div>
      {id}

      <TimeSeriesChart
        data={data ?? []}
      />
    </div>
  );
}

export default StockDetailPage;
