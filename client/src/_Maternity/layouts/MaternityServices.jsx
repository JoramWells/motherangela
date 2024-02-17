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
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { getAllMaternityServices } from '../../_reducers/admMartenityServicesSlice';

const MaternityServices = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.maternityServices);
  console.log(data);

  const columns = useMemo(
    () => [
      {
        header: 'Admission ID',
        accessorKey: 'admission_id',
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
      // {
      //   header: 'Appointment ID',
      //   accessorKey: 'appointment_id',
      //   cell: (props) => <Text>{props.getValue()}</Text>,
      //   size: 200,

      // },
      {
        header: 'Delivery Date',
        accessorKey: 'date_of_delivery',
        cell: (props) => <Text>{moment(props.getValue()).format('LL')}</Text>,
        size: 200,

      },
      {
        header: 'Patient ID',
        accessorKey: 'patient_id',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Normal Delivery',
        accessorKey: 'normal_delivery',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Caesarean Section',
        accessorKey: 'caesarean_section',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Neonatal Death',
        accessorKey: 'neonatal_death',
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
    dispatch(getAllMaternityServices());
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

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Admissions Maternity
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subrowData.length}
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

export default MaternityServices;
