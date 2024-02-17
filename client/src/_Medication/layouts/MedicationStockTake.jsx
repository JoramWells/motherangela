/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, Tag, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllMedicationStockTakeQuery } from '../api/medicationStockTake.api';

const breadCrumbData = [
  {
    id: nanoid(),
    title: 'Medication',
    link: '/medication',
  },
  {
    id: nanoid(),
    title: 'Medication Purchases',
    link: '/medication-purchases',
    isCurrentPage: true,
  },
];

const MedicationStockTake = () => {
  const { data, isLoading } = useGetAllMedicationStockTakeQuery();

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        header: 'Medication Name',
        accessorKey: 'medication_name',
        cell: (props) => <Text>{props.getValue()}</Text>,
        width: 50,

      },

      {
        header: 'Packaging',
        accessorKey: 'medication_packaging_type_description',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Price',
        accessorKey: 'unit_price',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Quantity',
        accessorKey: 'current_quantity',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
    ],

    [],
  );

  const subRowData = data
    && data.map((item) => ({
      ...item,
      subRows: [],
    }));

  const outOfStock = subRowData?.filter((item) => item.current_quantity === 0);

  return (
    <VStack
      mt="65px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <VStack w="full">
        <BreadCrumbNav link="/add-suppliers" breadCrumbData={breadCrumbData} />

        <HStack
          w="100%"
          justifyContent="flex-start"
          // p={1}
          rounded="lg"
        >

          <Box
            h={120}
            w="250px"
            p={3}
            border="1px"
            borderColor="gray.200"
            rounded="lg"
            bgColor="white"
            mt={2}
          >
            <Text
              fontSize="2xl"
              fontWeight="semibold"
              mt={2}
            >
              {subRowData?.length?.toLocaleString()}

            </Text>
            <Text
              fontSize="lg"
              color="gray.500"
              mt={2}
            >
              Medication Purchases

            </Text>
          </Box>
          <Box
            h={120}
            w="250px"
            p={3}
            border="1px"
            borderColor="gray.200"
            rounded="lg"
            bgColor="white"
            mt={2}
          >
            <Text
              fontSize="2xl"
              fontWeight="semibold"
              mt={2}
            >
              {outOfStock?.length?.toLocaleString()}

            </Text>
            <Text
              fontSize="lg"
              color="gray.500"
              mt={2}
            >
              Out of Stock

            </Text>
          </Box>
          <HStack />
        </HStack>
        <VStack
          w="100%"
          bgColor="white"
          p={3}
          h="89%"
          border="1px"
          borderColor="gray.200"
          mt={2}
          rounded="lg"
        >
          {isLoading ? (
            <Text>
              Fetching data...
            </Text>
          )
            : <DataTable2 data={subRowData} columns={columns} />}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default MedicationStockTake;
