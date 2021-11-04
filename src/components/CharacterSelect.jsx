import axios from 'axios';
import React, { useEffect, useState } from 'react';

import CharacterCard from './CharacterCard';
import styles from '../components/style/CharacterSelect.module.css';

function CharacterSelect() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.dnd5eapi.co/api/races/')
      .then((res) => res.data)
      .then((data) =>
        setCards(data.results.filter((race) => race.name === 'Human' || race.name === 'Dwarf' || race.name === 'Half-Orc' || race.name === 'Elf')),
      );
  }, []);

  return (
    <div className={styles.CharacterSelect}>
      <h1 className={styles.hero}>Choose your Hero!</h1>
      <div className={styles.Characters}>
        {cards.map((card) => (
          <CharacterCard key={card.index} card={card} />
        ))}
      </div>
    </div>
  );
}
export default CharacterSelect;
