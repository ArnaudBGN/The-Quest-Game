import React from 'react';

import './style/ButtonChoice.css';

function ButtonChoices({ text, nextId, setRouteId, setCurrentMessage }) {
  const handleClick = () => {
    setRouteId(nextId);
    setCurrentMessage(0);
  };

  return (
    <div>
      <button className="ChoiceButton" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}

export default ButtonChoices;
