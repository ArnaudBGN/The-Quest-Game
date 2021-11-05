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
      text: [
        `Vous contenplez les lieux qui vous entoure. Cela vous semble familier mais vous ne vous souvenez toujours pas d'où vous êtes`,
        `Vous êtes au beau milieu d'un sacré bordel. Des corps étalés au sol, des habits éparpillés un peu partout et surtout une odeur qui combine une mélange subtile de vomit et d'alchol ,Tout d'un coup, vous êtes pris d'un sursaut de panique et vous ne sentez plus votre sac à dos peser sur vos épaules`,
        `Que faites vous ?`,
      ],
      choices: [
        {
          type: 'button',
          choiceText: 'Fouiller la zone',
          choiceMade: 'search',
          nextId: '1-1',
        },
        {
          type: 'button',
          choiceText: 'Paniquer et tourner en rond en levant les bras',
          choiceMade: 'panic',
          nextId: '2',
        },
      ],
    },
  },
  '1-1': {
    image: 'https://picsum.photos/400/306',
    route: {
      action: 'search',
      text: [
        `Vous fouillez les alentours. Vous regarder un peu partout dans ce qui resemble à un campement mais en beaucoup plus grand.`,
        `Beaucoup, beaucoup.... BEAUCOUP plus grand.`,
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
