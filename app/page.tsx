'use client'

import { Hero } from '@/components/hero'
import { subtitle } from '@/components/primitives'
import ProjectCard from '@/components/projects/project-card'
import { projects } from '@/config/projects'

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full '>
      <Hero />
      <h3
        className={subtitle({
          className: 'text-center',
          color: 'foreground',
          weight: 'medium',
          size: 'lg',
        })}
      >
        Projects
      </h3>
      <div className='w-vw-100 max-w-6xl grid grid-cols-1 gap-10 sm:grid-cols-2  mx-auto lg:grid-cols-3  '>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            description={project.description}
            image={project.img}
            projectUrl={project.link}
            tech={project.tech}
            title={project.name}
          />
        ))}
      </div>
    </section>
  )
}
