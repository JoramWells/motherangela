/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useGetInsurancesQuery } from '../../api/insurance.api';
import { useGetInsuranceServiceCostMappingQuery } from '../../api/insuranceServiceCostMapping.api';
import CustomInput from '../../components/Forms/CustomInput';
import CustomSelect from '../../components/Forms/CustomSelect';

const Corporate = ({
  insuranceAccount, setInsuranceAccount, cost, setCost,
}) => {
  const [mobileNo, setMobileNo] = useState('');
  const [insurance_membership_number, setInsuranceMemberShipNo] = useState('');
  // const [insuranceAccount, setInsuranceAccount] = useState({ value: '', label: '' });

  const navigate = useNavigate();

  const { data, isLoading: isLoadingInsurance } = useGetInsurancesQuery();

  const { data: insuranceServiceCostData } = useGetInsuranceServiceCostMappingQuery(
    insuranceAccount?.value ? insuranceAccount?.value : 0,
  );

  const insuranceOptionsCallback = useCallback(() => data?.map((item) => (
    { value: item.insurance_id, label: item.insurance_name }
  )), [data]);

  const insuranceOptions = insuranceOptionsCallback();

  const statusOptions = [{ value: 'Active', label: 'Active' },
    { value: 'In Active', label: 'In Active' },
  ];

  useEffect(() => {
    setCost(insuranceServiceCostData?.cost);
    if (!cost) { setCost(insuranceServiceCostData?.cost); }
  }, [setCost, insuranceServiceCostData?.cost, cost]);

  return (

    <VStack
      w="full"
      bgColor="white"
      rounded="lg"
      spacing={6}
      mt={6}
    >
      <CustomSelect
        label="Insurance Account"
        options={insuranceOptions}
        isLoading={isLoadingInsurance}
        value={insuranceAccount}
        onChange={(e) => setInsuranceAccount(e)}
      />

      {/* select Department */}
      <CustomSelect
        label="Company Scheme"
        options={statusOptions}
        value={insuranceAccount}
        onChange={setInsuranceAccount}
      />

      <CustomInput
        label="Staff No."
        placeholder="Enter Staff Number"
        value={mobileNo}
        onChange={setMobileNo}
      />

      <CustomInput
        label="Insurance Membership Number"
        value={insurance_membership_number}
        onChange={setInsuranceMemberShipNo}
      />

      <CustomInput
        label="Principal Member Name"
        value={mobileNo}
        onChange={setMobileNo}
      />
    </VStack>
  );
};

export default Corporate;
