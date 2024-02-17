/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { getAllSuppliers } from '../../_reducers/supplierSlice';
import SupplierStatusCell from '../../components/SupplierStatusCell';
import { useGetSupplierQuery } from '../../api/suppliers.api';

const Suppliers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useGetSupplierQuery();

  const columns = useMemo(
    () => [
      {
        header: 'Supplier Name',
        accessorKey: 'supplier_name',
        cell: (props) => (
          <Box
            h="full"
            color="blue.500"
            _hover={{
              cursor: 'pointer',
              color: 'gray.500',
              textDecoration: 'underline',
            }}
            onClick={() => navigate(`/supplier-detail/${props.row.original.id}`)}
          >
            <Text>{props.getValue()}</Text>
          </Box>
        ),

      },
      {
        header: 'Mobile No.',
        accessorKey: 'supplier_phone',
        cell: (props) => <Text>{props.getValue()}</Text>,
        size: 200,

      },
      {
        header: 'Supplier Address',
        accessorKey: 'supplier_address',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
    ],

    [navigate],
  );

  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));
    // const fetchData = useCallback(()=>{
    //   dispatch(getAllPriceLists())
    // },[dispatch])

  useEffect(() => {
    dispatch(getAllSuppliers());
  }, [dispatch]);

  return (
    <VStack
      mt={5}
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-suppliers" />
        <HStack p={3}>
          <Button
            colorScheme="purple"
            variant="outline"
            rounded="full"
            onClick={() => navigate('/supplier-classification')}
          >
            Supplier Classification

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
            Suppliers
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subrowData?.length}
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
          h="89%"
        >
          <DataTable2 data={subrowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Suppliers;
