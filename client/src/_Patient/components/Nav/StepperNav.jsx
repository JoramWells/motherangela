/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import {
  Box, Step, StepDescription, StepIcon,
  StepIndicator, StepNumber, StepSeparator,
  StepStatus, StepTitle, Stepper, Text,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StepperNav = ({ activeStep, steps }) => (
  <Stepper
    index={activeStep}
    mb={2}
    w={['55%', '55%', '55%', '55%', '60%', '50%']}
    mt={5}
    rounded="lg"
    bgColor="white"
    p={2}
    border="1px"
    borderColor="gray.200"
  >
    {steps.map((step) => (
      <Step key={nanoid()}>
        <StepIndicator>
          <StepStatus
            complete={(
              <StepIcon />
)}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>
        <Box flexShrink={0}>
          <StepTitle>
            <Text
              fontSize={['14px', '14px', '14px', '14px', '12px', '14px']}
            >
              {step.title}
            </Text>
          </StepTitle>
          {/* <StepDescription>
            <Link
              fontSize={['12px', '12px', '12px', '12px', '10px', '12px']}
              to={step.link}
            >
              {step.description}

            </Link>
          </StepDescription> */}
        </Box>
        <StepSeparator />
      </Step>
    ))}
  </Stepper>
);

StepperNav.propTypes = {
  steps: PropTypes.array,
  activeStep: PropTypes.number,
};

StepperNav.defaultProps = {
  steps: [],
  activeStep: 1,
};

export default StepperNav;
