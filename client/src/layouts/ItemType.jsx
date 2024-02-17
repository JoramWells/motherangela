/* eslint-disable no-unused-vars */
import {
  Box, Button, HStack, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
// import { useEffect } from "react"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import PriceListTable from '../components/tables/PriceListTable';
// import { getAllItemTypes } from "../_reducers/itemTypeSlice"

const columns = [
  {
    Header: 'Sub Item Name',
    accessor: 'itemTypeName',
  },
];

const ItemType = () => {
  // const dispatch = useDispatch()

  const { data } = useSelector((state) => state.itemType);

  const subrowData = data && data.map((item) => ({
    ...item,
    subRows: [],
  }));
  // const fetchData = useCallback(()=>{
  //   dispatch(getAllPriceLists())
  // },[dispatch])

  // useEffect(()=>{
  //       dispatch(getAllItemTypes());
  // },[dispatch])
  console.log(subrowData, 'hhrt');
  return (
    <VStack
      mt={10}
      w="full"
    >
      <HStack
        mt={5}
        w="100%"
        justifyContent="flex-end"

      >
        <Button leftIcon={<FaPrint />}>
          Print Report

        </Button>

        <Button leftIcon={<FaFileDownload />}>Download</Button>

      </HStack>
      <Box
        w="100%"
        border="1px"
        borderColor="gray.100"
        rounded="lg"
      >
        <PriceListTable data={subrowData} columns={columns} />
      </Box>
    </VStack>
  );
};

export default ItemType;
