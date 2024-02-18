/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl, FormLabel, HStack, IconButton, Input, Text, VStack,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useCallback } from 'react';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useGetAllAccountingDepartmentsQuery } from '../../api/accounts/accountingDepartment.api';

const AddCostCentre = () => {
  const navigate = useNavigate();
  const { data: departmentData } = useGetAllAccountingDepartmentsQuery();

  const departmentOptions = useCallback(() => departmentData?.map((item) => ({
    value: item.department_id, label: item.department_name,
  })), [departmentData]);

  return (
    <VStack
      w="full"
      mt="55px"
      p={3}
    >
      <BreadCrumbNav
        addBtn={false}
      />

      <VStack
        w="40%"
        bgColor="white"
        rounded="lg"
        border="1px"
        borderColor="gray.200"
        p={3}
        spacing={6}
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
          >
            New Cost Centre
          </Text>
        </HStack>

        {/*  */}
        <FormControl>
          <FormLabel
            fontWeight="bold"
                      // color="gray.700"
            fontSize="14px"
          >
            Description

          </FormLabel>
          <Input
                      // size="lg"
                      // value={measuringUnit}
                      // onChange={(e) => setMeasuringUnit(e)}
                      // bgColor="gray.50"
                      // border={0}
            fontSize="14px"
          />
        </FormControl>

        {/*  */}
        <FormControl>
          <FormLabel
            fontWeight="bold"
            color="gray.700"
            fontSize="14px"
          >
            Select Department

          </FormLabel>
          <Select
                        // styles={selectStyles}
            isClearable
            options={departmentOptions() || []}
          />
        </FormControl>

        <Button
          colorScheme="blue"
          w="full"
        >
          Save
        </Button>
      </VStack>
    </VStack>
  );
};

export default AddCostCentre;
