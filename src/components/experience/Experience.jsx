import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>
            Frontend Development
          </h3>
          <div className="experience__container">
            <article className='experience__details'>
              <div>
              <h4><BsPatchCheckFill className='experience__details-icon' /> HTML</h4>
              <small className='text-light'>Medium</small>
              </div>
            </article>
             <article className='experience__details'>
              <div>
              <h4><BsPatchCheckFill className='experience__details-icon' /> CSS</h4>
              <small className='text-light'>Medium  </small>
              </div>
            </article>
             <article className='experience__details'>
              <div>
              <h4><BsPatchCheckFill className='experience__details-icon' /> JavaScript</h4>
              <small className='text-light'>Medium  </small>
              </div>
            </article>
             <article className='experience__details'>
              <div>
              <h4><BsPatchCheckFill className='experience__details-icon' /> React</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      
        {/* Here lies the stop of frontend and beginning of backend */}


        <div className="experience__backend">
          <h3>Backend Development</h3>
           <div className="experience__container">
            <article className='experience__details'>
              <div>
              <h4><BsPatchCheckFill className='experience__details-icon' /> Node JS</h4>
              <small className='text-light'>Beginner   </small>
              </div>
            </article>
             <article className='experience__details'>
              <div>
              <h4><BsPatchCheckFill className='experience__details-icon' /> PHP</h4>
              <small className='text-light'>Beginner   </small>
              </div>
            </article>
             <article className='experience__details'>
              <div>
              <h4><BsPatchCheckFill className='experience__details-icon' /> MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            
           </div>
           </div>
         </div>
    
    </section>
  )
}

export default Experience

