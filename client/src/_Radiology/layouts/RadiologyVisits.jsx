/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllInternalLabRequestsQuery } from '../api/internalLabRequests.api';
import UserNameAvatar from '../../components/UserNameAvatar';

const RadiologyVisits = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useGetAllInternalLabRequestsQuery();

  const columnsx = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'patient',
        cell: (props) => (
          <Box onClick={() => navigate(`/patient-detail/${props.getValue().patient_id}`)}>
            <UserNameAvatar
              fullName={`${props.getValue().first_name} ${props.getValue().middle_name}`}
            />
          </Box>
        ),

      },
      {
        header: 'Payment Details',
        accessorKey: 'appointments2',
        cell: (props) => <Text>{props.getValue().insurance_detail?.insurance_name}</Text>,
        size: 200,

      },
      {
        header: 'INVESTIGATION REQUESTED',
        accessorKey: 'procedure_detail',
        cell: (props) => <Text>{props.getValue().procedure_name}</Text>,

      },
      {
        header: 'NOTES',
        accessorKey: 'serviceCostCorporate',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'PAYMENT STATUS',
        accessorKey: 'status',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'URGENCY',
        accessorKey: 'urgency',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },

      {
        header: 'Action',
        // accessorKey: 'serviceCostForeigner',
        enableSorting: false,
        cell: (props) => (
          <VStack>
            <Button
              w="full"
              size="sm"
              onClick={() => navigate(`/radiology-details/${props.row.original.lab_request_id}`)}
            >
              Post Results
            </Button>
            <Button
              w="full"
              size="sm"
            >
              Referral
            </Button>
          </VStack>
        ),

      },
    ],

    [navigate],
  );

  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));
    // const fetchData = useCallback(()=>{
    //   dispatch(getAllPriceLists())
    // },[dispatch])

  console.log(subrowData);

  return (
    <VStack
      mt="65px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box
        bgColor="white"
        w="full"
        p={2}
      >
        <BreadCrumbNav link="/add-item" />
        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          rounded="lg"
          mt={2}
          mb={2}
        >

          <Text
            fontSize="16px"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Radiology visits
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subrowData?.length}
              )

            </span>
          </Text>
          <HStack>
            <Button
              leftIcon={<FaPrint />}
              size="sm"
            >
              Report
            </Button>

            <Button
              leftIcon={<FaFileDownload />}
              size="sm"
            >
              Download
            </Button>

          </HStack>
        </HStack>

        {/* visit type */}
        <VStack
          align="flex-start"
        >
          <Text
            textAlign="left"
            fontSize="16px"
            fontWeight="bold"
            color="gray.500"
          >
            Type of Visit
          </Text>
          <HStack
            w="full"
          >
            <Button
              size="sm"
            >
              All
            </Button>
            <Button
              size="sm"
            >
              Internal
            </Button>
            <Button
              size="sm"
            >
              External
            </Button>
          </HStack>
        </VStack>

        <Box
          w="100%"
          bgColor="white"
          p={3}
          h="89%"
        >
          <DataTable2 data={subrowData} columns={columnsx} />
        </Box>
      </Box>
    </VStack>
  );
};

export default RadiologyVisits;