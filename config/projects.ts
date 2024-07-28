import { GithubIcon } from '@/components/icons'
import {
  ContentfulIcon,
  Css3Icon,
  ExpressJsIcon,
  GoogleCloudIcon,
  HandlebarsIcon,
  Html5Icon,
  JestIcon,
  JSIcon,
  MaterialUIIcon,
  MongoDbIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  TypeScriptIcon,
  VercelIcon,
} from '@/components/techIcons'
import { Project } from '@/types'

export const projects: Project[] = [
  {
    name: 'Discover Berat',
    description:
      'Discover Berat is a web application, built for a local tour agency in Berat, Albania, with the same name. The web app allows users to get information about the tours and other services this agency provides, as well as book them.',
    link: 'https://discoverberat.com',
    githubRepos: [
      { name: 'Github Repo', link: 'https://github.com/sil-sin/discoverberat' },
    ],
    img: '/discover-berat.png',
    tech: [
      {
        name: 'React',
        icon: ReactIcon,
      },
      {
        name: 'Next.js',
        icon: NextJSIcon,
      },
      {
        name: 'TypeScript',
        icon: TypeScriptIcon,
      },
      {
        name: 'Contentful',
        icon: ContentfulIcon,
      },
      {
        name: 'CSS',
        icon: Css3Icon,
      },
      {
        name: 'Jest',
        icon: JestIcon,
      },
      {
        name: 'Vercel',
        icon: VercelIcon,
      },
      {
        name: 'GitHub',
        icon: GithubIcon,
      },
      {
        name: 'Google Cloud',
        icon: GoogleCloudIcon,
      },
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
    img: '/silvisinanaj.png',
    tech: [
      {
        name: 'React.js',
        icon: ReactIcon,
      },
      {
        name: 'JavaScript',
        icon: JSIcon,
      },
      {
        name: 'CSS',
        icon: Css3Icon,
      },
      {
        name: 'Vercel',
        icon: VercelIcon,
      },
      {
        name: 'GitHub',
        icon: GithubIcon,
      },
      {
        name: 'Node.js',
        icon: NodeJSIcon,
      },
      {
        name: 'MongoDB',
        icon: MongoDbIcon,
      },
      {
        name: 'Express.js',
        icon: ExpressJsIcon,
      },
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
    img: '/silvisinanaj.png',
    tech: [
      {
        name: 'React.js',
        icon: ReactIcon,
      },
      {
        name: 'Material UI',
        icon: MaterialUIIcon,
      },
      {
        name: 'JavaScript',
        icon: JSIcon,
      },
      {
        name: 'CSS',
        icon: Css3Icon,
      },
      {
        name: 'Vercel',
        icon: VercelIcon,
      },
      {
        name: 'GitHub',
        icon: GithubIcon,
      },
    ],
  },
  {
    name: 'FoodCafé',
    description: `This is the final project of my Bootcamp. FoodCafe is a full-stack web app. It's a cozy environment for people to connect around the common interest of food. Users can create their profile, find, create, edit, or delete recipes, and post about their food.`,
    link: 'https://silver-tasker.onrender.com/',
    githubRepos: [
      { name: 'Client Repo', link: 'https://github.com/sil-sin/Silver-Tasker' },
      {
        name: 'Server Repo',
        link: 'https://github.com/jnmelio/FoodCafe-server',
      },
    ],
    img: '/foodcafe.png',
    tech: [
      {
        name: 'React.js',
        icon: ReactIcon,
      },
      {
        name: 'Material UI',
        icon: MaterialUIIcon,
      },
      {
        name: 'JavaScript',
        icon: JSIcon,
      },
      {
        name: 'CSS',
        icon: Css3Icon,
      },
      {
        name: 'Node.js',
        icon: NodeJSIcon,
      },
      {
        name: 'MongoDB',
        icon: MongoDbIcon,
      },
      {
        name: 'Express.js',
        icon: ExpressJsIcon,
      },
      {
        name: 'Vercel',
        icon: VercelIcon,
      },
      {
        name: 'GitHub',
        icon: GithubIcon,
      },
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
    tech: [
      {
        name: 'Node.js',
        icon: NodeJSIcon,
      },
      {
        name: 'Express.js',
        icon: ExpressJsIcon,
      },
      {
        name: 'MongoDB',
        icon: MongoDbIcon,
      },
      {
        name: 'Handlebars',
        icon: HandlebarsIcon,
      },
      {
        name: 'JavaScript',
        icon: JSIcon,
      },
      {
        name: 'CSS',
        icon: Css3Icon,
      },
      {
        name: 'GitHub',
        icon: GithubIcon,
      },
    ],
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
    tech: [
      {
        name: 'HTML',
        icon: Html5Icon,
      },
      {
        name: 'CSS',
        icon: Css3Icon,
      },
      {
        name: 'JavaScript',
        icon: JSIcon,
      },
      {
        name: 'GitHub',
        icon: GithubIcon,
      },
    ],
  },
]
