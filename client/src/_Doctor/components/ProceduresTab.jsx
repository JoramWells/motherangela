/* eslint-disable no-unused-vars */
// import { useMemo } from 'react';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useGetProceduresQuery } from '../../_Procedure/api/procedureDetails.api';
import TableSelectRow from './TableSelectRow';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import { useGetUserPersonalAccountDetailQuery } from '../../api/personalAccountCharges.api';

// const columnHelper = createColumnHelper();

const column = [
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
  // columnHelper.accessor('procedure_id', {
  //   header: '#Id',
  //   cell: (props) => <Text color="gray.500">{props.getValue()}</Text>,
  // }),
  {
    accessorFn: (row) => `${row?.procedure_name}`,
    header: 'Procedure Name',
  },
  {
    accessorKey: 'procedure_cost',
    header: 'Procedure Cost',
    cell: (props) => <Text>{parseInt(props.getValue(), 10).toLocaleString()}</Text>,
  },
];

const ProceduresTab = () => {
  const [searchParams] = useSearchParams();
  const patientID = searchParams.get('patient_id');
  const { data } = useGetUserPersonalAccountDetailQuery(patientID);
  console.log(data);
  return (
    <VStack
      w="full"
      p={2}
      justifyContent="center"
      alignItems="center"
    >
      {data?.map((item) => (
        <VStack
          key={nanoid()}
          alignItems="flex-start"
          bgColor="gray.100"
          p={1}
          rounded="lg"
          w="50%"
        >
          <Text>{item.service_desc}</Text>
          <Text>{item.amount }</Text>
        </VStack>
      ))}
    </VStack>
  );
};

export default ProceduresTab;
