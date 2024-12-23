/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Badge,
  Box, HStack, IconButton, Tag, Text, VStack, useDisclosure,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaBoxOpen, FaEdit, FaTrash, FaUserNurse,
} from 'react-icons/fa';
import {
  useEffect, useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import moment from 'moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllAccountingAssetQuery } from '../../api/accounts/accounting_assets/accountingAsset.api';
import { useGetAllAccountingBankAccountsQuery } from '../../api/accounts/bank/accountingBankAccounts.api';

// const socket = io('http://localhost:5003');

const BankAccounts = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAllAccountingBankAccountsQuery();

  console.log(data);

  // useEffect(() => {
  //   socket.on('newAppointment', () => alert('new data'));
  // }, []);

  console.log(data);

  const columnsx = useMemo(
    () => [
      {
        header: 'Bank Name',
        accessorKey: 'bank_name',
        cell: (props) => (
          <Text
            fontWeight="bold"
            color="gray.700"
          >
            {props.getValue()}
          </Text>
        ),

      },
      {
        header: 'Account Name',
        accessorKey: 'accounting_account_detail',
        cell: (props) => (<Text>{props.getValue()?.account_name}</Text>
        ),

      },
      {
        header: 'Transaction Charges',
        accessorKey: 'transaction_charges_percentage',
        cell: (props) => (<Text>{props.getValue()}</Text>
        ),

      },
      {
        header: 'Action',
        cell: (props) => (
          <HStack justifyContent="flex-start" alignItems="flex-start">
            <IconButton
              // variant="outline"
              // borderColor="gray.700"
              size="xs"
              onClick={() => navigate({
                pathname: `/add-asset-category/${props.row.original.asset_category_id}`,
              })}
            >
              <FaEdit />
            </IconButton>
            <IconButton
              size="xs"
            >
              <FaTrash
                color="gray"
              />
            </IconButton>
          </HStack>
        ),
      },
    ],

    [navigate],
  );

  // const subRowData = data
  //       && data.map((item) => ({
  //         ...item,
  //         subRows: [],
  //       }));

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack
      mt="55px"
      w="full"
      bgColor="gray.50"
      p={3}
      position="relative"
    >
      <VStack
        bgColor="white"
        w="full"
        spacing={4}
      >
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

            <VStack
              w="full"
              spacing={0}
            >
              <DataTable2
                title="Bank Accounts"
                data={data || []}
                columns={columnsx}
                isLoading={isLoading}
              />
            </VStack>
          )}
      </VStack>
    </VStack>
  );
};

export default BankAccounts;
