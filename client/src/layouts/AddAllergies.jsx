import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addDepartment } from '../_reducers/departmentSlice';

const AddAllergies = () => {
  const [departmentName, setDepartmentName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { loading } = useSelector((state) => state.departments);

  const inputValues = {
    departmentName,
  };

  return (
    <VStack
      w="full"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bgColor="gray.50"
    >
      <Box
        w="50%"
        mt={5}
        bgColor="white"
        p={5}
        rounded="lg"
        border="1px"
        borderColor="gray.200"
        boxShadow="sm"
      >
        <HStack w="full" justifyContent="space-between">
          <IconButton onClick={() => navigate('/admin-departments')}>
            <FaArrowLeft />
          </IconButton>
          <Text
            fontSize="xl"
            fontWeight="semibold"
            // color="gray.500"
          >
            Add Allergy
          </Text>
        </HStack>
        {/* sub item */}
        <FormControl mt={5}>
          <FormLabel fontSize="lg">Name</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>
        <HStack mt={5} w="full" justifyContent="end">
          <Button
            size="md"
            colorScheme="blue"
            onClick={() => dispatch(addDepartment(inputValues))}
          >
            Save
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddAllergies;
