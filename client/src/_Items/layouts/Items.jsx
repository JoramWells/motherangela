/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaBoxOpen, FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetPatientsQuery } from '../../api/patients.api';

const outPatientList = [

  {
    id: nanoid(),
    text: 'Companies',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Consultation',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Diseases',
    link: '/diseases-duplicates',
  },
  {
    id: nanoid(),
    text: 'Insurance',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Medication',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'NHIF Rebate',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Services',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Suppliers',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Wards',
    link: '/',
  },
];

const UserNameAvatar = ({ fullName }) => (
  <HStack>
    <Avatar
      size="sm"
      name={fullName}
      color="white"
    />
    <Text
      fontWeight="bold"
      textTransform="uppercase"
    >
      {fullName}
    </Text>
  </HStack>
);

const Items = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetPatientsQuery();

  // const { data } = useSelector((state) => state.patients);
  // console.log(data);

  const columns = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'last_name',
        cell: (props) => (
          <VStack
            onClick={() => navigate(`/patient-detail/${props.row.original.patient_id}`)}
            alignItems="flex-start"
          >
            <UserNameAvatar
              fullName={`${props.row.original?.first_name} ${props.row.original?.last_name}`}
            />
          </VStack>
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
        cell: () => <Button size="sm">more</Button>,
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
      mt="60px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-patient" />

        <HStack
          w="full"
          p={2}
          flexWrap="wrap"
          mt={2}
        >
          {outPatientList.map((item) => (
            <Button
              key={item.id}
              size="sm"
              color="gray.500"
              fontWeight="normal"
              rounded="full"
              onClick={() => navigate(item.link)}
            >
              {item.text}
            </Button>
          ))}
        </HStack>

        {filteredData?.length === 0 ? (
          <VStack p={5}>

            <FaBoxOpen size="60" color="gray" />
            <Text fontSize="lg" fontWeight="semibold" color="gray.500">No Patients Today</Text>

          </VStack>
        )
          : (

            <DataTable2 data={filteredData} columns={columns} />
          )}
      </Box>
    </VStack>
  );
};

export default Items;
