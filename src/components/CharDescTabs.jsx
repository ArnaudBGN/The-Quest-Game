import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styles from '../components/style/CharDescTabs.module.css';

export default function CharDescTabs({ card }) {
  const [stateTabs, setStateTabs] = useState(1);
  const goDescTab = () => {
    setStateTabs(1);
  };
  const goAttrTab = () => {
    setStateTabs(2);
  };

  const [Characters, SetCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co${card.url}`)
      .then((res) => res.data)
      .then((data) => SetCharacters(data));
  }, []);

  return (
    <div>
      <div className={styles.TabsContent}>
        <button type="button" onClick={goDescTab} className={`Tabs ${stateTabs === 1 ? 'active' : ''}`}>
          Character Description
        </button>
        <button type="button" onClick={goAttrTab} className={`Tabs ${stateTabs === 2 ? 'active' : ''}`}>
          Character Attributes
        </button>
      </div>

      <div className={styles.CharacterCardContainer}>
        {stateTabs === 1 ? (
          <div className={styles.CharacterCardDescription}>
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
        ) : (
          <div className={styles.CharacterCardAttributes}>
            <p>
              <em>Speed</em> : {Characters.speed}
            </p>
            <p>Strength: 30</p>
            <ul>
              Spells:
              <li>Spell 1</li>
              <li>Spell 2</li>
              <li>Spell 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
