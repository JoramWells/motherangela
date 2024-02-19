import {
  Tabs, TabList, TabPanels, Tab, TabPanel, VStack,
} from '@chakra-ui/react';
import WardTypeTab from './tabs/WardTypeTab';
import WardCategoryTab from './tabs/WardCategoryTab';
import WardTab from './tabs/WardTab';
import WardBedTab from './tabs/WardBedTab';

const AddWard = () => (
  <VStack
    w="45%"
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
          Ward
        </Tab>
        <Tab>Bed</Tab>
        <Tab>Category</Tab>
        <Tab>Package Type</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <WardTab />
        </TabPanel>
        <TabPanel>
          <WardBedTab />
        </TabPanel>
        <TabPanel>
          <WardCategoryTab />
        </TabPanel>
        <TabPanel>
          <WardTypeTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </VStack>
);

export default AddWard;
