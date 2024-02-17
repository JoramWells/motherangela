import {
  Box, Button, HStack, Step, StepDescription, StepIcon,
  StepIndicator, StepNumber,
  StepSeparator, StepStatus, StepTitle, Stepper, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import PersonalInfo from '../../components/MaternitySteps/PersonalInfo';
import ScreeningInfo from '../../components/MaternitySteps/ScreeningInfo';
import NextOfKin from '../../components/MaternitySteps/NextOfKin';
import MedicalSurgicalInfo from '../../components/MaternitySteps/MedicalSurgicalInfo';

const AddMaternityProfile = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { title: 'Personal', description: 'Personal Information' },
    { title: 'Next of Kin', description: 'Next of Kin Details' },
    { title: 'Screening', description: 'Screening Data' },
    { title: 'Medical & Surgical', description: 'Medical & Surgical History' },
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    // navigate({
    //   pathname: '/add-invoice',
    //   search: `?id=${invoiceId}`,
    // });
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <VStack w="full" h="100vh" bgColor="gray.50" mt="55px">
      <Stepper
        index={activeStep}
        mb={5}
        w="75%"
        mt={5}
        rounded="lg"
        bgColor="white"
        p={4}
        border="1px"
        borderColor="gray.200"
      >
        {steps.map((step) => (
          <Step key={nanoid()}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink={0}>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <Box
        w="50%"
        p={5}
        rounded="lg"
        bgColor="white"
      >
        {activeStep === 1 && <PersonalInfo />}
        {activeStep === 2 && <NextOfKin />}
        {activeStep === 3 && <ScreeningInfo />}
        {activeStep === 4 && <MedicalSurgicalInfo />}

        {/* payment info */}

        <HStack mt={5} w="full" justifyContent="flex-end">
          <Button onClick={() => handleBack()} isDisabled={activeStep === 1}>Back</Button>
          <Button onClick={() => handleNext()}>Next</Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddMaternityProfile;
