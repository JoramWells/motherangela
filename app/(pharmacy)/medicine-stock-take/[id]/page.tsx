'use client';

import React, { use, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import moment from 'moment';
import { useGetMedicineStockTakeDetailsQuery, useGetMedicineStockTakeQuery } from '@/api/medication/medicationStockTake.api';
import TimeSeriesChart from '@/components/custom/charts/TimeSeriesChart';
import BreadcrumbNav from '@/components/custom/nav/BreadcrumbNav';

function StockDetailPage({ params }:{params:Promise<{id: string}>}) {
  const searchParams = useSearchParams();
  const medicine_id = searchParams.get('medicine_id');
  const { id } = use(params);

  const { data } = useGetMedicineStockTakeDetailsQuery(medicine_id as string, {
    skip: !medicine_id,
  });

  const { data: medicineDetail } = useGetMedicineStockTakeQuery(id, {
    skip: !id,
  });

  const listItems = useMemo(
    () => [
      {
        id: '1',
        label: 'home',
        link: '/',
      },
      {
        id: '2',
        label: 'Medicine Stock',
        link: '',
      },
      {
        id: '3',
        label: `${medicineDetail?.medication_name}`,
        link: '',
      },
    ],
    [medicineDetail],
  );

  const dates = data?.map((item) => new Date(item.date_of_stock_take as string)) ?? [new Date()];

  const maxDate = new Date(Math.max(...dates.map((date) => date.getTime())));
  const minDate = new Date(Math.min(...dates.map((date) => date.getTime())));

  return (
    <div>
      <BreadcrumbNav
        listItems={listItems}
      />
      <div
        className="p-2"
      >
        <div
          className=" bg-white rounded-lg border border-zinc-200"
        >
          <div
            className="flex bg-zinc-50 p-2 rounded-t-lg flex-row justify-between items-center"
          >
            <p>
              {medicineDetail?.medication_name}
            </p>
            <div
              className="flex flex-row space-x-2"
            >
              <div
                className="flex flex-row space-x-2 items-center"
              >
                <p>From:</p>
                <p>
                  {moment(minDate).format('ll')}

                </p>
              </div>
              <div
                className="flex flex-row space-x-2 items-center"
              >
                <p>To:</p>
                <p>
                  {moment(maxDate).format('ll')}

                </p>
              </div>

            </div>
          </div>
          <TimeSeriesChart
            data={data ?? []}
          />
        </div>
      </div>
    </div>
  );
}

export default StockDetailPage;
