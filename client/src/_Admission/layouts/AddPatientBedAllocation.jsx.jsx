/* eslint-disable no-unused-vars */
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
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import Select from 'react-select';
import { useGetAllWardTypesQuery } from '../../api/wardType.api';
import { useGetAllBedsQuery } from '../../api/wardBed.api';

const AddPatientBedAllocation = () => {
  const [ward, setWard] = useState({
    value: 1, label: 'FEMALE WARD',
  });
  const [itemTypeName, setItemType] = useState('');
  const navigate = useNavigate();

  const { data: wardTypeData } = useGetAllWardTypesQuery();
  const { data: wardBedsData } = useGetAllBedsQuery();

  const wardTypeCallback = useCallback(() => wardTypeData?.map((item) => ({
    value: item.ward_type_id, label: item.ward_type_description,
  })), [wardTypeData]);

  const wardBedsCallback = useCallback(() => wardBedsData?.map((item) => ({
    value: item.bed_id, label: item.bed_number, wardId: item.ward_id,
  })), [wardBedsData]);

  // const filterWardBedNumber = useCallback(() => wardBedsCallback()?.filter(
  //   (item) => String(item.ward_id)
  //     .toLowerCase().includes(
  //       String(ward?.value).toLowerCase(),
  //     ),
  // ), [wardBedsCallback, ward]);

  const wardTypeOptions = wardTypeCallback();

  const wardBedOptions = wardBedsCallback();

  const inputValues = {
    itemTypeName,
  };

  return (
    <VStack
      w="full"
      h="100vh"
      alignItems="center"
      bgColor="gray.50"
      mt="65px"
      p={3}
    >
      <VStack
        w="40%"
        bgColor="white"
        p={5}
        rounded="lg"
        border="1px"
        borderColor="gray.200"
        spacing={4}
      >
        <HStack w="full" justifyContent="space-between">
          <IconButton
            size="sm"
            onClick={() => navigate('/services')}
          >
            <FaArrowLeft />
          </IconButton>
          <Text fontSize="16px" fontWeight="bold">
            Register Item Type
          </Text>
        </HStack>
        {/* sub item */}
        <FormControl mt={5}>
          <FormLabel fontSize="14px">Start Date</FormLabel>
          <Input
            type="date"
            value={itemTypeName}
            onChange={(e) => setItemType(e.target.value)}
          />
        </FormControl>

        {/*  */}
        <FormControl>
          <FormLabel>
            Select Ward
          </FormLabel>
          <Select
            value={ward}
            defaultValue={ward}
            options={wardTypeOptions}
            onChange={(val) => setWard(val)}
          />
        </FormControl>

        {/*  */}
        <FormControl>
          <FormLabel>
            Select Bed Number
          </FormLabel>
          <Select
            options={wardBedOptions}
          />
        </FormControl>

        <HStack mt={5} w="full" justifyContent="end">
          <Button
            size="sm"
            leftIcon={<FaPlus />}
            colorScheme="blue"
          >
            Save
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AddPatientBedAllocation;
