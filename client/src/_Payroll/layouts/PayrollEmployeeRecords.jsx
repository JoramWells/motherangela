/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Tag, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaBoxOpen,
} from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllPayrollEmployeeRecordsQuery } from '../../api/payroll/payrollEmployeeRecords.api';
import UserNameAvatar from '../../components/UserNameAvatar';

const PayrollEmployeeRecords = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAllPayrollEmployeeRecordsQuery();

  const columnsx = useMemo(
    () => [
      {
        header: 'Full Name',
        accessorKey: 'full_name',
        cell: (props) => (
          <VStack
            alignItems="flex-start"
            spacing={0}
          >
            <UserNameAvatar
              fullName={props.getValue()}
              link={`payroll-employee-records-details/${props.row.original.employee_id}`}
            />
            <VStack
              ml={10}
              alignItems="flex-start"
              spacing={0}
            >
              <Text>{props.row.original.date_of_birth}</Text>
              <Text
                color="gray.500"
              >
                {props.row.original.gender}
              </Text>
            </VStack>
          </VStack>
        ),

      },
      {
        header: 'Job Title',
        accessorKey: 'payroll_job_title',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()?.job_title_description}</Text>,

      },
      {
        header: 'Department',
        accessorKey: 'accounting_department',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()?.department_name}</Text>,

      },
      {
        header: 'Status',
        accessorKey: 'active_status',
        enableSorting: false,
        cell: (props) => (
          <HStack>
            {props.getValue() === 1 ? (
              <Tag
                colorScheme="green"
              >
                Active
              </Tag>
            ) : <Tag>Inactive</Tag>}
          </HStack>
        ),

      },
      {
        header: 'Job Number',
        accessorKey: 'job_number',
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

  console.log(subRowData);

  return (
    <VStack
      mt="50px"
      w="full"
      bgColor="gray.50"
      p={3}
      // h="95vh"
      position="relative"
    >
      <VStack bgColor="white" w="full">
        <BreadCrumbNav link="/add-payroll-employee-records" />

        {subRowData?.length === 0 ? (
          <VStack
            p={2}
            h="75vh"
            alignItems="center"
            justifyContent="center"
          >

            <FaBoxOpen
              size={120}
              color="gray"
            />
            <Text
              fontSize="xl"
              fontWeight="semibold"
              color="gray.500"
            >
              No Patients Recorded

            </Text>

          </VStack>
        )
          : (

            <DataTable2
              title="Employee Records"
              data={subRowData}
              columns={columnsx}
              isLoading={isLoading}
            />
          )}
      </VStack>
    </VStack>
  );
};

export default PayrollEmployeeRecords;
