/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { HStack, Text, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import AddMedications from '../components/medication/AddMedications';
import AddWard from '../components/ward/AddWard';
import AddService from '../components/servicess/AddService';
import AddDiseases from '../components/diseases/AddDiseases';
import AddInsurance from '../components/insurance/AddInsurance';
import { useGetDiseasesDuplicatesQuery } from '../../api/diseasesDuplicates.api';
import { useGetInsuranceQuery } from '../../api/insurance.api';

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
      color={selected ? 'blue.500' : 'gray.700'}
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
    text: 'Service',
  },
  {
    id: '5',
    text: 'Supplier',
  },
  {
    id: '6',
    text: 'Ward',
  },
];

const RegisterItems = () => {
  const [sideItem, setSideItem] = useState(0);
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const stepSearch = searchParams.get('step');
  const diseaseID = searchParams.get('disease_id');
  const insurance_id = searchParams.get('insurance_id');

  const navigate = useNavigate();

  const { data: insuranceData } = useGetInsuranceQuery(insurance_id);

  console.log(insuranceData, 'innnsdaa');

  const handleSetSideItem = useCallback((step) => {
    setSideItem(step);
    console.log(step, 'nav');

    // Check insurance id
    if (insurance_id) {
      navigate({
        pathname: '/register-items',
        search: `?step=2&insurance_id=${insurance_id}`,
      });
    }
    setSearchParams({ step });
  }, [setSideItem, setSearchParams, insurance_id, navigate]);

  useEffect(() => {
    if (!stepSearch) {
      handleSetSideItem(0);
    }
    // handleSetSideItem(stepSearch);
  }, [stepSearch, handleSetSideItem]);

  return (
    <VStack
      alignItems="center"
      w="full"
      mt="50px"
      p={3}
      bgColor="white"
    >
      <BreadCrumbNav />
      <HStack
        w="full"
        alignItems="flex-start"
        spacing={0}
      >
        <VStack
          bgColor="white"
          w="17%"
          // rounded="lg"
          borderRight="1px"
          borderColor="gray.200"
          p={2}
          alignItems="flex-start"
          spacing={0}
          h="100vh"
          position="sticky"
          top={0}
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

        {sideItem === 0 && (
        <AddDiseases />
        )}
        {sideItem === 2 && (
        <AddInsurance
          insuranceData={insuranceData}
        />
        )}
        {sideItem === 3 && <AddMedications />}
        {sideItem === 4 && <AddService />}
        {sideItem === 6 && <AddWard />}
      </HStack>
    </VStack>
  );
};

export default RegisterItems;
