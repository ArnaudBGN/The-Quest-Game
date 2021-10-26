import React, { useState } from 'react';
import Message from './Message';

import './style/GameDialog.css';

function GameDialog({ messages }) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const handleClickNext = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage(currentMessage + 1);
    } else {
      setCurrentMessage(0);
    }
  };

  return (
    <div className="DialogBox-container">
      <div className="DialogBox-title">Dialog title</div>
      <Message message={messages[currentMessage]} key={currentMessage} />
      <div className="DialogBox-Footer">
        <button onClick={handleClickNext} className="DialogBox-Next">
          Next &gt;
        </button>
      </div>
    </div>
  );
}

export default GameDialog;
