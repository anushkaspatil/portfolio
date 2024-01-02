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
            <h3>Technical</h3>
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
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>DSA</h4>
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
          <h3>Libraries & Frameworks</h3>
            <div className="experience_content">
              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>Tensorflow</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>ScikitLearn</h4>
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
              <h4>Bootstrap, jQuery</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>SpaCy</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>

              <article className='experience_details'>
              <BsFillPatchCheckFill className = 'experience_details-icon' />
              <div>
              <h4>NLTK</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>

            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience