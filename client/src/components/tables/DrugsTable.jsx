/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import {
  Box,
  HStack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tooltip,
  Input,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { FaEllipsisH, FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useFilters, useSortBy, useTable } from 'react-table';
// import TableSearchInput from '../FormComponents/TableSearchInput';

const DrugTable = ({ columns, data }) => {
  const navigate = useNavigate();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy,
  );

  return (
    <Box overflowX="auto">
      <HStack w="98%" p={2} m="auto">
        <Input
          placeholder="Enter to search name"
          onChange={(e) => setFilter('service_name', e.target.value)}
          backgroundColor="gray.50"
          border="0"
          // borderColor="gray.100"
          rounded="lg"
          // _active={{
          //   boxShadow: 'lg',
          // }}
          _selected={{
            boxShadow: 'md',
            borderColor: 'gray.100',
            backgroundColor: 'white',
          }}
          _focus={{
            boxShadow: 'md',
            borderColor: 'gray.100',
            backgroundColor: 'white',
          }}
        />
        <IconButton>
          <FaFilter />
        </IconButton>
      </HStack>

      <Table {...getTableProps()}>
        <Thead fontSize="xl">
          {headerGroups.map((headerGroup) => (
            <Tr
              fontSize="xl"
              key={nanoid()}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <Th fontSize="sm" key={nanoid()} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </Th>
              ))}
              <Th fontSize="sm">Action</Th>
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()} fontSize="normal">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr fontSize="sm" key={nanoid()} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td
                    fontSize="normal"
                    key={nanoid()}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </Td>
                ))}
                <Td>
                  <Tooltip
                    hasArrow
                    label={`View ${row.original.departmentName} Details`}
                    fontSize="sm"
                  >
                    <VStack
                      _hover={{
                        cursor: 'pointer',
                      }}
                      onClick={() => navigate(`/department-detail/${row.original.id}`)}
                      w="20px"
                      justifyContent="center"
                      alignItems="center"

                    >
                      <FaEllipsisH style={{ margin: 0, color: 'gray' }} />
                    </VStack>
                  </Tooltip>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DrugTable;
