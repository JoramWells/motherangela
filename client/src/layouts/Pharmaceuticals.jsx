import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPharmaceuticalItems } from '../_reducers/pharmaceuticalStoreSlice';
import PharmaceuticalTable from '../components/tables/PharmaceuticalTable';
import BreadCrumbNav from '../components/BreadCrumbNav';

const columns = [
  {
    Header: 'Drug Name',
    accessor: 'drugname',
  },
  {
    Header: 'Buying Price',
    accessor: 'buyingprice',
  },
  {
    Header: 'BP Include Tax',
    accessor: 'isbuyingpricetax',
  },
  {
    Header: 'Remaining Quantity',
    accessor: 'remainingquantity',
  },
  {
    Header: 'Serial No.',
    accessor: 'serialno',
  },
  {
    Header: 'Expiry Date',
    accessor: 'expirydate',
  },
];

const Pharmaceutical = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.pharmaceuticals);

  const subrowData = data
    && data.map((item) => ({
      ...item,
      subRows: [],
    }));
  // const fetchData = useCallback(()=>{
  //   dispatch(getAllPriceLists())
  // },[dispatch])

  useEffect(() => {
    dispatch(getPharmaceuticalItems());
  }, [dispatch]);

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
          <PharmaceuticalTable data={subrowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Pharmaceutical;
