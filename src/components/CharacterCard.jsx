import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './CharacterCard.css';

const objectIMG = [
  {
    race: 'half-orc',
    img: './src/images/Perso_Half-Orc.png',
    force: 60,
    spells: [
      {
        index: 1,
        name: 'Polymorph',
        description: 'Can change his appearance to trick his opponent',
      },
      {
        index: 2,
        name: 'Slave-banner',
        description:
          'This spell requires a rod or staff. By stamping one end against the ground and casting the spell, it conjures and unfurls a war banner attached to the head of the staff',
      },
    ],
  },
  {
    race: 'dwarf',
    img: './src/images/Perso-Dwarf.png',
    force: 35,
  },
  {
    race: 'elf',
    img: './src/images/Perso-Elf.png',
    force: 25,
  },
  {
    race: 'human',
    img: '',
    force: 45,
  },
];

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
    <div className="CharacterCard-container">
      <div className="CharacterCard-top">
        {Characters.index &&
          objectIMG
            .filter((elem) => elem.race === Characters.index)
            .map((elem) => {
              <img src={elem.img} alt={elem.race} />;
            })}

        <div className="CharacterCard-description">
          <p>
            <em>Race</em> : {Characters.name}
          </p>
          <p>
            <em>Speed</em> : {Characters.speed}
          </p>
          <p>
            <em>Description</em> : {Characters.alignment}
          </p>
          <p>
            <em>Size</em>: {Characters.size}
          </p>
        </div>
      </div>
      <div className="CharacterCard-attributes">
        <div className="CharacterCard-stats">
          <p>Force : 35</p>
        </div>
        <div className="CharacterCard-spells">
          <p>
            Spells:
            <li>Polymorphe</li>
          </p>
        </div>
      </div>
      <button onClick={handlePlayClick}>Let&apos;s play</button>
    </div>
  );
}

export default CharacterCard;
