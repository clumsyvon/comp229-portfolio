import React from 'react'
import './about.css'
import ME from '../../assets/me3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {PiProjectorScreenChart} from 'react-icons/pi'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me"> 
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
        </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 Years Experience</small>
              </article>

              <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>NA</small>
              </article>

              <article className="about__card">
              <PiProjectorScreenChart  className='about__icon'/>
              <h5>Projects</h5>
              <small>NA</small>
              </article>
          </div>

          <p> As a dedicated Software Engineering Technology student, I am passionate about exploring the world of software development and technology. I thrive on the excitement of problem-solving and the endless possibilities that coding offers.</p>
          <p>I am eager to learn new technologies and develop my skills in order to become a valuable asset to any team</p>
          <p>My goal is to leverage my education and skills to create innovative solutions and contribute to the ever-changing field of software development. Whether it's building web applications, crafting elegant code, or tackling complex challenges, I'm always up for the task.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      
    </section>
  )
}

export default About