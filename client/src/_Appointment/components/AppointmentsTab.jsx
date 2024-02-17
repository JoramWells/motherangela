/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */

import {
  Box, Button, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import { useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FaChevronCircleDown, FaEllipsisH } from 'react-icons/fa';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAppointmentDetailByIDQuery } from '../../api/appointments.api';

const AppointmentsTab = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { id: appointment_id } = useParams();

  //   get patient_id from search params
  const patient_id = searchParams.get('patient_id');
  const { data: appointmentsData } = useGetAppointmentDetailByIDQuery(patient_id);
  const columns = useMemo(
    () => [
      {
        header: 'Appointment Date',
        accessorKey: 'appointment_date',
        cell: (props) => (
          <Text>{moment(props.getValue()).format('LL')}</Text>
        ),

      },
      {
        header: 'Appointment Time',
        accessorKey: 'appointment_time',
        cell: (props) => <Text>{moment(props.getValue(), 'HH:mm').format('hh:mm a')}</Text>,
      },
      {
        header: 'PAYMENT DETAILS',
        accessorKey: 'insurance_detail',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()?.insurance_name}</Text>,

      },
      {
        header: 'Consultation Type',
        enableSorting: false,
        cell: (props) => (
          <Text>
            OPD
          </Text>
        ),

      },
      {
        header: 'Charges',
        accessorKey: 'charges',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Status',
        accessorKey: 'appointment_status',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Action',
      },
    ],

    [],
  );
  return (
    <VStack
      spacing="0"
    >
      <HStack
        w="full"
        justify="flex-end"
      >
        <Button
          size="sm"
          onClick={() => navigate(
            {
              pathname: `/add-admission/${patient_id}`,
              search: `?appointment_id=${appointment_id}`,
            },
          )}
        >
          ADMIT
        </Button>
        <Button
          size="sm"
          border="1px"
          borderColor="gray.500"
        //   rounded="full"
          backgroundColor="blue.50"
        //   color="blue.500"
        >
          Create Appointment
        </Button>

      </HStack>
      <HStack
        w="98%"
        justifyContent="space-between"
        bgColor="white"
        p={2}
      >
        <Text
          fontSize="14px"
          color="gray.700"
          fontWeight="bold"
        >
          All
        </Text>

        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
          >
            <FaEllipsisH />
          </MenuButton>
          <MenuList
            p="5px"
          >
            <MenuItem>All</MenuItem>
            <MenuItem>Today</MenuItem>
            <MenuDivider />
            <MenuItem
              color="green.500"
            >
              Paid
            </MenuItem>
            <MenuItem
              color="red.500"
            >
              Unpaid
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <VStack
        w="100%"
      >
        <DataTable2
          columns={columns}
          data={appointmentsData}
          hasSearch={false}
          isTableHeight={false}
        />
      </VStack>
    </VStack>
  );
};

export default AppointmentsTab;
