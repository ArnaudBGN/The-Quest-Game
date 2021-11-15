import React, { useState } from 'react';

import styles from './style/InputChoice.module.css';

function InputChoice({ choiceAnswer, score, setRouteId, setCurrentMessage, setScore }) {
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => setAnswer(e.target.value);

  const handleAnswer = (e) => {
    if (e.key === 'Enter') {
      const checkedAnswer = choiceAnswer.find((elem) => elem.answer === answer);
      setRouteId(checkedAnswer.nextId);
      setScore(() => (score += checkedAnswer.points));
      setCurrentMessage(0);
    }
  };

  return (
    <div>
      <input
        className={styles.InputChoice}
        type="text"
        id="answer"
        name="answer"
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => handleAnswer(e)}
      />
    </div>
  );
}

export default InputChoice;
