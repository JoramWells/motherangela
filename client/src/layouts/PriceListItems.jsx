import {
  Box, Button, HStack, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PriceListItemsTable from '../components/tables/PriceListItemsTable';
import { getAllPriceListItems } from '../_reducers/priceListItemsSlice';

const columns = [
  {
    Header: 'Item Code',
    accessor: 'item_code',
  },
  {
    Header: 'Item Description',
    accessor: 'item_description',
  },
  {
    Header: 'Item Category',
    accessor: 'item_category',
  },
  {
    Header: 'U.O.M',
    accessor: 'uom',
  },
  {
    Header: 'Buying Price',
    accessor: 'buying_price',
  },
  {
    Header: 'Selling Price',
    accessor: 'selling_price',
  },
  {
    Header: 'Expense Account',
    accessor: 'expense_account',
  },
  {
    Header: 'Income Account',
    accessor: 'income_account',
  },
];

const PriceListItems = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.priceListItems);

  const subrowData = data
    && data.map((item) => ({
      ...item,
      subRows: [],
    }));
  // const fetchData = useCallback(()=>{
  //   dispatch(getAllPriceLists())
  // },[dispatch])

  useEffect(() => {
    dispatch(getAllPriceListItems());
  }, [dispatch]);

  return (
    <VStack mt={10} w="full">
      <HStack mt={5} w="100%" justifyContent="flex-end">
        <Button leftIcon={<FaPrint />}>Print Report</Button>

        <Button leftIcon={<FaFileDownload />}>Download</Button>
      </HStack>
      <Box w="100%" border="1px" borderColor="gray.100" rounded="lg">
        <PriceListItemsTable data={subrowData} columns={columns} />
      </Box>
    </VStack>
  );
};

export default PriceListItems;
