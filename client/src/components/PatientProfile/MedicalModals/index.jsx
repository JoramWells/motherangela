/* eslint-disable no-unused-vars */

import {
  Button, Modal, ModalBody, ModalCloseButton, ModalContent,
  ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import VitalSignsTable from './VitalSignsTable';
import InputCell from '../InputCell';

const columns = [

  {
    header: 'Vital Sign',
    accessorKey: 'vitalSign',
    cell: (props) => <Text>{props.getValue()}</Text>,

  },
  {
    header: 'Unit',
    accessorKey: 'unit',
    enableSorting: false,
    cell: (props) => <Text>{props.getValue()}</Text>,

  },
  {
    header: 'Patient Type',
    accessorKey: 'normalValues',
    cell: (props) => <Text>{props.getValue()}</Text>,

  },
  {
    header: 'Input',
    accessorKey: 'Normal Values',
    cell: (props) => <InputCell initialValue={props.getValue()} />,

  },
  {
    header: 'Flag',
    accessorKey: 'Normal Values',
    cell: (props) => <Text>{props.getValue()}</Text>,

  },
];

const data = [
  {
    id: nanoid(),
    vitalSign: 'Temperature',
    unit: '°C',
    normalValues: '35.5-37.5',
  },
  {
    id: nanoid(),
    vitalSign: 'Pulse Rate',
    unit: 'BPM',
    normalValues: '60-90',
  },
  {
    id: nanoid(),
    vitalSign: 'Respiratory Rate',
    unit: 'Breath/minute',
    normalValues: '18-30',
  },
  {
    id: nanoid(),
    vitalSign: 'Systolic',
    unit: 'mmHg',
    normalValues: '50-90',
  },
  {
    id: nanoid(),
    vitalSign: 'Diastolic',
    unit: 'mmHg',
    normalValues: '0-100',
  },
  {
    id: nanoid(),
    vitalSign: 'Weight',
    unit: 'KGs',
    normalValues: '35.5-37.5',
  },
  {
    id: nanoid(),
    vitalSign: 'Height',
    unit: 'm',
    normalValues: '35.5-37.5',
  },
  {
    id: nanoid(),
    vitalSign: 'Body Mass Index',
    unit: 'kg/m²',
    normalValues: '35.5-37.5',
  },
  {
    id: nanoid(),
    vitalSign: 'SP02',
    unit: '%',
    normalValues: '35.5-37.5',
  },
];

const RecordVitals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      {' '}
      <Button onClick={onOpen}>Record Vitals</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="full"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Vital Signs</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VitalSignsTable columns={columns} data={data} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RecordVitals;
