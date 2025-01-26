// RadioButton.js
import React from 'react';

const RadioButton = ({ name, options, selectedOption, onChange }) => {
  return (
    <div className="mb-4">
      {options.map((option, index) => (
        <label key={index} className="mr-4">
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedOption === option}
            onChange={onChange}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
