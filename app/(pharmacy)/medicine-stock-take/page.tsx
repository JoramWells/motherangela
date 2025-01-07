'use client'

import { useGetAllMedicationQuery } from '@/api/medication/medicine.api';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';
import { DataTable } from '@/components/custom/table/DataTable';
import React from 'react'
import { medicineStockColumns } from '../column';

const MedicinesStockPage = () => {
    const {data} = useGetAllMedicationQuery()
    console.log(data)
  return (
    <div>
      <BreadcrumbNav />
            <div className="p-2">
              <div className="w-full bg-white rounded-lg border">
                <div className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200">
                  <h2 className="text-lg  text-slate-700">
                    Medicine Stock
                  </h2>
                </div>
                <DataTable columns={medicineStockColumns} data={data ?? []} />
              </div>
            </div>
    </div>
  );
}

export default MedicinesStockPage