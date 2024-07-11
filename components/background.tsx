import React from 'react'
import '../styles/globals.css'

// type Props = {
//   text?: string
// }
export default function Background({}) {
  return (
    <div className='area'>
      <ul className='circles'>
        {[...Array(10)].map((_, i) => (
          <li key={i} className='center' />
        ))}
      </ul>
    </div>
  )
}
