import { technology } from './technology'

import { Project } from '@/types'

const {
  HTML,
  CSS,
  JavaScript,
  TypeScript,
  ReactJS,
  NextJS,
  NodeJS,
  MongoDB,
  Vercel,
  Jest,
  Contentful,
  MaterialUI,
  ExpressJS,
  GoogleCloud,
  Handlebars,
  GitHub,
} = technology

export const projects: Project[] = [
  {
    name: 'Discover Berat',
    description:
      'Discover Berat is a web application, built for a local tour agency in Berat, Albania, with the same name. The web app allows users to get information about the tours and other services this agency provides, as well as book them.',
    link: 'https://discoverberat.com',
    githubRepos: [
      { name: 'Github Repo', link: 'https://github.com/sil-sin/discoverberat' },
    ],
    img: '',
    tech: [
      ReactJS,
      NextJS,
      TypeScript,
      Contentful,
      CSS,
      Jest,
      Vercel,
      GitHub,
      GoogleCloud,
    ],
  },
  {
    name: 'Baby Shower',
    description:
      'A baby shower application. It allows you to RSVP for the baby shower, send messages and reserve the gift you want to buy from the list of options. It also allows you to share it with your friends and family.',
    link: 'https://babyshower-eta.vercel.app/',
    alternativeLink: 'https://babyliam.vercel.app',
    githubRepos: [
      {
        name: 'Client Repo main',
        link: 'https://github.com/sil-sin/babyshower/tree/main',
      },
      {
        name: 'Client Brazil version',
        link: 'https://github.com/sil-sin/babyshower/tree/BRAZIL',
      },
      {
        name: 'Server Repo',
        link: 'https://github.com/sil-sin/babyshower-db',
      },
    ],
    img: '',
    tech: [
      ReactJS,
      JavaScript,
      CSS,
      Vercel,
      GitHub,
      NodeJS,
      MongoDB,
      ExpressJS,
    ],
  },
  {
    name: 'Portfolio v1',
    description:
      'Personal website. My first version of my portfolio, fresh out of bootcamp.',
    link: 'https://silvisinanaj.vercel.app',
    githubRepos: [
      { name: 'Github Repo', link: 'https://github.com/sil-sin/Portfolio' },
    ],
    img: '',
    tech: [ReactJS, MaterialUI, JavaScript, CSS, Vercel, GitHub],
  },
  {
    name: 'FoodCafé',
    description: `This is the final project of my Bootcamp. FoodCafe is a full-stack web app. It's a cozy environment for people to connect around the common interest of food. Users can create their profile, find, create, edit, or delete recipes, and post about their food.`,
    link: 'https://food-cafe.herokuapp.com/',
    githubRepos: [
      {
        name: 'Client Repo',
        link: 'https://github.com/jnmelio/FoodCafe-client',
      },
      {
        name: 'Server Repo',
        link: 'https://github.com/jnmelio/FoodCafe-server',
      },
    ],
    img: '',
    tech: [
      ReactJS,
      MaterialUI,
      JavaScript,
      CSS,
      NodeJS,
      MongoDB,
      ExpressJS,
      Vercel,
      GitHub,
    ],
  },
  {
    name: 'Silver Tasker',
    description: `Silver Tasker web application, is a task managing system built with the hotel business model in mind. Using this application, the managers can create and assign tasks to their staff members and keep track of the task status.`,
    link: 'https://silver-tasker.onrender.com/',
    githubRepos: [
      { name: 'Github Repo', link: 'https://github.com/sil-sin/Silver-Tasker' },
    ],
    img: '/silver-tasker.png',
    tech: [NodeJS, ExpressJS, MongoDB, Handlebars, JavaScript, CSS, GitHub],
  },
  {
    name: 'Gotta Win Em All',
    description:
      'Gotta Win Em All is my very first coding experience. After only 3 weeks at Ironhack, we were able to create our very first web game, using our newly learned programming languages. The game is a Pokémon-themed 2D side-scroller with increasing difficulty and different levels.',
    link: 'https://sil-sin.github.io/Gotta-Win-Em-All/',
    githubRepos: [
      {
        name: 'Github Repo',
        link: 'https://github.com/sil-sin/Gotta-Win-Em-All',
      },
    ],
    img: '/gotta-win-em-all.png',
    tech: [HTML, CSS, JavaScript, GitHub],
  },
]
