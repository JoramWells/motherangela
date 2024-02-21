/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Avatar,
  Box, Button, HStack, IconButton, SkeletonCircle, Text, VStack,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import { FaSyringe } from 'react-icons/fa';
import IndeterminateCheckbox from '../../_Doctor/components/IndeterminateCheckbox';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import TablePharmacyRequest from '../../_Pharmacy/components/TablePharmacyRequest';
import { useGetInternalLabRequestQuery } from '../../api/internalLabRequests.api';

const InternalLabRequestsDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetInternalLabRequestQuery(id);
  console.log(data);

  const columns = useMemo(() => [
    {
      id: 'select',
      header: ({ table }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }) => (
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      ),
    },
    {
      header: 'INVESTIGATION REQ.',
      accessorKey: 'procedure_detail',
      cell: (props) => (
        <Text>
          {props.getValue()?.procedure_name}
        </Text>
      ),
    },
    {
      header: 'Quantity',
      accessorKey: 'quantity',
      cell: (props) => <Text>{props.getValue()}</Text>,
    },
    {
      header: 'Urgent',
      accessorKey: 'urgent',
      cell: (props) => <Text>{props.getValue()}</Text>,
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: (props) => <Text>{props.getValue()}</Text>,
    },
    {
      header: 'Results',
      accessorKey: 'results',
      cell: (props) => <Text>{props.getValue()}</Text>,
    },
    {
      header: 'Action',
      cell: (props) => (
        <Button
          size="sm"
          colorScheme="blue"
          onClick={() => navigate({
            pathname: `/lab-request-sample/${id}`,
            search: `?procedure_id=${props.row.original.procedure_id}`,
          })}
          pl={1}
          leftIcon={(
            <IconButton
              size="xs"
              ml={0}
              bgColor="blue.400"
              _hover={{
                bgColor: 'blue.400',
              }}
            >
              <FaSyringe
                color="white"
              />
            </IconButton>
          )}
        >
          Collect
        </Button>
      ),
    },

  ], [navigate, id]);
  return (
    <VStack
      w="full"
      h="100vh"
      bgColor="gray.50"
      mt="65px"
      alignItems="center"
      p={3}
    >
      <HStack
        w="full"
        bgColor="white"
      >
        <BreadCrumbNav />
        {data ? (
          <Avatar
            name={`${data[0]?.patient?.first_name} ${data[0]?.patient?.middle_name}`}
            size="xs"
            h={7}
            w={7}
          // boxShadow="lg"
            color="white"
            fontWeight="bold"
            marginRight="15px"
          />
        )
          : <SkeletonCircle />}
      </HStack>

      <TablePharmacyRequest column={columns} data={data} />
    </VStack>
  );
};

export default InternalLabRequestsDetail;
