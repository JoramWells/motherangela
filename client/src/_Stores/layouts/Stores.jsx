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
import { useGetAllAccountingCostCentresQuery } from '../../api/accounts/accountingCostCentre.api';
import { useGetAllAccountingStoresQuery } from '../../api/accounts/accountingStore.api';

const UserNameAvatar = ({ fullName }) => (
  <HStack>
    <Avatar
      size="xs"
      name={fullName}
      color="white"
      fontWeight="bold"
    />
    <Text
      textTransform="uppercase"
      fontWeight="bold"
      color="gray.700"
    >
      {fullName}

    </Text>
  </HStack>
);

const Stores = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAllAccountingStoresQuery();

  console.log(data);

  const columnsx = useMemo(
    () => [
      {
        header: 'Description',
        accessorKey: 'store_description',
        cell: (props) => (
          <Text>
            {props.getValue()}
          </Text>
        ),

      },
      {
        header: 'Department',
        accessorKey: 'accounting_department',
        cell: (props) => (<Text>{props.getValue()?.department_name}</Text>),

      },
      {
        header: 'Action',
        cell: (props) => (
          <HStack justifyContent="flex-start" alignItems="flex-start">
            <Button
              // variant="outline"
              color="gray.700"
              // borderColor="gray.700"
              size="xs"
              onClick={() => navigate({
                pathname: `/doctor/${props.row.original.appointment_id}`,
                search: `?patient_id=${props.row.original.patient_id}`,
              })}
              textTransform="uppercase"
            >
              View Details
            </Button>
          </HStack>
        ),
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

    [navigate],
  );

  // const subRowData = data
  //       && data.map((item) => ({
  //         ...item,
  //         subRows: [],
  //       }));

  const filterByDate = useCallback(() => {
    const todayDate = moment(new Date()).format('YYYY-MM-DD');
    return data?.filter((item) => moment(item.appointment_date).isSame(todayDate, 'day'));
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
        <BreadCrumbNav link="/add-patient?type=admission" />

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
              <DataTable2 data={filteredData || []} columns={columnsx} />
            </Box>
          )}
      </Box>
    </VStack>
  );
};

export default Stores;
