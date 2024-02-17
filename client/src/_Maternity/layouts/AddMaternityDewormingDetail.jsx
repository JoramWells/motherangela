import {
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
import { addDepartment } from '../../_reducers/departmentSlice';

const AddMaternityDewormingDetail = () => {
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
      mt="50px"
    >
      <VStack
        w="50%"
        bgColor="white"
        p={5}
        rounded="lg"
        border="1px"
        borderColor="gray.200"
        boxShadow="sm"
        spacing={6}
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
            Add Deworming Details
          </Text>
        </HStack>
        {/* sub item */}
        <FormControl>
          <FormLabel fontSize="lg">Select Infant Age</FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Enter Drug Name</FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Enter Dosage</FormLabel>
          <Input
            size="lg"
            type="date"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Select Date</FormLabel>
          <Input
            size="lg"
            type="date"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <HStack w="full" justifyContent="end">
          <Button
            size="md"
            colorScheme="blue"
            onClick={() => dispatch(addDepartment(inputValues))}
          >
            Save
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AddMaternityDewormingDetail;
