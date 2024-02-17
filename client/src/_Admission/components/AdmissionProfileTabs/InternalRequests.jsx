/* eslint-disable camelcase */
import {
  Box,
  Button, HStack,
  Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useGetInternalPharmacyRequestQuery } from '../../../_Pharmacy/api/internalPharmacyRequest.api';
import { useGetInternalLabRequestQuery } from '../../../api/internalLabRequests.api';
import LabRequestsCard from '../../../_Doctor/components/LabRequestsCard';
import PharmacyRequestsCard from '../../../_Doctor/components/PharmacyRequestsCard';

const tabList = [
  { id: nanoid(), text: 'Radiology' },
  { id: nanoid(), text: 'Lab' },
  { id: nanoid(), text: 'Pharmacy' },
  { id: nanoid(), text: 'Physiotherapy' },

];

const InternalRequests = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const patient_id = searchParams.get('patient_id');

  const { data: pharmacyRequestData } = useGetInternalPharmacyRequestQuery(patient_id);
  const { data: labRequestData } = useGetInternalLabRequestQuery(patient_id);
  console.log(labRequestData);

  return (
    <VStack
            // bgColor="green"
      p={3}
      w="full"
    >
      <Box
        width="45%"
        rounded="lg"
        bgColor="white"
        border="1px"
        borderColor="gray.200"
      >
        <Tabs
                    // isFitted
                    // bgColor="white"
          variant="unstyled"
          alignItems="flex-start"
          justifyContent="center"
        >
          <TabList
            color="gray.500"
            p={3}
          >
            {tabList.map((item) => (
              <Tab
                key={item.id}
                fontWeight="semibold"
                rounded="lg"
                bgColor="gray.50"
                mb={2}
                m={1}
                fontSize="sm"
                _selected={{
                  // bgGradient: 'linear(to-r,blue.500, blue.400)',
                  color: 'white',
                  // border: '2px',
                  // borderColor: 'gray.500',
                  // color: 'blue.500',
                  bgColor: 'gray.700',
                }}
              >
                {item.text}

              </Tab>

            ))}

          </TabList>

          <TabPanels>

            <TabPanel>

              <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  color="gray.600"
                  fontWeight="bold"
                  fontSize="14px"
                >
                  Radiology
                </Text>
                <Button
                  leftIcon={<FaPlus />}
                  variant="outline"
                  colorScheme="blue"
                  size="sm"
                  onClick={() => navigate({
                    pathname: `/add-radiology-request/${id}`,
                    search: `?patient_id=${patient_id}`,
                  })}
                >
                  New

                </Button>
              </HStack>

            </TabPanel>

            <TabPanel>
              <VStack
                justifyContent="center"
                alignItems="center"
              >
                <HStack
                  w="full"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    color="gray.700"
                    fontWeight="bold"
                    fontSize="14px"
                  >
                    Lab Requests
                  </Text>
                  <Button
                    leftIcon={<FaPlus />}
                    variant="outline"
                    colorScheme="blue"
                    size="sm"
                    onClick={() => navigate({
                      pathname: `/add-lab-request/${id}`,
                      search: `?patient_id=${patient_id}`,
                    })}
                  >
                    New

                  </Button>
                </HStack>
                {labRequestData?.length > 0 ? (
                  <>
                    <HStack />
                    {labRequestData?.map((item) => (
                      <LabRequestsCard
                        item={item}
                        key={item.id}
                      />
                    ))}
                  </>
                )
                  : (
                    <VStack>
                      <Text>No Recent Pharmacy Requests</Text>
                    </VStack>
                  )}
              </VStack>
            </TabPanel>
            <TabPanel>
              {/* <Button
                  colorScheme="blue"
                  color="white"
                  border="2px"
                  borderColor="white"
                  _hover={{
                    bgColor: 'blue.500',
                  }}
                  leftIcon={<FaPlus />}
                  rounded="lg"
                  onClick={() => navigate({
                    pathname: `/add-pharmacy-request/${id}`,
                    search: `?patient_id=${data?.patient_id}`,
                  })}
                >
                  Add New

                </Button> */}

              <VStack
                justifyContent="center"
                alignItems="center"
              >
                <HStack
                  w="full"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    color="gray.700"
                    fontWeight="bold"
                  >
                    Pharmacy Requests
                  </Text>
                  <Button
                    leftIcon={<FaPlus />}
                    variant="outline"
                    colorScheme="blue"
                    size="sm"
                    onClick={() => navigate({
                      pathname: `/add-pharmacy-request/${id}`,
                      search: `?patient_id=${patient_id}`,
                    })}
                  >
                    New

                  </Button>
                </HStack>
                {pharmacyRequestData?.length > 0 ? (
                  <>
                    <HStack />
                    {pharmacyRequestData?.map((item) => (
                      <PharmacyRequestsCard
                        item={item}
                        key={item.id}
                      />
                    ))}
                  </>
                )
                  : (
                    <VStack>
                      <Text>No Recent Pharmacy Requests</Text>
                    </VStack>
                  )}

              </VStack>

              {/* pharmacy */}
            </TabPanel>

            {/* diagnosis */}
            <TabPanel>
              <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  color="gray.700"
                  fontWeight="bold"
                >
                  Physiotherapy
                </Text>
                <Button
                  leftIcon={<FaPlus />}
                  variant="outline"
                  colorScheme="blue"
                  size="sm"
                  onClick={() => navigate({
                    pathname: `/add-patient-procedure/${id}`,
                    search: `?patient_id=${patient_id}`,
                  })}
                >
                  New

                </Button>
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

export default InternalRequests;
