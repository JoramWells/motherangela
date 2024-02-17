/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box, Button, Collapse, Divider, HStack, IconButton, Text, VStack, useDisclosure,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaChevronRight, FaEdit, FaTrashAlt } from 'react-icons/fa';
import moment from 'moment/moment';
import { deleteAdmission } from '../../_reducers/admissionSlice';
// import { useFetchApi } from '../hooks/useFecthApi';
import { getAppointmentDetail } from '../../_reducers/appointmentSlice';

const HorizontalStack = ({ title, text }) => (
  <HStack
    alignItems="center"
    w="full"
    justifyContent="space-between"
    p={3}
    _hover={{
      cursor: 'pointer',
      bgColor: 'gray.50',
      border: '1px',
      borderColor: 'gray.100',
      rounded: 'xl',
    }}
  >
    <Text
      fontSize="xl"
      color="gray.500"
    >
      {title}

    </Text>
    <Text
      fontSize="xl"
      fontWeight="semibold"
    >
      {text}

    </Text>
  </HStack>
);

const AppointmentDetail = () => {
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.appointments);
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isOpen: isOpenTest1, isOpen: isOpenTest2,
    onToggle: onToggleTest1, onToggle: onToggleTest2,
  } = useDisclosure();

  useEffect(() => {
    dispatch(getAppointmentDetail(id));
  }, [dispatch, id]);

  // const results = useFetchApi(`http://localhost:5000/patient/detail/${data.patient_id}`);
  console.log(data);
  return (
    <VStack
      h="100vh"
      w="full"
      mt="55px"
      bgColor="gray.100"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <Box w="full">
        {loading ? <Text>loading...</Text>
          : (
            <HStack
              w="full"
              p={3}
              alignItems="flex-start"
            >

              <Box
                bgColor="white"
                rounded="2xl"
                // w="350px"
                flex={1}
                border="1px"
                borderColor="gray.100"
              >
                <HStack
                  w="full"
                  justifyContent="space-between"
                  p={2}
                  bgGradient="linear(to-l, gray.200, gray.300)"
                  // bgGradient="linear(to-l, cyan.300,cyan.400)"
                  roundedTopEnd="2xl"
                  roundedTopLeft="2xl"
                  // color="white"
                >
                  <Text
                    fontSize="2xl"
                    fontWeight="semibold"
                    color="blue.900"
                  >
                    Appointment Details
                  </Text>

                  <IconButton
                    size="lg"
                    rounded="full"
                  >
                    <FaEdit color="gray" />
                  </IconButton>
                </HStack>
                <Divider />

                <VStack
                  p={1}
                  w="full"
                  alignItems="flex-start"
                  // ml={8}
                  // mr={8}
                >
                  <HorizontalStack title="Admission Status" text={data.admission_status} />
                  <HorizontalStack title="Account Type" text={data.account_type?.account_type_description} />
                  <HorizontalStack title="Appointment Status" text={data.appointment_status} />
                  <HorizontalStack title="Charges" text={`${data.charges} KSH`} />

                  <HorizontalStack title="Appointment Date" text={moment(new Date(data.appointment_date)).format('LL')} />

                  <HStack w="full" justifyContent="flex-end" p={2}>
                    <Button
                      colorScheme="red"
                      leftIcon={<FaTrashAlt />}
                      size="lg"
                      onClick={() => {
                        dispatch(deleteAdmission(id));
                        if (data === 'OK') {
                          navigate('/admissions');
                        }
                      }}
                    >
                      {loading ? 'Loading..' : 'Delete'}

                    </Button>
                  </HStack>

                </VStack>

                {/*  */}
              </Box>
              <Box
                flex={1}
                bgColor="blue.50"
                rounded="xl"
                // border="1px"
                // borderColor="blue.500"
                boxShadow="sm"
              >
                {/* header */}
                <HStack
                  w="full"
                  justifyContent="space-between"
                  p={3}
                  roundedTopEnd="xl"
                  roundedTopLeft="xl"
                  bgGradient="linear(to-l, blue.50, blue.100)"
                >
                  <Text
                    fontSize="2xl"
                    fontWeight="semibold"
                    color="blue.800"
                  >
                    Diagnosis
                  </Text>

                  <IconButton
                    size="lg"
                    rounded="full"
                    boxShadow="sm"
                  >
                    <FaEdit color="gray" />
                  </IconButton>
                </HStack>
                <Divider />

                <HorizontalStack title="BMI" text={data?.body_mass_index} />
                <HorizontalStack
                  title="Diastolic"
                  text={data.diastolic}
                />

                {/* 1 */}
                <Box>
                  <HStack
                    w="full"
                    justifyContent="space-between"
                    p={3}
                    onClick={onToggleTest1}
                  >
                    <Text fontSize="xl" color="gray.500">Diastolic</Text>
                    <IconButton>
                      <FaChevronRight />
                    </IconButton>
                  </HStack>
                  <Collapse mt={4} in={isOpenTest1}>
                    <HStack p={4} w="full" justifyContent="space-between">
                      <Text>Test 1</Text>
                      <Text>0</Text>
                    </HStack>
                    <HStack p={4} w="full" justifyContent="space-between">
                      <Text>Test 2</Text>
                      <Text>0</Text>
                    </HStack>
                  </Collapse>
                </Box>

              </Box>
            </HStack>
          )}
      </Box>

    </VStack>
  );
};

export default AppointmentDetail;
