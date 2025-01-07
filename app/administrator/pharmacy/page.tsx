/* eslint-disable no-constant-binary-expression */
"use client";

import BreadcrumbNav from "@/components/custom/nav/BreadcrumbNav";
import { DataTable } from "@/components/custom/table/DataTable";
import React, { useState } from "react";
import { medicineCategoryColumns, medicinePurchaseColumns } from "./column";
import { useGetAllMedicineCategoryQuery } from "@/api/medication/medicineCategory.api";
import { Button } from "@/components/ui/button";
import CustomTab from "@/components/custom/nav/CustomTab";
import { useGetAllMedicinePurchasesQuery } from "@/api/medication/medicinePurchases.api";
import { useSearchParams } from "next/navigation";
import useSearch from "@/hooks/useSearch";
import usePreprocessData from "@/hooks/usePreprocessData";

const MedicinesStockPage = () => {
  const [search, setSearch] = useState('')
    const searchParams = useSearchParams();
    const page = searchParams.get("page");

  const { data: medCategoryData } = useGetAllMedicineCategoryQuery();
  const { data: purchaseData } = useGetAllMedicinePurchasesQuery({
    page: Number(page) ?? 1,
    pageSize: 10,
    searchQuery: search,
  });

  useSearch({search, setSearch})

  const {data,total} = usePreprocessData(purchaseData)

  const [tab, setTab] = useState('category')

  console.log(purchaseData, 'op')
  return (
    <div>
      <BreadcrumbNav />
      <CustomTab
        categoryList={[
          {
            id: 1,
            label: "Category",
          },
          {
            id: 2,
            label: "Purchases",
          },
        ]}
        value={tab}
        setValue={setTab}
      />
      <div className="p-2">
        {tab === "category" && (
          <div className="w-full bg-white rounded-lg border">
            <div
              className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200
          flex flex-row justify-between items-center
          "
            >
              <h2 className="text-lg  text-slate-700">Medicine Category</h2>
              <Button
                size={"sm"}
                className="shadow-none bg-emerald-700 hover:bg-emerald-800"
              >
                NEW
              </Button>
            </div>
            <DataTable
              columns={medicineCategoryColumns}
              data={medCategoryData ?? []}
            />
          </div>
        )}

        {tab === "purchases" && (
          <div className="w-full bg-white rounded-lg border">
            <div
              className="p-2 bg-slate-50 rounded-t-lg border-b border-slate-200
          flex flex-row justify-between items-center
          "
            >
              <h2 className="text-lg  text-slate-700">Medicine Purchases</h2>
              <Button
                size={"sm"}
                className="shadow-none bg-emerald-700 hover:bg-emerald-800"
              >
                NEW
              </Button>
            </div>
            <DataTable columns={medicinePurchaseColumns} data={data ?? []} 
            total={total as number}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicinesStockPage;
