'use client';

import React, { useCallback } from 'react';
import { useGetPatientAgeGroupQuery } from '@/api/patients/patients.api';
import HorizontalLineChart from '@/components/custom/charts/HorizontalLineChart';

function PatientDashboard() {
  const { data } = useGetPatientAgeGroupQuery();
  console.log(data);
  // const preprocessedData = useCallback(
  //   () => ([
  //     { ageGroup: 'Children', count: Number(data[0]?.children) },
  //     { ageGroup: 'Teenagers', count: Number(data[0]?.teenagers) },
  //     { ageGroup: 'Young Adults', count: Number(data[0]?.youngAdults) },
  //     { ageGroup: 'Middle Aged', count: Number(data[0]?.middleAged) },
  //     { ageGroup: 'Seniors', count: Number(data[0]?.seniors) },
  //   ]),
  //   [data],
  // )();

  // console.log(preprocessedData);
  return (
    <div>
      {/* <HorizontalLineChart
        data={preprocessedData ?? []}
        label="ageGroup"
        dataKey="count"
        title="Age Group"
      /> */}
    </div>
  );
}

export default PatientDashboard;
