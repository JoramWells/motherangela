/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar, Box, Button, Divider, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import {
  useLocation, useNavigate, useParams, useSearchParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import {
  FaAddressBook, FaCalendar, FaChartLine, FaCreditCard, FaEdit, FaFileInvoice, FaUser,
} from 'react-icons/fa';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import Step2 from '../components/Step2';
import { useGetPatientQuery } from '../../api/patients.api';
import PaymentCard from '../components/PaymentCard';
import Medical from '../components/Medical';
import EditDeletePatientModal from '../components/EditDeletePatientModal';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import AppointmentCard from '../components/AppointmentCard';

const PatientCard = ({
  text, icon, onClick, selected,
}) => {
  const [step, setStep] = useState(0);
  return (

    <HStack
      onClick={onClick}
      w="full"
      justifyContent="flex-start"
      bgColor={selected ? 'blue.50' : 'whitesmoke'}
      // border={selected && '1px'}
      // borderColor="blue.100"
      p={4}
      rounded="lg"
      transition="all 1s ease"
      _hover={{
        cursor: 'pointer',
        // colorScheme: 'blue',
        color: 'blue.500',
        bgColor: 'blue.50',
      }}
      color={selected ? 'blue.500' : 'blue.700'}
    >
      {icon}
      <Text>
        {text}
      </Text>
    </HStack>
  );
};

PatientCard.propTypes = {
  selected: PropTypes.bool,
};

PatientCard.defaultProps = {
  selected: false,
};

const profileData = [
  {
    id: '0',
    text: 'Medical History',
    icon: <FaChartLine />,
  },
  {
    id: '1',
    text: 'Admissions',
    icon: <FaAddressBook />,
  },
  {
    id: '2',
    text: 'Appointments',
    icon: <FaCalendar />,
  },
  {
    id: '3',
    text: 'Invoices',
    icon: <FaFileInvoice />,
  },
  {
    id: '4',
    text: 'Payments',
    icon: <FaCreditCard />,
  },
];

const PatientDetail = () => {
  const [sideItem, setSideItem] = useState(0);
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const stepSearch = searchParams.get('step');
  const dispatch = useDispatch();

  const { data, isLoading } = useGetPatientQuery(id);

  const breadCrumbData = [
    {
      id: nanoid(),
      title: 'Patients',
      link: '/patients',
    },
    {
      id: nanoid(),
      title: `${data?.first_name} ${data?.last_name}`,
      link: '/',
      isCurrentPage: true,
    },
  ];

  const handleSetSideItem = useCallback((step) => {
    setSideItem(step);
    navigate({
      pathname,
      search: `?step=${step}`,
    });
  }, [setSideItem, navigate, pathname]);

  // const date = `${data.day_of_birth}/${data.month_of_birth}/${data.dob}`;

  return (
    <VStack
      h="100vh"
      w="full"
      mt="65px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <BreadCrumbNav addBtn={false} breadCrumbData={breadCrumbData} />
      {isLoading ? <Text>loading...</Text> : (
        <HStack
          w="full"
          alignItems="flex-start"
        >
          <VStack
            w="md"
            bgColor="white"
            rounded="xl"
            p={5}
            spacing={6}
            border="1px"
            borderColor="gray.200"
            // boxShadow="md"
            // mt={8}
          >
            <Avatar
              name={`${data?.first_name} ${data?.last_name}`}
              size="lg"
              color="white"
            />
            <VStack spacing={2}>
              <Text
                textTransform="capitalize"
                fontWeight="bold"
              >
                {`${data?.first_name} ${data?.middle_name} ${data?.last_name}`}

              </Text>
              <Text color="gray.500">{data?.id_number}</Text>
              <Text>
                {data?.cell_phone}
                {' '}
                {sideItem}
              </Text>
            </VStack>

            <Button
              leftIcon={<FaEdit />}
              size="sm"
              colorScheme="blue"
              variant="link"
              onClick={() => navigate({
                pathname: `/add-patient/${id}`,
                search: '?step=personal',
              })}
            >
              Edit Profile
            </Button>

            <VStack w="full" spacing={4}>
              {profileData.map((item, idx) => (
                <PatientCard
                  key={item.id}
                  icon={item.icon}
                  text={item.text}
                  onClick={() => handleSetSideItem(idx)}
                  selected={stepSearch === item.id}
                />
              ))}
              <EditDeletePatientModal
                firstName={data?.first_name}
                middleName={data?.middle_name}
                lastName={data?.last_name}
                idNumber={data?.id_number}
              />
            </VStack>
          </VStack>
          {sideItem === 0 && <Medical />}
          {sideItem === 1 && <Step2 />}
          {sideItem === 2 && <AppointmentCard />}
          {sideItem === 4 && <PaymentCard />}

        </HStack>
      )}

    </VStack>
  );
};

export default PatientDetail;
