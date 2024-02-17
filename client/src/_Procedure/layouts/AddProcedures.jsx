import {
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { addProcedures } from '../../_reducers/procedureSlice';
import { getAllProcedureGroups } from '../../_reducers/procedureGroupSlice';

const AddProcedures = () => {
  const [procedureName, setProcedureName] = useState('');
  const [procedureGroup, setProcedureGroup] = useState({ value: '', label: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { loading } = useSelector((state) => state.procedures);
  // const classificationSupplierData = useSelector((state) => state.procedureGroup.data);

  // const classificationSupplierOptions = classificationSupplierData
  // && classificationSupplierData.map((item) => (
  //   { value: item.procedureGroupName, label: item.procedureGroupName }
  // ));

  const inputValues = {
    procedureName,
    procedureGroup: procedureGroup.value,
  };

  useEffect(() => {
    dispatch(getAllProcedureGroups());
  }, [dispatch]);

  return (
    <VStack
      w="full"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bgColor="gray.50"
    >
      <VStack
        w="50%"
        mt={5}
        bgColor="white"
        boxShadow="lg"
        p={3}
        rounded="lg"
        spacing={10}
      >

        <HStack w="full" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="semibold">Add Procedure</Text>
          <CloseButton />
        </HStack>

        {/* supplier name */}
        <FormControl>
          <FormLabel>Procedure Name</FormLabel>
          <Input
            placeholder="Enter Procedure Name"
            value={procedureName}
            onChange={(e) => setProcedureName(e.target.value)}
          />
        </FormControl>

        {/* select Department */}
        <FormControl>
          <HStack w="full" alignItems="center" justifyContent="space-between">
            <FormLabel fontSize="medium">Select Procedure Category</FormLabel>
            <Tag
              onClick={() => navigate('/add-procedure-group')}
              _hover={{
                cursor: 'pointer',
              }}
            >
              NEW

            </Tag>

          </HStack>
          <Select
            // options={classificationSupplierOptions}
            value={procedureGroup}
            onChange={(e) => setProcedureGroup(e)}
          />

        </FormControl>

        {/* select procedure group */}
        <FormControl>
          <HStack w="full" alignItems="center" justifyContent="space-between">
            <FormLabel fontSize="medium">Select Procedure Group</FormLabel>
            <Tag
              onClick={() => navigate('/add-procedure-group')}
              _hover={{
                cursor: 'pointer',
              }}
            >
              NEW

            </Tag>

          </HStack>
          <Select
            // options={classificationSupplierOptions}
            value={procedureGroup}
            onChange={(e) => setProcedureGroup(e)}
          />

        </FormControl>

        {/* select procedure group */}
        <FormControl>
          <HStack w="full" alignItems="center" justifyContent="space-between">
            <FormLabel fontSize="medium">Select Hospital</FormLabel>
            <Tag
              onClick={() => navigate('/add-procedure-group')}
              _hover={{
                cursor: 'pointer',
              }}
            >
              NEW

            </Tag>

          </HStack>
          <Select
            // options={classificationSupplierOptions}
            value={procedureGroup}
            onChange={(e) => setProcedureGroup(e)}
          />

        </FormControl>

        <HStack w="full" justifyContent="end">
          <Button
            size="lg"
            colorScheme="blue"
            onClick={() => dispatch(addProcedures(inputValues))}
          >
            Save
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AddProcedures;
