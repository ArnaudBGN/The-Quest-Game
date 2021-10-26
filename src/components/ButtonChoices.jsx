import React from 'react';

import './style/ButtonChoice.css';

// eslint-disable-next-line react/prop-types
function ChoiceButton({ text }) {
  return (
    <div>
      <button className="ChoiceButton">{text}</button>
    </div>
  );
}

export default ChoiceButton;
