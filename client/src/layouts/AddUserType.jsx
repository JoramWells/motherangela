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
import { addUserType } from '../_reducers/userTypeSlice';

const AddUserType = () => {
  const [userTypeName, setUserType] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.userType);

  const inputValues = {
    userTypeName,
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
            Add User Type
          </Text>
        </HStack>
        {/* sub item */}
        <FormControl mt={5}>
          <FormLabel fontSize="lg">User Type</FormLabel>
          <Input
            size="lg"
            placeholder="Enter User Type"
            value={userTypeName}
            onChange={(e) => setUserType(e.target.value)}
          />
        </FormControl>
        <HStack mt={5} w="full" justifyContent="end">
          <Button
            size="md"
            colorScheme="blue"
            onClick={() => dispatch(addUserType(inputValues))}
          >
            {loading ? 'loading...' : 'Save'}
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddUserType;
