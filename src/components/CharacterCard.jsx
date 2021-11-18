import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import CharDescTabs from '../components/CharDescTabs';
import { getCharacterData } from '../data/CharacterData';
import styles from '../components/style/CharacterCard.module.css';

function CharacterCard({ card }) {
  const [Characters, SetCharacters] = useState([]);
  const [characterData, setCharacterData] = useState({});
  const history = useHistory();

  function handlePlayClick() {
    history.push('gamepage');
  }

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co${card.url}`)
      .then((res) => res.data)
      .then((data) => SetCharacters(data));

    getCharacterData(card.index).then((character) => setCharacterData(character));
  }, []);

  return (
    <>
      {Characters && characterData && (
        <div className={styles.CharacterCard}>
          <div className={styles.CharacterCardImg}>
            <img className={styles.CharImg} src={characterData.img} alt={characterData.race} />
          </div>
          <CharDescTabs key={card.index} card={card} />
          <div className={styles.PlayButton}>
            <button className={styles.clickToGame} onClick={handlePlayClick}>
              Let&apos;s play
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CharacterCard;
