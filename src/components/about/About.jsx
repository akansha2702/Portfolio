import React from 'react'
import './about.css'
import ME from '../../assets/about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        {/* <div className='about__me'>
          <img src={ME} className='about__me-image' alt="About Image"/>
        </div> */}
        <div className='about__content'>
        <div className='about__cards'>
          {/* <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article> */}
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Support</h5>
            <small>Remote/On-Site</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>15+ Projects</small>
          </article>
        </div>
        <p>
        I'm Akansha Aggarwal, a pre-final year student pursuing BTech in Information Technology from Guru Gobind Singh Indraprastha University. I am an active learner who believes in the value of technology and teamwork. Skilled in C++, Data Structures , Algorithms , I am an aspiring Web Developer. Looking forward to great opportunities to learn new technologies , skills and willing to work under pressure on projects and deadline with the given time limit or target.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>

      


    </section>
  )
}

export default About
