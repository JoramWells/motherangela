/* eslint-disable no-unused-vars */

import { Box, HStack, Text } from '@chakra-ui/react';

const Cash = () => {
  const data = [];
  return (
    <Box w="full">
      <HStack>
        <Box
          border="1px"
          borderColor="gray.200"
          rounded="lg"
          p={3}
        >
          <Text color="green" fontSize="xl">Lipa Na M-Pesa</Text>

        </Box>
      </HStack>
    </Box>
  );
};

export default Cash;
