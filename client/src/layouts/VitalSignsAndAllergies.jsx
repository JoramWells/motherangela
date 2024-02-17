/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DataTable2 from '../components/tables/DataTable';
import { getAllRadiologyRequests } from '../_reducers/radiologySlice';

const VitalSignsAndAllergies = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.radiology);

  const columnsx = useMemo(
    () => [
      {
        header: 'Service Category',
        accessorKey: 'serviceCategory',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Service Name',
        accessorKey: 'serviceName',
        cell: (props) => <Text>{props.getValue()}</Text>,
        size: 200,

      },
      {
        header: 'Service Cost (Cash)',
        accessorKey: 'serviceCostCash',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Service Cost (Corporate)',
        accessorKey: 'serviceCostCorporate',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Service Cost (Insurance)',
        accessorKey: 'serviceCostInsurance',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },

      {
        header: 'Service Cost (Foreigner)',
        accessorKey: 'serviceCostForeigner',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
    ],

    [],
  );

  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));
    // const fetchData = useCallback(()=>{
    //   dispatch(getAllPriceLists())
    // },[dispatch])

  useEffect(() => {
    dispatch(getAllRadiologyRequests());
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
        <BreadCrumbNav link="/add-item" />
        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Radiology
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
          <DataTable2 data={subrowData} columns={columnsx} />
        </Box>
      </Box>
    </VStack>
  );
};

export default VitalSignsAndAllergies;
