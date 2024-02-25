/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Avatar,
  Box, Button, HStack, IconButton, Tag, TagLeftIcon, Text, VStack, useDisclosure,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import {
  FaArrowRight, FaCheck, FaEdit, FaTrashAlt,
} from 'react-icons/fa';
import IndeterminateCheckbox from '../../_Doctor/components/IndeterminateCheckbox';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import TablePharmacyRequest from '../../_Pharmacy/components/TablePharmacyRequest';
import { useGetInternalLabRequestQuery } from '../../api/internalLabRequests.api';
import { useGetUserPersonalAccountDetailQuery } from '../../api/personalAccountCharges.api';
import TablePersonalAccountCharge from '../components/TablePersonalAccountCharge';

const PersonalAccountChargeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetUserPersonalAccountDetailQuery(id);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      header: 'Service',
      accessorKey: 'service_desc',
      cell: (props) => (
        <Text>
          {props.getValue()}
        </Text>
      ),
    },
    {
      header: 'PAY STATUS',
      accessorKey: 'status',
      cell: (props) => (
        <>
          {
          props.getValue() === 0
            ? (
              <Tag
                colorScheme="red"
                size="sm"
                rounded="full"
              >
                UNPAID
              </Tag>
            )
            : (
              <Tag
                colorScheme="green"
                size="sm"
                rounded="full"
              >
                <TagLeftIcon as={FaCheck} />
                PAID
              </Tag>
            )
      }
        </>
      ),
    },
    // {
    //   header: 'Quantity',
    //   accessorKey: 'quantity',
    //   cell: (props) => <Text>{props.getValue() === 0 ? 1 : props.getValue()}</Text>,
    // },
    {
      header: 'Cost',
      accessorKey: 'amount',
      cell: (props) => <Text>{props.getValue()}</Text>,
    },
    {
      header: 'Total',
      //   accessorKey: 'cost',
      cell: (props) => (
        <Text>
          {props.row.original.quantity * (props.row.original.amount === 0
            ? 1 : props.row.original.amount)}
        </Text>
      ),
    },
    {
      header: 'ACTION',
      cell: (props) => (
        <HStack>
          <IconButton
            onClick={onOpen}
            size="sm"
            // bgColor="blue.50"
            // _hover={{
            //   bgColor: 'blue.100',
            // }}
          >
            <FaEdit
              color="gray"
            />
          </IconButton>

          {/*  */}
          <IconButton
            onClick={onOpen}
            size="sm"
            // bgColor="red.50"
            // _hover={{
            //   bgColor: 'red.100',
            // }}
          >
            <FaTrashAlt
              color="gray"
            />
          </IconButton>
        </HStack>
      ),
    },

  ], [onOpen]);
  return (
    <VStack
      w="full"
      h="100vh"
      bgColor="gray.50"
      mt="50px"
      alignItems="center"
      p={3}
    >

      <HStack
        w="full"
      >
        <BreadCrumbNav
          addBtn={false}
        />
        {data
        && (
        <Avatar
          name={`${data[0]?.patient?.first_name} ${data[0]?.patient?.middle_name}`}
          size="sm"
          color="white"
          fontWeight="bold"
        />
        )}
      </HStack>

      <TablePersonalAccountCharge
        column={columns}
        data={data}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />

    </VStack>
  );
};

export default PersonalAccountChargeDetail;
