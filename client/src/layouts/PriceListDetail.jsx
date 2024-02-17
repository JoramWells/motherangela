import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Button, Divider, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { FaTrash, FaWindowClose } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import EditPriceList from '../components/pricelist/EditPriceList';
import { getPriceListDetail } from '../_reducers/priceListSlice';

const PriceListDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.priceLists);

  const fetchData = useCallback(() => {
    dispatch(getPriceListDetail(id));
  }, [dispatch, id]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <VStack
      h="100vh"
      w="full"
      bgColor="gray.50"
      alignItems="center"
      justifyContent="center"
    >
      {data ? (
        <VStack
          boxShadow="xl"
          bgColor="white"
          rounded="lg"
          p={5}
          w="50%"
          alignItems="center"
          justifyContent="center"
        >
          <HStack w="full" justifyContent="flex-end" mb={5}>
            <IconButton>
              <FaWindowClose />
            </IconButton>
          </HStack>
          <HStack w="full" justifyContent="space-between" mb={2}>
            <Text fontWeight="semibold" color="gray.500" fontSize="lg">
              Service Names :
            </Text>
            <Text fontSize="xl" fontWeight="semibold">
              {data.service_name}
            </Text>
          </HStack>

          <Divider />

          {/* category */}
          <HStack mt={2} mb={2} w="full" justifyContent="space-between">
            <Text fontWeight="semibold" color="gray.500" fontSize="lg">
              Service Category :
            </Text>
            <Text fontSize="xl" fontWeight="semibold">
              {data.service_category}
            </Text>
          </HStack>

          <Divider />

          {/* cash */}
          <HStack mt={2} mb={2} w="full" justifyContent="space-between">
            <Text fontWeight="semibold" color="gray.500" fontSize="lg">
              Service Cost (Cash)
            </Text>
            <Text fontSize="xl" fontWeight="semibold">
              {data.service_cost_cash}
            </Text>
          </HStack>

          <Divider />

          {/* insurance */}
          <HStack mt={2} mb={2} w="full" justifyContent="space-between">
            <Text fontWeight="semibold" color="gray.500" fontSize="lg">
              Service Cost (Insurance)
            </Text>
            <Text fontSize="xl" fontWeight="semibold">
              {data.service_cost_insurance}
            </Text>
          </HStack>

          <Divider />

          {/* foreign */}
          <HStack mt={2} mb={2} w="full" justifyContent="space-between">
            <Text fontWeight="semibold" color="gray.500" fontSize="lg">
              Service Cost (Foreigner)
            </Text>
            <Text fontSize="xl" fontWeight="semibold">
              {data.service_cost_foreigner}
            </Text>
          </HStack>
          <HStack w="full" mt={5} justifyContent="flex-end">
            <EditPriceList
              service_name={data.service_name}
              service_category={data.service_category}
            />

            <Button leftIcon={<FaTrash />} colorScheme="red">
              Delete
            </Button>
          </HStack>
        </VStack>
      ) : (
        <Box>
          <Text>loading...</Text>
        </Box>
      )}
    </VStack>
  );
};

export default PriceListDetail;
