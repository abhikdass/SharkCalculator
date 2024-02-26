// PaymentOptions.jsx
import React from 'react';
import "./styles/Buttons.css";

export function PaymentOptions({ options, selectedOption, onSelectOption }) {
  return (
    <div className="payment-options-container">
      <select
        className="payment-options-select"
        value={selectedOption}
        onChange={(e) => onSelectOption(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

