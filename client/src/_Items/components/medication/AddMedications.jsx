import {
  Tabs, TabList, TabPanels, Tab, TabPanel, VStack,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import MedicationTab from './tabs/MedicationTab';
import MedicineCategoryTab from './tabs/MedicineCategoryTab';
import MedicationPackageType from './tabs/MedicationPackageType';
import MedicationPurchaseTab from './tabs/MedicationPurchaseTab';
import PrescriptionTab from './tabs/PrescriptionTab';

const dataList = [
  {
    id: nanoid(),
    text: 'Medication',
  },
  {
    id: nanoid(),
    text: 'Category',
  },
  {
    id: nanoid(),
    text: 'Package Type',
  },
  {
    id: nanoid(),
    text: 'Purchase',
  },
  {
    id: nanoid(),
    text: 'Prescription Term',
  },
];

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
      <TabList>
        {dataList.map((item) => (
          <Tab
            key={item.id}
            color="gray.500"
          // borderWidth="50%"
            p={3}
            _selected={{
              fontWeight: 'bold',
              color: 'blue.500',
              borderBottom: '4px',

            }}
          >
            {item.text}
          </Tab>
        ))}

      </TabList>

      <TabPanels>
        <TabPanel>
          <MedicationTab />
        </TabPanel>
        <TabPanel>
          <MedicineCategoryTab />
        </TabPanel>
        <TabPanel>
          <MedicationPackageType />
        </TabPanel>
        <TabPanel>
          <MedicationPurchaseTab />
        </TabPanel>
        <TabPanel>
          <PrescriptionTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </VStack>
);

export default AddMedications;
