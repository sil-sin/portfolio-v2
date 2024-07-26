import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/themeSwitch'
import { GithubIcon, LinkedInIcon, Logo } from '@/components/icons'

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth='xl' position='sticky'>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink className='flex justify-start items-center gap-1' href='/'>
            <Logo />
            <p className='font-bold text-inherit'>ACME</p>
          </NextLink>
        </NavbarBrand>
        <ul className='hidden md:flex gap-4 justify-start ml-2'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color='foreground'
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className='flex basis-full' justify='end'>
        <NavbarItem className=' flex gap-2'>
          <Link
            isExternal
            aria-label='Linkedin'
            href={siteConfig.links.linkedin}
          >
            <LinkedInIcon className='text-default-500' />
          </Link>
          <Link isExternal aria-label='Github' href={siteConfig.links.github}>
            <GithubIcon className='text-default-500' />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle className=' md:hidden' />
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={'foreground'} href={item.href} size='lg'>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
