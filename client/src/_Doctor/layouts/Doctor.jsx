/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Button, ButtonGroup, HStack,
  Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack,
} from '@chakra-ui/react';
import {
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { nanoid } from '@reduxjs/toolkit';
import {
  FaAccessibleIcon,
  FaArchive,
  FaBookMedical, FaCalendar, FaCalendarAlt,
  FaRegFileArchive, FaSyringe, FaTablets, FaThermometerEmpty, FaUserTimes,
} from 'react-icons/fa';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import VitalSigns from '../components/VitalSigns';
import { useGetAppointmentQuery } from '../../api/appointments.api';
import InternalRequests from '../components/InternalRequests';
import PatientDetailAdmission from '../../_Patient/layouts/PatientDetailAdmission';
import AppointmentsTab from '../../_Appointment/components/AppointmentsTab';
import ProcedureTab from '../../_Procedure/components/ProcedureTab';
import DiagnosisTab from '../components/DiagnosisTab';
import { useGetAdmissionQuery, useGetAllAdmissionsQuery } from '../../api/admissions.api';

const tabList = [
  {
    id: nanoid(),
    text: 'Admissions',
    icon: <FaBookMedical style={{
      marginBottom: '.2rem',
      marginRight: '.3rem',
    }}
    />,
  },
  {
    id: nanoid(),
    text: 'Appointments',
    icon: <FaCalendarAlt
      style={{
        marginBottom: '.2rem',
        marginRight: '.3rem',
      }}
    />,

  },
  {
    id: nanoid(),
    text: 'Diagnosis',
    icon: <FaSyringe
      style={{
        marginBottom: '.2rem',
        marginRight: '.3rem',
      }}
    />,

  },
  {
    id: nanoid(),
    text: 'Internal Requests',
    icon: <FaUserTimes
      style={{
        marginBottom: '.2rem',
        marginRight: '.3rem',
      }}
    />,

  },
  {
    id: nanoid(),
    text: 'Procedures',
    icon: <FaTablets
      style={{
        marginBottom: '.2rem',
        marginRight: '.3rem',
      }}
    />,

  },
  {
    id: nanoid(),
    text: 'Vital Signs',
    icon: <FaThermometerEmpty style={{
      marginBottom: '.2rem',
      marginRight: '.3rem',
    }}
    />,

  },

];
const Doctor = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useGetAppointmentQuery(id);
  const { data: admissionData } = useGetAdmissionQuery(id);
  console.log(admissionData, 'admData');
  const navigate = useNavigate();

  const patient_id = searchParams.get('patient_id');
  // const { data: appointmentsData } = useGetAppointmentDetailByIDQuery(patient_id);

  const breadCrumbData = [
    {
      id: nanoid(),
      title: 'Patients',
      link: '/patients',
    },
    {
      id: nanoid(),
      title: `${data?.patient_detail?.first_name} ${data?.patient_detail?.middle_name}`,
      link: '/',
      isCurrentPage: true,
    },
  ];

  return (
    <VStack
      h="100vh"
      w="full"
      mt="50px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      spacing="0"
      p={2}
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
          name={`${data?.patient_detail?.first_name} ${data?.patient_detail?.last_name}`}
          size="sm"
          fontWeight="bold"
        />
      </HStack>

      <Tabs
        // bgColor="white"
        color="gray.500"
        // variant="enclosed"
        // border={0}
        // border="0"
        // borderBottom={0}
        _activeStep={{
          fontWeight: 'bold',
        }}
        p="10px"
        w="100%"
        rounded="lg"

      >
        <TabList
          bgColor="white"
          // p={2}
          h="45px"
          // rounded="lg"
        >
          {tabList.map((item) => (
            <Tab
              key={item.id}
              fontSize="14px"
              // p={2}
                // bgColor="white"
              _selected={{
                bgColor: 'white',
                // border: '1px',
                borderColor: 'gray.200',
                borderBottom: '2px',
                color: 'blue.500',
                fontWeight: 'bold',
              }}
              alignItems="center"
              display="flex"
            >
              {item.icon}
              {item.text}
            </Tab>
          ))}

        </TabList>
        <TabPanels>

          {/* patient admission panel */}
          <TabPanel>
            <PatientDetailAdmission data={admissionData} />
          </TabPanel>

          {/* appointments panel */}
          <TabPanel>
            <AppointmentsTab />
          </TabPanel>

          {/* bill exclusion panel */}
          <TabPanel>
            <DiagnosisTab />
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
