import { GithubIcon } from '@/components/icons'
import { Css3Icon, Html5Icon, JSIcon } from '@/components/techIcons'
import { Project } from '@/types'

export const projects: Project[] = [
  {
    name: 'Discover Berat',
    description:
      'Discover Berat is a web application, build for a local tour agency in Berat, Albania, with the same name. The web app allows users to get information about the tours and other services this agency provides, as well as book them.',
    link: 'https://discoverberat.com',
    githubRepos: ['https://github.com/sil-sin/discoverberat'],
    img: '/discover-berat.png',
    tech: [
      {
        name: 'Next.js',
        icon: Html5Icon,
      },
      {
        name: 'Tailwind CSS',
        icon: Css3Icon,
      },
      {
        name: 'TypeScript',
        icon: JSIcon,
      },
      {
        name: 'Framer Motion',
        icon: Css3Icon,
      },
    ],
  },
  {
    name: 'silvisinanaj.tech',
    description:
      'Personal website. My first version of my portfolio, fresh out of bootcamp.',
    link: 'https://silvisinanaj.vercel.app',
    githubRepos: ['https://github.com/sil-sin/Portfolio'],
    img: '/silvisinanaj.png',
    tech: [
      {
        name: 'Next.js',
        icon: JSIcon,
      },
      {
        name: 'Tailwind CSS',
        icon: Css3Icon,
      },
      {
        name: 'TypeScript',
        icon: JSIcon,
      },
      {
        name: 'Framer Motion',
        icon: Css3Icon,
      },
    ],
  },
  {
    name: 'FoodCafé',
    description: `This is the final project of my Bootcamp. FoodCafe is a full-stack web app. It's a cozy environment for people to connect around the common interest of food. Users can create their profile,
     can find, create, edit, or delete recipes, and post about their food.`,
    link: 'https://silver-tasker.onrender.com/',
    githubRepos: ['https://github.com/sil-sin/Silver-Tasker'],
    img: '/foodcafe.png',
    tech: [
      {
        name: 'Next.js',
        icon: Html5Icon,
      },
      {
        name: 'Tailwind CSS',
        icon: Html5Icon,
      },
      {
        name: 'TypeScript',
        icon: Html5Icon,
      },
      {
        name: 'Framer Motion',
        icon: Html5Icon,
      },
    ],
  },
  {
    name: 'Silver Tasker',
    description: `Silver Tasker web application, is a task managing system build with the hotel business model in mind
    Using this application, the managers can create and assign tasks to their staff members and keep track of the task status.`,
    link: 'https://silver-tasker.onrender.com/',
    githubRepos: ['https://github.com/sil-sin/Silver-Tasker'],
    img: '/silver-tasker.png',
    tech: [
      {
        name: 'Next.js',
        icon: Html5Icon,
      },
      {
        name: 'Tailwind CSS',
        icon: Html5Icon,
      },
      {
        name: 'TypeScript',
        icon: Html5Icon,
      },
      {
        name: 'Framer Motion',
        icon: Html5Icon,
      },
    ],
  },
  {
    name: 'Gotta Win Em All',
    description:
      'Gotta Win Em All is my very first coding experience. After only 3 weeks at Ironhack we were able to create our very first webgame, using our newly learned programming languages. The game is a Pokemon themed 2D side scroller with increasing difficulty and different levels.',
    link: 'https://sil-sin.github.io/Gotta-Win-Em-All/',
    githubRepos: ['https://github.com/sil-sin/Gotta-Win-Em-All'],
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
        icon: Html5Icon,
      },
      {
        name: 'Git',
        icon: GithubIcon,
      },
    ],
  },
]
