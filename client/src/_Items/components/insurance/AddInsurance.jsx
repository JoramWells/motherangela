/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  Button,
  Divider,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import CustomSelect from '../../../components/Forms/CustomSelect';
import CustomInput from '../../../components/Forms/CustomInput';
import { useGetAllInsuranceTypesQuery, useGetInsuranceTypeQuery } from '../../../api/insuranceType.api';
import { useGetInsuranceQuery } from '../../../api/insurance.api';
// import { useAddVitalSignsMutation } from '../api/vitalSigns.api';

const AddInsurance = ({ insuranceData }) => {
  const [searchParams] = useSearchParams();
  const appointment_id = searchParams.get('appointment_id');
  const [insurance_name, setInsuranceName] = useState('');
  const [box_address, setBoxAddress] = useState('');
  const [phone_no, setPhoneNo] = useState('');
  const [email_address, setEmailAddress] = useState('');
  const [payment_percentage_out_patient, setPaymentPercentageInPatient] = useState('');
  const [payment_percentage_in_patient, setPaymentPercentageOutPatient] = useState('');
  const [nhif_rebate, setNHIFRebate] = useState('');
  const [withholding_tax_application, setWithholdingTaxApplication] = useState('');
  const [discount_percentage, setDiscountPercentage] = useState('');
  const [full_discount_on_all_services, setFullDiscountOnAllServices] = useState('');
  const [insurance_type_id, setInsuranceTypeID] = useState('');
  const [insurance_limit_type_id, setInsuranceLimitTypeID] = useState('');
  const [maximum_billable_amount, setMaximumBillableAmount] = useState('');
  const [status, setStatus] = useState('');
  const [revenue_expected, setRevenueExpected] = useState('');
  const [requires_claim_number, setRequiresClaimNumber] = useState('');

  const { id: patient_id } = useParams();

  const navigate = useNavigate();

  const { data: insuranceTypeData } = useGetAllInsuranceTypesQuery();
  const { data: insuranceTypeDetail } = useGetInsuranceTypeQuery(insuranceData?.insurance_type_id);

  const insuranceTypeOptions = useCallback(() => insuranceTypeData?.map((item) => ({
    value: item.insurance_type_id, label: item.insurance_type_description,
  })), [insuranceTypeData]);

  // const [addEligibility, { isLoading, error }] = useAddEligibilityMutation();

  const inputValues = {
    patient_id,
    appointment_id,
  };

  useEffect(() => {
    if (insuranceData?.insurance_id) {
      setInsuranceName(insuranceData?.insurance_name);
      setInsuranceTypeID(insuranceData?.insurance_type_id);
    }
  }, [insuranceData?.insurance_name, insuranceData?.insurance_id,
    insuranceData?.insurance_type_id,
  ]);

  return (

    <VStack
      w="45%"
            // boxShadow="lg"
      p={5}
      spacing="1.3rem"
      bgColor="white"
      rounded="lg"
      // border="1px"
      // borderColor="gray.200"
    >
      {/* sub item */}

      <HStack
        w="full"
      >
        <Text
          fontSize="16px"
          fontWeight="bold"
          color="gray.600"
        >
          Register Insurance
        </Text>
      </HStack>

      <HStack
        w="full"
      >
        <CustomInput
          label="Insurance Name"
          color="gray.500"
          value={insurance_name}
          onChange={setInsuranceName}
        />
        <CustomSelect
          label="Insurance Type"
          color="gray.500"
          options={insuranceTypeOptions()}
          value={insurance_type_id}
          onChange={setInsuranceTypeID}
        />
      </HStack>

      <CustomInput
        label="Box Address"
        color="gray.500"
        value={box_address}
        onChange={setBoxAddress}
      />
      <CustomInput
        label="Phone No."
        color="gray.500"
        value={phone_no}
        onChange={setPhoneNo}
      />

      <CustomInput
        label="Email Address"
        color="gray.500"
        value={email_address}
        onChange={setEmailAddress}
      />
      <HStack
        w="full"
      >

        <CustomInput
          label="Payment Percentage(Out-Patient)"
          color="gray.500"
          value={payment_percentage_out_patient}
          onChange={setPaymentPercentageOutPatient}
        />
        <CustomInput
          label="Payment Percentage(In-Patient)"
          color="gray.500"
          value={payment_percentage_in_patient}
          onChange={setPaymentPercentageInPatient}
        />
      </HStack>

      <HStack
        w="full"
      >
        <CustomInput
          label="NHIF Rebate"
          color="gray.500"
          value={nhif_rebate}
          onChange={setNHIFRebate}
        />
        <CustomInput
          label="Withholding Tax"
          color="gray.500"
          value={withholding_tax_application}
          onChange={setWithholdingTaxApplication}
        />
      </HStack>

      <HStack
        alignItems="flex-start"
        w="full"
      >

        <CustomInput
          label="Discount Percentage"
          color="gray.500"
          value={discount_percentage}
          onChange={setDiscountPercentage}
        />
        <CustomSelect
          label="Full Discount on All Services"
          color="gray.500"
          value={full_discount_on_all_services}
          onChange={setFullDiscountOnAllServices}
        />

      </HStack>

      {/* save btn */}
      <Button
        size="md"
        width="full"
        colorScheme="blue"
      >
        {/* {isLoading ? 'loading' : 'Save'} */}
        Save
      </Button>
    </VStack>
  );
};

export default AddInsurance;
