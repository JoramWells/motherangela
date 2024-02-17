import {
  Box, Button, HStack, Step, StepDescription, StepIcon,
  StepIndicator, StepNumber,
  StepSeparator, StepStatus, StepTitle, Stepper, VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getAllItemTypes } from '../_reducers/itemTypeSlice';
import Step1 from '../components/ItemSteps/Step1';
import Step2 from '../components/ItemSteps/Step2';
import Step3 from '../components/ItemSteps/Step3';

const AddItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItemTypes());
  }, [dispatch]);

  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { title: 'First', description: 'Item Info' },
    { title: 'Second', description: 'Price Details' },
    { title: 'Third', description: 'Store Info' },
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
    <VStack w="full" h="100vh" bgColor="gray.50" justifyContent="center" alignItems="center">
      <Box w="50%" mt={5} boxShadow="lg" p={5} rounded="lg" bgColor="white">
        <Stepper index={activeStep}>
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

        {activeStep === 1 && <Step1 />}

        {/* payment info */}
        {activeStep === 2 && <Step2 />}

        {/* store info */}
        {activeStep === 3 && <Step3 />}
        <HStack mt={5} w="full" justifyContent="flex-end">
          <Button onClick={() => handleBack()} isDisabled={activeStep === 1}>Back</Button>
          <Button onClick={() => handleNext()}>Next</Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddItem;
