import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const UseDebounce = () => {
  const [text, setText] = useState('');

  // Debounced value
  const debouncedText = useDebounce(text, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const data = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace'];

  // ✅ Use debouncedText for filtering
  const filteredNames = data.filter((item) =>
    item.toLowerCase().includes(debouncedText.toLowerCase())
  );

  console.log('Immediate text:', text);
  console.log('Debounced text:', debouncedText);

  return (
    <div className="debounce-container">
      <div>Debounce text: {debouncedText}</div>
      <div>
        <input
          type="text"
          name="userName"
          value={text}
          onChange={handleChange}
        />
        <div className="name-list">
          <ul>
            {filteredNames.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseDebounce;
