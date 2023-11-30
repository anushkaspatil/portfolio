import React from 'react'
import './about.css'
import ME from '../../assets/about-img.jpeg'
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
            <div className='about_me-image'>
              <img src={ME} alt="About Img" />
            </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about_card'>
            <FiUsers className='about_icon'/>
              <h5>AI/ML</h5>
              <small>Practioner</small>
            </article>

            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          Dedicated to continuous learning and at the forefront of technology, I lead projects like AQI/WQI monitoring, merging physical sensing with machine learning, for Smart India Hackathon 2023 and Ambassador for the Giakaa Open Web3 Community, I showcase a deep interest in problem-solving and emerging tech. I'm the Google Developers Student Club Lead at PVGCOET for the year 2023-24.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About