import AboutComponent from '../../components/about'

import { getAbout } from '@/actions/about'

export default async function About() {
  const textData = await getAbout()

  // Provide a safe fallback so the page can prerender when env vars are missing
  return <AboutComponent textData={textData ?? undefined} />
}
