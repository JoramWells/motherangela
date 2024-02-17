/* eslint-disable no-unused-vars */

import {
  Button,
  FormControl,
  FormLabel,
  HStack, Input, Tag, Text, VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import { deleteSupplier, getAllSuppliers, getSupplierDetail } from '../../_reducers/supplierSlice';
import { getAllSupplierClassification } from '../../_reducers/supplierClassificationSlice';

const SupplierDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [supplierName, setSupplierName] = useState('');
  const { data, loading } = useSelector((state) => state.suppliers);

  const [status, setStatus] = useState({ value: data?.status, label: data?.status });
  const [classification, setClassification] = useState({
    value: data?.classification,
    label: data?.classification,
  });

  const statusOptions = [{ value: 'Active', label: 'Active' },
    { value: 'In Active', label: 'In Active' },
  ];
  const classificationSupplierData = useSelector((state) => state.supplierClassification.data);

  const classificationSupplierOptions = classificationSupplierData
        && classificationSupplierData.map((item) => (
          { value: item.classificationName, label: item.classificationName }
        ));

  const handleDelete = () => {
    dispatch(deleteSupplier(id));
    navigate('/suppliers');
  };

  useEffect(() => {
    // if (data.length !== 0) {
    //   setStatus(data.status);
    // }
    dispatch(getSupplierDetail(id));
    dispatch(getAllSupplierClassification());
  }, [dispatch, id]);

  return (
    <VStack
      h="100vh"
      w="full"
      mt="60px"
      p={3}
    >
      <VStack
        w="full"
        alignItems="flex-start"

      >
        {loading ? 'loading...'
          : (
            <VStack
              border="1px"
              borderColor="gray.200"
              rounded="xl"
              alignItems="flex-start"
              p={5}
              w="40%"
              spacing={6}
              bgColor="white"
              boxShadow="lg"
            >
              <FormControl>
                <FormLabel>Supplier Name</FormLabel>
                <Input
                  value={data.supplierName}
                  onChange={(e) => {
                    console.log(supplierName);
                    setSupplierName(e.target.value);
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Mobile No.</FormLabel>
                <Input value={data.mobileNo} />
              </FormControl>

              <FormControl>
                <FormLabel fontSize="medium">Select Status</FormLabel>
                <Select
                  value={status}
                  options={statusOptions}
                  onChange={(e) => setStatus(e)}
                />

              </FormControl>

              <FormControl>
                <HStack w="full" alignItems="center" justifyContent="space-between">
                  <FormLabel fontSize="medium">Select Classification</FormLabel>
                  <Tag
                    onClick={() => navigate('/add-supplier-classification')}
                    _hover={{
                      cursor: 'pointer',
                    }}
                  >
                    NEW

                  </Tag>

                </HStack>
                <Select
                  options={classificationSupplierOptions}
                  value={classification}
                  onChange={(e) => setClassification(e)}
                />

              </FormControl>
              <HStack w="full" justifyContent="flex-end">
                <Button colorScheme="blue">Save</Button>
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={() => dispatch(handleDelete())}
                >
                  {loading ? 'Deleting...' : 'Delete'}

                </Button>
              </HStack>

            </VStack>
          )}
      </VStack>

    </VStack>
  );
};

export default SupplierDetail;
