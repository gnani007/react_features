import { useState, useCallback, useEffect } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const logCount = useCallback(() => {
    console.log('logging count', count);
  }, [count]);

  useEffect(() => {
    console.log('useEffect triggered because logcount change');
    logCount();
  }, [logCount]);

  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Counter</button>
      </div>
      <div>
        <button onClick={() => setToggle(!toggle)}>toggle</button>
      </div>
    </div>
  );
};

export default UseCallback;
