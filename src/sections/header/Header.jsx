import React from 'react'
import './header.css'
// import mypic from 

const Header = () => {
  return (
    <section className='header relative'>
      <div className="sm:grid h-full w-full grid-cols-2 grid-rows-1">
        <div className="left-header h-full z-0 flex justify-center sm:items-center">
          <div className=' flex-col'>
            <div className="text-3xl text-center sm:text-justify">
              <p className="">Hi,</p>
              <p className="">I am Adam Abdul-Rafik</p>
            </div>
            <div className='flex flex-col'>
              <span>I am a Full Stack Deleveloper</span>
              <span className='mt-3'>
                <a href="" className=' p-2 bg-blue-400 rounded-md mt-3 text-white'>Hire Me</a>
              </span>
            </div>
          </div>
        </div>
        <div 
          className="
            right-header absolute 
            top-0 bottom-0 right-0 
            left-0 sm:relative h-full 
            flex justify-center items-center
          "
          
        >
          <div>
            <div>
              {/* <img src={} alt="" /> */}
            </div>
            <p>Pic</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
