import React from 'react'
import "./topnav.css"
import Social from '../../components/social-links/Social';
import SideBar from '../../components/sidebar/SideBar';


const TopNav = () => {

  return (
    <section className='h-12 w-full p-2 sm:p-5'>
      <nav className='h-full flex justify-between items-center'>
        <div className='w-1/3'>
          <a href='#' >xCoder</a>
        </div>
        <div className='sm:w-2/3'>
          <ul className='flex w-full short-navs uppercase space-x-5 justify-center'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>portfolio</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <Social show={'social'} />
        <SideBar />
      </nav>
    </section>
  )
}

export default TopNav
