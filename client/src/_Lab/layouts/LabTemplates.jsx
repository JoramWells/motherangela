/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaBoxOpen, FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllALabsQuery } from '../api/alab.api';

const LabTemplates = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAllALabsQuery();

  // const { data } = useSelector((state) => state.patients);
  // console.log(data);

  const columns = useMemo(
    () => [
      {
        header: 'Lab Test',
        accessorKey: 'a_lab_description',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
    ],

    [],
  );

  const subRowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  const filteredData = subRowData?.filter((item) => {
    const itemDate = moment(item.appointment_date);
    const todayDate = moment(new Date()).format('YYYY-MM-DD');
    return itemDate.isSame(todayDate, 'day');
  });

  return (
    <VStack
      mt="60px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <BreadCrumbNav link="/add-lab-test" />

      <HStack
        w="100%"
        justifyContent="space-between"
        bgColor="white"
        p={3}
        rounded="lg"
        mt={2}
      >
        <Text fontSize="xl" fontWeight="bold">
          Lab Tests
          <span style={{
            fontSize: '18px',
            // fontWeight: 'normal',
            color: 'gray',
          }}
          >
            {' '}
            (
            {filteredData?.length}
            )

          </span>
        </Text>
        <HStack>
          <Button leftIcon={<FaPrint />}>Print Report</Button>

          <Button leftIcon={<FaFileDownload />}>Download</Button>

        </HStack>
      </HStack>
      {filteredData?.length === 0 ? (
        <VStack p={5}>

          <FaBoxOpen size="120" color="gray" />
          <Text fontSize="xl" fontWeight="semibold" color="gray.500">No Patients Today</Text>

        </VStack>
      )
        : (
          <VStack
            w="45%"
            p={3}
            bgColor="white"
            // h="89%"
          >
            <DataTable2 data={filteredData} columns={columns} />
          </VStack>
        )}
    </VStack>
  );
};

export default LabTemplates;
