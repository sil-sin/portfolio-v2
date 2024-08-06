'use client'

import { Hero } from '@/components/hero'
import { subtitle } from '@/components/primitives'
import ProjectCard from '@/components/projects/projectCard'
import { TechnologyBar } from '@/components/technologyBar'
import { projects } from '@/config/projects'

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full '>
      <Hero />
      <h2
        className={subtitle({
          className: 'text-center',
          color: 'foreground',
          weight: 'medium',
          size: 'lg',
        })}
      >
        Projects
      </h2>
      <div className='w-vw-100 max-w-6xl grid grid-cols-1 gap-10 sm:grid-cols-2 mx-auto lg:grid-cols-3  '>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            alternativeLink={project.alternativeLink}
            githubRepos={project.githubRepos}
            link={project.link}
            size='sm'
            tech={project.tech}
            title={project.name}
          />
        ))}
      </div>
      <TechnologyBar />
    </section>
  )
}
