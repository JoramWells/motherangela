/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    // minHeight: '45px',
    height: '2.5rem',
    // backgroundColor: '#F7FAFC',
    border: '1px solid #f0f0f0',
    borderColor: 'gray',
    color: 'gray.200',
    borderRadius: '6px',
  }),
  input: (provided) => ({
    ...provided,
  }),
};

const CustomSelect = ({
  onChange, value, label, options, color, isLoading,
}) => (
  <FormControl>

    <FormLabel
      fontSize="14px"
      textTransform="capitalize"
      color={color}
    >
      {label}

    </FormLabel>
    <Select
      styles={selectStyles}
      options={options}
      value={value}
      onChange={(val) => onChange(val)}
      isLoading={isLoading}
    />

  </FormControl>
);

CustomSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.array,
};

CustomSelect.defaultProps = {
  onChange: () => { },
  color: 'black',
  value: '',
  isLoading: false,
  label: '',
  options: [],
};

export default CustomSelect;
