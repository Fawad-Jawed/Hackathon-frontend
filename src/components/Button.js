// Button.js
import React from 'react';

const Button = ({ text, onClick, type = 'button', color = 'bg-blue-500' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 ${color} text-white rounded hover:${color === 'bg-blue-500' ? 'bg-blue-700' : 'bg-gray-600'}`}
    >
      {text}
    </button>
  );
};

export default Button;
