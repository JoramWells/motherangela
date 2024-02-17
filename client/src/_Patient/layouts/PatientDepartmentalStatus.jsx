/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Badge,
  Box, Button, HStack, IconButton, Tag, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaBoxOpen,
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

const PatientDepartmentalStatus = () => {
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
        header: 'Nursing Station',
        // accessorKey: 'appointment_date',
        cell: (props) => (
          <Box h="100%">
            {!props.row.original.temperature ? (
              <Tag
                bgColor="red.50"
                color="red.400"
                fontWeight="bold"
                rounded="md"
                // border="1px"
                // borderColor="red.200"
                p={2}
              >
                VITALS YET TO BE RECORDED
              </Tag>
            )
              : <Text>VITALS RECORDED</Text>}
          </Box>
        ),

      },
      {
        header: 'Doctor Room',
        // accessorKey: 'patient_gender',
        // enableSorting: false,
        cell: (props) => (
          <Tag
            bgColor="red.50"
            color="red.400"
            fontWeight="bold"
            rounded="lg"
            // border="1px"
            // borderColor="red.200"
            p={2}
          >
            YET TO BE SEEN
          </Tag>
        ),

      },
      {
        header: 'Lab',
        // accessorKey: 'appointment_date',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Radiology',
        // accessorKey: 'appointment_date',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Pharmacy Request',
        // accessorKey: 'appointment_date',
        cell: (props) => (
          <Tag
            bgColor="red.50"
            color="red.400"
            fontWeight="bold"
            rounded="lg"
          // border="1px"
          // borderColor="red.200"
            p={2}
          >
            PENDING
          </Tag>
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

export default PatientDepartmentalStatus;
