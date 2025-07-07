import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router'
import { Footer } from './Footer'

function Root() {
  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Root