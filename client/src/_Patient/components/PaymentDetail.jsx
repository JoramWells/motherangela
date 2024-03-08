/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, VStack } from '@chakra-ui/react';
import moment from 'moment/moment';
import { useCallback, useState } from 'react';
import Corporate from './Cooporate';
import { useGetAllAccountTypesQuery } from '../../api/accountType.api';
import { useAddPatientMutation } from '../../api/patients.api';
import CustomSelect from '../../components/Forms/CustomSelect';

const PaymentDetail = ({
  insuranceAccount,
  setInsuranceAccount,
}) => {
  const [paymentType, setPaymentType] = useState();
  const [cost, setCost] = useState();
  // const [accountType, setAccountType] = useState({ value: '', label: '' });
  // const [paymentOption, setPaymentOption] = useState({ value: '', label: '' });

  const [addPatient] = useAddPatientMutation();

  const { data, isLoading } = useGetAllAccountTypesQuery();

  const consultationOPDay = { value: '', label: 'CONSULTATION OPD DAY' };
  const consultationOPDNight = 'CONSULTATION OPD NIGHT';

  // const datax = useCallback(()=>{},)

  const accountTypeOptionsCallback = useCallback(() => data?.map((item) => ({
    value: item.account_type_id,
    label: item.account_type_description,
  })), [data]);

  const accountTypeOptions = accountTypeOptionsCallback();

  return (

    <VStack
      // spacing={}
      w="full"
      mt="50px"
      p={3}
    >
      <VStack
        w="40%"
        bgColor="white"
        p={5}
        border="1px"
        borderColor="gray.200"
        rounded="lg"
        spacing={6}
      >
        <CustomSelect
          label="Payment Type"
          options={accountTypeOptions}
          isLoading={isLoading}
          value={paymentType}
          onChange={setPaymentType}
        />

        {/* {values.} */}
        {paymentType?.value === '1' && (
        <Corporate
          insuranceAccount={insuranceAccount}
          setInsuranceAccount={setInsuranceAccount}
          setCost={setCost}
          cost={cost}
        />
        )}

        <Button
          colorScheme="blue"
          w="full"
          size="md"
        >
          Save
        </Button>
      </VStack>

    </VStack>

  );
};

export default PaymentDetail;
