import React, { useState } from 'react';

const ChildComponent = ({ name }) => {
  console.log('child component rendering ' + name);
  return <div>Name: {name}</div>;
};

const ReactMemo = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>React.memo example</h3>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Counter</button>
        <ChildComponent name={'Brahmisha'} />
      </div>
    </div>
  );
};

export default ReactMemo;
