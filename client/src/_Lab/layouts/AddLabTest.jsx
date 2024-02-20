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
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import { useGetAllALabsQuery } from '../api/alab.api';
import { selectStyles } from '../../utils/styles';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import CustomInput from '../../components/Forms/CustomInput';
import { useGetProcedureItemQuery, useUpdateProcedureItemMutation } from '../../api/procedureItem.api';
import { useGetProceduresQuery } from '../../api/procedureDetails.api';

const AddLabTest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: procedureItemData } = useGetProcedureItemQuery(id);
  const [updateProcedureItem, {
    isLoading: isLoadingProcedureItemUpdate,
  }] = useUpdateProcedureItemMutation(id);

  const [procedureName, setProcedureName] = useState();
  const [procedureItemName, setProcedureItemName] = useState();
  const [normalValues, setNormalValues] = useState('');
  const [normalValuesStart, setNormalValuesStart] = useState('');
  const [normalValuesEnd, setNormalValuesEnd] = useState('');

  const inputValues = {
    id,
    procedure_id: procedureName?.value,
    procedure_item_description: procedureItemName,
    normal_values: normalValues,
    normal_values_start: normalValuesStart,
    normal_values_end: normalValuesEnd,
  };

  const { data } = useGetProceduresQuery();

  // filter data according to lab procedure/tests
  const filteredData = useCallback(() => data
    ?.filter((item) => item.procedure_category?.category_name.toLowerCase()
      .includes('lab tests' || 'lab procedures')), [data]);

  useEffect(() => {
    if (procedureItemData) {
      setProcedureName({
        value: procedureItemData?.procedure_detail?.procedure_id,
        label: procedureItemData?.procedure_detail?.procedure_name,
      });
      setProcedureItemName(procedureItemData.procedure_item_description);
      setNormalValues(procedureItemData.normal_values);
      setNormalValuesStart(procedureItemData.normal_values_start);
      setNormalValuesEnd(procedureItemData.normal_values_end);
    }
  }, [procedureItemData]);

  console.log(procedureName);

  const labTestOptions = filteredData()?.map((item) => ({
    value: item.procedure_id, label: item.procedure_name,
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
            value={procedureName}
            onChange={setProcedureName}
          />
        </FormControl>
        {/* sub item */}
        {procedureItemData || id
          ? (
            <CustomInput
              label="Sub-Test Description"
              value={procedureItemName}
              onChange={setProcedureItemName}
            />
          )
          : (
            <FormControl>
              <FormLabel
                // color="gray.500"
                fontSize="14px"
              >
                Sub-Test Description
              </FormLabel>
              <Skeleton
                height="40px"
                width="full"
                rounded="md"
              />
            </FormControl>
          )}

        <CustomInput
          label="Normal Values"
          value={normalValues}
          onChange={setNormalValues}
        />

        {/* end value */}

        <CustomInput
          label="Normal Value (Start)"
          value={normalValuesStart}
          onChange={setNormalValuesStart}
        />
        <CustomInput
          label="Normal Value (End)"
          value={normalValuesEnd}
          onChange={setNormalValuesEnd}
        />

        {id !== 'null' ? (
          <HStack
            w="full"
            justifyContent="flex-end"
          >

            <Button
              size="sm"
              colorScheme="red"
              variant="outline"
            >
              Delete
            </Button>
            <Button
              colorScheme="blue"
              size="sm"
              onClick={() => updateProcedureItem(inputValues)}
            >
              {isLoadingProcedureItemUpdate ? 'loading...' : 'Update'}
            </Button>
          </HStack>
        )

          : (
            <Button
              size="md"
              w="full"
              colorScheme="blue"
            >
              Save
            </Button>
          )}
      </VStack>
    </VStack>
  );
};

export default AddLabTest;
