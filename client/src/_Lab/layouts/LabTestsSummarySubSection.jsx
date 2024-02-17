/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, Tag, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllLabTestsSummarySubSectionQuery } from '../../api/labTestsSummarySubSection.api';

const LabTestsSummarySubSection = () => {
  const { data } = useGetAllLabTestsSummarySubSectionQuery();

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        header: 'Description',
        accessorKey: 'lab_tests_summary_sub_section_description',
        cell: (props) => <Text>{props.getValue()?.substring(0, 30)}</Text>,
        width: 50,

      },

      {
        header: 'Lab Section Summary',
        accessorKey: 'lab_tests_summary_section',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()?.lab_tests_summary_section_description}</Text>,

      },

      {
        header: 'Procedure',
        accessorKey: 'procedure_detail',
        cell: (props) => <Text>{props.getValue()?.procedure_name}</Text>,
        size: 200,

      },
      {
        header: 'Procedure Item',
        accessorKey: 'procedure_item',
        cell: (props) => <Text>{props.getValue()?.procedure_item_description}</Text>,

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
      mt="65px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-suppliers" />

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          // mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Lab Tests Summary
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

export default LabTestsSummarySubSection;
