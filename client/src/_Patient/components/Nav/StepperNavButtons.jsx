/* eslint-disable no-unused-vars */
import { Button, HStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const StepperNavButtons = ({
  handleNext, handleBack, activeStep,
}) => (
  <HStack w="full" justifyContent="flex-end">
    <Button
      onClick={() => handleBack()}
      isDisabled={activeStep === 1}
      size="sm"
    >
      Back

    </Button>
    <Button
      type="submit"
      size="sm"
      // rightIcon={<Fa}
    >
      Next

    </Button>
    {/* {activeStep === 4 ? (
      <Button
        onClick={() => addPatient(inputValues)}
      >
        {isLoading ? 'loading' : 'Complete'}
      </Button>
    )
      : <form><Button type="submit" onClick={() => handleNext()}>Next</Button></form>} */}
  </HStack>
);

StepperNavButtons.propTypes = {
  activeStep: PropTypes.number,

  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
};

StepperNavButtons.defaultProps = {
  activeStep: 1,

  handleNext: () => { },
  handleBack: () => { },
};

export default StepperNavButtons;
