/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';

const PatientCard = ({
  text, icon, onClick, selected,
}) => {
  const [step, setStep] = useState(0);
  return (

    <HStack
      onClick={onClick}
      w="full"
      justifyContent="flex-start"
      bgColor={selected ? 'blue.50' : 'white'}
      // borderColor="blue.100"
      p={2}
      h="40px"
      rounded="lg"
      transition="all 1s ease"
      _hover={{
        cursor: 'pointer',
        // colorScheme: 'blue',
        color: 'blue.500',
        bgColor: 'blue.50',
      }}
      color={selected ? 'blue.500' : 'gray.400'}
    >
      {icon}
      <Text
        fontSize="14px"
      // fontWeight="bold"
      >
        {text}
      </Text>
    </HStack>
  );
};

PatientCard.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.node,
  selected: PropTypes.bool,
};

PatientCard.defaultProps = {
  text: '',
  icon: <div />,
  selected: false,
  onClick: () => { },
};

const dataList = [
  {
    id: nanoid(),
    text: 'Treatment',
  },
  {
    id: nanoid(),
    text: 'Anaesthetic',
  },
];

const RecordsTab = () => (
  <HStack
    w="full"
  >
    <VStack
      w="20%"
      spacing={0}
      borderRight="2px"
      borderColor="gray.200"
    >
      {dataList.map((item) => (
        <PatientCard
          key={item.id}
          text={item.text}
        />
      ))}
    </VStack>
  </HStack>
);

export default RecordsTab;
