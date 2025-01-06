'use client'

import { useGetAllMedicationQuery } from '@/api/medication/medication.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import React from 'react'

const MedicinesStockPage = () => {
    const {data} = useGetAllMedicationQuery()
    console.log(data)
  return (
    <div>
      <BreadcrumbNav />
    </div>
  );
}

export default MedicinesStockPage