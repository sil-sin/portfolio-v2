export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Silvi Sinanaj',
  description: "Silvi Sinanaj's personal website.",
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/docs',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
    // Todo Add blog once have enough content to make it public{
    //   label: 'Blog',
    //   href: '/blog',
    // },
    {
      label: 'About',
      href: '/about',
    },
  ],
  // navMenuItems: [
  //   {
  //     label: 'Profile',
  //     href: '/profile',
  //   },
  //   {
  //     label: 'Dashboard',
  //     href: '/dashboard',
  //   },
  //   {
  //     label: 'Projects',
  //     href: '/projects',
  //   },
  //   {
  //     label: 'Team',
  //     href: '/team',
  //   },
  //   {
  //     label: 'Calendar',
  //     href: '/calendar',
  //   },
  //   {
  //     label: 'Settings',
  //     href: '/settings',
  //   },
  //   {
  //     label: 'Help & Feedback',
  //     href: '/help-feedback',
  //   },
  //   {
  //     label: 'Logout',
  //     href: '/logout',
  //   },
  // ],
  links: {
    github: 'https://github.com/sil-sin',
    linkedin: 'https://www.linkedin.com/in/silvisinanaj/',
  },
}
