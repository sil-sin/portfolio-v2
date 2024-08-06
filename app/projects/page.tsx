'use client'

import { title } from '@/components/primitives'
import ProjectCard from '@/components/projects/projectCard'
import { projects } from '@/config/projects'

export default function ProjectsPage() {
  return (
    <div className='box-border flex flex-col items-center gap-10 px-4 sm:px-6 lg:px-8'>
      <h1 className={title()}>Projects</h1>

      <div className='w-full max-w-5xl flex flex-wrap justify-center gap-10'>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            alternativeLink={project.alternativeLink}
            description={project.description} // Include description
            githubRepos={project.githubRepos}
            image={project.img}
            link={project.link}
            size='lg'
            tech={project.tech}
            title={project.name}
          />
        ))}
      </div>
    </div>
  )
}
