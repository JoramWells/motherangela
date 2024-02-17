/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

const IndeterminateCheckbox = ({ indeterminate, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);
  return <input type="checkbox" ref={ref} {...rest} />;
};

export default IndeterminateCheckbox;
