/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable camelcase */
import {
  Box,
  Button, HStack,
  Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import PharmacyRequestsCard from './PharmacyRequestsCard';
import { useGetInternalPharmacyRequestQuery } from '../../_Pharmacy/api/internalPharmacyRequest.api';
import { useGetInternalLabRequestQuery } from '../../api/internalLabRequests.api';
// import LabRequestsCard from './LabRequestsCard';
import DataTable2 from '../../components/tables/DataTable';

const tabList = [
  { id: nanoid(), text: 'Radiology' },
  { id: nanoid(), text: 'Lab' },
  { id: nanoid(), text: 'Pharmacy' },
  { id: nanoid(), text: 'Physiotherapy' },

];

const InternalRequests = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const patient_id = searchParams.get('patient_id');

  const {
    data: pharmacyRequestData,
    isLoading: isPharmacyLoading,
  } = useGetInternalPharmacyRequestQuery(patient_id);
  const { data: labRequestData } = useGetInternalLabRequestQuery(patient_id);

  const columnsx = useMemo(() => [
    {
      header: 'Procedure Detail',
      accessorKey: 'procedure_detail',
      cell: (props) => (<Text>{props.getValue()?.procedure_name}</Text>),
    },
    {
      header: 'Quantity',
      accessorKey: 'quantity',
      cell: (props) => (<Text>{props.getValue()}</Text>),

    },
    {
      header: 'Results',
      accessorKey: 'results',
      cell: (props) => (<Text>{props.getValue()}</Text>),

    },
  ], []);

  const pharmacyColumns = useMemo(() => [
    {
      header: 'Procedure Detail',
      accessorKey: 'medication',
      cell: (props) => (
        <Text
          color="gray.800"
        >
          {props.getValue()?.medication_name}
        </Text>
      ),
    },
    {
      header: 'Quantity',
      accessorKey: 'quantity',
      cell: (props) => (<Text>{props.getValue()}</Text>),

    },
    {
      header: 'Prescription',
      accessorKey: 'prescription_term',
      cell: (props) => (<Text>{props.getValue()}</Text>),

    },
    {
      header: 'No. of Days',
      accessorKey: 'number_of_days',
      cell: (props) => (<Text>{props.getValue()}</Text>),

    },
  ], []);

  console.log(labRequestData);

  return (

    <Tabs
          // isFitted
      bgColor="white"
      variant="unstyled"
      alignItems="flex-start"
      justifyContent="center"
      border="1px"
      rounded="lg"
      borderColor="gray.200"
    >
      <TabList
        color="gray.500"
        p={3}
      >
        {tabList.map((item) => (
          <Tab
            key={item.id}
            fontWeight="semibold"
            rounded="full"
            bgColor="gray.50"
            h="34px"
              // mb={2}
            m={1}
            fontSize="sm"
            _selected={{
              // bgGradient: 'linear(to-r,blue.500, blue.400)',
              color: 'gray.50',
              // border: '2px',
              // borderColor: 'gray.500',
              // color: 'blue.500',
              bgColor: 'gray.700',
            }}
          >
            {item.text}

          </Tab>

        ))}

      </TabList>

      <TabPanels
        p={0}
      >

        <TabPanel>

          <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              color="gray.600"
              fontWeight="bold"
              fontSize="14px"
            >
              Radiology
            </Text>
            <Button
              leftIcon={<FaPlus />}
              variant="outline"
              colorScheme="blue"
              size="sm"
              onClick={() => navigate({
                pathname: `/add-radiology-request/${id}`,
                search: `?patient_id=${patient_id}`,
              })}
            >
              New

            </Button>
          </HStack>

        </TabPanel>

        <TabPanel>
          <VStack
            justifyContent="center"
            alignItems="center"
            w="full"
            position="relative"
          >
            <Button
              bgColor="white"
              position="absolute"
                // color="gray.700"
                // colorScheme="green"
              border="2px"
              borderColor="gray.700"
              rounded="full"
              top="-.5rem"
              right="10px"
              size="sm"
              onClick={() => navigate({
                pathname: `/add-lab-request/${id}`,
                search: `?patient_id=${patient_id}`,
              })}
            >
              New

            </Button>
            <DataTable2
              data={labRequestData}
              columns={columnsx}
              hasSearch={false}
              title="Lab Request History"
            />
          </VStack>
        </TabPanel>
        <TabPanel>
          {/* <Button
                  colorScheme="blue"
                  color="white"
                  border="2px"
                  borderColor="white"
                  _hover={{
                    bgColor: 'blue.500',
                  }}
                  leftIcon={<FaPlus />}
                  rounded="lg"
                  onClick={() => navigate({
                    pathname: `/add-pharmacy-request/${id}`,
                    search: `?patient_id=${data?.patient_id}`,
                  })}
                >
                  Add New

                </Button> */}

          <VStack
            justifyContent="center"
            alignItems="center"
            // spacing={0}
            position="relative"
          >

            <Button
              // variant="outline"
              bgColor="white"
              position="absolute"
              // color="gray.700"
              // colorScheme="green"
              border="2px"
              borderColor="gray.700"
              rounded="full"
              top="-.5rem"
              right="10px"
              size="sm"
              onClick={() => navigate({
                pathname: `/add-pharmacy-request/${id}`,
                search: `?patient_id=${patient_id}`,
              })}
            >
              New

            </Button>
            <DataTable2
              title="Pharmacy Requests History"
              hasSearch={false}
              columns={pharmacyColumns}
              data={pharmacyRequestData}
              isLoading={isPharmacyLoading}
            />
          </VStack>

          {/* pharmacy */}
        </TabPanel>

        {/* diagnosis */}
        <TabPanel>
          <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              color="gray.700"
              fontWeight="bold"
            >
              Physiotherapy
            </Text>
            <Button
              leftIcon={<FaPlus />}
              variant="outline"
              colorScheme="blue"
              size="sm"
              onClick={() => navigate({
                pathname: `/add-patient-procedure/${id}`,
                search: `?patient_id=${patient_id}`,
              })}
            >
              New

            </Button>
          </HStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default InternalRequests;
