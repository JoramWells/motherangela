'use client'

import { useGetMedicineStockTakeSeriesQuery } from '@/api/medication/medicationStockTake.api';
import React from 'react'

const DashboardPage = () => {
    const {data} = useGetMedicineStockTakeSeriesQuery();
    console.log(data, 'koi')
  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage