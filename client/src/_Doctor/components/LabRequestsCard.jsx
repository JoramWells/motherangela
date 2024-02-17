/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Accordion, AccordionButton, AccordionIcon,
  AccordionItem, AccordionPanel, Badge, HStack, Tag, Text, VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LabRequestsCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <HStack
      // border="1px"
      // borderColor="gray.200"
      rounded="xl"
      w="xl"
      p={3}
            // as={Button}
      bgColor="gray.50"
      _hover={{
        bgColor: 'gray.50',
      }}
      // onClick={() => navigate('pharmacy-drugs-requested')}
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
                {item.procedure_detail?.procedure_name}

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
                <Text color="gray.500">Results</Text>
                <Text>{item?.results}</Text>

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

            {item.status === 1 ? (
              <Badge
                colorScheme="green"
                size="sm"
                fontWeight="bold"
              >
                PAID
              </Badge>
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

export default LabRequestsCard;
