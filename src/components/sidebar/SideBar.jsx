import "./sidebar.css"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Social from '../../components/social-links/Social';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const SideBar = () => {

  const [openDrawer, setOpenDrawer] = useState('close')


  return (
    <div className='bars'>
        <button onClick={() => setOpenDrawer('open')}>
            <FontAwesomeIcon icon={faBars} />
        </button>
        <div
        className={`drawer
            absolute w-full top-0 right-0 transition-all duration-75
            bottom-0 z-50 p-0.5 flex-row-reverse transform-cpu
            hover:cursor-pointer
            ${openDrawer} 
        ` }
        onClick={() => setOpenDrawer("close")}
        >
            <div className='h-full w-3/4 float-right right-0 drawer-container p-2 rounded-sm shadow-lg bg-blue-200'>
                <button 
                onClick={() => setOpenDrawer("close")}
                className='mb-3'
                >
                    <FontAwesomeIcon icon={faTimes} className=' text-2xl hover:text-gray-400 text-black' />
                </button>
                <div className='h-[85%]'>
                    <ul className='flex-col text-black ul-navs w-full uppercase space-y-2 justify-center'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>portfolio</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <Social />
            </div>
        </div>
    </div>
  )
}

export default SideBar