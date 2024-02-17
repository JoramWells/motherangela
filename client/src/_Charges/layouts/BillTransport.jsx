/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {
  Box, Button, Text, VStack,
} from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import { FaPlus } from 'react-icons/fa';
import UserNameAvatar from '../../components/UserNameAvatar';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAppointmentsQuery } from '../../api/appointments.api';

const BillTransport = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAppointmentsQuery();

  const columns = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'patient',
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
        header: 'Mobile No.',
        accessorKey: 'cell_phone',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Gender',
        accessorKey: 'patient_gender',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue() === '1' ? 'MALE' : 'FEMALE'}</Text>,

      },
      {
        header: 'Patient Type',
        accessorKey: 'patient_type',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Action',
        cell: () => (
          <Button
            leftIcon={<FaPlus />}
          >
            Transport
          </Button>
        ),
      },
    ],

    [navigate],
  );

  const filterByDate = useCallback(() => {
    const todayDate = moment(new Date()).format('YYYY-MM-DD');
    return data?.filter((item) => moment(item.appointment_date).isSame(todayDate, 'day'));
  }, [data]);

  const filteredData = filterByDate();

  return (
    <VStack
      w="full"
      h="100vh"
      mt="65px"
      p={3}
    >
      <Text>BillTransport</Text>
      <DataTable2 columns={columns} data={filteredData} />
    </VStack>
  );
};

export default BillTransport;
