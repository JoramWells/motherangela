/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Button, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaBoxOpen, FaEdit, FaTrash } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetProcedureItemsQuery } from '../../api/procedureItem.api';

const LabTemplates = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetProcedureItemsQuery();

  // const { data } = useSelector((state) => state.patients);
  // console.log(data);

  const columns = useMemo(
    () => [
      {
        header: 'Lab Sub-Test',
        accessorKey: 'procedure_item_description',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Lab Test',
        accessorKey: 'procedure_detail',
        cell: (props) => <Text>{props.getValue()?.procedure_name}</Text>,

      },
      {
        header: 'Normal Values',
        accessorKey: 'normal_values',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Updated',
        accessorKey: 'updated_at',
        cell: (props) => <Text>{moment(props.getValue()).format('ll')}</Text>,

      },
      {
        header: 'Action',
        cell: (props) => (
          <HStack>
            <IconButton
              size="sm"
              color="gray"
              onClick={() => navigate(`/add-lab-test/${props.row.original.procedure_item_id}`)}
            >
              <FaEdit />
            </IconButton>
            <IconButton size="sm" color="gray">
              <FaTrash />
            </IconButton>
          </HStack>

        ),
      },
    ],

    [],
  );

  const subRowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  console.log(data);

  return (
    <VStack
      mt="50px"
      w="full"
      bgColor="gray.50"
      p={3}
      position="relative"
    >
      <BreadCrumbNav link="/add-lab-test" />
      {subRowData?.length === 0 ? (
        <VStack p={5}>

          <FaBoxOpen size="120" color="gray" />
          <Text fontSize="xl" fontWeight="semibold" color="gray.500">No Patients Today</Text>

        </VStack>
      )
        : (<DataTable2 data={subRowData} columns={columns} />)}
    </VStack>
  );
};

export default LabTemplates;
