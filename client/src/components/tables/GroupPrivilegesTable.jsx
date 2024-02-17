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
  Tag,
  Avatar,
  Text,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { FaEllipsisH, FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useFilters, useSortBy, useTable } from 'react-table';
// import TableSearchInput from '../FormComponents/TableSearchInput';

const CustomCell = ({ value }) => (
  value === 'YES' ? <Tag variant="subtle" colorScheme="green" rounded="md" fontWeight="bold">{value}</Tag>
    : <Tag variant="subtle" colorScheme="red" rounded="md" fontWeight="bold">{value}</Tag>
);

// avatar
const UserNameAvatar = ({ fullName }) => (
  <HStack>
    <Avatar
      size="sm"
      name={fullName}
      color="white"
      boxShadow="md"
    />
    <Text>{fullName}</Text>
  </HStack>
);

const GroupPrivilegesTable = ({ columns, data }) => {
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
                <Th fontSize="sm" color="gray.500" key={nanoid()} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </Th>
              ))}
              <Th fontSize="sm" color="gray.500">Action</Th>
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()} fontSize="normal">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr fontSize="sm" key={nanoid()} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (cell.column.id !== 'fullName') {
                    return (
                      <Td fontSize="sm" key={nanoid()} {...cell.getCellProps()}>
                        <CustomCell value={cell.value} />
                      </Td>
                    );
                  }

                  if (cell.column.id === 'fullName') {
                    return (
                      <Td key={nanoid()} {...cell.getCellProps()}>
                        <UserNameAvatar fullName={cell.value} />
                      </Td>
                    );
                  }
                  return (
                    <Td
                      fontSize="normal"
                      key={nanoid()}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </Td>
                  );
                })}
                <Td>
                  <Tooltip
                    hasArrow
                    label={`View ${row.original.fullName} Details`}
                    fontSize="sm"
                  >
                    <VStack
                      _hover={{
                        cursor: 'pointer',
                      }}
                      onClick={() => navigate(`/admin-group-privileges-details/${row.original.id}`)}
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

export default GroupPrivilegesTable;
