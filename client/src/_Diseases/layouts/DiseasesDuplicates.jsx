/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaEdit, FaFileDownload, FaPrint, FaTrash,
} from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetDiseasesQuery } from '../../api/disease.api';
import { useGetAllDiseasesDuplicatesQuery } from '../../api/diseasesDuplicates.api';

const DiseasesDuplicates = () => {
  const navigate = useNavigate();

  const {
    data, isLoading,
  } = useGetAllDiseasesDuplicatesQuery();

  // const { data } = useSelector((state) => state.admission);

  const columns = useMemo(
    () => [
      {
        header: 'Disease Name',
        accessorKey: 'disease_name',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Updated',
        cell: (props) => <Text>{moment().format('ll')}</Text>,
      },
      {
        header: 'Action',
        cell: (props) => (
          <HStack>
            <IconButton
              size="sm"
            >
              <FaEdit
                color="gray"
                onClick={() => navigate({
                  pathname: '/register-items',
                  search: `?step=0&disease_id=${props.row.original.disease_duplicate_id}`,
                })}
              />
            </IconButton>
            <IconButton
              size="sm"
            >
              <FaTrash
                color="gray"
              />
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

  if (isLoading) return <div>loading..</div>;

  return (
    <VStack
      mt="50px"
      w="full"
      bgColor="gray.50"
      p={3}
    >
      <BreadCrumbNav link="/add-admission" />
      <DataTable2
        searchQueryColumn="pay_status"
        data={subRowData}
        columns={columns}
      />
    </VStack>
  );
};

export default DiseasesDuplicates;
