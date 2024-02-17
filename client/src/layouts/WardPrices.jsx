/* eslint-disable no-unused-vars */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BreadCrumbNav from '../components/BreadCrumbNav';
// import { getWardPrices } from '../_reducers/wardSlice';

const columns = [
  {
    Header: 'Branch',
    accessor: 'branch',
  },
  {
    Header: 'Ward Type',
    accessor: 'wardtype',
  },
  {
    Header: 'Ward Description',
    accessor: 'warddescription',
  },
  {
    Header: 'Adm Charge (Non-Corporate)',
    accessor: 'admissionchargenoncorporate',
  },
  {
    Header: 'Adm Charge (Corporate)',
    accessor: 'admissionchargecorporate',
  },
  {
    Header: 'Daily Rate (Non-Corporate)',
    accessor: 'dailyratenoncorporate',
  },
  {
    Header: 'Daily Rate (Corporate)',
    accessor: 'dailyratecorporate',
  },
  {
    Header: 'Nursing Daily Charge(Non-Corporate)',
    accessor: 'nursingdailychargenoncorporate',
  },
  {
    Header: 'Nursing Daily Charge(Corporate)',
    accessor: 'nursingdailychargecorporate',
  },
];

const WardPrice = () => {
  // const dispatch = useDispatch();

  const { data } = useSelector((state) => state.wards);

  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));
    // const fetchData = useCallback(()=>{
    //   dispatch(getAllPriceLists())
    // },[dispatch])

  // useEffect(() => {
  //   dispatch(getWardPrices());
  // }, [dispatch]);

  return (
    <VStack
      mt={5}
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav />
        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Drugs Stock
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subrowData.length}
              )

            </span>
          </Text>
          <HStack>
            <Button leftIcon={<FaPrint />}>Print Report</Button>

            <Button leftIcon={<FaFileDownload />}>Download</Button>

          </HStack>
        </HStack>
        <Box
          w="100%"
          bgColor="white"
          p={3}
          h="89%"
        >
          {/* <WardPricesTable data={subrowData} columns={columns} /> */}
        </Box>
      </Box>
    </VStack>
  );
};

export default WardPrice;
