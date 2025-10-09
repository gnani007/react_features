import React from 'react';

const MyInputForwardRef = React.forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(
  (props, ref) => {
    return <input ref={ref} {...props} />;
  }
);

export default MyInputForwardRef;
