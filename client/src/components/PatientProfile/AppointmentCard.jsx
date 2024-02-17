/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormLabel,
  HStack, IconButton, Input, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaBoxOpen, FaExternalLinkAlt, FaPlus } from 'react-icons/fa';
import Select from 'react-select';

const appointmentCategoryOptions = [
  { value: '1', label: 'General Doctor Appointment' },
  { value: '2', label: 'Specialist Appointment' },
  { value: '3', label: 'Nursing Appointment' },
];

const consultationTypeOptions = [
  { value: '1', label: 'ANC VISIT LINDA MAMA' },
  { value: '2', label: 'CONSULTATION-(CWC)' },
  { value: '3', label: 'CONSULTATION-CHEMO' },
  { value: '4', label: 'CONSULTATION-DM CLINIC' },
  { value: '5', label: 'CONSULTATION-DENTAL' },
  { value: '6', label: 'CONSULTATION-GYNAE' },
  { value: '7', label: 'CONSULTATION-NUTRITIONIST(CHILD)' },
  { value: '8', label: 'CONSULTATION-OPD DAY' },
  { value: '9', label: 'CONSULTATION-OPD NIGHT' },
  { value: '10', label: 'CONSULTATION-NUTRITIONIST' },
  { value: '11', label: 'CONSULTATION-CCC' },
  { value: '12', label: 'CONSULTATION-ANC' },
  { value: '13', label: 'CONSULTATION-PHYSIOTHERAPY' },
  { value: '14', label: 'DENTAL REVIEW' },
  { value: '15', label: 'E.N.T CONSULTATION' },
  { value: '16', label: 'FREE CONSULTATION' },
  { value: '17', label: 'NORMAL CONSULTATION' },
  { value: '18', label: 'SECOND-LINDA MAMA' },
  { value: '19', label: 'SPECIALIST CONSULTATION' },
  { value: '20', label: 'SURGEON-SOPC' },
];

const referralOptions = [
  { value: '1', label: 'NON REFERRAL' },
  { value: '1', label: 'REFERRAL FROM COMMUNITY UNIT' },
  { value: '1', label: 'REFERRAL FROM OTHER HEALTH FACILITY' },
];

const consultationCategoryOptions = [
  { value: '1', label: 'DENTAL' },
  { value: '2', label: 'DIALYSIS' },
  { value: '3', label: 'DOCTORS REVIEW' },
  { value: '4', label: 'NORMAL' },
  { value: '5', label: 'NUTRITION' },
  { value: '6', label: 'OPTICAL' },
  { value: '7', label: 'PHYSIOTHERAPY' },
];

const clinicOptions = [
  { value: '1', label: 'MAIN BRANCH' },
];

const AppointmentCard = ({ data }) => {
  const [appointment, setAppointment] = useState({
    appointmentCategory: '', consultationType: '', referral: '', consultationCategory: '', clinic: '',
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

    <VStack
      VStack
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
        <Text fontSize="xl" fontWeight="semibold">Recent Appointments</Text>

        <Button
          rounded="full"
          variant="ghost"
          colorScheme="green"
          leftIcon={<FaPlus />}
          border="1px"
          bgColor="green.50"
          onClick={onOpen}
        >
          Book Appointment (Now)
        </Button>
      </HStack>

      {
    data ? (
      <VStack
        backgroundColor="gray.100"
        w="full"
        pl={5}
        rounded="lg"
        border="1px"
        borderColor="gray.200"
        alignItems="flex-start"
      >
        <HStack w="full" justifyContent="flex-end">
          <IconButton color="gray.500">
            <FaExternalLinkAlt />
          </IconButton>
        </HStack>
        <Text noOfLines={2} pr={3}>
          Admitted to HURUMA HOSPITAL for 3 days and saw doctor Munech and was diagnosed
          with Malaria.
        </Text>
        <HStack
          w="full"
          justifyContent="flex-end"
          p={2}
        >
          <Text color="gray.500">1/02/2021</Text>
        </HStack>
      </VStack>
    )

      : (
        <VStack
          w="full"
          h="full"
          justifyContent="center"
        >
          <FaBoxOpen
            size={70}
            style={{
              color: 'gray',
            }}
          />
          <Text color="gray.500">No Appointments</Text>
        </VStack>
      )
  }
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={8}>
              <FormControl>
                <FormLabel>Appointment Category</FormLabel>
                <Select
                  options={appointmentCategoryOptions}
                  onChange={(value) => {
                    setAppointment(
                      { ...appointment, appointmentCategory: value },
                    );
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Consultation Type</FormLabel>
                <Select
                  options={consultationTypeOptions}
                  onChange={(value) => {
                    setAppointment(
                      { ...appointment, consultationType: value },
                    );
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Consultation Category</FormLabel>
                <Select
                  options={consultationCategoryOptions}
                  onChange={(value) => {
                    setAppointment(
                      { ...appointment, consultationCategory: value },
                    );
                  }}

                />
              </FormControl>
              <FormControl>
                <FormLabel>Is Referral?</FormLabel>
                <Select
                  options={referralOptions}
                  onChange={(value) => {
                    setAppointment(
                      { ...appointment, referral: value },
                    );
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Clinic</FormLabel>
                <Select
                  options={clinicOptions}
                  onChange={(value) => {
                    setAppointment(
                      { ...appointment, clinic: value },
                    );
                  }}
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Book Appointment</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default AppointmentCard;
