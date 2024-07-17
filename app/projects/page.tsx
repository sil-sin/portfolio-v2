import { title } from '@/components/primitives'
import { Css3Icon, Html5Icon, JSIcon } from '@/components/techIcons'
import { projects } from '@/config/projects'

export default function ProjectsPage() {
  return (
    <div>
      <h1 className={title()}>Docs</h1>
      <Html5Icon />
      <Css3Icon />
      <JSIcon />

      {projects.map((project) => {
        return (
          <div key={project.name} className='flex-col my-10'>
            <h3 className='font-bold text-primary'>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}> Demo </a>
            {project.githubRepos.map((repo, i) => {
              return (
                <a key={i + repo.length} href={repo + (i === 0 ? '' : i)}>
                  Github repo
                </a>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
