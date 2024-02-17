import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Text, VStack } from '@chakra-ui/react';
import { getDepartmentDetail } from '../_reducers/departmentSlice';

const DepartmentDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.departments);

  useEffect(() => {
    dispatch(getDepartmentDetail(id));
  }, [dispatch, id]);
  return (
    <VStack
      w="full"
      mt={12}
      alignItems="center"
      justifyContent="center"
      bgColor="gray.50"
      h="100vh"
    >
      <Box>
        <Text>{data.departmentName}</Text>
      </Box>
    </VStack>
  );
};

export default DepartmentDetail;
