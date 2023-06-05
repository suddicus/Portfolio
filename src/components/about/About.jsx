import React from 'react'
import './about.css'
import me from '../../assets/mypic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={me} alt="Denzel" />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>5 world wide</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>10 completed</small>
              </article>
            </div>
            <p>
              To begin with, I am a young software engineer currently in training at the Faculty of
              Engineering and Technology (FET) of the University of Buea . I am always open to new opportunities which can help me gain more experience. From July 2021 till date, I am constantly learning new technologies such as MERN stack.
              I aspire to be an innovative and steadfast engineer by the time I graduate and be very much qualified. I am a holder of the GCE Advanced Level, GCE Ordinary Level. I am fluent both in the arts of written and spoken in the language of English and French as well.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
