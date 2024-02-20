/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  FormControl, FormLabel, Text, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import moment from 'moment/moment';
import { useCallback } from 'react';
import Corporate from './Cooporate';
import { useGetAllAccountTypesQuery } from '../../api/accountType.api';
import { useAddPatientMutation } from '../../api/patients.api';

const PaymentDetail = ({
  insuranceAccount,
  setInsuranceAccount, paymentType, setPaymentType,
  cost, setCost,
}) => {
  // const [accountType, setAccountType] = useState({ value: '', label: '' });
  // const [paymentOption, setPaymentOption] = useState({ value: '', label: '' });

  const [addPatient] = useAddPatientMutation();

  const { data } = useGetAllAccountTypesQuery();

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
      spacing={8}
      w="full"
    >
      <FormControl>
        <FormLabel fontSize="14px">Select Payment Type</FormLabel>
        <Select
          options={accountTypeOptions}
                // styles={customStyles}
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

      </FormControl>
    </VStack>

  );
};

export default PaymentDetail;
