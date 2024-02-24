/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import {
  Badge,
  Box, Button, HStack, Spinner, Table, TableContainer, Tag, Tbody, Td, Text, Th, Thead, Tr, VStack,
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
  data, columns, searchQueryColumn, isTableHeight,
  hasPagination, hasSearch, isLoading,
  title,
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
      <HStack
        alignItems="center"
        pl={3}
        // pt={6}
        // pb={1}
        w="full"
      >
        <Text
          fontSize="18px"
          // fontWeight="600"
          color="gray.700"
          fontWeight="bold"
        >
          {title}
          {' '}
        </Text>
        <Tag
          rounded="full"
          colorScheme="orange"
        >
          <Text
            fontSize="14px"
            fontWeight="bold"
            // color="gray.500"
          >
            {data?.length}
          </Text>
        </Tag>
      </HStack>
      {hasSearch && (
      <TableSearchInput
        setColumFilters={setColumnFilters}
        columnFilters={columnFilters}
        searchQueryColumn={searchQueryColumn}
      />
      )}
      <TableContainer
        // h={isTableHeight && '700px'}
        maxH="650px"
        overflowY="auto"
        m={2}
        bgColor="white"
        w="full"
        border="1px"
        borderRadius="xl"
        borderColor="gray.100"
        position="relative"
      >
        <Table
          w="full"
        >
          {table.getHeaderGroups()
            .map((headerGroup) => (
              <Thead
                key={headerGroup.id}
                position="sticky"
                top={0}
                zIndex={1}
                h="45px"
                bgColor="gray.50"
              >
                {headerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    w={header.getSize()}
                    position="relative"
                    whiteSpace="break-spaces"

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

          {isLoading
            ? (

              <HStack
                p={4}
                alignItems="flex-start"
                justifyContent="center"
              >
                <Spinner />

                <Text
                  fontSize="14px"
                  color="gray.500"
                >
                  Fetching data. Please wait...
                </Text>
              </HStack>
            )

            : (
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
            )}
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
          position="sticky"
          bottom="0px"
          zIndex={1}
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
  title: PropTypes.string,
  isTableHeight: PropTypes.bool,
  hasPagination: PropTypes.bool,
  hasSearch: PropTypes.bool,
  isLoading: PropTypes.bool,
};

DataTable2.defaultProps = {
  data: [],
  columns: [],
  searchQueryColumn: 'first_name',
  title: 'Title',
  isTableHeight: true,
  hasPagination: true,
  isLoading: false,
  hasSearch: true,
};
