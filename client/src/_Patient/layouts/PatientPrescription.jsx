/* eslint-disable camelcase */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
import {
  Avatar,
  Button,
  HStack, Text, VStack,
} from '@chakra-ui/react';
import {
  useLocation, useNavigate, useParams, useSearchParams,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { useGetPatientQuery } from '../../api/patients.api';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAppointmentQuery } from '../../api/appointments.api';
import { useGetInternalPharmacyRequestQuery } from '../../_Pharmacy/api/internalPharmacyRequest.api';

const PatientPrescription = () => {
  const [sideItem, setSideItem] = useState(0);
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const appointment_id = searchParams.get('appointment_id');
  const dispatch = useDispatch();

  const { data, isLoading } = useGetAppointmentQuery(appointment_id);
  const { data: pharmacyRequestData } = useGetInternalPharmacyRequestQuery(id);
  console.log(pharmacyRequestData);

  const columns = useMemo(
    () => [
      {
        header: 'Medication Name',
        accessorKey: 'medication',
        enableSorting: false,
        // eslint-disable-next-line react/prop-types
        cell: (props) => <Text>{props.getValue()?.medication_name}</Text>,

      },
      {
        header: 'Prescription Term',
        accessorKey: 'prescription_term',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Quantity',
        accessorKey: 'quantity',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
    ],

    [],
  );

  const breadCrumbData = [
    {
      id: nanoid(),
      title: 'Patients',
      link: '/patients',
    },
    {
      id: nanoid(),
      title: 'Patients Visits',
      link: '/patient-visits',
    },
    {
      id: nanoid(),
      title: `${data?.patient?.first_name} ${data?.patient?.middle_name}`,
      link: '/',
      isCurrentPage: true,
    },
  ];

  console.log(data);

  return (
    <VStack
      h="100vh"
      w="full"
      mt="65px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <BreadCrumbNav
        breadCrumbData={breadCrumbData}
        link={`/add-prescription/${appointment_id}`}
      />

      <HStack
        w="full"
        alignItems="flex-start"
        bgColor="white"
        rounded="lg"
        p={2}
      >
        <Avatar
          size="xl"
          name={`${data?.patient?.first_name} ${data?.patient?.middle_name}`}
        />
        <Text
          fontSize="2xl"
          fontWeight="semibold"
        >
          {`${data?.patient?.first_name} ${data?.patient?.middle_name}`}
        </Text>
      </HStack>
      <DataTable2 columns={columns} data={pharmacyRequestData} hasSearch={false} />

    </VStack>
  );
};

export default PatientPrescription;
