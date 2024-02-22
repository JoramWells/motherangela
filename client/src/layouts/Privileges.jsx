import {
  Box, Button, HStack, VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DataTable2 from '../components/tables/DataTable';

const columns = [
  {
    Header: 'Privilege Name',
    accessor: 'privilegeName',
  },
];

const Privileges = () => {
  const navigate = useNavigate();

  const data = [];
  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  return (
    <VStack mt={10} w="full">

      <BreadCrumbNav link="/admin-add-department" />
      <Button onClick={() => navigate('/admin-group-privileges')}>Group Privileges</Button>
      <HStack
        mt={5}
        w="100%"
        justifyContent="flex-end"
        p={3}
      />
      <Box w="50%" border="1px" borderColor="gray.100" rounded="lg">
        <DataTable2 data={subrowData} columns={columns} />
      </Box>
    </VStack>
  );
};

export default Privileges;
