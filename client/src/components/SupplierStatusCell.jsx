/* eslint-disable react/prop-types */
import { Box, Text } from '@chakra-ui/react';

const SupplierStatusCell = ({ getValue }) => {
  const status = getValue() || {};
  return (
    <Box h="100%">
      <Text>{status}</Text>
      {/* <Text>Active</Text> */}
    </Box>
  );
};

export default SupplierStatusCell;
