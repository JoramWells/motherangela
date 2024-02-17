/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaBoxOpen,
} from 'react-icons/fa';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAppointmentsQuery } from '../../api/appointments.api';
import { useGetAllAccountingJournalsQuery } from '../../api/accounts/accountingJournal.api';

const Journal = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAllAccountingJournalsQuery();

  console.log(data);

  const columnsx = useMemo(
    () => [
      {
        header: 'ACCOUNT',
        accessorKey: 'accounting_account_detail',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue() ? props.getValue()?.account_name : 'CASH'}</Text>,

      },
      {
        header: 'Description',
        accessorKey: 'description',
        cell: (props) => (<Text>{props.getValue()}</Text>),

      },
      {
        header: 'Debit',
        accessorKey: 'debit',
        cell: (props) => (<Text>{parseFloat(props.getValue()).toLocaleString()}</Text>),

      },
      {
        header: 'Credit',
        accessorKey: 'credit',
        cell: (props) => (<Text>{parseFloat(props.getValue()).toLocaleString()}</Text>),
      },
      // {
      //   header: 'act',
      //   cell: () => (
      //     <HStack>
      //       <FaEye />
      //     </HStack>
      //   ),
      // },
    ],

    [],
  );

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
        <BreadCrumbNav link="/add-patient?type=admission" />

        {data?.length === 0 ? (
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
              <DataTable2 data={data || []} columns={columnsx} />
            </Box>
          )}
      </Box>
    </VStack>
  );
};

export default Journal;
