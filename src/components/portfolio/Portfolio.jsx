import React from "react";
import "./portfolio.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";

export const Portfolio = () => {
  const portfolioContent = [
    {
      image : img1,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 1,
      title:'Interactice Two Player Games'
    },
    {
      image : img2,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 2,
      title:'Scientific Calculator'
    },
    {
      image : img3,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 4,
      title:'Health Care Management System'
    },
    {
      image : img5,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 5,
      title:'Hospital Management System'
    },
    {
      image : img6,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 6,
      title:'16 bit Microprocessor Design'
    },
      {
      image : img7,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 7,
      title:'Implementation of Chess'
    },
    {
      image : img8,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 8,
      title:'Fibonacci Sequence'
    },
    {
      image : img9,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 9,
      title:'MD5 Hash Algorithm'
    },
    {
      image : img1,
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
      id: 10,
      title:'Bank Management System'
    },
  ]
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2> 
      <div className="container portfolio__container">
      {
        portfolioContent.map((content, id) =>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={content.image} alt=" one" className="portImage" />
              </div>
              <h3> {content.title} </h3>
              <div className="portfolio__item__cta">
                <a
                  href={content.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={content.demo}
                  className="btn btn-primary"
                  target="blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        }
        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio;
