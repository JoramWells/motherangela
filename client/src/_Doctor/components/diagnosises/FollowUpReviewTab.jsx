/* eslint-disable no-unused-vars */
import {
  Button,
  Divider, FormControl, FormLabel, HStack, Input, Textarea, VStack,
} from '@chakra-ui/react';

const FollowUpReviewTab = () => (
  <VStack
    maxH="700px"
    overflowY="auto"
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
        Follow Up/Review
      </FormLabel>
      <FormLabel
        fontSize="14px"
      >
        Lorem ipsum...
      </FormLabel>

      <Textarea />
    </FormControl>
    <HStack
      w="full"
      justifyContent="flex-end"
    >
      <Button
        size="sm"
      >
        Save
      </Button>
    </HStack>

  </VStack>
);

export default FollowUpReviewTab;
