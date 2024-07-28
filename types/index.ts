import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type Technology = {
  name: string
  icon: React.FC<IconSvgProps>
}

export type GithubRepos = {
  name: string
  link: string
}
export type Project = {
  name: string
  description: string
  link: string
  alternativeLink?: string
  githubRepos: GithubRepos[]
  img: string
  tech: Technology[]
}

export type Projects = Project[]
