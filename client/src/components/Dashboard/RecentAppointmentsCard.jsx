/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import {
  Box, HStack, Text, VStack,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import { FaAngleRight, FaArrowRight, FaCaretRight } from 'react-icons/fa';
import DataTable2 from '../tables/DataTable';
import UserNameAvatar from '../UserNameAvatar';
import { useGetAppointmentsQuery } from '../../api/appointments.api';

const RecentAppointmentsCard = () => {
  const navigate = useNavigate();
  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAppointmentsQuery();

  const newArray = data?.slice(0, 3);
  const columns = useMemo(
    () => [
      {
        accessorKey: 'patient',
        enableSorting: false,
        cell: (props) => (
          <Box onClick={() => navigate(`/patient-detail/${props.row.original.patient_id}`)}>
            <UserNameAvatar
              fullName={`${props.getValue()?.first_name} ${props.getValue()?.middle_name}`}
            />
          </Box>
        ),
        size: 200,

      },
      {
        accessorKey: 'appointment_date',
        enableSorting: false,
        cell: (props) => (
          <VStack alignItems="flex-start">
            <Text>
              {moment(props.getValue()).format('ll')}

            </Text>
            {/* <Text color="gray.500">
              {moment(props.row.original.appointment_time).fromNow()}

            </Text> */}
          </VStack>
        ),

      },
    ],

    [navigate],
  );
  return (
    <VStack
      bgColor="white"
      w="30%"
    //   boxShadow="lg"
      rounded="xl"
      position="relative"
      h="320px"
      border="1px"
      borderColor="gray.200"
    >
      <HStack w="full" mb={0} position="absolute" p={4}>
        <Text fontSize="xl" fontWeight="semibold">Recent Appointments</Text>

      </HStack>
      <Box w="full" mt={10}>
        <DataTable2
          columns={columns}
          data={newArray}
          hasPagination={false}
          isTableHeight={false}
          hasSearch={false}
        />
      </Box>
      <HStack
        position="absolute"
        bottom={0}
        right={0}
        p={4}
        color="gray"
        // bgColor="gray"
      >
        <Text>View All</Text>
        <FaAngleRight />
      </HStack>

    </VStack>
  );
};

export default RecentAppointmentsCard;
