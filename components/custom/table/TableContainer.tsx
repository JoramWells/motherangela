/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { DataTable } from './DataTable';

interface PageContainerInterface<TData, TValue> {
  title: string
  total: number
  rightLabel?: ReactNode
  columns: Array<ColumnDef<TData, TValue>>
  data: TData[]
  filter?: ReactNode
  search: string
  setSearch: Dispatch<SetStateAction<string>> | undefined
  isLoading?: boolean
}

function TableContainer<TData, TValue>({
  title, total, rightLabel, columns, data, filter, search, setSearch, isLoading,
}:PageContainerInterface<TData, TValue>) {
  return (
    <div className="w-full bg-white rounded-lg border">
      <div className="p-2 bg-zinc-50 rounded-t-lg border-b border-slate-200
          flex flex-row space-x-2 items-center justify-between
          "
      >
        <div
          className="flex flex-row space-x-2 items-center"
        >
          <h2 className=" text-slate-900 font-[600] capitalize ">
            {title}
          </h2>
          <Badge
            className="bg-zinc-200 shadow-none text-zinc-700
              hover:bg-zinc-200
              "
          >
            {total}
          </Badge>
        </div>
        <div
          className="flex flex-row space-x-2 items-center"
        >
          {rightLabel}
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data ?? []}
        total={total as number}
        isSearch
        search={search}
        setSearch={setSearch}
        filter={filter}
        // isLoading={isLoading}
      />
    </div>
  );
}

export default TableContainer;
