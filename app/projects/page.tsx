'use client'
import { title } from '@/components/primitives'
import ProjectCard from '@/components/projects/projectCard'
import { projects } from '@/config/projects'

export default function ProjectsPage() {
  return (
    <div className='min-w-vw box-border flex flex-col items-stretch gap-10'>
      <h1 className={title()}>Docs</h1>

      <div className='w-full max-w-5xl flex flex-wrap justify-center gap-10'>
        {projects.map((project) => (
          // eslint-disable-next-line react/jsx-key
          <ProjectCard
            image={''}
            projectUrl={''}
            title={project.name}
            {...project}
          />
        ))}
      </div>
    </div>
  )
}
