import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className='About h-fit mb-32 w-full'>
      <div className='w-full h-full flex justify-center p-2'>
        <div className='w-full sm:w-[80%] md:grid grid-cols-2 grid-rows-1'>
          <div className='profile-pic h-80 bg-red-400 p-2'>
            <div className=''>
              <img src="" alt="" />
              <p>profile</p>
            </div>
          </div>
          <div className='profile-data'>
            <div className='p-3'>
              <h1 className='text-lg sm:text-3xl font-bold'>About Me</h1>
              <span className='underline'></span>
              <div>
                <article>
                Hey there! I'm Adam Abdul-Rafik (Code Wizard), a passionate full stack developer with a knack 
                for crafting immersive web experiences. From front-end magic to back-end wizardry, I thrive on 
                turning ideas into pixel-perfect reality. Armed with a love for clean code and an eye for design, 
                I specialize in creating dynamic, user-friendly websites that leave a lasting impression. 
                When I'm not coding, you'll find me exploring the latest tech trends, sipping on endless cups of coffee, 
                and embracing the thrill of problem-solving. Ready to join me on this digital adventure? 
                Let's build something extraordinary together!
                </article>
                <div className='w-full'>
                  <div className='w-fit flex-col'>
                    <h2>My Skills</h2>
                    <span className='underline'></span>
                  </div>
                  <div className='w-full'>
                    <ul className='my-skills  overflow-clip w-full grid grid-cols-12'>
                      <li><FontAwesomeIcon icon={faPython} /></li>
                      <li><FontAwesomeIcon icon={faHtml5} /></li>
                      <li><FontAwesomeIcon icon={faPhp} /></li>
                      <li><FontAwesomeIcon icon={faReact} /></li>
                      <li><FontAwesomeIcon icon={faFlask} /></li>
                      <li><FontAwesomeIcon icon={faCss3} /></li>
                      <li><FontAwesomeIcon icon={faBootstrap} /></li>
                      {/* <li><FontAwesomeIcon icon={faTailw} /></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About