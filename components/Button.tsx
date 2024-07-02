// components/Button.tsx
// components/Button.tsx
import React, { useState } from 'react';

const Button: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <button
      style={{ backgroundColor: 'blue', color: 'white' }}
      onClick={handleClick}
    >
      {clicked ? 'Clicked!' : 'Click Me'}
    </button>
  );
};

export default Button;
