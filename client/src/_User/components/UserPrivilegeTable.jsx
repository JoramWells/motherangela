/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  useState,
} from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  // createColumnHelper,
  getFilteredRowModel,
} from '@tanstack/react-table';
import {
  Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr,
} from '@chakra-ui/react';
import { useGetAllUserPrivilegeDetailsQuery } from '../../api/userPrivilegeDetail.api';
import IntermediateCheckbox from '../../components/tables/IntermediateCheckbox';

// const columnHelper = createColumnHelper();

const columnDefWithCheckBox = [
  {
    id: 'select',
    header: ({ table }) => (
      <IntermediateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IntermediateCheckbox
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
    accessorFn: (row) => `${row?.privilege_name}`,
    header: 'Privilege Name',
  },
];

const UserPrivilegeTable = () => {
  const finalColumnDef = columnDefWithCheckBox;

  const [rowSelection, setRowSelection] = useState({});

  const { data: privilegeData, isLoading } = useGetAllUserPrivilegeDetailsQuery();
  console.log(privilegeData, 'dtf');

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: privilegeData || [],
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  //   console.log("test", tableInstance.getHeaderGroups());

  return (
    <TableContainer
      w="50%"
      border="1px"
      borderColor="gray.200"
      rounded="lg"
    >

      {isLoading ? <Text>Fetching data..</Text>
        : (
          <Table>
            <Thead>
              {tableInstance.getHeaderGroups().map((headerEl) => (
                <Tr key={headerEl.id}>
                  {headerEl.headers.map((columnEl) => (
                    <Th key={columnEl.id} colSpan={columnEl.colSpan}>
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                          columnEl.column.columnDef.header,
                          columnEl.getContext(),
                        )}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {tableInstance.getRowModel().rows.map((rowEl) => (
                <Tr key={rowEl.id}>
                  {rowEl.getVisibleCells().map((cellEl) => (
                    <Td key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext(),
                      )}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      <hr />
      <div>
        <ul>
          {tableInstance.getSelectedRowModel()
            .flatRows.map((el) => <li key={el.id}>{el.original.procedure_name}</li>)}
        </ul>
      </div>
    </TableContainer>
  );
};

export default UserPrivilegeTable;
