'use client'
import { useEffect } from 'react'
import { Storage } from 'megajs'

import { Hero } from '@/components/hero'
// import Timeline from '@/components/timeline'

export default function Home() {
  useEffect(() => {
    startMega().catch((error) => {
      // Handle the error
      console.error('Error during MEGA initialization:', error)
    })
  }, [])

  return (
    <section className='flex flex-col items-start justify-center gap-4 pb-8'>
      <Hero />
      {/* <Timeline /> */}
    </section>
  )
}

const startMega = async () => {
  const userAgent =
    typeof window !== 'undefined' && window.navigator
      ? window.navigator.userAgent
      : 'Mozilla/5.0'

  const megaPassword = process.env.NEXT_PUBLIC_MEGA_PASSWORD

  if (!megaPassword) {
    console.error('MEGA_PASSWORD environment variable is not defined')

    return
  }
  console.log('megaPassword', megaPassword)

  if (!userAgent) {
    console.error('User agent is not defined')
  }

  const userAgentComponents = userAgent.split(' ')

  console.log(
    'User agent:',
    userAgentComponents.find((c) => c.includes('Chrome')) ||
      userAgentComponents.find((c) => c.includes('Mozilla')) ||
      userAgentComponents[userAgentComponents.length - 1]
  )

  try {
    const storage = new Storage({
      email: 'silviberat@gmail.com',
      password: megaPassword,
      userAgent: userAgent,
    })

    // Will resolve once the user is logged in
    // or reject if some error happens
    await storage.ready
    console.log('Storage ready:', storage)

    const res = await storage.login()

    console.log('Login successful:', res)

    // Example of creating a folder
    // const folderRes = await storage.createFolder({ name: 'test' });
    // console.log('Folder created:', folderRes);
  } catch (error) {
    console.error('Failed to initialize MEGA storage:', error)
    console.log(error, 'here')

    throw error
  }
}
