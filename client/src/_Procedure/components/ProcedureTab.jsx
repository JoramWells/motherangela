/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */

import {
  Button,
  Text, VStack,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import DataTable2 from '../../components/tables/DataTable';
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
        cell: (props) => (
          <Text
            color="gray.700"
            fontWeight="bold"
          >
            {props.getValue()}
          </Text>
        ),
      },
      {
        header: 'Charges',
        accessorKey: 'amount',
        cell: (props) => (
          <Text
            fontWeight="bold"
          >
            {parseInt(props.getValue(), 10).toLocaleString()}
          </Text>
        ),
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
      bgColor="white"
      position="relative"
      rounded="lg"
      p={3}
    >

      <Button
        size="sm"
        border="1px"
        borderColor="gray.500"
        //   rounded="full"
        backgroundColor="blue.600"
        color="white"
        position="absolute"
        top={3}
        right={5}
        //   color="blue.500"
        leftIcon={<FaPlus />}
        onClick={() => navigate({
          pathname: `/add-patient-procedure/${id}`,
          search: `?patient_id=${patientID}`,
        })}
        _hover={{
          bgColor: 'blue.500',
        }}
      >
        New
      </Button>

      <DataTable2
        columns={columns}
        data={data}
        title="Procedure History"
        hasSearch={false}
        isTableHeight={false}
      />
    </VStack>
  );
};

export default ProcedureTab;
