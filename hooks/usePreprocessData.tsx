import { useEffect, useState } from "react";

const usePreprocessData = (
  responseData?: PaginatedResponse<unknown> | null
) => {
  const [data, setData] = useState<unknown[]>([]);
  const [total, setTotal] = useState<string | number | undefined>(0);
  useEffect(() => {
    if (responseData != null) {
      setData(responseData.data);
      setTotal(responseData?.total);
    }
  }, [responseData]);
  return { data, total };
};

export default usePreprocessData;
