/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaBoxOpen, FaCheck, FaInfoCircle,
} from 'react-icons/fa';
import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAppointmentsQuery } from '../../api/appointments.api';

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

const PatientsTriaged = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAppointmentsQuery();

  // const { data } = useSelector((state) => state.patients);

  const columnsx = useMemo(
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
        header: 'Appointment Time',
        accessorKey: 'appointment_date',
        cell: (props) => (
          <VStack alignItems="flex-start">
            <Text>{moment(props.getValue()).format('LL')}</Text>
            <Text color="gray.500">{moment(props.row.original.appointment_time, 'HH:mm').format('hh:mm A')}</Text>
          </VStack>
        ),

      },
      {
        header: 'PAYMENT DETAILS',
        accessorKey: 'patient_gender',
        enableSorting: false,
        cell: (props) => <Text>b</Text>,

      },
      {
        header: 'Vital Signs',
        // accessorKey: 'tem',
        cell: (props) => (
          <Box>
            {!props.row.original.vitalSigns.length > 0
              ? (
                <Button
                  variant="ghost"
                  // bgColor={}
                  colorScheme="orange"
                  size="xs"
                  onClick={() => navigate({
                    pathname: `/add-vitals/${props.row.original.patient_id}`,
                    search: `?appointment_id=${props.row.original.appointment_id}`,
                  })}
                  leftIcon={<FaInfoCircle />}
                >
                  RECORD
                </Button>
              ) : (
                <Button
                  size="xs"
                  colorScheme="green"
                  variant="ghost"
                  leftIcon={<FaCheck />}
                >
                  RECORDED
                </Button>
              )}
          </Box>
        ),

      },
      {
        header: 'Action',
        cell: (props) => (
          <Button
            size="sm"
            onClick={() => navigate(`/add-allergies/${props.row.original.patient_id}`)}
          >
            Record Allergies
          </Button>
        ),
      },
    ],

    [navigate],
  );

  const subRowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));
  const filteredData = subRowData?.filter((item) => {
    const itemDate = moment(item.appointment_date);
    const todayDate = moment(new Date()).format('YYYY-MM-DD');
    return itemDate.isSame(todayDate, 'day');
  });

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
            <DataTable2
              data={filteredData}
              columns={columnsx}
              title="Triage Patients"
            />
          )}
      </Box>
    </VStack>
  );
};

export default PatientsTriaged;
