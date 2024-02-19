import {
  Tabs, TabList, TabPanels, Tab, TabPanel, VStack,
} from '@chakra-ui/react';
import ServiceTab from './tabs/ServiceTab';
import ServiceTypeTab from './tabs/ServiceTypeTab';

const AddService = () => (
  <VStack
    w="50%"
    bgColor="white"
  >
    <Tabs
      isFitted
      w="full"
      size="sm"
      border="1px"
      rounded="lg"
      borderColor="gray.200"
    >
      <TabList>
        <Tab
          p={3}
        >
          Service
        </Tab>
        <Tab>Type</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ServiceTab />
        </TabPanel>
        <TabPanel>
          <ServiceTypeTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </VStack>
);

export default AddService;
