import {
  FormControl, FormLabel, HStack, Textarea, VStack,
} from '@chakra-ui/react';

const DiagnosisTab = () => (
  <VStack
    bgColor="white"
    p={5}
    rounded="lg"
  >
    <HStack
      w="full"
    >
      <FormControl>
        <FormLabel
          style={{
            fontSize: '18px',
            color: 'gray.700',
          }}
        >
          Presenting Complaints
        </FormLabel>
        <Textarea />
      </FormControl>

      <FormControl>
        <FormLabel>History of Presenting Complaints</FormLabel>
        <Textarea />
      </FormControl>
      <FormControl>
        <FormLabel>Previous Medical History</FormLabel>
        <Textarea />
      </FormControl>
    </HStack>

    {/*  */}
    <FormControl>
      <FormLabel>Obstetrics & Gynaecology</FormLabel>
      <Textarea />
    </FormControl>

    <FormControl>
      <FormLabel>Social Family History</FormLabel>
      <Textarea />
    </FormControl>

    <FormControl>
      <FormLabel>General Examination</FormLabel>
      <Textarea />
    </FormControl>

    {/*  */}
    <FormControl>
      <FormLabel>Per Abdomen</FormLabel>
      <Textarea />
    </FormControl>

    <FormControl>
      <FormLabel>Pelvic Examination</FormLabel>
      <Textarea />
    </FormControl>

    <FormControl>
      <FormLabel>Cardio Vascular System</FormLabel>
      <Textarea />
    </FormControl>

    {/*  */}
    <FormControl>
      <FormLabel>Central Nervous System</FormLabel>
      <Textarea />
    </FormControl>

    <FormControl>
      <FormLabel>Respiratory System</FormLabel>
      <Textarea />
    </FormControl>

    <FormControl>
      <FormLabel>Musco-skeletal System</FormLabel>
      <Textarea />
    </FormControl>

    {/*  */}
    <FormControl>
      <FormLabel>Eye</FormLabel>
      <Textarea />
    </FormControl>

    {/*  */}
    <FormControl>
      <FormLabel>Ear, Nose & Throat</FormLabel>
      <Textarea />
    </FormControl>

    {/*  */}
    <FormControl>
      <FormLabel>Breast</FormLabel>
      <Textarea />
    </FormControl>

    <FormControl>
      <FormLabel>Skin</FormLabel>
      <Textarea />
    </FormControl>

    {/*  */}
    <FormControl>
      <FormLabel>Other Examinations</FormLabel>
      <Textarea />
    </FormControl>

    <FormControl>
      <FormLabel>Impression</FormLabel>
      <Textarea />
    </FormControl>

    {/* investigation */}
    {/* test category */}
  </VStack>
);

export default DiagnosisTab;
