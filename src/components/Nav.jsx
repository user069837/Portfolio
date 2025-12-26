import React from 'react'

function Nav() {
  return (
    <nav className='absolute h-18 w-dvw flex flex-row items-center justify-start pl-0 bg-transparent'>
      <ul className='flex items-center justify-start gap-12 w-1/3 font-bold text-lg pl-15'>
        <li><a href="">Skills</a></li>
        <li><a href="">Works</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav