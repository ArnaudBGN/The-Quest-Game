const username = localStorage.getItem('username');

const story = {
  0: {
    media: {
      type: 'image',
      src: 'https://picsum.photos/400/299',
    },
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
          points: 10,
        },
        {
          type: 'button',
          choiceText: 'Partir',
          choiceMade: 'leave',
          nextId: '2',
          points: -10,
        },
      ],
    },
  },
  1: {
    media: {
      type: 'image',
      src: 'https://picsum.photos/400/299',
    },
    route: {
      action: 'lookAround',
      require: '',
      text: [
        `Vous contemplez les lieux qui vous entoure. Cela vous semble familier mais vous ne vous souvenez toujours pas d'où vous êtes`,
        `Vous êtes au beau milieu d'un sacré bordel. Des corps étalés au sol, des habits éparpillés un peu partout et surtout une odeur qui combine un mélange subtile de vomit et d'alchol. Tout à coup, vous êtes pris d'un sursaut de panique et vous ne sentez plus votre sac à dos peser sur vos épaules`,
        `Que faites vous ?`,
      ],
      choices: [
        {
          type: 'button',
          choiceText: 'Fouiller la zone',
          choiceMade: 'search',
          nextId: '1-1a',
          points: 10,
        },
        {
          type: 'button',
          choiceText: 'Paniquer et tourner en rond en levant les bras',
          choiceMade: 'panic',
          nextId: '1-1b',
          points: -10,
        },
      ],
    },
  },
  '1-1a': {
    media: {
      type: 'image',
      src: 'https://picsum.photos/400/299',
    },
    route: {
      action: 'search',
      text: [
        `Vous fouillez les alentours. Vous regarder un peu partout dans ce qui resemble à un campement mais en beaucoup plus grand.`,
        `Beaucoup, beaucoup.... BEAUCOUP plus grand.`,
        `Vous vous retrouvez devant une tente qui vous rappel quelque chose dans un vague souvenir.`,
        `Cette tente se trouve également posée à côté d'un petit bosquet`,
        `Que fouillez-vous ?`,
      ],
      choices: [
        {
          type: 'button',
          choiceText: 'Fouiller la tente',
          choiceMade: 'tent',
          nextId: '1-1a-1a',
          points: 15,
        },
        {
          type: 'button',
          choiceText: 'Fouiller le bosquet',
          choiceMade: 'forest',
          nextId: '1-1a-1b',
          points: 5,
        },
      ],
    },
  },
  '1-1a-1a': {
    media: {
      type: 'image',
      src: 'https://picsum.photos/400/299',
    },
    route: {
      action: 'tent',
      text: [
        `Vous entrez dans la tente.`,
        `Quel bordel là dedans ! L'odeur vous rappel quelque chose...`,
        `Après avoir sniffer, vous remarquez que vous portez la même odeur.`,
        `Malgré le dégoût prononcé qui peut se lire sur votre visage, vous êtes confiant que votre barda se trouve ici`,
        `IL EST LAAAAAAAAA !!! Vous êtes tellement de l'avoir retrouvé que vous hurlez de joie.`,
        `Manque de bol, votre sac se trouve à côté d'un lit où dort le genre de gars qu'il ne faut mieux pas réveiller.`,
      ],
      choices: [
        {
          type: 'button',
          choiceText: `Assomer le gaillard`,
          choiceMade: 'stun',
          nextId: '1-1a-1a-1',
        },
        {
          type: 'button',
          choiceText: `Récupérer votre sac sans faire de bruit`,
          choiceMade: 'sneak',
          nextId: '1-1a-1a-2',
        },
      ],
    },
  },
  '1-1a-1a-1': {
    media: {
      type: 'image',
      src: 'https://picsum.photos/400/299',
    },
    route: {
      action: 'stun',
      text: [`Vous rammassez un haume qui traine par terre et vous rapprochez du gaillard en question.`, `D'un coup sec, vous tentez de l'assommer`],
      choices: [
        {
          type: 'button',
          choiceText: 'BANG !',
          choiceMade: 'bang',
          nextId: Math.floor(Math.random() * 20) > 12 ? '1-1a-1a-1a' : '1-1a-1a-1b',
        },
      ],
    },
  },
  '1-1a-1a-1a': {
    media: {
      type: 'image',
      src: 'https://picsum.photos/400/299',
    },
    route: {
      text: [
        `Et Boooooooooom. Vous frappez fort et, aie aie aie, vous fendez de se pauvre type.`,
        `Pas peu fière de votre fendage de crâne, vous ramassez votre sac`,
        `Vous vérifiez le contenu... Tout à l'air d'être là.`,
      ],
      choices: [
        {
          type: 'button',
          choiceText: `Jeter un dernier coup d'oeil`,
          nextId: '1-1a-1a-1a-1',
        },
        {
          type: 'button',
          choiceText: `Je me tire d'ici !`,
          nextId: '3',
        },
      ],
    },
  },
  '1-1a-1a-1b': {
    media: {
      type: 'image',
      src: 'https://picsum.photos/400/299',
    },
    route: {
      text: [
        `C'est ce qui s'appel un échec !`,
        `Vous vous êtes cru plus fort que vous ne le pensiez. Le haume, beaucoup plus lourd qu'il n'en a l'air vous emporte avec lui.`,
        `Vous vous vautrez royalement par terre et en prime vous réveillez votre gaillard et il n'a pas l'air très joyeux`,
        `Le Gaillard: Tu ne le sais pas encore, mais tu es déjà mort !`,
        `Vous: Naniiiiiiiii !`,
        `Il fait tout noir d'un coup et il fait sacrément froid...`,
        `Félicitation, vous êtes mort !`,
      ],
      choices: [
        {
          type: 'button',
          choiceText: `Fin`,
          nextId: 'End',
          state: false,
        },
      ],
    },
  },
  '1-1b': {
    media: {
      type: 'image',
      src: 'https://picsum.photos/400/299',
    },
    route: {
      action: 'panic',
      text: [
        `Vous avez le palpitant qui s'emballe, vous vous mettez à transpirer à grosse goûte`,
        `Vous vous dites: `,
        `C'est un CAUCHEMAAAAAAAAAAAARD !!!!'`,
        `Il faut absolument que je retrouve mes affaires !`,
        `Que faites-vous ?`,
      ],
      choices: [
        {
          type: 'button',
          choiceText: 'Courrir vite et loin',
          choiceMade: 'run',
          nextId: '1-1-end',
          points: -15,
        },
        {
          type: 'button',
          choiceText: 'Se resaisir et fouillez les lieux',
          choiceMade: 'search',
          nextId: '1-1a',
          points: 10,
        },
      ],
    },
  },
  '1-1-end': {
    media: {
      type: 'image',
      src: 'https://picsum.photos/400/299',
    },
    route: {
      action: 'end',
      text: [`Vous Courrez vite, le plus vite que vous n'ayez jamais courru.`, `Dommage que l'aventure se termine déjà.`],
      choices: [
        {
          type: 'button',
          choiceText: 'Fin',
          nextId: 'End',
          state: false,
        },
      ],
    },
  },
  2: {
    media: {
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    },
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
          points: 100,
        },
        {
          type: 'button',
          choiceText: 'Fuir',
          choiceMade: 'flee',
          nextId: '3-2',
          points: -100,
        },
      ],
    },
  },
  3: {
    media: {
      type: 'image',
      src: 'https://picsum.photos/400/299',
    },
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
};

export const getStory = (id) => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(story[id]);
    }, 0);
  });
};
