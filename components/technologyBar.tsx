import { FC, useState } from 'react'
import { Button } from '@nextui-org/react'

import { subtitle } from './primitives'
import { ProjectTechPill } from './projects/projectTechPill'

import { technology } from '@/config/technology'

export const TechnologyBar: FC = () => {
  const [isShowAsList, setIsShowAsList] = useState(false)

  return (
    <div className='max-w-[100svw] w-full flex flex-col items-center gap-6 dark:bg-slate-600 bg-slate-300 py-8 overflow-hidden'>
      <div className='flex flex-col items-center'>
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
        <Button
          className='dark:bg-transparent dark:text-slate-50  dark:border-gray-100 dark:border-2 dark:border-opacity-100 bg-slate-50 text-slate-800 min-w-60  border-gray-600 border-2 border-opacity-50 rounded-full'
          onClick={() => setIsShowAsList(!isShowAsList)}
        >
          {isShowAsList ? 'Show animation' : 'Show as List'}
        </Button>
      </div>
      {isShowAsList ? (
        <ul className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 h-32 overflow-scroll'>
          {Object.values(technology).map(({ name, icon }) => (
            <li
              key={name}
              className='flex items-center justify-start gap-3 w-1/2'
            >
              <span>{icon({ size: 24 })}</span>
              {name}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <div className='w-full inline-flex flex-nowrap'>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
              {Object.values(technology)
                .slice(0, Math.ceil(Object.values(technology).length / 2))
                .map(({ name, icon }: { name: string; icon: any }) => (
                  <li key={name}>
                    <ProjectTechPill
                      icon={icon}
                      iconSize={24}
                      size='lg'
                      techName={name}
                      variant='faded'
                    />
                  </li>
                ))}
            </ul>
            <ul
              aria-hidden='true'
              className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
            >
              {Object.values(technology)
                .slice(0, Math.ceil(Object.values(technology).length / 2))
                .map(({ name, icon }: { name: string; icon: any }) => (
                  <li key={name}>
                    <ProjectTechPill
                      icon={icon}
                      iconSize={24}
                      size='lg'
                      techName={name}
                      variant='faded'
                    />
                  </li>
                ))}
            </ul>
          </div>
          {Object.values(technology).length > 1 && (
            <div className='w-full inline-flex flex-nowrap'>
              <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                {Object.values(technology)
                  .slice(Math.ceil(Object.values(technology).length / 2))
                  .map(({ name, icon }: { name: string; icon: any }) => (
                    <li key={name}>
                      <ProjectTechPill
                        icon={icon}
                        iconSize={24}
                        size='lg'
                        techName={name}
                        variant='faded'
                      />
                    </li>
                  ))}
              </ul>
              <ul
                aria-hidden='true'
                className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
              >
                {Object.values(technology)
                  .slice(Math.ceil(Object.values(technology).length / 2))
                  .map(({ name, icon }: { name: string; icon: any }) => (
                    <li key={name}>
                      <ProjectTechPill
                        icon={icon}
                        iconSize={24}
                        size='lg'
                        techName={name}
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
