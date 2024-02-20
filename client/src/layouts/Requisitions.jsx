import {
  Box, HStack, VStack,
} from '@chakra-ui/react';
import DepartmentTable from '../components/tables/DepartmentTable';
// import { getAllDepartments } from '../_reducers/departmentSlice';
import BreadCrumbNav from '../components/BreadCrumbNav';
import HeaderAction from '../components/HeaderAction';

const columns = [
  {
    Header: 'Department Name',
    accessor: 'departmentName',
  },
];

const Requisitions = () => {
  // const { data } = useSelector((state) => state.departments);
  const data = [];
  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  return (
    <VStack mt={10} w="full">

      <BreadCrumbNav link="/add-requisitions" />
      <HeaderAction text="Requisitions" subrowData={subrowData} />
      <HStack
        mt={5}
        w="100%"
        justifyContent="flex-end"
        p={3}
      />
      <Box w="50%" border="1px" borderColor="gray.100" rounded="lg">
        <DepartmentTable data={subrowData} columns={columns} />
      </Box>
    </VStack>
  );
};

export default Requisitions;
