/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */

import {
  Box, Button, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronCircleDown, FaEllipsisH } from 'react-icons/fa';
import DataTable2 from '../../components/tables/DataTable';

const PatientDetailAppointment = ({ data }) => {
  const navigate = useNavigate();
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
          // borderWidth="1px"
          // _hover={{ bg: 'gray.400' }}
          // _expanded={{ bg: 'blue.400' }}
          // _focus={{ boxShadow: 'outline' }}
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
            // bgColor="green.50"
            // fontWeight="bold"
            >
              Paid
            </MenuItem>
            <MenuItem
              color="red.500"
            // bgColor="red.50"
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
          data={data}
          hasSearch={false}
          isTableHeight={false}
        />
      </VStack>
    </VStack>
  );
};

export default PatientDetailAppointment;
