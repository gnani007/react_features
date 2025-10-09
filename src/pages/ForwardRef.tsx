import React, { useRef } from 'react';
import MyInputForwardRef from './MyInputForwardRef';

const ForwardRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <MyInputForwardRef ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default ForwardRef
