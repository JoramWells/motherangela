/* eslint-disable no-unused-vars */

import {
  Button,
  Checkbox,
  Divider,
  FormControl, FormLabel, HStack, Input, Modal,
  ModalBody, ModalCloseButton, ModalContent, ModalFooter,
  ModalHeader, ModalOverlay, Text, VStack, useDisclosure,
} from '@chakra-ui/react';
import Select from 'react-select';
import { FaLine } from 'react-icons/fa';
import BreadCrumbNav from '../../components/BreadCrumbNav';

const PatientReport = () => {
  const data = [];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack
      w="full"
      h="100vh"
      mt="65px"
      p={3}
    >
      <BreadCrumbNav />

      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"

      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filters</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              bgColor="white"
              w="100%"
              rounded="lg"
              spacing={6}
              h="75vh"
              overflowY="auto"
            >
              <VStack
                w="full"
                alignItems="flex-start"
              >
                <Text
                  fontSize="18px"
                  fontWeight="bold"
                >
                  Visit Duration
                </Text>
                <HStack
                  w="full"
                  p={2}
                >
                  <FormControl>
                    <FormLabel>
                      Start Date
                    </FormLabel>

                    <Input
                      type="date"
                    />
                  </FormControl>
                  {/* <FaLine /> */}
                  <FormControl>
                    <FormLabel>
                      End Date
                    </FormLabel>

                    <Input
                      type="date"
                    />
                  </FormControl>
                </HStack>
              </VStack>

              <Divider />

              <HStack
                w="full"
              >

                <FormControl>
                  <FormLabel>Outpatient No.</FormLabel>
                  <Input />
                </FormControl>

                {/*  */}
                <FormControl>
                  <FormLabel>Patient Name</FormLabel>
                  <Input />
                </FormControl>
              </HStack>

              <Divider />

              <VStack
                w="full"
                alignItems="flex-start"
              >
                <Text
                  fontSize="18px"
                  fontWeight="bold"
                >
                  Age Range
                </Text>
                <HStack
                  w="full"
                  // bgColor="gray.50"
                >
                  <FormControl>
                    <FormLabel>Age Start</FormLabel>
                    <Input type="date" />
                  </FormControl>

                  {/*  */}
                  <FormControl>
                    <FormLabel>Age End</FormLabel>
                    <Input />
                  </FormControl>
                </HStack>
              </VStack>

              <Divider />
              <VStack
                align="flex-start"
                w="100%"
                spacing={4}
              >
                <Text
                  fontSize="18px"
                  fontWeight="bold"
                >
                  Consultation
                </Text>
                <HStack
                  w="50%"
                  justifyContent="space-between"
                >
                  <Checkbox
                    size="lg"
                  >
                    Dental
                  </Checkbox>
                  <Checkbox
                    size="lg"
                  >
                    Dialysis
                  </Checkbox>
                </HStack>

                <HStack
                  w="50%"
                  justifyContent="space-between"
                >
                  <Checkbox
                    size="lg"
                  >
                    Doctor Review
                  </Checkbox>
                  <Checkbox
                    size="lg"
                  >
                    Normal
                  </Checkbox>
                </HStack>

                <HStack
                  w="50%"
                  justifyContent="space-between"
                >
                  <Checkbox
                    size="lg"
                  >
                    Nutrition
                  </Checkbox>
                  <Checkbox
                    size="lg"
                  >
                    Optical
                  </Checkbox>
                </HStack>

              </VStack>

              <Divider />

              <VStack
                align="flex-start"
                w="full"
              >
                <Text
                  fontSize="18px"
                  fontWeight="bold"
                >
                  Patient Type, Visit Type
                </Text>

                <FormControl>
                  <FormLabel>Patient Type</FormLabel>
                  <Select />
                </FormControl>

                <FormControl>
                  <FormLabel>Visit Type</FormLabel>
                  <Select />
                </FormControl>
              </VStack>

              <FormControl>
                <FormLabel>Gender</FormLabel>
                <Select />
              </FormControl>

              {/*  */}

              <HStack
                w="full"
              >
                <FormControl>
                  <FormLabel>Doctor </FormLabel>
                  <Select />
                </FormControl>

                {/*  */}

              </HStack>

              <HStack
                w="full"
              >
                <FormControl>
                  <FormLabel>Status </FormLabel>
                  <Select />
                </FormControl>

                {/*  */}
                <FormControl>
                  <FormLabel>Consultation Category</FormLabel>
                  <Select />
                </FormControl>

              </HStack>

            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default PatientReport;
