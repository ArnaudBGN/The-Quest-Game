const objectIMG = [
  {
    race: 'half-orc',
    img: './src/components/images/Perso_Half-Orc.png',
    strength: 60,
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
    img: './src/components/images/Perso-Dwarf.png',
    strength: 35,
  },
  {
    race: 'elf',
    img: './src/components/images/Perso-Elf.png',
    strength: 25,
  },
  {
    race: 'human',
    img: './src/components/images/Perso-Human.png',
    strength: 45,
  },
];

export default objectIMG;
