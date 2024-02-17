import { useMemo } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import TableSelectRow from './TableSelectRow';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import { useGetDiseaseMinistriesQuery } from '../../api/diseaseMinistry.api copy';

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
    accessorKey: 'ministry_disease_name',
    header: 'Diagnosis',
    cell: (props) => <Text>{props.getValue()}</Text>,
  },
];

const DiagnosisTab = () => {
  const { data } = useGetDiseaseMinistriesQuery();
  const finalData = useMemo(() => data, [data]);
  console.log(data, 'dieses');
  return (
    <>
      <HStack w="100%" p={2} justifyContent="space-between">
        <HStack w="1/2" flex={1}>
          <Text
            fontSize="xl"
            fontWeight="semibold"
            color="gray.700"
          >
            Selected Procedures

          </Text>

        </HStack>
        <HStack w="md" flex={1} justifyContent="space-between">
          <Text
            fontSize="xl"
            fontWeight="semibold"
            color="gray.700"
          >
            Recent Procedures

          </Text>
          <Text color="gray.500">
            View More
          </Text>
        </HStack>
      </HStack>
      <TableSelectRow
        data={finalData}
        column={column}
      />
    </>
  );
};

export default DiagnosisTab;
