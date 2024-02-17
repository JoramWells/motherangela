/* eslint-disable no-unused-vars */
import {
  Box, Button, HStack, VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import PrivilegeTable from '../../components/tables/PrivilegeTable';
import { getAllPrivileges } from '../../_reducers/privilegeSlice';

const columns = [
  {
    Header: 'Privilege Name',
    accessor: 'privilegeName',
  },
];

const ProcedureGroups = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { data } = useSelector((state) => state.privileges);
  // const subrowData = data
  //       && data.map((item) => ({
  //         ...item,
  //         subRows: [],
  //       }));

  // useEffect(() => {
  //   dispatch(getAllPrivileges());
  // }, []);
  return (
    <VStack mt="65px" w="full">

      <BreadCrumbNav link="/add-procedure-group" />
      <HStack
        mt={5}
        w="100%"
        justifyContent="flex-end"
        p={3}
      />
      <Box w="50%" border="1px" borderColor="gray.100" rounded="lg">
        {/* <PrivilegeTable data={subrowData} columns={columns} /> */}
      </Box>
    </VStack>
  );
};

export default ProcedureGroups;
