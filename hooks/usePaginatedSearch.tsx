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
  fetchQuery: ({ page, pageSize, searchQuery }:{
    page: number,
    pageSize: number, searchQuery: string,
  }) => { data?: PaginatedResponse<T> | undefined };
}

const usePaginatedSearch = <T = unknown > ({ fetchQuery }: UsePaginatedSearchInterface<T>):
     UsePaginatedSearchResponseInterface<T> => {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const { data: profileData } = fetchQuery({
    page: Number(page),
    pageSize: 10,
    searchQuery: search,
  });
  const { data, total } = usePreprocessData<T>(profileData);
  useSearch({ search, setSearch });
  return {
    data, total, search, setSearch,
  };
};

export default usePaginatedSearch;
