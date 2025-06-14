import React from 'react'
import Navbar from '../../components/Teacher/Navbar'
import { Outlet } from 'react-router-dom'

function Educator() {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar />
      <div>
        {<Outlet/>}
      </div>
    </div>
  )
}

export default Educator