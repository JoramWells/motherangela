/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';

const IntermediateCheckbox = ({ indeterminate, ...rest }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);
  return (
    <input type="checkbox" ref={ref} {...rest} />
  );
};

export default IntermediateCheckbox;
