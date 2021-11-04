const username = localStorage.getItem('username');
const story = {
  0: {
    image: 'https://picsum.photos/400/299',
    route: {
      action: '',
      require: '',
      text: [
        `Debout ${username} !!!!`,
        `Vous vous réveillez allongé par terre. Une forte douleur à la tête vous empêche de vous resaisir.`,
        `Vous vous relevez et sentez que vous repennez vos esprit petit à petit`,
        `Vous sentez que vous avez pris un sacré coup sur la tête ! Vous avez un mauvais présentiment.`,
        `Vous n'avez aucune idée d'où vous êtes`,
        `Que faites-vous ?`,
      ],
      choices: [
        {
          type: 'button',
          choiceText: 'Regarder autour de vous',
          choiceMade: 'lookAround',
          nextId: '1',
        },
        {
          type: 'button',
          choiceText: 'Partir',
          choiceMade: 'leave',
          nextId: '2',
        },
      ],
    },
  },
  1: {
    image: 'https://picsum.photos/400/303',
    route: {
      action: 'lookAround',
      require: '',
      text: [],
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
  2: {
    image: 'https://picsum.photos/400/302',
    route: {
      action: 'tout droit',
      require: '',
      text: ['Vous avancez tout droit', 'Vous tombez sur une enigme', 'Quel est le muscle ?'],
      choices: [
        {
          type: 'input',
          checkAnswer: (answer) => (answer === 'kamoolox' ? '2-1' : '0'),
        },
      ],
    },
  },
  3: {
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
};

export const getStory = (id) => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(story[id]);
    }, 0);
  });
};
