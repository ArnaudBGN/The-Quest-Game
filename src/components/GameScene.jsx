import React from 'react';

import GameDialog from './GameDialog';

import './style/GameScene.css';

const messages = [
  'This is a very cool RPG dialog message.',
  'If you would like to see more awesome stuff, check out the other writeups at codeworkshop.dev!',
  'Remember to wash your hands!',
];

function GameScene() {
  return (
    <div className="GameScene-container">
      <div className="GameScene-scene">
        <img src="" alt="" />
      </div>
      <div className="GaneScene-text">
        <GameDialog messages={messages} />
      </div>
      <div className="GameScene-choices"></div>
    </div>
  );
}

export default GameScene;
