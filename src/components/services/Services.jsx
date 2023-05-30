import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='service'>
      <h5>What I have studied</h5>
      <h2>Education</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Bachelor's of Technology - IT</h3>
          </div>

          <ul className='service__list'>
            <li>
              {/* <BiCheck className='service__list-icon'/> */}
              <p>Guru Gobind Singh Indraprastha University ( 2020-2024 )</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* END OF UI/UX */}


        <article className='service'>
          <div className="service__head">
            <h3>Senior Secondary School</h3>
          </div>

          <ul className='service__list'>
            <li>
              {/* <BiCheck className='service__list-icon'/> */}
              <p>Vikas Bharati Public School (2019-2020)</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service__head">
            <h3>Secondary School</h3>
          </div>

          <ul className='service__list'>
            <li>
              {/* <BiCheck className='service__list-icon'/> */}
              <p>Vikas Bharati Public School (2017-2018)</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>

    </section>
  )
}

export default Services
