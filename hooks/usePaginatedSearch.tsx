/* eslint-disable no-unused-vars */
import { useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { PaginatedResponse } from 'motherangela';
import usePreprocessData from './usePreprocessData';
import useSearch from './useSearch';

export interface UsePaginatedSearchResponseInterface<T>{
    search: string
    data:T[]
    total:number | undefined | string
    setSearch:Dispatch<SetStateAction<string>>
}

export interface UsePaginatedSearchInterface<T>{
  id?:string
  employee_id?:string
  fetchQuery: ({
    id, page, pageSize, searchQuery, employee_id,
  }:{
    id?:string,
    employee_id?:string,
    page: number,
    pageSize: number, searchQuery: string,
  }) => { data?: PaginatedResponse<T> | undefined };
  pageSize?: number
}

const usePaginatedSearch = <T = unknown > (
  {
    fetchQuery, id, pageSize = 10, employee_id,
  }: UsePaginatedSearchInterface<T>):
     UsePaginatedSearchResponseInterface<T> => {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const { data: profileData } = fetchQuery({
    // id,
    id: id && id,
    page: Number(page),
    pageSize,
    searchQuery: search,
    employee_id,
  });
  const { data, total } = usePreprocessData<T>(profileData);
  useSearch({ search, setSearch });
  return {
    data, total, search, setSearch,
  };
};

export default usePaginatedSearch;
