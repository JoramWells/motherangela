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
import TableSearchInput from '../TableSearchInput';

const DataTable2 = ({
  data, columns, searchQueryColumn, isTableHeight, hasPagination, hasSearch,
}) => {
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
    <>
      {hasSearch && (
      <TableSearchInput
        setColumFilters={setColumnFilters}
        columnFilters={columnFilters}
        searchQueryColumn={searchQueryColumn}
      />
      )}
      <TableContainer
        h={isTableHeight && '700px'}
        overflowY="auto"
        w="98%"
        mt={0}
        bgColor="white"
      >
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
                    whiteSpace="break-spaces"
                    bgColor="gray.50"
                  >
                    <HStack>
                      <Text fontSize="12px">
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
                  <Td
                    key={cell.id}
                    fontSize="14px"
                  >
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

        {/* enable/disable pagination */}
        {hasPagination && (
        <HStack
          justifyContent="space-between"
          // bgColor="gray.50"
          w="full"
          mt={2}
          p={2}
          rounded="lg"
          fontWeight="semibold"
          color="gray.600"
          // border="1px"
          // borderColor="gray.200"
          // boxShadow="lg"
          bgColor="white"
        >
          <HStack fontSize="12px">
            <Text>
              Page
              {' '}
              {table.getState().pagination.pageIndex + 1}
            </Text>
            <Text>
              of
              {' '}
              {table.getPageCount()}

            </Text>
          </HStack>
          <HStack>
            <Button
              onClick={() => table.previousPage()}
              isDisabled={!table.getCanPreviousPage()}
              size="sm"
            >
              Prev

            </Button>
            <Button
              onClick={() => table.nextPage()}
              isDisabled={!table.getCanNextPage()}
              size="sm"
            >
              Next

            </Button>

          </HStack>
        </HStack>
        )}

      </TableContainer>
    </>
  );
};

export default DataTable2;

DataTable2.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  searchQueryColumn: PropTypes.string,
  isTableHeight: PropTypes.bool,
  hasPagination: PropTypes.bool,
  hasSearch: PropTypes.bool,
};

DataTable2.defaultProps = {
  data: [],
  columns: [],
  searchQueryColumn: 'first_name',
  isTableHeight: true,
  hasPagination: true,
  hasSearch: true,
};
