/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import {
  Box, Button, HStack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack,
} from '@chakra-ui/react';
import {
  flexRender, getCoreRowModel, getFilteredRowModel,
  getPaginationRowModel, getSortedRowModel, useReactTable,
} from '@tanstack/react-table';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { FaSort } from 'react-icons/fa';

const VitalSignsTable = ({ data, columns, searchQueryColumn }) => {
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: useMemo(() => getCoreRowModel(), []),
    getFilteredRowModel: useMemo(() => getFilteredRowModel(), []),
    getSortedRowModel: useMemo(() => getSortedRowModel(), []),
    getPaginationRowModel: useMemo(() => getPaginationRowModel(), []),
    columnResizeMode: 'onChange',
  });
  return (
    <TableContainer h="700px" overflowY="auto">
      <Table>
        {table.getHeaderGroups()
          .map((headerGroup) => (
            <Thead
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <Th
                  key={header.id}
                  w={header.getSize()}
                  position="relative"
                >
                  <HStack>
                    <Text fontSize="medium">
                      {header.column.columnDef.header}
                    </Text>
                    {header.column.getCanSort() && (
                    <FaSort onClick={
                          header.column.getToggleSortingHandler()
                        }
                    />
                    )}
                    <Text>
                      {header.column.getIsSorted()}

                    </Text>
                  </HStack>

                  <Box
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''
                    }`}
                  />
                </Th>
              ))}
            </Thead>
          ))}
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {
                      flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )
                    }
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>

    </TableContainer>
  );
};

export default VitalSignsTable;

VitalSignsTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  searchQueryColumn: PropTypes.string,
};

VitalSignsTable.defaultProps = {
  data: [],
  columns: [],
  searchQueryColumn: 'first_name',
};
