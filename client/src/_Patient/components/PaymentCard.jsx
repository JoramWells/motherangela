import {
  Box,
  Button, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useGetUserPersonalAccountDetailQuery } from '../../api/personalAccountCharges.api';

const PaymentCard = () => {
  const { id } = useParams();
  const { data } = useGetUserPersonalAccountDetailQuery(id);
  console.log(data);
  return (
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
        <Text fontSize="xl" fontWeight="semibold">Payments</Text>
        <Button
          rounded="lg"
          variant="outline"
          // colorScheme="green"
          bgColor="green.50"
          color="green.500"
        >
          New Deposit
        </Button>
      </HStack>
      <Box w="full">
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              bgColor="gray.50"
              color="gray.500"
              rounded="full"
              _selected={{
                color: 'white',
                bg: 'black',
              }}
              mr={5}
            >
              Personal A/c

            </Tab>
            <Tab
              bgColor="gray.50"
              color="gray.500"
              rounded="full"
              _selected={{
                color: 'white',
                bg: 'black',
              }}
            >
              Corporate A/c

            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

export default PaymentCard;
