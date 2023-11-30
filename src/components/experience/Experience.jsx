import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
          <div className="experience_web">
            <h3>Web Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>HTML, CSS, JScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Bootstrap, jQuery</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>MongoDB, MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
            </div>
          </div>
          <div>
          <h3>Languages & Others</h3>
            <div className="experience_content">
              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Machine Learning</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>NLP, DL</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Git, GitHub</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience