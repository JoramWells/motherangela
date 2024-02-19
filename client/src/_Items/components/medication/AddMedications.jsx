import {
  Tabs, TabList, TabPanels, Tab, TabPanel, VStack,
} from '@chakra-ui/react';
import MedicationTab from './tabs/MedicationTab';

const AddMedications = () => (
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
      <TabList
        pt={2}
      >
        <Tab>Medication</Tab>
        <Tab>Medication Category</Tab>
        <Tab>Medication Package Type</Tab>
        <Tab>Medication Purchase</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <MedicationTab />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </VStack>
);

export default AddMedications;
