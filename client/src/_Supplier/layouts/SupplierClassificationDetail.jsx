/* eslint-disable no-unused-vars */
import { Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getClassificationSupplierDetail } from '../../_reducers/supplierClassificationSlice';

const SupplierClassificationDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.supplierClassification);

  useEffect(() => {
    dispatch(getClassificationSupplierDetail(id));
  }, [dispatch, id]);

  console.log(data);

  return (
    <VStack
      w="full"
      h="100vh"
      bgColor="gray.50"
      mt="55px"
    >
      <Text>
        CLass
      </Text>

    </VStack>
  );
};

export default SupplierClassificationDetail;
