'use client';

import React, { useCallback } from 'react';
import { useGetPatientAgeGroupQuery, useGetPatientGenderCountQuery } from '@/api/patients/patients.api';
import CustomRadial from '@/components/custom/charts/CustomRadial';
import HorizontalLineChart from '@/components/custom/charts/HorizontalLineChart';

function PatientDashboard() {
  const { data } = useGetPatientGenderCountQuery();
  const { data: ageGroupCount } = useGetPatientAgeGroupQuery();
  // console.log(data);
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

  const formatNumber = useCallback(() => ageGroupCount && [
    { line: 'Children (0-12)', count: Number(ageGroupCount[0]?.children) },
    { line: 'Teenagers (13-19)', count: Number(ageGroupCount[0]?.teenagers) },
    { line: 'Young Adults (20-39)', count: Number(ageGroupCount[0]?.youngAdults) },
    { line: 'Middle-Aged Adults (40-59)', count: Number(ageGroupCount[0]?.middleAged) },
    { line: 'Seniors (60+)', count: Number(ageGroupCount[0]?.seniors) },
  ], [ageGroupCount])();

  const chartData = [
    {
      male: Number(data?.find((item) => item.gender_type === 1)?.count || 0),
      female: Number(data?.find((item) => item.gender_type === 0)?.count || 0),
    },
  ];

  return (
    <div>

      <div
        className="p-2 flex space-x-2"
      >
        <HorizontalLineChart
          data={formatNumber ?? []}
          label="line"
          dataKey="count"
          title="Age Group"
        />
        <CustomRadial
          data={chartData}
          title="Patients"
        />
      </div>
    </div>
  );
}

export default PatientDashboard;
