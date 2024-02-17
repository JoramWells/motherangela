/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, IconButton, Text, Tooltip, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaBoxOpen, FaEllipsisV, FaFileDownload, FaHandshake, FaPrint, FaUserNurse,
} from 'react-icons/fa';
import { useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllPersonalAccountChargesQuery } from '../../api/personalAccountCharges.api';

const UserNameAvatar = ({ fullName }) => (
  <HStack>
    <Avatar
      size="sm"
      name={fullName}
      color="white"
    />
    <Text>{fullName}</Text>
  </HStack>
);

const PersonalAccountCharges = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAllPersonalAccountChargesQuery();

  // const { data } = useSelector((state) => state.patients);
  console.log(data);

  const columnsx = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'patient',
        cell: (props) => (
          <Box onClick={() => navigate(`/personal-account-charge-detail/${props.row.original.personal_account_charge_id}`)}>
            <UserNameAvatar
              fullName={`${props.getValue()?.first_name} ${props.getValue()?.middle_name}`}
            />
          </Box>
        ),
        size: 200,

      },
      {
        header: 'Date',
        accessorKey: 'date_of_charge',
        cell: (props) => (
          <Text>{moment(props.getValue()).format('LL')}</Text>
        ),

      },
      {
        header: 'Transactions',
        accessorKey: 'patient_count',
        enableSorting: true,
        cell: (props) => (
          <Text>
            {props.getValue() ? parseInt(props.getValue(), 10)?.toLocaleString()
              : parseInt(props.row.original.amount, 10)?.toLocaleString()}
          </Text>
        ),

      },
      {
        header: 'Balance',
        enableSorting: true,
        cell: (props) => <Text>0</Text>,

      },
      {
        header: 'Action',
        cell: (props) => (
          <Tooltip
            label="View More"
            hasArrow
            rounded="full"
          >
            <IconButton
              color="gray.500"
              size="sm"
              onClick={() => { navigate(`/personal-account-charge-detail/${props.row.original.patient_id}`); }}
            >
              <FaEllipsisV />
            </IconButton>
          </Tooltip>
        ),

      },
    ],

    [navigate],
  );

  const filterByDate = useCallback(() => {
    const todayDate = moment(new Date()).format('YYYY-MM-DD');
    return data?.filter((item) => moment(item.date_of_charge).isSame(todayDate, 'day'));
  }, [data]);

  const filteredData = filterByDate();

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
        <BreadCrumbNav link="/add-patient" />

        {filteredData?.length === 0 ? (
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
              <DataTable2 data={filteredData} columns={columnsx} />
            </Box>
          )}
      </Box>
    </VStack>
  );
};

export default PersonalAccountCharges;
