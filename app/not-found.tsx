import Link from 'next/link'

import Background from '@/components/background'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-3xl font-bold mb-4'>Not Found</h2>
      <p className='text-lg mb-8'>Could not find the requested resource.</p>
      <Link
        className='bg-primary text-white rounded-lg px-4 py-2 z-10 hover:bg-primary/80'
        href='/'
      >
        Return Home
      </Link>
      <Background />
    </div>
  )
}
