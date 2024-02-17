import {
  Box, HStack, Text, VStack,
} from '@chakra-ui/react';
import BreadCrumbNav from '../components/BreadCrumbNav';

/* eslint-disable no-unused-vars */
const DispensesPhysioTherapy = () => {
  const data = [];
  return (
    <VStack
      w="full"
      h="100vh"
      bgColor="gray.50"
      mt="55px"
      p={3}
    >
      <BreadCrumbNav link="/add-physio-item-dispense" />
      <HStack w="full">
        <Box
          bgColor="white"
          h="150px"
          w="250px"
          border="1px"
          rounded="2xl"
          borderColor="gray.200"
          p={3}
        >
          <Text
            fontWeight="semibold"
            fontSize="lg"
            color="gray.500"
          >
            Items Reversal

          </Text>

          <Text fontSize="5xl" fontWeight="bold">34</Text>
        </Box>
      </HStack>
    </VStack>
  );
};

export default DispensesPhysioTherapy;
