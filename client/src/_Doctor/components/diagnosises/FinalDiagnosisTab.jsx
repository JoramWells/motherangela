/* eslint-disable no-unused-vars */
import {
  Button,
  Divider, FormControl, FormLabel, HStack, Input, Text, Textarea, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';

const FinalDiagnosisTab = () => (
  <VStack
    w="50%"
    spacing={6}
    pr={4}
  >
    {/*  */}
    <FormControl>
      <FormLabel
        fontWeight="bold"
        color="black"
        fontSize="16px"
        mb={0}
      >
        Diagnoses
      </FormLabel>
      <FormLabel
        fontSize="14px"
      >
        Select disease name
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

      <Textarea />
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

export default FinalDiagnosisTab;
