const story = [
  {
    id: '0',
    image: 'https://picsum.photos/400/300',
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
          choiceMade: 'Aller à gauche',
          nextId: '1',
        },
        {
          type: 'button',
          choiceMade: 'Aller tout droit',
          nextId: '2',
        },
        {
          type: 'button',
          choiceMade: 'Aller à droite',
          nextId: '3',
        },
      ],
    },
  },
  {
    id: '1',
    image: 'https://picsum.photos/400/300',
    route: [
      {
        action: 'gauche',
        require: '',
        text: ['Vous êtes arriver à gauche', 'Où voulez-vous aller'],
        choices: [
          {
            type: 'button',
            choiceMade: 'regarder à gauche',
            nextId: '1-1',
          },
          {
            type: 'button',
            choiceMade: 'Retourner en arrière',
            nextId: '0',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    image: 'https://picsum.photos/400/300',
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
];

export default story;
