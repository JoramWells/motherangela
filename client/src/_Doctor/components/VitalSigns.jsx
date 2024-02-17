/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
// import { useParams } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text, VStack, Tag, HStack, Badge,
} from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';
import { useGetAppointmentQuery } from '../../api/appointments.api';

/* eslint-disable no-unused-vars */
const VitalSigns = ({ data }) => (
  <VStack w="full" alignItems="center">
    <HStack
      p={2}
      w="2xl"
      bgColor="white"
    >
      <Text
        fontWeight="semibold"
        fontSize="16px"
        color="gray.700"
      >
        Patient Vitals

      </Text>

    </HStack>

    {data && data.length > 0
      ? (
        <TableContainer
          border="1px"
          rounded="lg"
          borderColor="gray.200"
          p={2}
          bgColor="white"
        >
          <Table variant="simple" color="gray.800">
            <Thead>
              <Tr>
                <Th fontSize="normal">Vital Sign</Th>
                <Th fontSize="normal">UNIT</Th>
                <Th fontSize="normal">Normal Values</Th>
                <Th fontSize="normal">Value</Th>
                <Th fontSize="normal">Flags</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Temperature</Td>
                <Td>°C</Td>
                <Td>35.5-37.5</Td>
                <Td>{data?.temperature}</Td>
                <Td>
                  {data?.temperature > 37.5 || data?.temperature < 35.5
                    ? <Badge size="sm" colorScheme="red">NOT NORMAL</Badge> : <Badge size="sm" colorScheme="green">NORMAL</Badge>}

                </Td>

              </Tr>

              {/* pulse */}
              <Tr>
                <Td>Pulse Rate</Td>
                <Td>Beats/min</Td>
                <Td>60 - 90</Td>
                <Td>{data?.pulse_rate}</Td>
                <Td>
                  {data?.pulse_rate > 90 || data?.pulse_rate < 60
                    ? <Badge size="sm" colorScheme="red">NOT NORMAL</Badge> : <Badge size="sm" colorScheme="green">NORMAL</Badge>}

                </Td>

              </Tr>

              {/* resp */}
              <Tr>
                <Td>Pulse Rate</Td>
                <Td>Breath/min</Td>
                <Td>18 - 30</Td>
                <Td>{data?.respiratory_rate}</Td>
                <Td>
                  {data?.respiratory_rate > 30 || data?.respiratory_rate < 18
                    ? <Badge size="sm" colorScheme="red">NOT NORMAL</Badge> : <Badge size="sm" colorScheme="green">NORMAL</Badge>}

                </Td>

              </Tr>

              {/* systolic */}
              <Tr>
                <Td>Systolic</Td>
                <Td>mmHg</Td>
                <Td>90 - 140</Td>
                <Td>{data?.systolic}</Td>
                <Td>
                  {data?.systolic > 140 || data?.systolic < 90
                    ? <Badge size="sm" colorScheme="red">NOT NORMAL</Badge> : <Badge size="sm" colorScheme="green">NORMAL</Badge>}

                </Td>
              </Tr>

              {/* diastolic */}
              <Tr>
                <Td>Diastolic</Td>
                <Td>mmHg</Td>
                <Td>50 - 90</Td>
                <Td>{data?.diastolic}</Td>
                <Td>
                  {data?.diastolic > 90 || data?.diastolic < 50
                    ? <Badge size="sm" colorScheme="red">NOT NORMAL</Badge> : <Badge size="sm" colorScheme="green">NORMAL</Badge>}

                </Td>
              </Tr>

              {/* weight */}
              <Tr>
                <Td>Weight</Td>
                <Td>Kilograms</Td>
                <Td>0 - 100</Td>
                <Td>{data?.weight}</Td>
                <Td>
                  {data?.weight > 100 || data?.weight < 0
                    ? <Badge size="sm" colorScheme="red">NOT NORMAL</Badge> : <Badge size="sm" colorScheme="green">NORMAL</Badge>}

                </Td>
              </Tr>

              {/* height */}
              <Tr>
                <Td>Height</Td>
                <Td>Metres</Td>
                <Td>0 - 2</Td>
                <Td>{data?.height}</Td>
              </Tr>

              {/* bmi */}
              <Tr>
                <Td>Body Mass Index</Td>
                <Td>kg/m²</Td>
                <Td>18.5 - 25</Td>
                <Td>{data?.bmi}</Td>
                <Td>
                  {data?.bmi > 18.5 || data?.bmi < 25
                    ? <Badge size="sm" colorScheme="red">NOT NORMAL</Badge> : <Badge size="sm" colorScheme="green">NORMAL</Badge>}

                </Td>
              </Tr>

              {/* sp02 */}
              <Tr>
                <Td>sp02</Td>
                <Td>%</Td>
                <Td>85 - 100</Td>
                <Td>{data?.sp02}</Td>
                <Td>
                  {data?.sp02 > 100 || data?.sp02 < 85
                    ? <Badge size="sm" colorScheme="red">NOT NORMAL</Badge> : <Badge size="sm" colorScheme="green">NORMAL</Badge>}

                </Td>
              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <VStack
          w="2xl"
          bgColor="orange.50"
          borderLeft="4px"
          borderColor="orange.500"
          h="120px"
          p={4}
          alignItems="flex-start"
          rounded="md"
          justifyContent="center"
          color="orange.600"
        >
          <HStack
            alignItems="flex-start"
          >
            <FaInfoCircle
              size={15}
              style={{
                marginTop: '3px',
              }}
            />
            <VStack
              alignItems="flex-start"
            >
              <Text
                fontSize="16px"
                fontWeight="bold"
                color="orange.600"
              >
                Add patient details

              </Text>
              <HStack>
                <Text
                  fontSize="14px"
                  color="gray.500"
                  // fontWeight="bold"
                >
                  This patient has no recent vital signs.

                </Text>
                <Text
                  fontWeight="bold"
                  textDecoration="underline"
                  fontSize="14px"
                  color="orange.500"
                >
                  Go Here.

                </Text>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      )}
  </VStack>
);
export default VitalSigns;
