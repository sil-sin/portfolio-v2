import { Code } from '@nextui-org/code'
import { Snippet } from '@nextui-org/snippet'
import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'

import { GithubIcon } from './icons'
import Background from './background'

import { siteConfig } from '@/config/site'

export const Hero = () => {
  return (
    <div
      className=' w-full h-full flex flex-col items-center justify-center gap-20 py-12 md:py-10  '
      style={{ position: 'relative' }}
    >
      <Background />
      <div className='inline-block max-w-lg text-center justify-star'>
        <h1 className='text-5xl font-bold'>
          Hi there I&apos;m <span className='text-primary'>Sil</span>
        </h1>
      </div>
      <div>
        <Snippet
          hideCopyButton
          className='flex text-wrap flex-wrap align-end  justify-center text-center'
          variant='solid'
        >
          <span className='text-lg text-wrap '>
            {/* Full stack developer with focus on frontend.{' '} */}
            <Code className='font-bold p-4' color='default'>
              {' '}
              Web Developer
            </Code>
          </span>
        </Snippet>
      </div>
      <div className=' flex items-center justify-center gap-4 flex-row '>
        <Link
          isExternal
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'shadow',
          })}
          href={siteConfig.links.linkedin}
        >
          LinkedIn
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </div>
  )
}
