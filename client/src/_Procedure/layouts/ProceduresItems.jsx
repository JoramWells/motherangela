/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetProcedureItemsQuery } from '../../api/procedureItem.api';

const ProceduresItems = () => {
  const navigate = useNavigate();

  const { data } = useGetProcedureItemsQuery();

  const columns = useMemo(
    () => [
      {
        header: 'Item Description',
        accessorKey: 'procedure_item_description',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Normal Values',
        accessorKey: 'normal_values',
        cell: (props) => <Text>{props.getValue()}</Text>,
        size: 200,

      },
      {
        header: 'Show Normal Values',
        accessorKey: 'show_normal_values',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Show Flag',
        accessorKey: 'show_flag',
        enableSorting: false,
        cell: (props) => <Text whiteSpace="nowrap">{props.getValue()}</Text>,

      },
    ],

    [],
  );

  const subRowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  return (
    <VStack
      mt="55px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-procedures" />
        <HStack p={3} w="full">
          <Button
            rounded="full"
            colorScheme="purple"
            variant="outline"
            onClick={() => navigate('/procedure-groups')}
          >
            Group Procedures

          </Button>
        </HStack>
        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Procedures
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subRowData?.length}
              )

            </span>
          </Text>
          <HStack>
            <Button leftIcon={<FaPrint />}>Print Report</Button>

            <Button leftIcon={<FaFileDownload />}>Download</Button>

          </HStack>
        </HStack>
        <Box
          w="100%"
          bgColor="white"
          p={3}
          h="89%"
        >
          <DataTable2 data={subRowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default ProceduresItems;
