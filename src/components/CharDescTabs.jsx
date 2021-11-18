import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styles from '../components/style/CharDescTabs.module.css';
import { getCharacterData } from '../data/CharacterData';

export default function CharDescTabs({ card }) {
  const [stateTabs, setStateTabs] = useState();
  const [Characters, SetCharacters] = useState();
  const [characterData, setCharacterData] = useState();

  useEffect(() => {
    setStateTabs(1);
    axios
      .get(`https://www.dnd5eapi.co${card.url}`)
      .then((res) => res.data)
      .then((data) => SetCharacters(data));
    getCharacterData(card.index).then((character) => setCharacterData(character));
  }, []);

  const goDescTab = () => {
    setStateTabs(1);
  };

  const goSpellsTab = () => {
    setStateTabs(2);
  };

  return (
    <>
      {Characters && characterData && (
        <div>
          <div className={styles.TabsContent}>
            <button type="button" onClick={goDescTab} className={`Tabs ${stateTabs === 1 ? 'active' : ''}`}>
              Character Data
            </button>
            <button type="button" onClick={goSpellsTab} className={`Tabs ${stateTabs === 2 ? 'active' : ''}`}>
              Character Spells
            </button>
          </div>

          <div className={styles.CharacterCardContainer}>
            {characterData &&
              Characters &&
              (stateTabs === 1 ? (
                <div className={styles.CharacterCardDescription}>
                  <p>
                    <em>Name</em> : {characterData.name}
                  </p>
                  <p>
                    <em>Race</em> : {Characters.name}
                  </p>
                  <p>
                    <em>Description</em> : {Characters.alignment}
                  </p>
                  <div className={styles.characterCardDesc2}>
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
                    <p>
                      <em>Life</em> : {characterData.life}
                    </p>
                    <p>
                      <em>Level</em> : {characterData.level}
                    </p>
                  </div>
                  <div className={styles.characterCardEquipment}>
                    <p>
                      <em>Equipment 1:</em> {characterData.equipment[0].name} (damage: {characterData.equipment[0].damage})
                    </p>
                    <p>
                      <em>Equipment 2:</em> {characterData.equipment[1].name} (damage: {characterData.equipment[1].damage})
                    </p>
                    <p>
                      <em>Equipment 3:</em> {characterData.equipment[2].name} (damage: {characterData.equipment[2].damage})
                    </p>
                  </div>
                </div>
              ) : (
                <div className={styles.CharacterCardSpells}>
                  <ul>
                    <p>Spells :</p>
                    <li>{characterData.spell[0].name}</li>
                    <em>Description: </em> {characterData.spell[0].description} <em>(damage : {characterData.spell[0].damage})</em>
                    <li>{characterData.spell[1].name}</li>
                    <em>Description: </em> {characterData.spell[1].description} <em>(damage : {characterData.spell[1].damage})</em>
                    <li>{characterData.spell[2].name}</li>
                    <em>Description: </em> {characterData.spell[2].description} <em>(damage : {characterData.spell[2].damage})</em>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
