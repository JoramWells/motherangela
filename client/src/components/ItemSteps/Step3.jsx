import {
  Box, FormControl, FormLabel, Input,
} from '@chakra-ui/react';

const Step3 = () => (
  <Box>
    <FormControl mt={5}>
      <FormLabel>Measuring Unit</FormLabel>
      <Input placeholder="Select Measuring Unit" />
    </FormControl>
    <FormControl mt={5}>
      <FormLabel>Reorder Level</FormLabel>
      <Input placeholder="Enter Reorder Level" />
    </FormControl>
    <FormControl mt={5}>
      <FormLabel>Brand</FormLabel>
      <Input placeholder="Select Brand" />
    </FormControl>

    <FormControl mt={5}>
      <FormLabel>Associated Store</FormLabel>
      <Input placeholder="Select Store" />
    </FormControl>
  </Box>
);

export default Step3;
