/* eslint-disable react/prop-types */
import { Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const InputCell = ({ initialValue }) => {
  const [inputValue, setInputValue] = useState(initialValue);
  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);
  return (
    <Input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      bgColor="gray.50"

    />
  );
};

export default InputCell;
