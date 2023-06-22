import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer flex justify-center items-center h-24 bg-black p-3'>
        <div className='h-full w-full flex justify-center'>
            <div className=''>
                <p className='text-white font-bold'>@copyrighted</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer