/* eslint-disable no-unused-vars */
import {
  Button,
  Divider, FormControl, FormLabel, HStack, Input, Text, Textarea, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';

const InvestigationTab = () => (
  <VStack
    w="50%"
    spacing={6}
    pr={4}
  >
    <VStack
      w="full"
      align="flex-start"
      spacing={0}
    >
      <Text
        fontSize="18px"
        color="black"
      >
        External Request
      </Text>
      <Text
        fontSize="14px"
        // color="black"
      >
        Fill In Test for external investigation
      </Text>
    </VStack>
    {/*  */}
    <FormControl>
      <FormLabel
        fontWeight="bold"
        color="black"
        fontSize="16px"
        mb={0}
      >
        Category
      </FormLabel>
      <FormLabel
        fontSize="14px"
      >
        Select test category
      </FormLabel>

      <Select />
    </FormControl>

    <FormControl>
      <FormLabel
        fontWeight="bold"
        color="black"
        fontSize="16px"
        mb={0}
      >
        Description
      </FormLabel>
      <FormLabel
        fontSize="14px"
      >
        Enter a descriptive summary of the test performed
      </FormLabel>

      <Select />
    </FormControl>

    <HStack
      w="full"
      justifyContent="flex-end"
    >
      <Button>
        Save
      </Button>
    </HStack>

  </VStack>
);

export default InvestigationTab;
