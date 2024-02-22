/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaBoxOpen, FaCheck, FaCheckCircle, FaInfoCircle,
} from 'react-icons/fa';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAppointmentsQuery } from '../../api/appointments.api';

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
      color="gray.600"
    >
      {fullName}

    </Text>
  </HStack>
);

const PatientQueue = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAppointmentsQuery();

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
            <Text>{props.row.original.patient_gender}</Text>
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
        accessorKey: 'insurance_detail',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue() ? props.getValue()?.insurance_name : 'CASH'}</Text>,

      },
      {
        header: 'Eligibility',
        // accessorKey: 'tem',
        cell: (props) => (
          <Box>
            <Button
              variant="ghost"
                  // bgColor={}
              // colorScheme="orange"
              size="xs"
              onClick={() => navigate({
                pathname: `/add-eligibility-screening/${props.row.original.patient_id}`,
                search: `?appointment_id=${props.row.original.appointment_id}`,
              })}
            >
              RECORD
            </Button>
          </Box>
        ),

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
              See Patient
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

  console.log(filteredData);

  return (
    <VStack
      mt="55px"
      w="full"
      bgColor="gray.50"
      p={3}
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

            <DataTable2 data={filteredData || []} columns={columnsx} />
          )}
      </Box>
    </VStack>
  );
};

export default PatientQueue;
