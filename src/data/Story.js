const userName = localStorage.getItem('username');

const story = {
  0: {
    media: {
      type: 'image',
      src: 'https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826_960_720.jpg',
    },
    route: {
      action: '',
      require: '',
      text: [
        `Debout ${userName} !!!!`,
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
      src: 'https://cdn.pixabay.com/photo/2020/04/20/19/14/landfills-5069482_960_720.jpg',
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
      src: 'https://cdn.pixabay.com/photo/2021/08/13/12/38/tent-6543019_960_720.jpg',
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
      src: 'https://cdn.pixabay.com/photo/2015/04/02/18/03/forest-704077_960_720.jpg',
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
      src: 'https://cdn.pixabay.com/photo/2014/11/20/20/37/autumn-539811_960_720.jpg',
    },
    route: {
      action: 'stun',
      text: [`Vous rammassez un heaume qui traine par terre et vous rapprochez du gaillard en question.`, `D'un coup sec, vous tentez de l'assommer`],
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
      src: 'https://cdn.pixabay.com/photo/2014/07/24/21/35/mortality-401222__340.jpg',
    },
    route: {
      text: [
        `Et Boooooooooom. Vous frappez fort et, aie aie aie, vous fendez la tête de se pauvre type.`,
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
      src: 'https://cdn.pixabay.com/photo/2020/10/29/17/40/fantasy-5696828__340.jpg',
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
          caption: 'Vous êtes mort !',
        },
      ],
    },
  },
  '1-1b': {
    media: {
      type: 'image',
      src: 'https://t1.pixers.pics/img-c676e9e9/posters-homme-dans-une-foret-sombre.jpg?H4sIAAAAAAAAA42PW07EMAxFt5NK6dh51WkXML-zhCpN0qHQl5ICI1ZPCog_JGRLfsj3WBde1-zGCD6uR0ywTCHMEcZpLlPuUszTR2TIVWuqrmxnhohVt73F5NO2M2V4LZTkTWu4kbbq3l0RLi69sKfj2HMHkNVlnx6FVorP4JcMEgUBWjCtdT4OgVrhZL_X-XBrcCnUhDU9DF729c7xjP-DLQgEMwQxNIMNqAfbS4kFVv8SvrAaiWuyJ_rHJSFyOt0daVpYsbuV64M97_cK_vj53UNRwfUGWoOVQCXtueqvN62tJEm2j9LjKAnHRjVe60YKq6IzqEcUGB1dypdPr0sbnosBAAA=',
    },
    route: {
      action: 'panic',
      text: [
        `Vous avez le palpitant qui s'emballe, vous vous mettez à transpirer à grosse goûtte`,
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
      src: 'https://img.pixers.pics/pho_wat(s3:700/FO/57/41/36/07/700_FO57413607_d4150fc661aa68e66476c8c0abd262a7.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/taies-d-oreiller-signe-de-la-route-dans-la-foret-sombre.jpg.jpg',
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
      type: 'image',
      src: '',
    },
    route: {
      action: '',
      text: [
        `Vous marchez longtemps...`,
        `Très longtemps...`,
        `Vous arrivez en ville, sans votre sac, que vous avez lâchement abandonné !`,
        `Cependant, vous avez toujours votre bourse sur vous. Une soudaine envie de dépenser votre argent vous viens. Surement une frustration à combler.`,
        `Vous vous rapprochez d'une taverne qui vous semble bien animée'`,
        `Que décidez-vous ?`,
      ],
      choices: [
        {
          type: 'button',
          choiceText: 'Rentrer dans la taverne',
          choiceMade: 'drink',
          nextId: '2-1-end',
          points: 0,
        },
        {
          type: 'button',
          choiceText: 'Passer votre chemin',
          choiceMade: 'continue',
          nextId: '2-2',
          points: 0,
        },
      ],
    },
  },
  '2-1-end': {
    media: {
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    },
    route: {
      action: 'drink',
      require: '',
      text: [`Mais, c'est Rick Asley !`, `Vous venez de vous faire rickroll`],
      choices: [
        {
          type: 'button',
          choiceText: 'Fin',
          nextId: 'End',
          state: false,
          caption: 'Rickrolled',
        },
      ],
    },
  },
  3: {
    media: {
      type: 'image',
      src: '',
    },
    route: {
      action: '',
      text: [
        `Vous marchez longtemps...`,
        `Très longtemps...`,
        `Vous arrivez en ville. Tout cette histoire vous a donné soif !`,
        `Vous vous rapprochez d'une taverne qui vous semble bien animée'`,
        `Que décidez-vous ?`,
      ],
      choices: [
        {
          type: 'button',
          choiceText: 'Rentrer dans la taverne',
          choiceMade: 'drink',
          nextId: '2-1-end',
          points: 0,
        },
        {
          type: 'button',
          choiceText: 'Passer votre chemin',
          choiceMade: 'continue',
          nextId: '3-2',
          points: 0,
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
