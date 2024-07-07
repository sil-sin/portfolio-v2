import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { button as buttonStyles } from '@nextui-org/theme'

import { siteConfig } from '@/config/site'
import { GithubIcon } from '@/components/icons'
import { Counter } from '@/components/counter'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <Hero />
      <div className='flex gap-3'>
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
        <Counter />
      </div>
      <div className='mt-8'>
        <Snippet hideCopyButton hideSymbol variant='bordered'>
          <span>
            Get started by editing <Code color='primary'>app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  )
}
