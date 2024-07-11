import { redirect } from 'next/navigation'

import { title } from '@/components/primitives'

export default function BlogPage() {
  //? Redirect to home page until it's ready
  redirect('/')

  return (
    <div>
      <h1 className={title()}>Blog</h1>
    </div>
  )
}
