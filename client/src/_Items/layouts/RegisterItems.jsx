/* eslint-disable no-unused-vars */
import { HStack, Text, VStack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import AddMedications from '../components/medication/AddMedications';

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
  text: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.node,
  selected: PropTypes.bool,
};

PatientCard.defaultProps = {
  text: '',
  icon: <div />,
  selected: false,
  onClick: () => {},
};

const profileData = [
  {
    id: 0,
    text: 'Disease',
  },
  {
    id: '1',
    text: 'Expense Category',
  },
  {
    id: '2',
    text: 'Insurance Company',
  },
  {
    id: '3',
    text: 'Medication',
  },
  {
    id: '4',
    text: 'Medication Category',
  },
  {
    id: '5',
    text: 'Medication Package Type',
  },
  {
    id: '6',
    text: 'Medication Purchase',
  },
  {
    id: '7',
    text: 'Prescription Type',
  },
  {
    id: '8',
    text: 'Service',
  },
  {
    id: '9',
    text: 'Service Type',
  },
  {
    id: '10',
    text: 'Supplier',
  },
  {
    id: '11',
    text: 'Ward',
  },
  {
    id: '12',
    text: 'Ward Bed',
  },
  {
    id: '13',
    text: 'Ward Category',
  },
  {
    id: '14',
    text: 'Ward Type',
  },
];

const RegisterItems = () => {
  const [sideItem, setSideItem] = useState(0);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const stepSearch = searchParams.get('step');
  const navigate = useNavigate();

  const handleSetSideItem = useCallback((step) => {
    setSideItem(step);
    navigate({
      pathname,
      search: `?step=${step}`,
    });
  }, [setSideItem, navigate, pathname]);

  return (
    <VStack
      alignItems="center"
      w="full"
      mt="50px"
      p={3}
    >
      <BreadCrumbNav />
      <HStack
        w="full"
        alignItems="flex-start"
      >
        <VStack
          bgColor="white"
          w="250px"
          rounded="lg"
          border="1px"
          borderColor="gray.200"
          p={2}
          alignItems="flex-start"
        >
          {profileData.map((item) => (
            <PatientCard
              key={item.id}
              text={item.text}
              onClick={() => handleSetSideItem(parseInt(item.id, 10))}
              selected={parseInt(stepSearch, 10) === parseInt(item.id, 10)}
            />
          ))}
        </VStack>

        {sideItem === 3 && <AddMedications />}
      </HStack>
    </VStack>
  );
};

export default RegisterItems;
