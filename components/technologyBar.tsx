import { FC, useState } from 'react'
import { Button } from '@nextui-org/react'

import { subtitle } from './primitives'
import { ProjectTechPill } from './projects/projectTechPill'

import technology from '@/config/technology'

export const TechnologyBar: FC<{}> = () => {
  const [isShowAsList, setIsShowAsList] = useState(false)

  return (
    <div className='max-w-[100svw] w-full flex flex-col align-center gap-6 dark:bg-slate-600 bg-slate-300  py-8 overflow-hidden'>
      <div className='flex justify-center flex-col'>
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
        <Button onClick={() => setIsShowAsList(!isShowAsList)}>
          {isShowAsList ? 'Show animation' : 'Show as List'}
        </Button>
      </div>
      {isShowAsList ? (
        <ul className='w-full grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 h-32 overflow-scroll'>
          {technology.map((tech, index) => (
            <li
              key={index + tech.name}
              className='flex items-center justify-start gap-3 w-1/2 '
            >
              <span>{tech.icon({ size: 24 })}</span>
              {tech.name}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <div className='w-full inline-flex flex-nowrap '>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll '>
              {technology.slice(0, technology.length / 2).map((tech, index) => (
                <li key={tech.name + index}>
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
        </>
      )}
    </div>
  )
}
