import { useMemo, useState } from 'react';
const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [other, setOther] = useState(false);
  const expensiveCalc = useMemo(() => {
    console.log('calculating');
    return counter * 2;
  }, [counter]);

  return (
    <div>
      <h3>useMemo</h3>
      <p>p: {expensiveCalc}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button onClick={() => setOther(!other)}>Toggle Other</button>
    </div>
  );
};

export default UseMemo;
