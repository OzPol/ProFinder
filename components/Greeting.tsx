// components/Greeting.tsx
// a simple React component that displays a greeting
// components/Greeting.tsx
import React, { useState } from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  const [greetingName, setGreetingName] = useState(name);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setGreetingName(inputValue);
    setInputValue('');
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md mb-4">
      <h1 className="text-2xl font-bold mb-4">Hello, {greetingName}!</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your name"
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white py-2 px-4 rounded w-full"
      >
        Change Name
      </button>
    </div>
  );
};

export default Greeting;
