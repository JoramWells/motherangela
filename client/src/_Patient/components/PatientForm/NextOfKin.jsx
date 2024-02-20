/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import CustomSelect from '../../../components/Forms/CustomSelect';
import CustomInput from '../../../components/Forms/CustomInput';

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

const nextOfKinOPtions = [
  { value: 1, label: 'BROTHER' },
  { value: 2, label: 'DAUGHTER' },
  { value: 3, label: 'FATHER' },
  { value: 4, label: 'FRIEND' },
  { value: 5, label: 'GUARDIAN' },
  { value: 6, label: 'MOTHER' },
  { value: 7, label: 'SELF' },
  { value: 8, label: 'SISTER' },
  { value: 9, label: 'SON' },
  { value: 10, label: 'SPOUSE' },
];
// hospital details
const NextOfKin = ({
  next_of_kin, setNextOfKin, next_of_kin_name, setNextOfKinName,
  next_of_kin_cell_phone, setNextOfKinCellPhone,
}) => {
  const { id } = useParams();

  const initialValues = {
    next_of_kin: '',
    next_of_kin_name: '',
    next_of_kin_cell_phone: '',
  };

  return (

    <VStack
      bgColor="white"
      spacing={8}
      w="full"
    >
      <CustomSelect
        label="Next of Kin"
        options={nextOfKinOPtions}
        value={next_of_kin}
        onChange={setNextOfKin}
      />
      <CustomInput
        label="Next of Kin Full Name"
        name="next_of_kin_name"
        onChange={setNextOfKinName}
        value={next_of_kin_name}
      />

      <CustomInput
        label="Next of Kin Phone Number"
        name="next_of_kin_cell_phone"
                // size="lg"
        onChange={setNextOfKinCellPhone}
        value={next_of_kin_cell_phone}
      />
    </VStack>

  );
};

NextOfKin.propTypes = {
  next_of_kin: PropTypes.string,
  next_of_kin_name: PropTypes.string,
  next_of_kin_cell_phone: PropTypes.string,
  setNextOfKin: PropTypes.func,
  setNextOfKinName: PropTypes.func,
  setNextOfKinCellPhone: PropTypes.func,

};

NextOfKin.defaultProps = {
  next_of_kin: '',
  next_of_kin_name: '',
  next_of_kin_cell_phone: '',
  setNextOfKin: () => {},
  setNextOfKinName: () => {},
  setNextOfKinCellPhone: () => {},

};

// hospital details

export default NextOfKin;
