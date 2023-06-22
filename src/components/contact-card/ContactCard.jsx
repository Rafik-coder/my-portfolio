import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./contactcard.css"

const ContactCard = ({icon, title, link}) => {
  return (
    <div 
        className='hover:shadow-xl cursor-pointer social-card h-24 
        text-white mb-3 font-bold rounded-md w-full flex flex-col justify-center items-center
        '
    >
        <span><FontAwesomeIcon icon={icon} /></span>
        <p>{title}</p>
        <a href={`${link}`} className='text-blue-300 transition-all hover:text-blue-100' target='_blank'>Message me</a>
    </div>
  )
}

export default ContactCard