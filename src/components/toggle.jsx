import React, { useState } from 'react';

const Toggle = ({ onToggle }) => {
  const [isCelsius, setIsCelsius] = useState(true); // Default to Celsius

  const handleToggle = () => {
    setIsCelsius(!isCelsius); // Toggle between Celsius and Fahrenheit
    onToggle(isCelsius); // Call the onToggle function with the new state
  };

  return (
    <div className="toggle-container">
      <label className="toggle">
        <input
          type="radio"
          name="temperature"
          value="celsius"
          checked={isCelsius}
          onChange={handleToggle}
        />
        <span className="slider"></span>
      </label>
      <span className="toggle-text">°C</span>
      <label className="toggle">
        <input
          type="radio"
          name="temperature"
          value="fahrenheit"
          checked={!isCelsius}
          onChange={handleToggle}
        />
        <span className="slider"></span>
      </label>
      <span className="toggle-text">°F</span>
    </div>
  );
};

export default Toggle;