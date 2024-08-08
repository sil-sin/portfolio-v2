'use client'

import { FC } from 'react'
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react' // Import the Image component from the appropriate package
import { Link } from '@nextui-org/link'

import { AnchorIcon } from '../icons'

import { ProjectTechPill } from './projectTechPill'

import { GithubRepos, Technology } from '@/types'

type Props = {
  title: string
  description?: string
  image?: string
  link: string
  tech: Technology[]
  githubRepos: GithubRepos[]
  alternativeLink?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeCardClasses = {
  sm: 'py-4 sm:w-60 w-full gap-4 sm:mx-auto',
  md: 'py-6 sm:w-80 w-full gap-6 sm:mx-auto',
  lg: 'py-8  w-full gap-8 sm:mx-auto',
}

const ProjectCard: FC<Props> = ({
  title,
  description,
  image,
  link,
  tech,
  githubRepos,
  alternativeLink,
  size = 'md',
}) => {
  return (
    <Card className={sizeCardClasses[size]}>
      <CardHeader
        className={
          size === 'lg'
            ? 'pb-0 pt-2 px-8 flex-col gap-2 items-center min-h-16'
            : 'pb-0 pt-2 px-4 flex-col gap-1 items-start min-h-16'
        }
      >
        <Link
          className='text-lg dark:text-white text-black flex items-center'
          href={link}
          rel='noopener noreferrer'
          target='_blank'
        >
          <h3 className='font-bold  text-large flex'>{title}</h3>
          <AnchorIcon />
        </Link>
        {alternativeLink && (
          <sub>
            <Link
              className='font-bold text-xs flex items-center '
              color='warning'
              href={alternativeLink}
              rel='noopener noreferrer'
              target='_blank'
            >
              Alternative Version
              <AnchorIcon />
            </Link>
          </sub>
        )}
        {image && (
          <Image
            alt={title + ' project image'}
            className='w-full mx-auto my-4 md:max-w-xl'
            src={image}
          />
        )}
        {description && <p className='text-sm mb-2 max-w-xl'>{description}</p>}
      </CardHeader>
      {size === 'lg' && (
        <CardBody
          className={size === 'lg' ? 'flex flex-col gap-6 px-8' : 'py-2 px-4'}
        >
          <div className='flex flex-wrap gap-2'>
            {tech?.map(({ name, icon }) => (
              <ProjectTechPill key={name} icon={icon} techName={name} />
            ))}
          </div>

          <div className='py-2 w-full flex flex-col gap-2'>
            <h4 className='font-bold'>Github Repositories</h4>
            <div className='flex flex-wrap gap-2'>
              {githubRepos?.map(({ name, link }) => (
                <Link
                  key={link}
                  className='text-sm font-bold flex items-center'
                  href={link}
                  target='_blank'
                >
                  {name}
                  <AnchorIcon />
                </Link>
              ))}
            </div>
          </div>
        </CardBody>
      )}
      {size === 'sm' && (
        <>
          <CardBody className='py-2 px-4'>
            <div className='flex flex-wrap gap-2'>
              {tech?.map(({ name, icon }) => (
                <ProjectTechPill key={name} icon={icon} techName={name} />
              ))}
            </div>
          </CardBody>
          <div className='py-2 px-4 flex flex-col'>
            {githubRepos?.map(({ name, link }) => (
              <Link
                key={link}
                className='text-sm font-bold flex items-center'
                href={link}
                target='_blank'
              >
                {name}
                <AnchorIcon />
              </Link>
            ))}
          </div>
        </>
      )}
    </Card>
  )
}

export default ProjectCard
