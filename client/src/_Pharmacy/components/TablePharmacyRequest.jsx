/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  useState, useMemo,
} from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import {
  Button,
  HStack,
  Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack,
} from '@chakra-ui/react';

const TablePharmacyRequest = ({ data, column }) => {
  const finalColumnDef = useMemo(() => column, [column]);

  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumFilters] = useState([]);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: data || [],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      rowSelection,
      columnFilters,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  const onFilterChange = (id, value) => setColumFilters(
    (prev) => prev.filter((f) => f.id !== id).concat({
      id, value,
    }),
  );
  const procedureName = columnFilters.find((f) => f.id === 'procedure_name')?.value || '';

  return (

    <TableContainer
      border="1px"
      borderColor="gray.200"
      rounded="lg"
      w="100%"
      bgColor="white"
    //   w="1/2"
    //   flex={1}
    >

      <Table>
        <Thead>
          {tableInstance.getHeaderGroups().map((headerEl) => (
            <Tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => (
                <Th
                  fontSize="14px"
                  key={columnEl.id}
                  colSpan={columnEl.colSpan}
                  whiteSpace="normal"
                >
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
                <Td
                  key={cellEl.id}
                  fontSize="14px"
                >
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
      <HStack
        justifyContent="space-between"
                        // bgColor="gray.50"
        w="full"
        mt={2}
        p={2}
        rounded="lg"
        fontWeight="semibold"
        color="gray.600"
        border="1px"
        borderColor="gray.200"
        boxShadow="lg"
      >
        <HStack>
          <Text>
            Page
            {' '}
            {tableInstance.getState().pagination.pageIndex + 1}
          </Text>
          <Text>
            of
            {' '}
            {tableInstance.getPageCount()}

          </Text>
        </HStack>
        <HStack>
          <Button
            onClick={() => tableInstance.previousPage()}
            isDisabled={!tableInstance.getCanPreviousPage()}
          >
            Prev

          </Button>
          <Button
            onClick={() => tableInstance.nextPage()}
            isDisabled={!tableInstance.getCanNextPage()}
          >
            Next

          </Button>

        </HStack>
      </HStack>
    </TableContainer>

  );
};

export default TablePharmacyRequest;
