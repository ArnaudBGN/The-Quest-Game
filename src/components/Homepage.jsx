import React from 'react';
import './Homepage.css';
import { useHistory } from 'react-router-dom';

function Homepage() {
  const history = useHistory();

  const handelclick = () => {
    history.push('Character');
  };

  return (
    <div className="home-picture">
      <div className="home-title">
        <h1>Bienvenue, vous êtes le héro!</h1>
      </div>
      <div className="home-text">
        <p></p>
      </div>
      <button onClick={handelclick}>PLAY</button>
    </div>
  );
}

export default Homepage;
