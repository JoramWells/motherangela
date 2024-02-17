/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import BreadCrumbNav from '../components/BreadCrumbNav';
import { getAllPhysioItem } from '../_reducers/physioItemSlice';
import DataTable2 from '../components/tables/DataTable';

const Physiotherapy = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.physioItem);

  const columns = useMemo(() => [
    [
      {
        header: 'Item Name',
        accessorKey: 'itemName',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Unit Measurement',
        accessorKey: 'unitMeasurement',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Unit Price(KSH)',
        accessorKey: 'unitPrice',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },

      {
        header: 'Quantity',
        accessorKey: 'quantity',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Physical Count',
        accessorKey: 'physicalCount',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Variance',
        accessorKey: 'variance',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
    ],
  ], []);

  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));
    // const fetchData = useCallback(()=>{
    //   dispatch(getAllPriceLists())
    // },[dispatch])

  useEffect(() => {
    dispatch(getAllPhysioItem());
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
        <BreadCrumbNav link="/add-physiotherapy" />
        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Physiotherapy Items
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
          <DataTable2 data={subrowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Physiotherapy;
