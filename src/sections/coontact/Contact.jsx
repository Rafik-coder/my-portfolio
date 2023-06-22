import "./contact.css";

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faInbox, faMailBulk, faMessage } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ContactCard from '../../components/contact-card/ContactCard';

const Contact = () => {
  return (
    <section className='contact w-full h-fit mb-44'>
        <div className='w-full flex justify-center'>
            <div className='w-full md:w-[80%]sm:w-[92%] flex flex-col text-center justify-center'>
                <h1 className='text-lg sm:text-2xl font-bold'>Contact Me</h1>
                <div className='sm:flex mt-3'>
                  <div className='contact-left justify-center w-full sm:w-1/2 flex flex-col items-center'>
                    <article className="text-center  w-fit h-fit">
                      You can Contact Me Socialy or by Mail;
                    </article>
                    <div className='social-contacts w-3/4 md:w-1/2 flex flex-col justify-center items-center md:items-end p-3'>
                      <ContactCard icon={faWhatsapp} title={'+233 550450 337'} link={'https://api.whatsapp.com/send?phone=+233550450337'} />
                      <ContactCard icon={faEnvelope} title={'codewithraf769@gmail.com'} link={'mailto:codewithraf769@gmail.com'} />
                    </div>
                  </div>
                  <div className="contact-right sm:w-1/2 h-fit flex flex-col justify-center items-center md:items-start">
                    <div className="md:w-[80%] w-full md:items-start"> 
                      <div className=" w-full p-2 flex justify-center items-center md:items-start">
                        <form action="" method="post" className="w-full flex flex-col space-y-3 p-3">
                          <h2 className="font-bolder text-black uppercase">Send Me a Message</h2>
                          <input type="text" required name="name" 
                            className="h-10 p-2 rounded-md active:outline-1 focus:outline-blue-300 outline-none border-none" 
                            placeholder="Your Name"
                          />
                          <textarea name="message" required id="msg" cols="30" rows="8" 
                            className=" p-2 rounded-md  outline-none border-none focus:outline-blue-300" 
                            placeholder="Message"></textarea>
                          <button type="submit" className="w-full bg-blue-500 p-2 rounded-md text-white uppercase">Send Message</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact