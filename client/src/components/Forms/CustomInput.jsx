import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

const CustomInput = ({
  onChange, value, name, label, color, type,
}) => {
  const handleInputChange = useCallback((e) => {
    onChange(e.target.value);
  }, [onChange]);
  return (
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
        onChange={handleInputChange}
        type={type}
      />

    </FormControl>
  );
};

CustomInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

CustomInput.defaultProps = {
  onChange: () => {},
  value: '',
  name: '',
  color: 'black',
  type: 'text',
  label: '',
};

export default CustomInput;
