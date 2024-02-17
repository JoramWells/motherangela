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
import { addProcedureGroup } from '../../_reducers/procedureGroupSlice';

const AddProcedureGroup = () => {
  const [procedureGroupName, setProcedureGroupName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.procedureGroup);

  const inputValues = {
    procedureGroupName,
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
          <IconButton onClick={() => navigate('/procedure-groups')}>
            <FaArrowLeft />
          </IconButton>
          <Text fontSize="2xl" fontWeight="bold">
            Procedure Group
          </Text>
        </HStack>
        {/* sub item */}
        <FormControl mt={5}>
          <FormLabel fontSize="xl">Procedure Name</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Procedure Name"
            value={procedureGroupName}
            onChange={(e) => setProcedureGroupName(e.target.value)}
          />
        </FormControl>
        <HStack mt={5} w="full" justifyContent="end">
          <Button
            size="lg"
            colorScheme="blue"
            onClick={() => dispatch(addProcedureGroup(inputValues))}
          >
            {loading ? 'loading...' : 'Save'}
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddProcedureGroup;
