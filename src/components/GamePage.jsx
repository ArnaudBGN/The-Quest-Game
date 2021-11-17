import React, { useEffect, useState } from 'react';

import GameMediaDisplay from './GameMediaDisplay';
import GameDialog from './GameDialog';
import ButtonChoices from './ButtonChoices';
import InputChoice from './InputChoice';
import { getStory } from '../data/Story';

import styles from './style/GamePage.module.css';

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
            <GameMediaDisplay media={currentStory?.media} />
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
              ? currentStory?.route.choices.map((choice, index) => {
                  switch (choice.type) {
                    case 'button':
                      return (
                        <ButtonChoices
                          key={index}
                          text={choice.choiceText}
                          choice={choice.choiceMade}
                          nextId={choice.nextId}
                          points={choice.points}
                          state={choice.state ? choice.state : null}
                          setRouteId={setRouteId}
                          setCurrentMessage={setCurrentMessage}
                        />
                      );
                    case 'input':
                      return <InputChoice choiceAnswer={choice.choiceAnswer} setRouteId={setRouteId} setCurrentMessage={setCurrentMessage} />;
                  }
                })
              : null}
          </div>
        </div>
      )}
    </>
  );
}

export default GamePage;
