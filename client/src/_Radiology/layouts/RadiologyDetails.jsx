/* eslint-disable no-unused-vars */
import {
  Box,
  Text, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useGetInternalLabRequestQuery } from '../api/internalLabRequests.api';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';

const RadiologyDetails = () => {
  const { id } = useParams();
  const { data } = useGetInternalLabRequestQuery(id);

  //

  const columnsx = useMemo(() => [
    {
      header: 'Uploaded File',
      accessorKey: 'patient',
    },
    {
      header: 'Items Used',
      accessorKey: 'appointments2',

    },
    {
      header: 'Quantity',
      accessorKey: 'appointments2',

    },
  ], []);

  //
  const breadCrumbData = [
    {
      id: nanoid(),
      title: 'Patients',
      link: '/patients',
    },
    {
      id: nanoid(),
      title: `${data?.patient_detail?.first_name} ${data?.patient_detail?.middle_name}`,
      link: '/',
      // isCurrentPage: true,
    },
    {
      id: nanoid(),
      title: 'Radiology Rq.',
      link: '/',
      isCurrentPage: true,
    },
  ];

  console.log(data);
  return (
    <VStack
      h="100vh"
      marginTop="65px"
      p="3px"
      w="100%"
    >

      <BreadCrumbNav
        breadCrumbData={breadCrumbData}
        link={`/add-radiology-results/${data?.patient_id}`}
      />

      <Box
        w="100%"
        bgColor="white"
        p={3}
        h="89%"
      >
        <DataTable2 data={[]} columns={columnsx} />
      </Box>

    </VStack>
  );
};

export default RadiologyDetails;
