/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Theatre from '../theatre/Theatre';
import Meal from '../meal/Meal';
import Miscellaneous from '../miscelleneous/Miscellenous';

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
    id: 0,
    text: 'Set Inpatient Bill Limit',
  },
  {
    id: 1,
    text: 'Miscellaneous',
  },
  {
    id: 2,
    text: 'Theatre',
  },
  {
    id: 3,
    text: 'Meal',
  },
];

const BillsTab = () => {
  const navigate = useNavigate();
  const [sideItem, setSideItem] = useState(0);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const stepSearch = searchParams.get('step');

  const handleSetSideItem = useCallback((step) => {
    setSideItem(step);
    navigate({
      pathname,
      search: `?step=${step}`,
    });
  }, [setSideItem, navigate, pathname]);
  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <VStack
        w="20%"
        spacing={0}
        borderRight="1px"
        borderColor="gray.200"
        padding="5px"
      >
        {dataList.map((item) => (
          <PatientCard
            key={item.id}
            text={item.text}
            onClick={() => handleSetSideItem(parseInt(item.id, 10))}
            selected={parseInt(stepSearch, 10) === parseInt(item.id, 10)}
          />
        ))}
      </VStack>
      {sideItem === 1 && <Miscellaneous />}
      {sideItem === 2 && <Theatre />}
      {sideItem === 3 && <Meal />}

    </HStack>
  );
};

export default BillsTab;
