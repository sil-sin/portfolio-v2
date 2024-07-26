'use client'

import { FC } from 'react'
import { Card, CardHeader, CardBody } from '@nextui-org/react'

import { ProjectTechPill } from './project-tech-pill'

type Props = {
  title: string
  description: string
  image: string
  projectUrl: string
  tech: any
}

const ProjectCard: FC<Props> = ({ title, tech }) => {
  return (
    <Card className='py-4 h-full sm:w-60 w-full m-4 sm:mx-auto'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <h4 className='font-bold text-large'>{title}</h4>
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
        <small className='text-default-500' />
      </CardBody>
    </Card>
  )
}

export default ProjectCard
