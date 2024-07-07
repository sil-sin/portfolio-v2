import React from 'react'
import '../styles/globals.css'
export default function Background() {
  return (
    <div className='area'>
      <ul className='circles'>
        {[...Array(10)].map((_, i) => (
          <li key={i} />
        ))}
      </ul>
    </div>
  )
}
