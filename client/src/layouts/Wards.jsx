/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DataTable2 from '../components/tables/DataTable';
import { useGetWardsQuery } from '../api/ward.api';

const Wards = () => {
  const { data } = useGetWardsQuery();
  const columns = useMemo(
    () => [
      {
        header: 'Ward Type',
        accessorKey: 'wardType',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Ward Description',
        accessorKey: 'wardDescription',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Admission Charge Non Corporate',
        accessorKey: 'admissionChargeNonCorporate',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Admission Charge Corporate',
        accessorKey: 'admissionChargeCorporate',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Daily Rate Non Corporate',
        accessorKey: 'dailyRateNonCorporate',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Daily Rate Corporate',
        accessorKey: 'dailyRateCorporate',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Nursing Daily Charge Non Corporate',
        accessorKey: 'nursingDailyChargeNonCorporate',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Nursing Daily Charge Corporate',
        accessorKey: 'nursingDailyChargeCorporate',
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

  return (
    <VStack
      mt="55px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-ward" />
        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Wards
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subrowData?.length}
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

export default Wards;
