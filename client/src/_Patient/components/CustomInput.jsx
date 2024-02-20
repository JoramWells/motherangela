import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CustomInput = ({
  handleChange, value, name, label,
}) => (
  <FormControl>

    <FormLabel
      fontSize="14px"
      textTransform="capitalize"
    >
      {label}

    </FormLabel>
    <Input
      name={name}
      // placeholder="Enter First Name"
      size={['md', 'md', 'md', 'md', 'sm', 'md']}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />

  </FormControl>
);

CustomInput.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

CustomInput.defaultProps = {
  handleChange: () => {},
  value: '',
  name: '',
  label: '',
};

export default CustomInput;
