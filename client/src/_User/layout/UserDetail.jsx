/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  Box,
  HStack,
  Text, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { useMemo } from 'react';
import { useGetUserQuery } from '../../api/users.api';
import UserPrivilegeTable from '../components/UserPrivilegeTable';

const UserDetail = () => {
  const { id } = useParams();
  const { data } = useGetUserQuery(id);
  console.log(data);

  return (
    <VStack
      h="100vh"
      w="full"
      mt="55px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <Box
        w="full"
        bgColor="orange.50"
        borderLeft="2px"
        borderColor="orange.500"
        h={200}
      >
        <Text>
          User Privileges
        </Text>
      </Box>
      <HStack
        w="full"
        justifyContent="center"
        bgColor="white"
        spacing={8}
        alignItems="flex-start"
      >
        <VStack
          borderRight="1px"
          borderColor="gray.200"
          p={3}
        >
          <ol style={{
            listStyle: 'none',
          }}
          >
            <li>User Privileges</li>
            <li>Purchase Order Clearance</li>
            <li>Requisitions Clearance Privileges</li>
            <li>Change Assigned Branch</li>
          </ol>
        </VStack>
        <UserPrivilegeTable />
      </HStack>
    </VStack>
  );
};

export default UserDetail;
