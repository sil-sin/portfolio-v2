import AboutComponent from '../../components/about'


import { getAbout } from '@/actions/about'

export default async function About() {
  const textData = await getAbout()

  return <AboutComponent textData={textData} />
}
