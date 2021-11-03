import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import objectIMG from '../data/CharacterData';
import styles from '../components/style/CharacterCard.module.css';

function CharacterCard({ card }) {
  const [Characters, SetCharacters] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co${card.url}`)
      .then((res) => res.data)
      .then((data) => SetCharacters(data));
  }, []);

  function handlePlayClick() {
    history.push('GamePage');
  }

  return (
    <div className={styles.CharacterCardContainer}>
      <div className={styles.CharacterCardImg}>
        {Characters.index &&
          objectIMG
            .filter((elem) => elem.race === Characters.index)
            .map((elem) => {
              <img src={elem.img} alt={elem.race} />;
            })}

        <div className={styles.CharacterCardDescription}>
          <h1 id={styles.CharDesc}>Character Description</h1>
          <p>
            <em>Race</em> : {Characters.name}
          </p>
          <p>
            <em>Description</em> : {Characters.alignment}
          </p>
          <p>
            <em>Size</em>: {Characters.size}
          </p>
        </div>
      </div>
      <div className={styles.CharacterCardAttributes}>
        <h1 id={styles.CharAttr}>Character Attributes</h1>
        <p>
          <em>Speed</em> : {Characters.speed}
        </p>
        <p>Strength: 30</p>
        <p>
          Spells:
          <li>Spell 1</li>
          <li>Spell 2</li>
          <li>Spell 3</li>
        </p>
      </div>
      <div className={styles.goToGame}>
        <button id={styles.clickToGame} onClick={handlePlayClick}>
          Let&apos;s play
        </button>
      </div>
    </div>
  );
}

export default CharacterCard;
