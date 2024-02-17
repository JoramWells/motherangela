/* eslint-disable react/prop-types */
import {
  Accordion, AccordionButton, AccordionIcon,
  AccordionItem, AccordionPanel, HStack, Tag, Text, VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const PharmacyRequestsCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <HStack
      border="1px"
      borderColor="gray.200"
      rounded="xl"
      w="xl"
      p={3}
            // as={Button}
      bgColor="gray.50"
      _hover={{
        bgColor: 'gray.50',
      }}
      onClick={() => navigate('pharmacy-drugs-requested')}
    >
      <VStack alignItems="flex-start" w="full">
        <Accordion
          allowToggle
          w="100%"
        >
          <AccordionItem
            border={0}
          >
            <AccordionButton justifyContent="space-between">
              <Text
                fontWeight="bold"
                color="gray.600"
                fontSize="14px"
              >
                {item.medication?.medication_name}

              </Text>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel>
              <HStack
                w="full"
                justifyContent="space-between"
              >
                <Text color="gray.500">Quantity</Text>
                <Text>{item.quantity}</Text>

              </HStack>

              {/* term */}
              <HStack
                w="full"
                justifyContent="space-between"
                mt={1}
              >
                <Text color="gray.500">Prescription Term</Text>
                <Text>{item.prescription_term}</Text>

              </HStack>

              {/* days */}
              <HStack
                w="full"
                justifyContent="space-between"
                mt={1}
              >
                <Text color="gray.500">No. of days</Text>
                <Text>{item.number_of_days}</Text>

              </HStack>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
        <VStack
          alignItems="flex-start"
          pl={4}
          w="full"
          pr={4}
        >

          <HStack
            w="full"
            justifyContent="space-between"
          >
            <Text
              color="gray.500"
              fontWeight="bold"
              fontSize="12px"
            >
              Cost
              {' '}
            </Text>
            <Text
              fontSize="14px"
              fontWeight="bold"
              color="gray.600"
            >
              KSH
              {' '}
              {item.cost}
              {' '}
              /=

            </Text>
          </HStack>

          <HStack w="full" justifyContent="space-between">
            <Text
              color="gray.500"
              fontWeight="bold"
              fontSize="12px"

            >
              Paid
            </Text>

            {item.pay_status === 1 ? (
              <Tag
                colorScheme="green"
                size="sm"
              >
                PAID
              </Tag>
            ) : (
              <Tag
                colorScheme="red"
                size="sm"
              >
                UNPAID
              </Tag>
            )}
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default PharmacyRequestsCard;
