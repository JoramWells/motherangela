/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchApi = (url, id) => {
  const [data, setData] = useState([]);
  // FETCH DATA FROM SERVER
  const fetchData = async () => {
    try {
      await axios.get(url, { patient_id: id }).then((response) => {
        setData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect
  useEffect(() => {
    fetchData();
  }, []);
  return { data };
};
