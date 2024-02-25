/* eslint-disable camelcase */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Button,
  Divider, FormControl, FormLabel, HStack, Input, Text, Textarea, VStack,
} from '@chakra-ui/react';
import moment from 'moment';
import { useMemo } from 'react';
import Select from 'react-select';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import DataTable2 from '../../../components/tables/DataTable';

const TreatmentTab = () => {
  const { id: appointment_id } = useParams();
  const [searchParams] = useSearchParams();
  const patient_id = searchParams.get('patient_id');
  const columns = useMemo(() => [
    {
      header: 'Procedure Detail',
      accessorKey: 'appointment_date',
      cell: (props) => (
        <Text>{moment(props.getValue()).format('LL')}</Text>
      ),

    },
    {
      header: 'Prescription',
      accessorKey: 'appointment_date',
      cell: (props) => (
        <Text>{moment(props.getValue()).format('LL')}</Text>
      ),

    },
    {
      header: 'No. of Days',
      accessorKey: 'appointment_date',
      cell: (props) => (
        <Text>{moment(props.getValue()).format('LL')}</Text>
      ),

    },
  ], []);
  const navigate = useNavigate();

  return (
    <VStack
      w="50%"
      // spacing={6}
      pr={4}
      position="relative"
    >
      <Button
        onClick={() => navigate({
          pathname: `/add-pharmacy-request/${appointment_id}`,
          search: `?patient_id=${patient_id}`,
        })}
        position="absolute"
        right={5}
        top={0}
        size="sm"
        border="2px"
        rounded="full"
        bgColor="white"
        // bgColor="black"
        // color="white"
      >
        Add
      </Button>
      <DataTable2
        title="Pharmacy Requests"
        columns={columns}
        data={[]}
        hasSearch={false}
      />

    </VStack>
  );
};

export default TreatmentTab;
