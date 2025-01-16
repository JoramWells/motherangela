import React, { useState } from 'react';

// Define step data structure
type Step = {
  label: string;
  component: JSX.Element;
};

function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const steps: Step[] = [
    {
      label: 'Step 1: Personal Info',
      component: (
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
      ),
    },
    {
      label: 'Step 2: Contact Info',
      component: (
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      ),
    },
    {
      label: 'Step 3: Security',
      component: (
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
      ),
    },
  ];

  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      alert('Form submitted successfully!');
      console.log('Form Data:', formData);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="stepper-form">
      <h2>{steps[currentStep].label}</h2>
      <div>{steps[currentStep].component}</div>

      <div className="navigation-buttons">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </button>
        <button type="button" onClick={handleNext}>
          {isLastStep ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default Stepper;
