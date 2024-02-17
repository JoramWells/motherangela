import {
  Box, Button, HStack, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { useEffect } from 'react';
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPriceLists } from '../_reducers/priceListSlice';
import PriceListTable from '../components/tables/PriceListTable';

const columns = [
  {
    Header: 'Service Category',
    accessor: 'service_category',
  },
  {
    Header: 'Service Name',
    accessor: 'service_name',
  },
  {
    Header: 'Service Cost(Cash)',
    accessor: 'service_cost_cash',
  },
  {
    Header: 'Service Cost(Foreigner)',
    accessor: 'service_cost_foreigner',
  },
  {
    Header: 'Service Cost(Insurance)',
    accessor: 'service_cost_insurance',
  },
];

const PriceLists = () => {
  const dispatch = useDispatch();

  const { data, error } = useSelector((state) => state.priceLists);

  const subrowData = data && data.map((item) => ({
    ...item,
    subRows: [],
  }));
  // const fetchData = useCallback(()=>{
  //   dispatch(getAllPriceLists())
  // },[dispatch])

  useEffect(() => {
    dispatch(getAllPriceLists());
  }, [dispatch]);
  console.log(error, 'wwee');
  return (
    <VStack
      mt={10}
      w="full"
    >
      <HStack
        mt={5}
        w="100%"
        justifyContent="flex-end"
      >
        <Button leftIcon={<FaPrint />}>
          Print Report

        </Button>

        <Button leftIcon={<FaFileDownload />}>Download</Button>

      </HStack>
      <Box
        w="100%"
        border="1px"
        borderColor="gray.100"
        rounded="lg"
      >
        <PriceListTable data={subrowData} columns={columns} />
      </Box>
    </VStack>
  );
};

export default PriceLists;
