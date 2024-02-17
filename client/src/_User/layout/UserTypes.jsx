import {
  Box, HStack, VStack,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import HeaderAction from '../../components/HeaderAction';
import { useGetUserTypesQuery } from '../../api/userType.api';
import DataTable2 from '../../components/tables/DataTable';

const breadCrumbData = [
  {
    id: nanoid(),
    title: 'Administration',
    link: '/administration',
  },
  {
    id: nanoid(),
    title: 'User Types',
    link: '/users',
    isCurrentPage: true,
  },
];

const columns = [
  {
    header: 'User Type',
    accessorKey: 'user_type_desc',
  },
];

const UserTypes = () => {
  const { data } = useGetUserTypesQuery();

  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  return (
    <VStack mt="65px" w="full">

      <BreadCrumbNav link="/admin-add-user-type" breadCrumbData={breadCrumbData} />
      <HeaderAction text="User Type" subrowData={subrowData} />
      <HStack
        w="100%"
        justifyContent="flex-end"
      />
      <Box w="50%" border="1px" borderColor="gray.100" rounded="lg">
        <DataTable2 data={subrowData} columns={columns} />
      </Box>
    </VStack>
  );
};

export default UserTypes;
