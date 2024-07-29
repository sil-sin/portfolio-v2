import { FC } from 'react'

import { subtitle } from './primitives'
import { ProjectTechPill } from './projects/projectTechPill'

import technology from '@/config/technology'

export const TechnologyBar: FC<{}> = () => {
  return (
    <div className='max-w-[100svw] w-full flex flex-wrap justify-center gap-6 dark:bg-slate-600 bg-slate-300  py-8 overflow-hidden'>
      <h3
        className={subtitle({
          className: 'text-center',
          color: 'foreground',
          weight: 'medium',
          size: 'md',
        })}
      >
        Technologies I work with
      </h3>
      <div className='w-full inline-flex flex-nowrap '>
        <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll '>
          {technology.slice(0, technology.length / 2).map((tech, index) => (
            <li key={index}>
              <ProjectTechPill
                key={index}
                icon={tech.icon}
                iconSize={24}
                size='lg'
                techName={tech.name}
                variant='faded'
              />
            </li>
          ))}
        </ul>
        <ul
          aria-hidden='true'
          className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll '
        >
          {technology.slice(0, technology.length / 2).map((tech, index) => (
            <li key={index}>
              <ProjectTechPill
                key={index}
                icon={tech.icon}
                iconSize={24}
                size='lg'
                techName={tech.name}
                variant='faded'
              />
            </li>
          ))}
        </ul>
      </div>
      {technology.length > 1 && (
        <div className='w-full inline-flex flex-nowrap'>
          <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
            {technology.slice(technology.length / 2).map((tech, index) => (
              <li key={index}>
                <ProjectTechPill
                  key={index}
                  icon={tech.icon}
                  iconSize={24}
                  size='lg'
                  techName={tech.name}
                  variant='faded'
                />
              </li>
            ))}
          </ul>
          <ul
            aria-hidden='true'
            className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
          >
            {technology.slice(technology.length / 2).map((tech, index) => (
              <li key={index}>
                <ProjectTechPill
                  key={index}
                  icon={tech.icon}
                  iconSize={24}
                  size='lg'
                  techName={tech.name}
                  variant='faded'
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
