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
import { FaChevronCircleDown, FaEllipsisH, FaPlus } from 'react-icons/fa';
import DataTable2 from '../../components/tables/DataTable';

const PatientDetailAdmission = ({ data }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { id: appointment_id } = useParams();
  const patient_id = searchParams.get('patient_id');

  console.log(data);
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
      bgColor="white"
      padding={5}
      rounded="lg"
      position="relative"
    >

      <Button
        size="sm"
        height="37px"
        border="2px"
        borderColor="blue.500"
        //   rounded="full"
        backgroundColor="white"
        leftIcon={<FaPlus />}
        color="blue.500"
        position="absolute"
        right={7}
        top={3}
        // rounded="full"
        onClick={() => navigate(
          {
            pathname: `/add-admission/${patient_id}`,
            search: `?appointment_id=${appointment_id}`,
          },
        )}
        _hover={{
          backgroundColor: 'blue.50',
        }}
      >
        Admission
      </Button>

      <DataTable2
        title="Admission History"
        columns={columns}
        data={data}
        hasSearch={false}
        isTableHeight={false}
      />
    </VStack>
  );
};

export default PatientDetailAdmission;
