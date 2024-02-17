/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaBoxOpen, FaEllipsisH, FaFileDownload, FaPrint,
} from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllPayrollEmployeeRecordsQuery } from '../../api/payrollEmployeeRecords.api';
import UserNameAvatar from '../../components/UserNameAvatar';

const PayrollEmployeeLoanDetails = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAllPayrollEmployeeRecordsQuery();
  console.log(data);

  const columns = useMemo(
    () => [
      {
        header: 'Employee',
        accessorKey: 'full_name',
        cell: (props) => (
          <UserNameAvatar
            fullName={props.getValue()}
            link={`payroll-employee-records-details/${props.row.original.employee_id}`}
          />
        ),

      },
      {
        header: 'Phone No.',
        accessorKey: 'cellphone',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'JOB TITLE',
        accessorKey: 'payroll_job_title',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()?.job_title_description}</Text>,

      },
      {
        header: 'Bank Branch',
        accessorKey: 'bank_branch',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Action',
        enableSorting: false,
        cell: (props) => (
          <IconButton>
            <FaEllipsisH />
          </IconButton>
        ),

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
      mt="55px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-payroll-employee-records" />

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Employee Loan Records
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
            <Box
              w="100%"
              bgColor="white"
              p={3}
              h="89%"
            >
              <DataTable2 columns={columns} data={subRowData} />
            </Box>
          )}
      </Box>
    </VStack>
  );
};

export default PayrollEmployeeLoanDetails;
