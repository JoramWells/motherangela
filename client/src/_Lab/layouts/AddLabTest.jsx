/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Divider,
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
import Select from 'react-select';
import { useGetAllALabsQuery } from '../api/alab.api';
import { selectStyles } from '../../utils/styles';
import BreadCrumbNav from '../../components/BreadCrumbNav';

const AddLabTest = () => {
  const [departmentName, setDepartmentName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputValues = {
    departmentName,
  };

  const { data } = useGetAllALabsQuery();
  const labTestOptions = data?.map((item) => ({
    value: item.a_lab_id, label: item.a_lab_description,
  }));

  return (
    <VStack
      w="full"
      h="100vh"
      alignItems="center"
      bgColor="gray.50"
      mt="65px"
      p={4}
    >
      <BreadCrumbNav />
      <Box
        w="50%"
        mt={3}
        bgColor="white"
        // boxShadow="lg"
        border="1px"
        borderColor="gray.200"
        p={5}
        rounded="lg"
      >
        <HStack
          w="full"
          justifyContent="space-between"
          mb={5}
        >
          <Text
            fontSize="xl"
            fontWeight="semibold"
            color="gray.700"
          >
            New Lab Test
          </Text>
        </HStack>

        <Divider mb={5} />

        {/* select */}
        <FormControl>
          <FormLabel>
            Select Lab Test
          </FormLabel>
          <Select
            styles={selectStyles}
            options={labTestOptions}
          />
        </FormControl>
        {/* sub item */}
        <FormControl mt={5}>
          <FormLabel fontSize="lg">Sub-Test Description</FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Department Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>
        {/* sub-test */}
        <FormControl mt={5}>
          <FormLabel fontSize="lg">Normal Values</FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Department Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <FormControl mt={5}>
          <FormLabel fontSize="lg">
            Normal Values
            {' '}
            <span style={{
              color: 'gray',
            }}
            >
              (Start Values)

            </span>
          </FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Department Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        {/* end value */}
        <FormControl mt={5}>
          <FormLabel fontSize="lg">
            Normal Values
            {' '}
            <span style={{
              color: 'gray',
            }}
            >
              (End Values)

            </span>
          </FormLabel>
          <Input
            size="lg"
            // placeholder="Enter Department Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <HStack mt={5} w="full" justifyContent="end">
          <Button>
            Cancel
          </Button>
          <Button
            size="md"
            colorScheme="blue"
            // onClick={() => dispatch(addDepartment(inputValues))}
          >
            Save
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddLabTest;
