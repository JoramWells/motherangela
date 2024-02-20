/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddMaternityDeliveryDetails = () => {
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
            Add Delivery Details
          </Text>
        </HStack>
        {/* sub item */}
        <FormControl>
          <FormLabel fontSize="lg">Duration of Pregnancy (Weeks)</FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Mode of Delivery</FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Date</FormLabel>
          <Input
            size="lg"
            type="date"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Condition of Mother</FormLabel>
          <Textarea
            size="lg"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        {/* Apgar Score */}
        <HStack>
          <FormControl>
            <FormLabel fontSize="lg">Apgar Score(1 min)</FormLabel>
            <Input
              size="lg"
              // placeholder="Enter Allergy Name"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
            />
          </FormControl>
          {' '}
          <FormControl>
            <FormLabel fontSize="lg">Apgar Score(5 min)</FormLabel>
            <Input
              size="lg"
              // placeholder="Enter Allergy Name"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
            />
          </FormControl>
          {' '}
          <FormControl>
            <FormLabel fontSize="lg">Apgar Score(10 min)</FormLabel>
            <Input
              size="lg"
              // placeholder="Enter Allergy Name"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
            />
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel fontSize="lg">Rescuscitation Done?</FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Drugs Administered at Delivery (MOTHER)</FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Drugs Administered at Delivery (INFANT)</FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Place of Delivery</FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="lg">Conducted By</FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Allergy Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <HStack w="full" justifyContent="end">
          <Button
            size="md"
            colorScheme="blue"
            // onClick={() => dispatch(addDepartment(inputValues))}
          >
            Save
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AddMaternityDeliveryDetails;
