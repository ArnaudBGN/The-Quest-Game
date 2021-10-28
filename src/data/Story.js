const story = [
  {
    id: '0',
    image: 'https://picsum.photos/400/299',
    route: {
      action: '',
      require: '',
      text: [
        'This is a very cool RPG dialog message.',
        'If you would like to see more awesome stuff, check out the other writeups at codeworkshop.dev!',
        'Remember to wash your hands!',
      ],
      choices: [
        {
          type: 'button',
          choiceText: 'Aller à gauche',
          choiceMade: 'gauche',
          nextId: '1',
        },
        {
          type: 'button',
          choiceText: 'Aller tout droit',
          choiceMade: 'tout-droit',
          nextId: '2',
        },
        {
          type: 'button',
          choiceText: 'Aller à droite',
          choiceMade: 'droite',
          nextId: '3',
        },
      ],
    },
  },
  {
    id: '1',
    image: 'https://picsum.photos/400/303',
    route: {
      action: 'gauche',
      require: '',
      text: ['Vous êtes arriver à gauche', 'Où voulez-vous aller'],
      choices: [
        {
          type: 'button',
          choiceText: 'regarder à gauche',
          choiceMade: 'gauche',
          nextId: '1-1',
        },
        {
          type: 'button',
          choiceText: 'Retourner en arrière',
          choiceMade: 'arriere',
          nextId: '0',
        },
      ],
    },
  },
  {
    id: '2',
    image: 'https://picsum.photos/400/302',
    route: [
      {
        action: 'tout droit',
        require: '',
        text: ['Vous avancez tout droit', 'Vous tombez sur une enigme', 'Quel est le muscle ?'],
        choices: [
          {
            type: 'input',
            choices: (answer) => (answer === 'kamoolox' ? '2-1' : '0'),
          },
        ],
      },
    ],
  },
  {
    id: '3',
    image: 'https://picsum.photos/400/301',
    route: {
      action: 'gauche',
      require: '',
      text: ['Un puissant enemi se dresse devant vous !!!', "Oserez-vous l'attaquer ou fuirez-vous comme un lâche"],
      choices: [
        {
          type: 'button',
          choiceText: 'Attaquer',
          choiceMade: 'attack',
          nextId: '3-1',
        },
        {
          type: 'button',
          choiceText: 'Fuir',
          choiceMade: 'flee',
          nextId: '3-2',
        },
      ],
    },
  },
];

export default story;
