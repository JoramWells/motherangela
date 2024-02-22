/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, Checkbox, Divider, FormControl,
  FormLabel, HStack, IconButton, Input, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
  ModalOverlay, Tag, Text, VStack, useDisclosure,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaBoxOpen, FaCheck, FaCheckCircle, FaFilter, FaInfoCircle,
} from 'react-icons/fa';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import Select from 'react-select';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAppointmentsQuery } from '../../api/appointments.api';

const UserNameAvatar = ({ fullName }) => (
  <HStack>
    <Avatar
      size="xs"
      name={fullName}
      color="white"
      fontWeight="bold"
    />
    <Text
      textTransform="uppercase"
      fontWeight="bold"
      color="gray.600"
    >
      {fullName}

    </Text>
  </HStack>
);

const PatientQueue = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAppointmentsQuery();

  const columnsx = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'patient_detail',
        cell: (props) => (
          <Box onClick={() => navigate(`/patient-detail/${props.row.original.patient_id}`)}>
            <UserNameAvatar
              fullName={`${props.getValue()?.first_name} ${props.getValue()?.middle_name}`}
            />
            <Text>{props.row.original.patient_gender}</Text>
          </Box>
        ),
        size: 200,

      },
      {
        header: 'Appointment Time',
        accessorKey: 'appointment_date',
        cell: (props) => (
          <VStack alignItems="flex-start">
            <Text>{moment(props.getValue()).format('LL')}</Text>
            <Text color="gray.500">{moment(props.row.original.appointment_time, 'HH:mm').format('hh:mm A')}</Text>
          </VStack>
        ),

      },
      {
        header: 'PAYMENT DETAILS',
        accessorKey: 'insurance_detail',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue() ? props.getValue()?.insurance_name : 'CASH'}</Text>,

      },
      {
        header: 'Eligibility',
        // accessorKey: 'tem',
        cell: (props) => (
          <Box>
            <Button
              variant="ghost"
                  // bgColor={}
              // colorScheme="orange"
              size="xs"
              onClick={() => navigate({
                pathname: `/add-eligibility-screening/${props.row.original.patient_id}`,
                search: `?appointment_id=${props.row.original.appointment_id}`,
              })}
            >
              RECORD
            </Button>
          </Box>
        ),

      },
      {
        header: 'Vital Signs',
        // accessorKey: 'tem',
        cell: (props) => (
          <Box>
            {!props.row.original.temperature
              ? (
                <Tag
                  // variant="outline"
                  // bgColor={}
                  // colorScheme="orange"
                  // size="xs"
                  onClick={() => navigate({
                    pathname: `/add-vitals/${props.row.original.patient_id}`,
                    search: `?appointment_id=${props.row.original.appointment_id}`,
                  })}
                  rounded="full"

                >
                  RECORD
                </Tag>
              ) : (
                <Tag
                  // size="xs"
                  colorScheme="green"
                  variant="outline"
                  rounded="full"
                  // variant="ghost"
                  // leftIcon={<FaCheck />}
                >
                  RECORD
                </Tag>
              )}
          </Box>
        ),

      },
      {
        header: 'Action',
        cell: (props) => (
          <HStack justifyContent="flex-start" alignItems="flex-start">
            <Button
              // variant="outline"
              color="gray.700"
              // borderColor="gray.700"
              size="xs"
              onClick={() => navigate({
                pathname: `/doctor/${props.row.original.appointment_id}`,
                search: `?patient_id=${props.row.original.patient_id}`,
              })}
              textTransform="uppercase"
            >
              See Patient
            </Button>
          </HStack>
        ),
      },
      // {
      //   header: 'act',
      //   cell: () => (
      //     <HStack>
      //       <FaEye />
      //     </HStack>
      //   ),
      // },
    ],

    [navigate],
  );

  // const subRowData = data
  //       && data.map((item) => ({
  //         ...item,
  //         subRows: [],
  //       }));

  const filterByDate = useCallback(() => {
    const todayDate = moment(new Date()).format('YYYY-MM-DD');
    return data?.filter((item) => moment(item.appointment_date).isSame(todayDate, 'day'));
  }, [data]);

  const [startDate, setStartDate] = useState(moment(new Date(), 'YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(moment(new Date(), 'YYYY-MM-DD'));
  const [fd, setFD] = useState();
  const handleFilterDate = useCallback(() => {
    const filteredData = data?.filter((item) => {
      const appointmentDate = moment(item.appointment_date, 'YYYY-MM-DD');
      return appointmentDate.isBetween(moment(new Date(startDate), 'YYYY-MM-DD'), moment(new Date(endDate), 'YYYY-MM-DD'), null, '[]');
    });
    setFD(filteredData);
  }, [data, startDate, endDate]);

  console.log(fd);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack
      mt="55px"
      w="full"
      bgColor="gray.50"
      p={3}
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-patient?type=admission" />
        <HStack
          w="full"
          justifyContent="flex-end"
        >
          <IconButton
            onClick={onOpen}
          >
            <FaFilter />
          </IconButton>
        </HStack>

        {fd?.length === 0 ? (
          <VStack
            p={2}
            h="75vh"
            alignItems="center"
            justifyContent="center"
          >

            <FaBoxOpen
              size={120}
              color="gray"
            />
            <Text
              fontSize="xl"
              fontWeight="semibold"
              color="gray.500"
            >
              No Patients Recorded

            </Text>

          </VStack>
        )
          : (

            <DataTable2 data={data || []} columns={columnsx} />
          )}
      </Box>

      {/* modal */}
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
                      value={startDate}
                      onChange={(e) => {
                        setStartDate(e.target.value);
                        handleFilterDate();
                      }}
                      onBlur={() => handleFilterDate()}
                    />
                  </FormControl>
                  {/* <FaLine /> */}
                  <FormControl>
                    <FormLabel>
                      End Date
                    </FormLabel>

                    <Input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      onBlur={() => handleFilterDate()}

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

export default PatientQueue;
