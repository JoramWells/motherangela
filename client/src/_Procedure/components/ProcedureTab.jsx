/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */

import {
  Box, Button, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import { useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FaChevronCircleDown, FaEllipsisH } from 'react-icons/fa';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAppointmentDetailByIDQuery } from '../../api/appointments.api';
import { useGetUserPersonalAccountDetailQuery } from '../../api/personalAccountCharges.api';

const ProcedureTab = () => {
  const navigate = useNavigate();

  //   get patient_id from search params
  const [searchParams] = useSearchParams();
  const patientID = searchParams.get('patient_id');
  const { data } = useGetUserPersonalAccountDetailQuery(patientID);
  const columns = useMemo(
    () => [
      {
        header: 'Procedure',
        accessorKey: 'service_desc',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Charges',
        accessorKey: 'amount',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Status',
        accessorKey: 'appointment_status',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Action',
      },
    ],

    [],
  );

  const { id } = useParams();
  return (
    <VStack
      spacing="0"
    >
      <HStack
        w="full"
        justify="flex-end"
      >
        <Button
          size="sm"
          border="1px"
          borderColor="gray.500"
        //   rounded="full"
          backgroundColor="blue.50"
        //   color="blue.500"
          onClick={() => navigate({
            pathname: `/add-patient-procedure/${id}`,
            search: `?patient_id=${patientID}`,
          })}
        >
          New Procedure
        </Button>

      </HStack>

      <VStack
        w="100%"
      >
        <DataTable2
          columns={columns}
          data={data}
          hasSearch={false}
          isTableHeight={false}
        />
      </VStack>
    </VStack>
  );
};

export default ProcedureTab;
