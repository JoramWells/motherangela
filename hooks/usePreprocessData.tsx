import { PaginatedResponse } from 'motherangela';
import { useEffect, useState } from 'react';

const usePreprocessData = <T = unknown>(
  responseData?: PaginatedResponse<T> | null,
) => {
  const [data, setData] = useState<T[]>([]);
  const [total, setTotal] = useState<number | string | undefined>(0);

  useEffect(() => {
    if (responseData != null) {
      setData(responseData.data);
      setTotal(responseData.total);
    }
  }, [responseData]);

  return { data, total };
};

export default usePreprocessData;
