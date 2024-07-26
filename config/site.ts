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
      href: '/projects',
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
  links: {
    github: 'https://github.com/sil-sin',
    linkedin: 'https://www.linkedin.com/in/silvisinanaj/',
  },
}
