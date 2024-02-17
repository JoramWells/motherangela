import {
  Badge, FormControl, FormLabel, HStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { getAllSubItems } from '../../_reducers/subItemSlice';

const SubItemSelect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const subItemData = useSelector((state) => state.subItems.data);

  const subItemOptions = subItemData.map((item) => ({
    value: item.subItemName,
    label: item.subItemName,
  }));

  useEffect(() => {
    dispatch(getAllSubItems());
  }, [dispatch]);

  return (
    <FormControl mt={5}>
      <HStack>
        <FormLabel mt={1}>Sub Item of</FormLabel>
        <Badge
          colorScheme="green"
          onClick={() => navigate('/add-subitem')}
          _hover={{
            cursor: 'pointer',
          }}
        >
          Add new
        </Badge>
      </HStack>
      <Select options={subItemOptions} />
    </FormControl>
  );
};

export default SubItemSelect;
