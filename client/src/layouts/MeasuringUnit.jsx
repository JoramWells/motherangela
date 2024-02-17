/* eslint-disable no-unused-vars */
import {
  Box, Button, HStack, VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../components/BreadCrumbNav';
import PrivilegeTable from '../components/tables/PrivilegeTable';
import { getAllMeasuringUnit } from '../_reducers/measuringUnitSlice';

const columns = [
  {
    Header: 'Measuring Unit',
    accessor: 'measuringUnitName',
  },
];

const MeasuringUnit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.measuringUnit);
  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  useEffect(() => {
    dispatch(getAllMeasuringUnit());
  }, [dispatch]);
  return (
    <VStack mt={10} w="full">

      <BreadCrumbNav link="/add-measuring-unit" />
      <HStack
        mt={5}
        w="100%"
        justifyContent="flex-end"
        p={3}
      />
      <Box w="50%" border="1px" borderColor="gray.100" rounded="lg">
        <PrivilegeTable data={subrowData} columns={columns} />
      </Box>
    </VStack>
  );
};

export default MeasuringUnit;
