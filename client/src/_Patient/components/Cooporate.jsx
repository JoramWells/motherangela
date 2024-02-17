/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Tag,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import { useGetInsurancesQuery } from '../../api/insurance.api';
import { useGetInsuranceServiceCostMappingQuery } from '../../api/insuranceServiceCostMapping.api';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '45px',
    height: '45px',
  }),
  input: (provided) => ({
    ...provided,
  }),
};

const Corporate = ({
  insuranceAccount, setInsuranceAccount, cost, setCost,
}) => {
  const [mobileNo, setMobileNo] = useState('');
  const [insurance_membership_number, setInsuranceMemberShipNo] = useState('');
  // const [insuranceAccount, setInsuranceAccount] = useState({ value: '', label: '' });

  const navigate = useNavigate();

  const { data, isLoading } = useGetInsurancesQuery();

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

  console.log(cost, 'insys');

  return (

    <VStack
      w="full"
      bgColor="white"
      rounded="lg"
      spacing={6}
      mt={6}
    >
      <FormControl>
        <HStack w="full" alignItems="center" justifyContent="space-between">
          <FormLabel fontSize="14px">Select Insurance Account</FormLabel>
          <Tag
            onClick={() => navigate('/add-insurance')}
            colorScheme="green"
            _hover={{
              cursor: 'pointer',
            }}
          >
            NEW

          </Tag>

        </HStack>
        <Select
          // styles={customStyles}
          options={insuranceOptions}
          value={insuranceAccount}
          onChange={(e) => setInsuranceAccount(e)}
        />

      </FormControl>

      {/* select Department */}
      <FormControl>
        <HStack w="full" alignItems="center" justifyContent="space-between">
          <FormLabel fontSize="14px">Company Scheme</FormLabel>
          <Tag
            onClick={() => navigate('/add-ward')}
            _hover={{
              cursor: 'pointer',
            }}
          >
            NEW

          </Tag>

        </HStack>
        <Select
          // styles={customStyles}
          options={statusOptions}
          value={insuranceAccount}
          onChange={(e) => setInsuranceAccount(e)}
        />

      </FormControl>

      <FormControl>
        <FormLabel
          fontSize="14px"
        >
          Staff Number

        </FormLabel>
        <Input
          // size="lg"
          placeholder="Enter Staff Number"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Insurance Membership Number</FormLabel>
        <Input
          // size="lg"
          value={insurance_membership_number}
          onChange={(e) => setInsuranceMemberShipNo(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel
          fontSize="14px"
        >
          Principal Member Name

        </FormLabel>
        <Input
          // size="lg"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </FormControl>
    </VStack>
  );
};

export default Corporate;
