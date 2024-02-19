import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CustomInput = ({
  onChange, value, name, label, color,
}) => (
  <FormControl>

    <FormLabel
      fontSize="14px"
      textTransform="capitalize"
      color={color}
    >
      {label}

    </FormLabel>
    <Input
      name={name}
      // placeholder="Enter First Name"
      size={['md', 'md', 'md', 'md', 'sm', 'md']}
      value={value}
      onChange={onChange}
    />

  </FormControl>
);

CustomInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

CustomInput.defaultProps = {
  onChange: () => {},
  value: '',
  name: '',
  color: 'black',
  label: '',
};

export default CustomInput;
