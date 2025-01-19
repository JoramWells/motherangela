'use client';

import React, { useCallback } from 'react';
import { useGetAdmissionWardsQuery } from '@/api/admission/admissions.api';
import CustomBarChart from '@/components/custom/charts/CustomBarChart';

function InpatientDashboard() {
  const { data } = useGetAdmissionWardsQuery();
  const formatData = useCallback(
    () => data?.map((item) => ({
      ...item,
      count: Number(item.count),
    })),
    [data],
  )();
  console.log(formatData);
  return (
    <div
      className="p-2"
    >
      <CustomBarChart
        data={formatData ?? []}
        label="ward_name"
        dataKey="admission_date"
      />
    </div>
  );
}

export default InpatientDashboard;
