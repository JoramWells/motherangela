/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllInsuranceMedicationMappingQuery } from '../../api/insuranceMedicationMapping.api';

const breadCrumbData = [
  {
    id: nanoid(),
    title: 'Insurances',
    link: '/admin-insurances',
  },
  {
    id: nanoid(),
    title: 'Medical Mapping',
    link: '/',
    isCurrentPage: true,
  },
];

const InsuranceMedicationMapping = () => {
  const { data } = useGetAllInsuranceMedicationMappingQuery();

  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  const columns = useMemo(
    () => [
      {
        header: 'Insurance Name',
        accessorKey: 'insurance_detail',
        cell: (props) => <Text>{props.getValue()?.insurance_name}</Text>,

      },
      {
        header: 'Medication',
        accessorKey: 'medication',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()?.medication_name}</Text>,

      },
      {
        header: 'Visible',
        accessorKey: 'visible',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
    ],

    [],
  );

  return (
    <VStack
      mt="65px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-insurance" breadCrumbData={breadCrumbData} />
        <HStack w="full" mt={4} mb={2}>
          <Text fontWeight="semibold" fontSize="xl" ml={2} color="gray.700">
            Medication Mappings
            {' '}
            (
            {subrowData?.length.toLocaleString()}
            )
          </Text>
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

export default InsuranceMedicationMapping;
