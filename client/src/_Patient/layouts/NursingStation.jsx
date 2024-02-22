/* eslint-disable no-unused-vars */

import {
  Box, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';

const NursingStation = () => {
  const data = [];
  return (
    <VStack
      w="full"
      h="100vh"
    //   justifyContent="center"
      mt="55px"
      bgColor="gray.50"
      p={3}
    >
      <HStack w="full">
        <Box
          bgColor="white"
          w="350px"
          h="170px"
          p={3}
          rounded="2xl"
          border="1px"
          borderColor="gray.200"
        >
          <IconButton rounded="full">
            <FaUpload color="gray.500" />
          </IconButton>
          <Text
            ml={10}
            mt={2}
            fontSize="xl"
            color="gray.500"
            fontWeight="semibold"
          >
            Upload Appointment Files

          </Text>
        </Box>
      </HStack>
    </VStack>
  );
};

export default NursingStation;
