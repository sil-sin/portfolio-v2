'use client'

import { FC } from 'react'
import { Card, CardHeader, CardBody } from '@nextui-org/react'
import { Link } from '@nextui-org/link'

import { AnchorIcon } from '../icons'

import { ProjectTechPill } from './projectTechPill'

import { GithubRepos, Technology } from '@/types'

type Props = {
  title: string
  description: string
  image: string
  projectUrl: string
  tech: Technology[]
  githubRepos: GithubRepos[]
  alternativeLink?: string
}

const ProjectCard: FC<Props> = ({
  title,
  tech,
  projectUrl,
  githubRepos,
  alternativeLink,
}) => {
  return (
    <Card className='py-4 sm:w-60 w-full gap-4 sm:mx-auto'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col gap-1 items-start min-h-16'>
        <Link
          className='text-lg dark:text-white text-black'
          href={projectUrl}
          rel='noopener noreferrer'
          target='_blank'
        >
          <h4 className='font-bold text-large flex'>{title}</h4>
          <AnchorIcon />
        </Link>
        {alternativeLink && (
          <sub>
            <Link
              className='font-bold text-xs flex'
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
      </CardHeader>
      <CardBody className='py-2 px-4'>
        <div className='flex flex-wrap gap-2 '>
          {(tech ?? []).map((element: { name: string; icon: any }) => (
            <ProjectTechPill
              key={element.name}
              icon={element.icon}
              techName={element.name || ''}
            />
          ))}
        </div>
      </CardBody>
      <div className='py-2 px-4 flex flex-col '>
        {githubRepos?.map((repo) => (
          <Link
            key={repo.link}
            className='text-sm font-bold'
            href={repo.link}
            target='_blank'
          >
            {repo.name}
            <AnchorIcon />
          </Link>
        ))}
      </div>
    </Card>
  )
}

export default ProjectCard
