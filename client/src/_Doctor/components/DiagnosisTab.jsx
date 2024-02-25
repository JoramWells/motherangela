/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {
  Divider,
  FormControl, FormLabel, HStack, Input, Text, Textarea, VStack,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import GeneralExaminationTab from './diagnosises/GeneralExaminationTab';
import SystemicExaminationTab from './diagnosises/SystemicExaminationTab';
import InvestigationTab from './diagnosises/InvestigationTab';
import FinalDiagnosisTab from './diagnosises/FinalDiagnosisTab';
import TreatmentTab from './diagnosises/TreatementTab';
import FollowUpReviewTab from './diagnosises/FollowUpReviewTab';

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
  onClick: () => { },
};

const diagnosisData = [
  {
    id: 0,
    text: 'General Examination',
  },
  {
    id: '1',
    text: 'Systemic Examination',
  },
  {
    id: '2',
    text: 'Investigation',
  },
  {
    id: '3',
    text: 'Final Diagnosis',
  },
  {
    id: '4',
    text: 'Treatment,Recommendation & Management',
  },
  {
    id: '5',
    text: 'Follow Up/Review',
  },
];

const DiagnosisTab = () => {
  const [sideItem, setSideItem] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const patient_id = searchParams.get('patient_id');
  const stepSearch = searchParams.get('step');

  const handleSetSideItem = useCallback((step) => {
    setSideItem(step);
    console.log(step, 'nav');
    navigate({
      pathname,
      search: `?patient_id=${patient_id}&step=${step}`,
    });
  }, [setSideItem, pathname, navigate, patient_id]);
  return (
    <HStack
      bgColor="white"
      p={5}
      rounded="lg"
      alignItems="flex-start"
      spacing={4}
    >

      <VStack
        w="23%"
        border="1px"
        borderColor="gray.200"
        bgColor="gray.50"
        rounded="lg"
        p={2}
      >
        {diagnosisData.map((item) => (
          <PatientCard
            key={item.id}
            text={item.text}
            selected={parseInt(stepSearch, 10) === parseInt(item.id, 10)}
            onClick={() => handleSetSideItem(parseInt(item.id, 10))}

          />
        ))}
      </VStack>

      {sideItem === 0 && <GeneralExaminationTab />}
      {sideItem === 1 && <SystemicExaminationTab />}
      {sideItem === 2 && <InvestigationTab />}
      {sideItem === 3 && <FinalDiagnosisTab />}
      {sideItem === 4 && <TreatmentTab />}
      {sideItem === 5 && <FollowUpReviewTab />}

      {/* investigation */}
      {/* test category */}
    </HStack>
  );
};

export default DiagnosisTab;
