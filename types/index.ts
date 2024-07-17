import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type Technology = {
  name: string
  icon: React.FC<IconSvgProps>
}
export type Project = {
  name: string
  description: string
  link: string
  githubRepos: string[]
  img: string
  tech: Technology[]
}

export type Projects = Project[]
