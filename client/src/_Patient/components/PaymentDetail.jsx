/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { VStack } from '@chakra-ui/react';
import moment from 'moment/moment';
import { useCallback } from 'react';
import Corporate from './Cooporate';
import { useGetAllAccountTypesQuery } from '../../api/accountType.api';
import { useAddPatientMutation } from '../../api/patients.api';
import CustomSelect from '../../components/Forms/CustomSelect';

const PaymentDetail = ({
  insuranceAccount,
  setInsuranceAccount, paymentType, setPaymentType,
  cost, setCost,
}) => {
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
      // spacing={8}
      w="full"
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

    </VStack>

  );
};

export default PaymentDetail;
