import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'Chitkara University', 'Chandigarh group of college', 'University of Tech'
  ];
  const defaultOption = options[0];
function Dropdowns() {
  return (
    <div>
        <h4>Select your College</h4>
      <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
    </div>
  )
}

export default Dropdowns
