import {
  Button, HStack, Text, VStack,
} from '@chakra-ui/react';

const Step2 = () => (
  <VStack
    bgColor="white"
    // w="full"
    flex={1}
    height="50%"
    border="1px"
    borderColor="gray.200"
    rounded="lg"
    p={5}
  >
    <HStack
      w="full"
      justifyContent="space-between"
    >
      <Text fontSize="xl" fontWeight="semibold">Recent Admissions</Text>
      <Button
        rounded="full"
        variant="outline"
        colorScheme="purple"
      >
        Create New Admission
      </Button>
    </HStack>
    <Text>Admissions</Text>
  </VStack>
);

export default Step2;
