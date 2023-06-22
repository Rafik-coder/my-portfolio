import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLinkedin, 
  faTwitter, 
  faWhatsapp, 
  faInstagram, 
  faFacebookSquare,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';


const Social = ({show}) => {
  return (
    <div className={`${show} sm:w-1/3 flex justify-center space-x-3 text-lg`}>
        <a href='' >
        <FontAwesomeIcon 
            icon={faLinkedin}
            className=' text-blue-500 hover:text-blue-600 transition-all'
        />
        </a>
        <a href='' >
        <FontAwesomeIcon 
            icon={faFacebookSquare} 
            className=' text-blue-500 hover:text-blue-600 transition-all' 
        />
        </a>
        <a href='' >
        <FontAwesomeIcon 
            icon={faTwitter} 
            className=' text-blue-500 hover:text-blue-600 transition-all' 
        />
        </a>
        <a href='' >
        <FontAwesomeIcon 
            icon={faInstagram} 
            className=' text-red-500 hover:text-red-600 transition-all' 
        />
        </a>
        <a href='' >
        <FontAwesomeIcon 
            icon={faYoutube} 
            className=' text-red-500 hover:text-red-600 transition-all' 
        />
        </a>
        <a href='' >
        <FontAwesomeIcon 
            icon={faWhatsapp} 
            className=' text-green-500 hover:text-green-600 transition-all' 
        />
        </a>
    </div>
  )
}

export default Social
