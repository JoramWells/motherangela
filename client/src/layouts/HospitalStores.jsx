/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DataTable2 from '../components/tables/DataTable';
import { useGetHospitalStoresQuery } from '../api/hospital.api';

const HospitalStores = () => {
  const { data } = useGetHospitalStoresQuery();

  const columns = useMemo(
    () => [
      {
        header: 'Hospital Description',
        accessorKey: 'hospital_store_description',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'user Name',
        accessorKey: 'user_name',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Email',
        accessorKey: 'email',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'User Type',
        accessorKey: 'user_type_id',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
    ],

    [],
  );

  const subRowData = data
    && data.map((item) => ({
      ...item,
      subRows: [],
    }));

  return (
    <VStack
      mt={5}
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/admin-add-user" />
        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Users
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subRowData?.length}
              )

            </span>
          </Text>
          <HStack>
            <Button leftIcon={<FaPrint />}>Print Report</Button>

            <Button leftIcon={<FaFileDownload />}>Download</Button>

          </HStack>
        </HStack>
        <Box
          w="100%"
          bgColor="white"
          p={3}
          h="89%"
        >
          <DataTable2 data={subRowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default HospitalStores;
