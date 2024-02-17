/* eslint-disable react/prop-types */
import {
  HStack, Text, VStack, Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';
import { useGetCreditPaymentQuery } from '../api/creditPayment.api';
import BreadCrumbNav from '../components/BreadCrumbNav';

const ChargesDetail = () => {
  const { id } = useParams();
  const { data } = useGetCreditPaymentQuery(id);

  console.log(data);

  return (
    <VStack
      h="100vh"
      w="full"
      mt="55px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <VStack w="full" p={3} bgColor="white">
        <BreadCrumbNav />

        <HStack
          w="full"
          p={4}
          justifyContent="space-between"
        >
          <Text>
            {data?.clinic_name}
          </Text>
          <Text>{moment(data?.date_of_invoice).format('LL')}</Text>

        </HStack>

        {/* start of table 1 */}

        <HStack w="95%" fontWeight="semibold" fontSize="xl" mt={5}>
          <Text>
            Consultation, Procedures, Lab & Radiology Charges
          </Text>
        </HStack>
        <TableContainer
          w="95%"
          mt={5}
          border="1px"
          rounded="xl"
          borderColor="gray.200"
          p={3}
        >
          <Table variant="simple" size="md">
            <Thead>
              <Tr fontSize="lg">
                <Th fontSize="lg">Service</Th>
                <Th fontSize="lg">Quantity</Th>
                <Th fontSize="lg">Amount</Th>
                <Th fontSize="lg">Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{data?.service_desc}</Td>
                <Td>1</Td>
                <Td>{data?.amount}</Td>
                <Td>{data?.total_invoice_amount}</Td>
              </Tr>
            </Tbody>

          </Table>
        </TableContainer>

        {/* start of table 2 */}
        <HStack w="95%" fontWeight="semibold" fontSize="xl" mt={5}>
          <Text>
            Vaccines & Medication Charges
          </Text>
        </HStack>
        <TableContainer
          w="95%"
          mt={5}
          border="1px"
          rounded="xl"
          borderColor="gray.200"
          p={3}
        >
          <Table variant="simple" size="md">
            <Thead>
              <Tr fontSize="lg">
                <Th fontSize="lg">Medication/Vaccine</Th>
                <Th fontSize="lg">Cost</Th>
                <Th fontSize="lg">Quantity</Th>
                <Th fontSize="lg">Total</Th>
              </Tr>
            </Thead>
          </Table>
        </TableContainer>
      </VStack>
    </VStack>
  );
};

export default ChargesDetail;
