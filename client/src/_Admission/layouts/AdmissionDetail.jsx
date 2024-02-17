/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar, Box, Button, Divider, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import moment from 'moment/moment';
// import { deleteAdmission, getAdmissionDetail } from '../../_reducers/admissionSlice';
// import { getAdmissionType } from '../../_reducers/admissionTypeSlice';
import { useFetchApi } from '../../hooks/useFecthApi';

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

const AdmissionDetail = () => {
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.admission);
  const patientData = useSelector((state) => state.patients.data);
  const admissionTypeData = useSelector((state) => state.admissionType.data);

  const dispatch = useDispatch();

  // const getPatientInfo = useCallback((patientId) => {
  //   if (patientId) {
  //     dispatch(getAdmissionType(patientId));
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getAdmissionDetail(id));
  // }, []);

  const gy = 37627;
  const navigate = useNavigate();

  const results = useFetchApi(`http://localhost:5000/patient/detail/${data.patient_id}`);
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
                    Admission Details
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
                  <HorizontalStack title="Admission Category" text={data.admission_category?.admission_category_description} />
                  <HorizontalStack title="Admission Charge" text={`${data.admission_charge}KSH`} />

                  <HorizontalStack title="Admission Date" text={moment(new Date(data.admission_date)).format('LL')} />
                  <HorizontalStack title="Admission Type" text={data.admission_type_id} />

                  <HStack w="full" justifyContent="flex-end" p={2}>
                    <Button
                      colorScheme="red"
                      leftIcon={<FaTrashAlt />}
                      size="lg"
                      onClick={() => {
                        // dispatch(deleteAdmission(id));
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
                bgColor="white"
                rounded="3xl"
                border="1px"
                borderColor="gray.200"
              >
                {/* header */}
                <HStack
                  w="full"
                  justifyContent="space-between"
                  p={3}
                  roundedTopEnd="3xl"
                  roundedTopLeft="3xl"
                  bgColor="gray.200"
                >
                  <Text
                    fontSize="2xl"
                    fontWeight="semibold"
                  >
                    Hospital Details
                  </Text>

                  <IconButton
                    size="lg"
                    rounded="full"
                    boxShadow="sm"
                  >
                    <FaEdit color="gray" />
                  </IconButton>
                </HStack>
                <HorizontalStack title="Doctor" text={data.doctor_id} />
                <HorizontalStack
                  title="Daily Doctor Ward Round Charges"
                  text={data.bill_daily_doctor_ward_round_charges}
                />

              </Box>
            </HStack>
          )}
      </Box>

    </VStack>
  );
};

export default AdmissionDetail;
