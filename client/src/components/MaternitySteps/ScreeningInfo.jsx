/* eslint-disable no-unused-vars */
import {
  Badge,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const ScreeningInfo = () => {
  const navigate = useNavigate();

  const options = [];

  return (
    <VStack spacing={8}>
      <FormControl>

        <FormLabel mt={1}>Gravida</FormLabel>
        <Input size="lg" />

      </FormControl>

      {/* category */}
      <FormControl>
        <FormLabel>Parity</FormLabel>
        <Input size="lg" type="number" />
      </FormControl>

      <FormControl>
        <FormLabel>Height</FormLabel>
        <Input
          size="lg"
          type="number"
        />
      </FormControl>

      <FormControl>
        <FormLabel>L.M.P</FormLabel>
        <Input
          size="lg"
          type="number"
        />
      </FormControl>

      <FormControl>
        <FormLabel>EDD</FormLabel>
        <Input
          size="lg"
          type="number"
        />
      </FormControl>

    </VStack>
  );
};

export default ScreeningInfo;
