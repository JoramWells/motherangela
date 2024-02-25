/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  useState, useMemo, useCallback,
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
  Divider,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack, useDisclosure,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import { FaTrashAlt } from 'react-icons/fa';

const TablePersonalAccountCharge = ({
  data, column,
  isOpen, onOpen, onClose,
}) => {
  const finalColumnDef = useMemo(() => column, [column]);
  const [tableData, setTableData] = useState('');
  //   const { isOpen, onOpen, onClose } = useDisclosure();

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

  const handleData = useCallback(
    () => tableInstance.getSelectedRowModel()
      .flatRows.forEach((el) => setTableData((prev) => [
        ...prev,
        {
          service_desc: el.original.procedure_name,
          amount: el.original.procedure_cost,
          date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
          time_of_charge: moment(new Date()).format('hh:mm:ss'),
          status: 1,
          patient_id: 'patientID',
          hospital_id: 18,
          quantity: 1,
          appointment_id: 'id',
        }])),

    // send to backend
    [tableInstance],
  );

  const procedureName = columnFilters.find((f) => f.id === 'procedure_name')?.value || '';

  //   console.log(tableInstance.getSelectedRowModel()
  //     .flatRows.forEach((el) => el.original), 'hjyu');

  const selectedData = tableInstance?.getSelectedRowModel()
    .flatRows.map((el) => el.original);

  const totalAmount = selectedData.length > 0
  && selectedData.reduce((sum, obj) => sum + parseInt(obj.amount, 10), 0);

  return (

    <HStack
      alignItems="flex-start"
      justifyContent="space-between"
      width="100%"
    >
      <TableContainer
        border="1px"
        borderColor="gray.200"
        rounded="lg"
        w="100%"
        bgColor="white"
      >

        <Table>
          <Thead
            bgColor="gray.50"
            p={4}
          >
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

                    {/* <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Text>hey</Text>
                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                          </Button>
                          <Button variant="ghost">Secondary Action</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal> */}

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
              size="sm"
            >
              Prev

            </Button>
            <Button
              onClick={() => tableInstance.nextPage()}
              isDisabled={!tableInstance.getCanNextPage()}
              size="sm"
            >
              Next

            </Button>

          </HStack>
        </HStack>
      </TableContainer>
      <VStack
        alignItems="flex-start"
        bgColor="white"
        height="250px"
        p={2}
        border="1px"
        rounded="lg"
        w="md"
        borderColor="gray.200"
        position="relative"

      >
        <HStack
          w="full"
          // bgColor="gray.100"
          p={1}
          rounded="lg"
          justify="space-between"
        >
          <Text
            fontSize="16px"
          >
            Payment Details
          </Text>

          <IconButton
            size="xs"
            // colorScheme="red"
            variant="ghost"
            // variant="subtle"
          >
            <FaTrashAlt />
          </IconButton>
        </HStack>
        <Divider />
        <HStack
          w="full"
          justify="space-between"
          p="5px"
        >
          <Text
            textTransform="uppercase"
            fontSize="14px"
            fontWeight="bold"
            // color={'gray.'}
          >
            Total:
          </Text>
          <Text
            fontSize="16px"
            fontWeight="bold"
          >
            KSH
            {' '}
            {totalAmount}
            {' '}
            /=
          </Text>
        </HStack>
        <Button
          w="95%"
          // size="sm"
          colorScheme="green"
          position="absolute"
          bottom="8px"
          left="8px"
          // right="0px"
          isDisabled={tableInstance
            .getSelectedRowModel().flatRows.length === 0}
          onClick={() => handleData()}
        >
          Complete Payment

        </Button>
      </VStack>
    </HStack>

  );
};

export default TablePersonalAccountCharge;
