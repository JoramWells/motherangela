/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Button, HStack, IconButton, Input,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaDownload, FaFilter, FaPrint } from 'react-icons/fa';
// import TableSearchFilter from './Tables/TableSearchFilter';

const TableSearchInput = ({ columnFilters, setColumFilters, searchQueryColumn }) => {
  const patientName = columnFilters.find((f) => f.id === 'patient_detail')?.value || '';

  const onFilterChange = (id, value) => setColumFilters(
    (prev) => prev.filter((f) => f.id !== id).concat({
      id, value,
    }),
  );

  return (
    <HStack
      w="full"
      p={2}
      m="auto"
      justifyContent="space-between"
    >
      <HStack
        w="35%"
        // bgColor="red"
      >
        <Input
          placeholder="Search..."
          onChange={(e) => onFilterChange('patient_detail', e.target.value)}
          backgroundColor="gray.50"
          border="1px"
          // w="25%"
          borderColor="gray.200"
          rounded="md"
          // _active={{
          //   boxShadow: 'lg',
          // }}
          // _selected={{
          //   boxShadow: 'md',
          //   borderColor: 'gray.100',
          //   backgroundColor: 'white',
          // }}
          // _focus={{
          //   boxShadow: 'md',
          //   borderColor: 'gray.100',
          //   backgroundColor: 'white',
          // }}
          // size="lg"
          value={patientName}
        />

        <IconButton>
          <FaFilter color="gray" />

        </IconButton>

      </HStack>
      {/* <TableSearchFilter
        columnFilters={columnFilters}
        setColumFilters={setColumFilters}
      /> */}
      <HStack>
        <Button
          size="sm"
          color="gray.500"
          leftIcon={<FaPrint />}
        >
          Print
        </Button>
        <Button
          size="sm"
          color="gray.500"
          leftIcon={<FaDownload />}
        >
          Download
        </Button>
      </HStack>
    </HStack>
  );
};

export default TableSearchInput;

// TableSearchInput.propTypes = {
//   setFilter: PropTypes.func,
//   searchText: PropTypes.string,
// };

// TableSearchInput.defaultProps = {
//   setFilter: () => {},
//   searchText: '',
// };
