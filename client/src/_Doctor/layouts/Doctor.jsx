/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button, ButtonGroup, HStack,
  Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack,
} from '@chakra-ui/react';
import {
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment/moment';
import { FaPlus } from 'react-icons/fa';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import VitalSigns from '../components/VitalSigns';
import { useGetAppointmentDetailByIDQuery, useGetAppointmentQuery } from '../../api/appointments.api';
import { useGetInternalPharmacyRequestQuery } from '../../_Pharmacy/api/internalPharmacyRequest.api';
import InternalRequests from '../components/InternalRequests';
import PatientDetailAppointment from '../../_Patient/layouts/PatientDetailAppointment';
import PatientDetailAdmission from '../../_Patient/layouts/PatientDetailAdmission';
import AppointmentsTab from '../../_Appointment/components/AppointmentsTab';
import ProcedureTab from '../../_Procedure/components/ProcedureTab';
import CustomSelect from '../../components/Forms/CustomSelect';

const tabList = [
  { id: nanoid(), text: 'Admissions' },
  { id: nanoid(), text: 'Appointments' },
  { id: nanoid(), text: 'Diagnosis' },
  { id: nanoid(), text: 'Internal Requests' },
  { id: nanoid(), text: 'Procedures' },
  { id: nanoid(), text: 'Vital Signs' },

];
const Doctor = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useGetAppointmentQuery(id);
  const navigate = useNavigate();

  const patient_id = searchParams.get('patient_id');
  const { data: pharmacyRequestData } = useGetInternalPharmacyRequestQuery(patient_id);
  const { data: appointmentsData } = useGetAppointmentDetailByIDQuery(patient_id);

  const breadCrumbData = [
    {
      id: nanoid(),
      title: 'Patients',
      link: '/patients',
    },
    {
      id: nanoid(),
      title: `${data?.patient.first_name} ${data?.patient.middle_name}`,
      link: '/',
      isCurrentPage: true,
    },
  ];

  return (
    <VStack
      h="100vh"
      w="full"
      mt="65px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      spacing="1rem"
      p={3}
    >
      <HStack
        w="full"
        bgColor="white"
      >
        <BreadCrumbNav
          addBtn={false}
          breadCrumbData={breadCrumbData}
        />
        <Avatar
          name={`${data?.patient?.first_name} ${data?.patient?.last_name}`}
          size="sm"
          fontWeight="bold"
        />
      </HStack>

      {/*  */}

      <HStack
        w="full"
        justifyContent="flex-end"
      >
        {/* <CustomSelect
          label="Clinic Type"
        /> */}
        <ButtonGroup>
          <Button
            size="sm"
          >
            Bill Exclusion
          </Button>
          <Button
            size="sm"
          >
            Clinic Type
          </Button>
          <Button
            size="sm"
            bgColor="blue.700"
            color="white"
          >
            Save
          </Button>
        </ButtonGroup>
      </HStack>

      <Tabs
        bgColor="white"
        color="gray.500"
        variant="enclosed"
        _activeStep={{
          fontWeight: 'bold',
        }}
        p="10px"
        w="100%"
        rounded="lg"

      >
        <TabList>
          {tabList.map((item) => (
            <Tab
              key={item.id}
              fontSize="14px"
                // bgColor="white"
              _selected={{
                bgColor: 'white',
                border: '1px',
                borderColor: 'gray.200',
                borderBottom: '0',
                color: 'blue.500',
                fontWeight: 'bold',
              }}
            >
              {item.text}
            </Tab>
          ))}

        </TabList>
        <TabPanels>

          {/* patient admission panel */}
          <TabPanel>
            <PatientDetailAdmission data={appointmentsData} />
          </TabPanel>

          {/* appointments panel */}
          <TabPanel>
            <AppointmentsTab />
          </TabPanel>

          {/* bill exclusion panel */}
          <TabPanel>
            <Text>Diagnosis</Text>
          </TabPanel>

          {/* internal lab requests panel */}
          <TabPanel>
            <InternalRequests />
          </TabPanel>

          {/* procedure panel */}
          <TabPanel>
            <ProcedureTab />
          </TabPanel>

          {/* vital signs panel */}
          <TabPanel>
            <VitalSigns data={data} />
          </TabPanel>
        </TabPanels>
      </Tabs>

    </VStack>
  );
};

export default Doctor;
