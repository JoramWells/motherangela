/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetUsersQuery } from '../../api/users.api';
import UserNameAvatar from '../../components/UserNameAvatar';

const breadCrumbData = [
  {
    id: nanoid(),
    title: 'Administration',
    link: '/administration',
  },
  {
    id: nanoid(),
    title: 'Users',
    link: '/users',
    isCurrentPage: true,
  },
];

const Users = () => {
  const { data } = useGetUsersQuery();
  console.log(data);

  const columns = useMemo(
    () => [
      {
        header: 'Full Name',
        accessorKey: 'full_name',
        cell: (props) => (
          <UserNameAvatar
            link={`/user-detail/${props.row.original.user_id}`}
            fullName={props.getValue()}
          />
        ),
      },
      {
        header: 'user Name',
        accessorKey: 'user_name',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Email',
        accessorKey: 'email',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'User Type',
        accessorKey: 'user_type',
        cell: (props) => <Text>{props.getValue()?.user_type_desc}</Text>,
      },
      {
        header: 'Action',
        // accessorKey: 'user_type',
        cell: () => (
          <VStack alignItems="flex-start">
            <Button size="sm">Privileges</Button>
            <Button size="sm">Purchase Orders Clearance Privileges</Button>
            <Button size="sm">Requisitions Clearance Privileges</Button>
            <Button size="sm">Change Assigned Branch</Button>
          </VStack>
        ),
      },
    ],

    [],
  );

  const subRowData = data
    && data.map((item) => ({
      ...item,
      subRows: [],
    }));

  return (
    <VStack
      mt="65px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/admin-add-user" breadCrumbData={breadCrumbData} />
        <Box
          w="100%"
          bgColor="white"
          p={3}
          h="89%"
        >
          <DataTable2 data={subRowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Users;
