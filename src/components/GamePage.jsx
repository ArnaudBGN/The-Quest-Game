import React, { useEffect, useState } from 'react';

import GameDialog from './GameDialog';
import ButtonChoices from './ButtonChoices';
import story from '../data/Story';

import './style/GamePage.css';

function GamePage() {
  const [currentStory, setCurrentStory] = useState([story[0]]);
  const [routeId, setRouteId] = useState('0');
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    setCurrentStory(story.filter((elem) => elem.id === routeId));
  }, [routeId]);

  return (
    <div className="GamePage-container">
      <div className="GamePage-scene">
        <img src={currentStory[0].image} alt="" />
      </div>
      <div className="GagstneScene-text">
        <GameDialog messages={currentStory[0].route.text} currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} />
      </div>
      <div className="GamePage-choices">
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
          ) : null,
        )}
      </div>
    </div>
  );
}

export default GamePage;
