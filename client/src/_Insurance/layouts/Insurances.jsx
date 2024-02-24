/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import {
  Box, Button, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import {
  FaEdit, FaLocationArrow, FaMailBulk, FaPhone,
} from 'react-icons/fa';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetInsurancesQuery } from '../../api/insurance.api';

const breadCrumbData = [
  {
    id: nanoid(),
    title: 'Insurances',
    link: '/admin-insurances',
    isCurrentPage: true,

  },
];

const Insurance = () => {
  const { data } = useGetInsurancesQuery();
  const navigate = useNavigate();

  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  const columns = useMemo(
    () => [
      {
        header: 'Insurance Name',
        accessorKey: 'insurance_name',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Box Address',
        // accessorKey: 'box_address',
        cell: (props) => (
          <VStack
            alignItems="flex-start"
          >
            <HStack>
              <FaLocationArrow
                color="gray"
              />
              <Text>{props.row.original.box_address}</Text>
            </HStack>
            <HStack>
              <FaPhone
                color="gray"
              />
              <Text>{props.row.original.phone_no}</Text>
            </HStack>

            <HStack>
              <FaMailBulk
                color="gray"
              />

              <Text
                color="gray.500"
              >
                {props.row.original.email_address}
              </Text>
            </HStack>

          </VStack>
        ),
      },
      {
        header: 'Payment Percentage(%)',
        accessorKey: 'payment_percentage_out_patient',
        enableSorting: false,
        cell: (props) => (
          <VStack
            justifyContent="flex-start"
          >
            <HStack
              w="full"
              justifyContent="space-between"
            >
              <Text
                color="gray.500"
              >
                Out Patient:
              </Text>
              <Text>{props.row.original.payment_percentage_out_patient}</Text>

            </HStack>

            {/*  */}
            <HStack
              w="full"
              justifyContent="space-between"
            >
              <Text
                color="gray.500"
              >
                In Patient:
              </Text>
              <Text>{props.getValue()}</Text>
            </HStack>
          </VStack>
        ),

      },
      {
        header: 'Action',
        cell: (props) => (
          <HStack>
            <IconButton
              size="sm"
              onClick={() => navigate({
                pathname: '/register-items',
                search: `?step=2&insurance_id=${props.row.original.insurance_id}`,
              })}
            >
              <FaEdit
                color="gray"
              />
            </IconButton>
          </HStack>
        ),
      },
    ],

    [],
  );

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
        <BreadCrumbNav link="/add-insurance" breadCrumbData={breadCrumbData} />
        <VStack
          w="100%"
          // justifyContent="flex-start"q
          alignItems="flex-start"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text
            fontWeight="semibold"
            fontSize="lg"
            color="gray.500"
          >
            Insurance Mappings

          </Text>
          <HStack>
            <Button onClick={() => navigate('/insurance-medication-mapping')}>Medication</Button>
            <Button onClick={() => navigate('/insurance-service-cost-mapping')}>Service Cost</Button>
            <Button>Services</Button>
          </HStack>
        </VStack>
        <Box
          w="100%"
          bgColor="white"
          p={3}
          h="89%"
        >
          <DataTable2 data={subrowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Insurance;
