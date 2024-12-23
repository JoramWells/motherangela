/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, HStack, IconButton, Text, VStack, useDisclosure,
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
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllAccountingAssetLocationsQuery } from '../../api/accounts/accounting_assets/accountingAssetLocation.api';

// const socket = io('http://localhost:5003');

const AssetLocations = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAllAccountingAssetLocationsQuery();

  console.log(data);

  // useEffect(() => {
  //   socket.on('newAppointment', () => alert('new data'));
  // }, []);

  console.log(data);

  const columnsx = useMemo(
    () => [
      {
        header: 'Category Description',
        accessorKey: 'asset_location_description',
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
                pathname: `/add-asset-location/${props.row.original.asset_location_id}`,
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
                title="Asset Categories"
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

export default AssetLocations;
