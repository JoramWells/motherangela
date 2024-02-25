import {
  Divider, FormControl, FormLabel, Input, Textarea, VStack,
} from '@chakra-ui/react';

const GeneralExaminationTab = () => (
  <VStack
    maxH="750px"
    overflowY="auto"
    w="50%"
    spacing={6}
    paddingRight={4}
  >

    <FormControl>
      <FormLabel
        style={{
          fontSize: '18px',
          color: 'black',
          fontWeight: 'bold',
        }}
        mb={0}
      >
        Presenting Complaints
      </FormLabel>
      <FormLabel
        fontSize="14px"
      >
        Enter a short description of any recent complaints presented by the patient
      </FormLabel>
      <Textarea />
    </FormControl>

    <FormControl>
      <FormLabel
        color="black"
        fontWeight="bold"
        mb={0}
      >
        History of Presenting Complaints
      </FormLabel>
      <FormLabel
        fontSize="14px"
      >
        Fill the patients history of presenting complaints
      </FormLabel>
      <Textarea />
    </FormControl>

    {/* medical history */}
    <FormControl>
      <FormLabel
        fontWeight="bold"
        color="black"
        mb={0}
      >
        Previous Medical History
      </FormLabel>
      <FormLabel
        fontSize="14px"
      >
        Upload patient medical history files
      </FormLabel>
      <Textarea />

      <Input
        type="file"
        mt={4}
      />
    </FormControl>

    <Divider
      mt={5}
      mb={5}
    />

    {/*  */}
    <FormControl>
      <FormLabel
        fontWeight="bold"
        color="black"
        fontSize="16px"
        mb={0}
      >
        Obstetrics & Gynaecology
      </FormLabel>
      <FormLabel
        fontSize="14px"
      >
        Lorem ipsum...
      </FormLabel>
      <Textarea />
    </FormControl>

    <FormControl>
      <FormLabel
        fontWeight="bold"
        fontSize="16px"
        mb={0}
        color="black"
      >
        Social Family History
      </FormLabel>
      <FormLabel
        fontSize="14px"
      >
        Lorem ipsum...
      </FormLabel>
      <Textarea />
    </FormControl>

    <FormControl>
      <FormLabel
        fontWeight="bold"
        fontSize="16px"
        mb={0}
        color="black"
      >
        General Examination
      </FormLabel>
      <FormLabel
        fontSize="14px"
      >
        Lorem ipsum...
      </FormLabel>
      <Textarea />
    </FormControl>

  </VStack>
);

export default GeneralExaminationTab;
