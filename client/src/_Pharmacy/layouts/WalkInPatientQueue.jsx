/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaAudible,
  FaBoxOpen, FaEllipsisV, FaFileDownload, FaHandshake, FaPrint, FaSpeakerDeck, FaUserNurse,
} from 'react-icons/fa';
import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetPatientsQuery } from '../../api/patients.api';
import { useGetAppointmentsQuery } from '../../api/appointments.api';

const outPatientList = [

  {
    id: nanoid(),
    text: 'ANC',
  },
  {
    id: nanoid(),
    text: 'Cervical Screening',
  },
  {
    id: nanoid(),
    text: 'Child Health Information',
  },
  {
    id: nanoid(),
    text: 'Child Weight Gaps',
  },
  {
    id: nanoid(),
    text: 'Child Height Gaps',
  },
  {
    id: nanoid(),
    text: 'FP',
  },
  {
    id: nanoid(),
    text: 'PNC',
  },
  {
    id: nanoid(),
    text: 'FP',
  },
  {
    id: nanoid(),
    text: 'SGBV',
  },
];

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

const WalkInPatientQueue = () => {
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
            {!props.row.original.temperature
              ? (
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  size="sm"
                  onClick={() => navigate(`/add-vitals/${props.row.original.patient_id}`)}
                >
                  NOT RECORDED
                </Button>
              ) : <Button size="sm" colorScheme="green" variant="ghost">RECORDED</Button>}
          </Box>
        ),

      },
      {
        header: 'Requests',
        cell: (props) => (
          <VStack
            alignItems="flex-start"
          >
            <Button
              size="xs"
              // w=""
            >
              Pharmacy
            </Button>
            <Button
              size="xs"
              // w=""
            >
              Departmental Drugs
            </Button>
          </VStack>
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

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Patients
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {filteredData?.length}
              )

            </span>
          </Text>
          <HStack>
            <Button leftIcon={<FaPrint />}>Print Report</Button>

            <Button leftIcon={<FaFileDownload />}>Download</Button>

          </HStack>
        </HStack>
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

export default WalkInPatientQueue;
