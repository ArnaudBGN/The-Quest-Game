import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styles from '../components/style/CharDescTabs.module.css';
import { getCharacterData } from '../data/CharacterData';

export default function CharDescTabs({ card }) {
  const [stateTabs, setStateTabs] = useState(1);
  const goDescTab = () => {
    setStateTabs(1);
  };
  const goAttrTab = () => {
    setStateTabs(2);
  };

  const [Characters, SetCharacters] = useState([]);
  const [characterData, setCharacterData] = useState({});

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
                  <em>Size</em> : {Characters.size}
                </p>
                <p>
                  <em>Speed</em> : {Characters.speed}
                </p>
                <p>
                  <em>Strength</em> : {characterData.strength}
                </p>
                <p>
                  <em>Intelligence</em> : {characterData.intelligence}
                </p>
              </div>
            ) : (
              <div className={styles.CharacterCardAttributes}>
                <ul>
                  <em>Spells</em> :<li>{characterData.spell[0].name}</li>
                  <em>Description</em> : {characterData.spell[0].description}
                  <li>{characterData.spell[1].name}</li>
                  <em>Description</em> : {characterData.spell[1].description}
                  <li>{characterData.spell[2].name}</li>
                  <em>Description</em> : {characterData.spell[2].description}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
