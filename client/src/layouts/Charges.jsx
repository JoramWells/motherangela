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
import { Link, useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DataTable2 from '../components/tables/DataTable';
import { useGetCreditPaymentsQuery } from '../api/creditPayment.api';

const UserNameAvatar = ({ fullName, link }) => (
  <HStack>
    <Avatar
      size="sm"
      name={fullName}
      color="white"
    />
    <Link to={link}>{fullName}</Link>
  </HStack>
);

const Charges = () => {
  const { data } = useGetCreditPaymentsQuery();

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'patient_full_name',
        cell: (props) => (
          <UserNameAvatar
            fullName={props.getValue()}
            link={`/charges-detail/${props.row.original.credit_payment_id}`}
          />
        ),
        size: 200,

      },

      {
        header: 'Appointment Date',
        accessorKey: 'date_of_invoice',
        enableSorting: false,
        cell: (props) => (
          <VStack alignItems="flex-start">
            <Text>{moment(props.getValue()).format('LL')}</Text>
            <Text color="gray.500">{moment(props.row.original.time_of_invoice, 'HH:mm:ss.SSS').format('h:mm A')}</Text>
          </VStack>
        ),

      },
      {
        header: 'Service Description',
        accessorKey: 'service_desc',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Amount',
        accessorKey: 'amount',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Total Charge Payment',
        accessorKey: 'total_charge_payments',
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
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-suppliers" />

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Credit Payments
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
        <Box
          w="100%"
          bgColor="white"
          p={3}
          h="89%"
        >
          <DataTable2 data={subRowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Charges;
