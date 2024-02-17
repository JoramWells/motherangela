/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useState } from 'react';
import Select from 'react-select';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useGetUserTypesQuery } from '../../api/userType.api';

const AddUser = () => {
  const [itemTypeName, setItemType] = useState('');
  const dispatch = useDispatch();

  const { data: userTypeData } = useGetUserTypesQuery();

  const userTypeOptions = useCallback(() => userTypeData?.map((item) => ({
    value: item.user_type_id, label: item.user_type_desc,
  })), [userTypeData]);

  console.log(userTypeOptions());

  // const { loading } = useSelector((state) => state.itemType);
  // const departmentData = useSelector((state) => state.departments.data);
  // const userTypeData = useSelector((state) => state.userType.data);

  const inputValues = {
    itemTypeName,
  };

  const navigate = useNavigate();

  // const departmentOptions = departmentData && departmentData.map((item) => (
  //   { value: item.id, label: item.departmentName }
  // ));

  // const userTypeOptions = userTypeData && userTypeData.map((item) => (
  //   { value: item.id, label: item.userTypeName }
  // ));

  return (
    <VStack
      w="full"
      h="100vh"
      alignItems="center"
      bgColor="gray.50"
      mt="65px"
      p={3}
    >
      <BreadCrumbNav
        addBtn={false}
      />
      <VStack
        w="45%"
        bgColor="white"
        // boxShadow="lg"
        p={5}
        rounded="lg"
        spacing={6}
        border="1px"
        borderColor="gray.200"
      >

        <HStack w="full" justifyContent="space-between">
          <IconButton
            size="sm"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </IconButton>
          <Text
            fontSize="18px"
            fontWeight="semibold"
          // color="gray.500"
          >
            New User
          </Text>
        </HStack>

        {/* department */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Full Name
          </FormLabel>
          <Input
            placeholder="Enter Full Name"
          />
        </FormControl>

        {/* department */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Mobile Number
          </FormLabel>
          <Input placeholder="Enter Mobile Number" />
        </FormControl>

        {/* email */}
        {/* sub item */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Email Address
          </FormLabel>
          <Input
            placeholder="Enter Email Address"
            value={itemTypeName}
            onChange={(e) => setItemType(e.target.value)}
          />
        </FormControl>

        {/* department */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
          >
            Select Department
          </FormLabel>
          <Select />
        </FormControl>

        {/* hospital */}
        <FormControl>
          <HStack
            w="full"
            justifyContent="space-between"
          >
            <FormLabel
              fontSize="14px"
              fontWeight="bold"
            >
              Select User Type
            </FormLabel>
            <Tag colorScheme="green">New</Tag>
          </HStack>
          <Select
            options={userTypeOptions()}
          />
        </FormControl>

        <FormControl>
          <HStack
            w="full"
            justifyContent="space-between"
            mb={1}
          >
            <FormLabel
              fontSize="14px"
              fontWeight="bold"
            >
              Password
            </FormLabel>
            <Button size="sm">Generate</Button>
          </HStack>
          <Input placeholder="Enter password" />
        </FormControl>

        <HStack w="full" justifyContent="end">
          <Button
            colorScheme="blue"
            // onClick={() => dispatch(addItemType(inputValues))}
            w="full"
          >
            {/* {loading ? 'loading...' : 'Save'} */}
            Save
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AddUser;
