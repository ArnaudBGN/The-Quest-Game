import React, { useEffect, useState } from 'react';

import GameDialog from './GameDialog';
import ButtonChoices from './ButtonChoices';
import story from '../data/Story';

import styles from './style/GamePage.module.css';
import InputChoice from './InputChoice';

function GamePage() {
  const [currentStory, setCurrentStory] = useState([story[0]]);
  const [routeId, setRouteId] = useState('0');
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    setCurrentStory(story.filter((elem) => elem.id === routeId));
  }, [routeId]);

  return (
    <div className={styles.GamePageContainer}>
      <div className={styles.GamePageScene}>
        <img src={currentStory[0].image} alt="" />
      </div>
      <div className={styles.GamePageSceneText}>
        <GameDialog messages={currentStory[0].route.text} currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} />
      </div>
      <div className={styles.GamePageChoices}>
        {currentStory[0].route.choices.map((choice, index) =>
          choice.type === 'button' ? (
            <ButtonChoices
              key={index}
              text={choice.choiceText}
              choice={choice.choiceMade}
              nextId={choice.nextId}
              setRouteId={setRouteId}
              setCurrentMessage={setCurrentMessage}
            />
          ) : (
            <InputChoice checkAnswer={choice.checkAnswer} setRouteId={setRouteId} setCurrentMessage={setCurrentMessage} />
          ),
        )}
      </div>
    </div>
  );
}

export default GamePage;
