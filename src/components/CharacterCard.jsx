import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import CharDescTabs from '../components/CharDescTabs';
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
    <div className={styles.CharacterCard}>
      <div className={styles.CharacterCardImg}>
        {Characters.index &&
          objectIMG
            .filter((elem) => elem.race === Characters.index)
            .map((elem) => {
              <img className={styles.CharImg} src={elem.img} alt={elem.race} />;
            })}
      </div>
      <CharDescTabs key={card.index} card={card} />
      <div className={styles.PlayButton}>
        <button className={styles.clickToGame} onClick={handlePlayClick}>
          Let&apos;s play
        </button>
      </div>
    </div>
  );
}

export default CharacterCard;
