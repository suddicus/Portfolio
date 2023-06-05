import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Application/System Designer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>SRS Document</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Model of application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>User Exeperience</p>
            </li>
          </ul>
        </article>
        {/* Termination of Designer*/}
         <article className="service">
          <div className="service__head">
            <h3>Tutoring Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Maths Tutor</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Sound Counselling</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Computer Tutoring</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Computer Skills Tutoring</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Follow ups and Checkups</p>
            </li>
          </ul>
        </article>

            {/* Termination of tutoring*/}
         <article className="service">
          <div className="service__head">
            <h3>Application/System Building</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Breakdown of Modules</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Extreme and Complete Coding</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Procedural Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Application/System Maintenance</p>
            </li>
          
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
