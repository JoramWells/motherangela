/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetMaternityAntenatalProfileQuery } from '../../api/maternity.api';
import UserNameAvatar from '../../components/UserNameAvatar';

const MaternityAntenatalProfile = () => {
  const navigate = useNavigate();

  const { data } = useGetMaternityAntenatalProfileQuery();
  console.log(data);
  const columns = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'maternity_profile',
        cell: (props) => (
          <Box onClick={() => navigate(`/admission-detail/${props.row.original.maternity_antenatal_profile_id}`)}>
            <UserNameAvatar fullName={props.getValue()?.name_of_client} />
          </Box>
        ),

      },
      {
        header: 'Blood Group',
        accessorKey: 'blood_group',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Blood Pressure',
        accessorKey: 'hb',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'HIV',
        accessorKey: 'hiv',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Rhesus',
        accessorKey: 'rhesus',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Urinalysis',
        accessorKey: 'urinalysis',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue() && `${props.getValue().substring(1, 9)}...`}</Text>,

      },
    ],

    [navigate],
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
        <BreadCrumbNav link="/add-suppliers" />

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Maternity Antenatal Profile
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
          <DataTable2
            searchQueryColumn="pay_status"
            data={subRowData}
            columns={columns}
          />
        </Box>
      </Box>
    </VStack>
  );
};

export default MaternityAntenatalProfile;
