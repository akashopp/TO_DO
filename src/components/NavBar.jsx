import React from 'react'

function NavBar() {
  return (
    <>
      <div className="flex bg-purple-300 p-3 justify-evenly">
        <span className='text-xl font-bold'>iTask</span>
        <ul className='flex gap-5'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
