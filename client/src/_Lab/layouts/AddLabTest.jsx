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
import CustomInput from '../../components/Forms/CustomInput';

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
      bgColor="gray.50"
      mt="50px"
      p={3}
    >
      <BreadCrumbNav />
      <VStack
        w="45%"
        bgColor="white"
        // boxShadow="lg"
        border="1px"
        borderColor="gray.200"
        p={5}
        rounded="lg"
        spacing="1.5rem"
      >
        <HStack
          w="full"
          justifyContent="space-between"
        >
          <IconButton
            size="sm"
          >
            <FaArrowLeft />
          </IconButton>
          <Text
            fontSize="16px"
            fontWeight="semibold"
            color="gray.700"
          >
            New Lab Test
          </Text>
        </HStack>

        {/* select */}
        <FormControl>
          <FormLabel
            fontSize="14px"
          >
            Select Lab Test
          </FormLabel>
          <Select
            styles={selectStyles}
            options={labTestOptions}
          />
        </FormControl>
        {/* sub item */}
        <FormControl>
          <FormLabel fontSize="14px">Sub-Test Description</FormLabel>
          <Input
            // placeholder="Enter Department Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </FormControl>

        <CustomInput
          label="Normal Values"
        />

        {/* end value */}

        <CustomInput
          label="Normal Value (Start)"
        />
        <CustomInput
          label="Normal Value (End)"
        />

        <Button
          size="md"
          w="full"
          colorScheme="blue"
        >
          Save
        </Button>
      </VStack>
    </VStack>
  );
};

export default AddLabTest;
