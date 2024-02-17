import {
  Badge,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from '@chakra-ui/react';
// import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
// import { getAllItemTypes } from "../../_reducers/itemTypeSlice";
import SubItemSelect from '../Selects/SubItemSelect';

const Step1 = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // fetchdata
  const itemTypeData = useSelector((state) => state.itemType.data);

  const options = itemTypeData.map((item) => ({
    value: item.itemTypeName,
    label: item.itemTypeName,
  }));

  // useEffect(() => {
  //   dispatch(getAllItemTypes());
  // }, [dispatch]);

  return (
    <Box>
      <FormControl mt={5}>
        <HStack
          w="full"
          justifyItems="center"
          alignContent="center"
          alignItems="center"
        >
          <FormLabel mt={1}>Item Type</FormLabel>
          <Badge
            _hover={{
              cursor: 'pointer',
              bgColor: 'gray.100',
            }}
            colorScheme="green"
            onClick={() => navigate('/add-item-type')}
          >
            Add Item Type
          </Badge>
        </HStack>
        <Select options={options} />
      </FormControl>

      {/* sub item */}
      <SubItemSelect />

      {/* category */}
      <FormControl mt={5}>
        <HStack>
          <FormLabel>Item Category</FormLabel>
          <Badge>Add New</Badge>
        </HStack>
        <Input placeholder="Select Item Category" />
      </FormControl>

      {/* item code */}
      <FormControl mt={5}>
        <FormLabel>Item Code</FormLabel>
        <Input placeholder="Enter Item code" />
      </FormControl>

      <FormControl mt={5}>
        <FormLabel>Item Description</FormLabel>
        <Input as="textarea" placeholder="Enter Sub Item of" />
      </FormControl>
    </Box>
  );
};

export default Step1;
