import {
  Box, HStack, VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DrugTable from '../components/tables/DrugsTable';
import { getAllDrugs } from '../_reducers/drugsSlice';
import HeaderAction from '../components/HeaderAction';

const columns = [
  {
    Header: 'Drug Name',
    accessor: 'drugName',
  },
];

const Drugs = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.drugs);
  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  useEffect(() => {
    dispatch(getAllDrugs());
  }, [dispatch]);
  return (
    <VStack mt={10} w="full">

      <BreadCrumbNav link="/admin-add-department" />
      <HeaderAction subrowData={subrowData} />
      <HStack
        mt={5}
        w="100%"
        justifyContent="flex-end"
        p={3}
      />
      <Box w="50%" border="1px" borderColor="gray.100" rounded="lg">
        <DrugTable data={subrowData} columns={columns} />
      </Box>
    </VStack>
  );
};

export default Drugs;
