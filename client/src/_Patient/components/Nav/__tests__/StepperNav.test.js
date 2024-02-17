/* eslint-disable padded-blocks */
/* eslint-disable react/jsx-filename-extension */
import { render } from '@testing-library/react';
import StepperNav from '../StepperNav';

describe('Stepper Nav', () => {
  const steps = [
    { title: 'Personal', description: 'Personal Information' },
    { title: 'Next of Kin', description: 'Next of Kin Details' },
    { title: 'Payment', description: 'Payment Details' },
  ];
  it('renders STepperNav with default props', () => {
    const { getByText } = render(<StepperNav steps={steps} activeStep={1} />);
    expect(getByText('Personal')).toBeInTheDocument();
  });

});
