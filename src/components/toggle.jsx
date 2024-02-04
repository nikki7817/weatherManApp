import React, { useState } from 'react';

const ToggleButton = ({ onToggle }) => {
  const [isToggled, setToggled] = useState(false);



  //Styling for the toggle button
  const buttonStyles = {
    padding: '10px',
    fontSize: '20px',
    backgroundColor: isToggled ?   '#2196F3'  :'#393842',
    color: '#fff',
    borderRadius: '20px',
    cursor: 'pointer',
    outline: 'none',
    border: '1px solid rgba(255, 255, 255, 0.8)',
  };

  const handleToggle = () => {
    console.log("I'm ToggleButton")
    setToggled(!isToggled);
    onToggle(!isToggled);
  };

  return (
    <button onClick={handleToggle} style={buttonStyles}>
      
      {isToggled ?  'Celsius ' :'Fahrenheit '}
    </button>
  );
};

export default ToggleButton;
