/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaBoxOpen, FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment/moment';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DataTable2 from '../components/tables/DataTable';
import { useGetPatientsQuery } from '../api/patients.api';
import { useGetAllConsultationTypesQuery } from '../api/consultationType.api';

const ConsultationTypes = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAllConsultationTypesQuery();

  const columns = useMemo(
    () => [
      {
        header: 'Consultation.',
        accessorKey: 'consultation_type_description',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Non-Corporate Cost',
        accessorKey: 'non_corporate_cost',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Corporate Cost',
        accessorKey: 'corporate_cost',
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
      mt="60px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-patient" />

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Consultation Type
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
        {subRowData?.length === 0 ? (
          <VStack p={5}>

            <FaBoxOpen size="120" color="gray" />
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">No Patients Today</Text>

          </VStack>
        )
          : (
            <Box
              w="100%"
              bgColor="white"
              p={3}
              h="89%"
            >
              <DataTable2 data={subRowData} columns={columns} />
            </Box>
          )}
      </Box>
    </VStack>
  );
};

export default ConsultationTypes;
