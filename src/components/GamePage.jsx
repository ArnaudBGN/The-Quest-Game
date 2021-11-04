import React, { useEffect, useState } from 'react';

import GameDialog from './GameDialog';
import ButtonChoices from './ButtonChoices';
import { getStory } from '../data/Story';

import styles from './style/GamePage.module.css';
import InputChoice from './InputChoice';

function GamePage() {
  const [routeId, setRouteId] = useState(0);
  const [currentStory, setCurrentStory] = useState();
  const [currentMessage, setCurrentMessage] = useState(0);
  const [countMessage, setCountMessage] = useState(1);

  useEffect(() => {
    getStory(routeId).then((story) => setCurrentStory(story));
    setCountMessage(1);
  }, [routeId]);

  return (
    <>
      {currentStory && (
        <div className={styles.GamePageContainer}>
          <div className={styles.GamePageScene}>
            <img src={currentStory?.image} alt="" />
          </div>
          <div className={styles.GamePageSceneText}>
            <GameDialog
              messages={currentStory?.route.text}
              currentMessage={currentMessage}
              setCurrentMessage={setCurrentMessage}
              countMessage={countMessage}
              setCountMessage={setCountMessage}
            />
          </div>
          <div className={styles.GamePageChoices}>
            {currentMessage === currentStory?.route.text.length - 1
              ? currentStory?.route.choices.map((choice, index) =>
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
                )
              : null}
          </div>
        </div>
      )}
    </>
  );
}

export default GamePage;
