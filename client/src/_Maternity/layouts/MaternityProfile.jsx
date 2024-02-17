/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetMaternityProfilesQuery } from '../../api/maternity.api';
import UserNameAvatar from '../../components/UserNameAvatar';

const MaternityProfile = () => {
  const { data } = useGetMaternityProfilesQuery();

  const columns = useMemo(
    () => [
      // {
      //   header: 'Admission ID',
      //   accessorKey: 'admission_id',
      //   cell: (props) => (
      //     <Box
      //       h="full"
      //       color="blue.500"
      //       _hover={{
      //         cursor: 'pointer',
      //         color: 'gray.500',
      //         textDecoration: 'underline',
      //       }}
      //       onClick={() => navigate(`/supplier-detail/${props.row.original.id}`)}
      //     >
      //       <Text>{props.getValue()}</Text>
      //     </Box>
      //   ),

      // },
      {
        header: 'Name of Client',
        accessorKey: 'name_of_client',
        cell: (props) => (
          <UserNameAvatar
            fullName={props.getValue()}
            link={`/maternity-profile-detail/${props.row.original.maternity_profile_id}`}
          />
        ),

      },
      {
        header: 'Marital Status',
        accessorKey: 'marital_status',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Diabetes',
        accessorKey: 'diabetes',
        cell: (props) => <Text>{props.getValue()}</Text>,
        size: 200,

      },

      {
        header: 'Hypertension',
        accessorKey: 'hypertension',
        cell: (props) => (
          <Text>
            {props.getValue().substring(0, 12)}
          </Text>
        ),

      },
      {
        header: 'Address',
        accessorKey: 'address',
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
      mt="65px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-maternity-profile" />

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Maternity Profile
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
          h="89%"
        >
          <DataTable2 data={subRowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default MaternityProfile;
