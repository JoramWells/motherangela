/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaBoxOpen, FaFileDownload, FaPrint } from 'react-icons/fa';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAllALabsQuery } from '../api/alab.api';
import { useGetProceduresQuery } from '../api/procedureDetails.api';

const LabTestPrices = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetProceduresQuery();

  // const { data } = useSelector((state) => state.patients);
  // console.log(data);

  const columns = useMemo(
    () => [
      {
        header: 'Service Name',
        accessorKey: 'procedure_name',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Service Cost',
        accessorKey: 'procedure_cost',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Service Cost Corporate',
        accessorKey: 'procedure_cost_corporate',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Service Cost Insurance',
        accessorKey: 'procedure_cost_insurance',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Service Cost Foreigner',
        accessorKey: 'procedure_cost_foreigner',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
    ],

    [],
  );

  const filteredData = useCallback(() => data?.filter((item) => item.procedure_category?.category_name.toLowerCase().includes('lab tests' || 'lab procedures')), [data]);

  console.log(filteredData());

  return (
    <VStack
      mt="50px"
      w="full"
      bgColor="gray.50"
      p={3}
      position="relative"
    >
      <BreadCrumbNav link="/add-lab-test" />
      {data?.length === 0 ? (
        <VStack p={5}>

          <FaBoxOpen size="120" color="gray" />
          <Text fontSize="xl" fontWeight="semibold" color="gray.500">No Patients Today</Text>

        </VStack>
      )
        : (<DataTable2 data={filteredData() || []} columns={columns} />)}
    </VStack>
  );
};

export default LabTestPrices;
