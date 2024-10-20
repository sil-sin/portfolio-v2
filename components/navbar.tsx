'use client'

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
import { usePathname } from 'next/navigation'
import { useState } from 'react' // Import useState

import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/themeSwitch'
import { GithubIcon, LinkedInIcon, Logo } from '@/components/icons'

export const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Add state for menu

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      maxWidth='xl'
      position='sticky'
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink className='cursor-pointer' href='/'>
            <Logo size={48} />
          </NextLink>
        </NavbarBrand>
        <ul className='hidden md:flex gap-2 justify-start'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({
                    color: 'foreground',
                    underline: pathname === item.href ? 'always' : 'hover',
                  }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium active:underline'
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
        <NavbarItem className='flex gap-2'>
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
        <NavbarMenuToggle className='md:hidden' />
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color='foreground'
                href={item.href}
                size='lg'
                onClick={closeMenu} // Add onClick handler to close menu
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
