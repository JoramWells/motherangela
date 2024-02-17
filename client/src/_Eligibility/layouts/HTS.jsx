/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaAudible,
  FaBoxOpen, FaEye, FaFileDownload, FaHandshake, FaPrint, FaUserNurse,
} from 'react-icons/fa';
import { useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import { nanoid } from '@reduxjs/toolkit';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAppointmentsQuery } from '../../api/appointments.api';
import { useGetAllEligibilityQuery } from '../api/eligibility.api';

const UserNameAvatar = ({ fullName }) => (
  <HStack>
    <Avatar
      size="sm"
      name={fullName}
      color="white"
    />
    <Text
      textTransform="uppercase"
      fontWeight="bold"
      color="gray.700"
    >
      {fullName}

    </Text>
  </HStack>
);

const breadCrumbData = [
  {
    id: nanoid(),
    title: 'CCC',
    link: '/ccc',
  },
  {
    id: nanoid(),
    title: 'HTS',
    link: '/hts',
    isCurrentPage: true,
  },
];

const Hts = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAllEligibilityQuery();

  const columnsx = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'appointments2',
        cell: (props) => (
          <Box onClick={() => navigate(`/patient-detail/${props.row.original.patient_id}`)}>
            <UserNameAvatar
              fullName={`${props.getValue()?.patient.first_name} ${props.getValue()?.patient.middle_name}`}
            />
            <Text>{props.row.original.patient_gender}</Text>
          </Box>
        ),
        size: 200,

      },
      {
        header: 'Tested Before',
        accessorKey: 'isTested',
      },
      {
        header: 'Key Population ',
        accessorKey: 'keyPopulation',
      },
      {
        header: 'Screened TB',
        accessorKey: 'tbScreening',
      },
      {
        header: 'Screened GBV',
        accessorKey: 'gbvScreening',
      },
      {
        header: 'Eligible',
        accessorKey: 'eligible',
      },
      {
        header: 'Reason',
        accessorKey: 'reason',
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

  console.log(data);

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
        <BreadCrumbNav
          breadCrumbData={breadCrumbData}
          link="/add-patient?type=admission"
        />

        <VStack
          w="full"
          // bgColor="red"
          alignItems="flex-start"
          paddingLeft="15px"
          mt={5}
          mb={5}

        >
          <Text
            fontSize="18px"
            fontWeight="bold"
          >
            HTS Category
          </Text>
          <HStack>
            <Button
              size="sm"
            >
              GBV
            </Button>
            <Button
              size="sm"
            >
              HIV
            </Button>
            <Button
              size="sm"
            >
              TB
            </Button>
          </HStack>
        </VStack>

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

export default Hts;
