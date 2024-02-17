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
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllMedicationCategoryQuery } from '../api/medicationCategory.api';

const breadCrumbData = [
  {
    id: nanoid(),
    title: 'Medication',
    link: '/medication',
  },
  {
    id: nanoid(),
    title: 'Medication Category',
    link: '/medication-category',
    isCurrentPage: true,
  },
];

const MedicationCategory = () => {
  const { data } = useGetAllMedicationCategoryQuery();

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        header: 'Category Name',
        accessorKey: 'category_name',
        cell: (props) => <Text>{props.getValue()}</Text>,
        width: 50,

      },

      {
        header: 'Hospital',
        accessorKey: 'hospital_id',
        enableSorting: false,
        cell: (props) => <Text>MAIN BRANCH</Text>,

      },
      {
        header: 'Credit Account',
        accessorKey: 'credit_account_id',
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
          justifyContent="space-between"
          bgColor="white"
          p={2}
          rounded="lg"
          border="1px"
          borderColor="gray.200"
          // mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Medication Categories
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subRowData?.length}
              )

            </span>
          </Text>
          <HStack>
            <Button leftIcon={<FaPrint />}>Print Report</Button>

            <Button leftIcon={<FaFileDownload />}>Download</Button>

          </HStack>
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
          <DataTable2 data={subRowData} columns={columns} />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default MedicationCategory;
