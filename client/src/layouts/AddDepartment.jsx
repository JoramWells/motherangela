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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addDepartment } from '../_reducers/departmentSlice';

const AddDepartment = () => {
  const [departmentName, setDepartmentName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.departments);

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
        boxShadow="lg"
        p={5}
        rounded="lg"
      >
        <HStack w="full" justifyContent="space-between">
          <IconButton onClick={() => navigate('/admin-departments')}>
            <FaArrowLeft />
          </IconButton>
          <Text fontSize="xl" fontWeight="semibold" color="gray.500">
            Add Department
          </Text>
        </HStack>
        {/* sub item */}
        <FormControl mt={5}>
          <FormLabel fontSize="lg">Department Name</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Department Name"
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
            {loading ? 'loading...' : 'Save'}
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddDepartment;
