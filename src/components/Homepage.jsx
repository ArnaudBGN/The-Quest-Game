import React from 'react';
import './Homepage.css';
import { useHistory } from 'react-router-dom';

function Homepage() {
  const history = useHistory();

  const handelclick = () => {
    history.push('Character');
  };

  return (
    <div className="image-home">
      <div className="text-home">
        <h1>Bienvenue, vous êtes le héro!</h1>
      </div>
      <div className="accroche-home">
        <p></p>
      </div>
      <button onClick={handelclick}>PLAY</button>
    </div>
  );
}

export default Homepage;
