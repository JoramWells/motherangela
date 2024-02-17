/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import {
  Box,
  Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent,
  ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import { useDeletePatientMutation, useUpdatePatientMutation } from '../../api/patients.api';

const PatientCard = ({ text, icon, onClick }) => (
  <VStack
    w="full"
    onClick={onClick}
  >
    <HStack
      w="full"
      justifyContent="flex-start"
      bgColor="whitesmoke"
      p={4}
      rounded="lg"
      _hover={{
        cursor: 'pointer',
        // colorScheme: 'blue',
        color: 'blue.500',
        bgColor: 'blue.50',
      }}
      color="blue.800"
    >
      {icon}
      <Text>
        {text}
      </Text>
    </HStack>
  </VStack>
);

const EditDeletePatientModal = ({
  firstName, middleName, lastName, cellPhone, idNumber,
}) => {
  const [first_name, setFirstName] = useState(firstName);
  const [middle_name, setMiddleName] = useState(middleName);
  const [last_name, setLastName] = useState(lastName);
  const [dob, setDOB] = useState('');
  const [cell_phone, setCellPhone] = useState(cellPhone);
  const [residence, setResidence] = useState('');
  const [id_number, setID] = useState(idNumber);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [updatePatient, { isLoading }] = useUpdatePatientMutation();
  const [deletePatient, { isLoading: isLoadingDelete }] = useDeletePatientMutation();

  const { id } = useParams();
  const inputValues = {
    id, first_name, middle_name, last_name, cell_phone, id_number,
  };

  return (
    <Box w="full">
      <PatientCard text="Patient Profile" icon={<FaUserAlt />} onClick={onOpen} />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent rounded="xl">
          <ModalHeader>
            {firstName}
            {' '}
            Patient Profile
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={6}>
              <FormControl>

                <FormLabel
                  mt={1}
                  fontSize="14px"
                >
                  First Name

                </FormLabel>
                <Input
                  // size="lg"
                  placeholder="Enter First Name"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                />

              </FormControl>

              <FormControl>

                <FormLabel
                  mt={1}
                  fontSize="14px"
                >
                  Middle Name

                </FormLabel>
                <Input
                  // size="lg"
                  placeholder="Enter Second Name"
                  value={middle_name}
                  onChange={(e) => setMiddleName(e.target.value)}
                />

              </FormControl>

              <FormControl>

                <FormLabel
                  mt={1}
                  fontSize="14px"
                >
                  Last Name

                </FormLabel>
                <Input
                  // size="lg"
                  placeholder="Enter Last Name"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                />

              </FormControl>

              {/* category */}

              <FormControl>
                <FormLabel
                  fontSize="14px"
                >
                  ID/Passport Number

                </FormLabel>
                <Input
                  // size="lg"
                  placeholder="Enter phone number"
                  value={id_number}
                  onChange={(e) => setID(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  fontSize="14px"
                >
                  Mobile No

                </FormLabel>
                <Input
                  // size="lg"
                  placeholder="Enter Cell Phone"
                  value={cell_phone}
                  onChange={(e) => setCellPhone(e.target.value)}
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              size="sm"
              mr={3}
              onClick={() => updatePatient(inputValues)}
            >
              {isLoading ? 'loading...' : 'Save'}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              colorScheme="red"
              onClick={() => deletePatient(id)}
            >
              {isLoading ? 'loading..' : 'Delete'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EditDeletePatientModal;
