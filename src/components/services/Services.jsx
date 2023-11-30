import React from 'react'
import './services.css' //Position of responsibility
import { BsCheckAll } from "react-icons/bs";  

const Services = () => {
  return (
    <section id='services'>
      <h5>Here's</h5>
      <h2>Position Of Responsiblity</h2>

      <div className="container services_container">

        <article className='service'>
          <div className="service_head">
            <h3>Ambassador</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckAll />
            <p>Ambassador of Giakaa Open Web3 Community at PVGCOET.</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Initiated the Web3 foundation at PVGCOET, uniting NFT, Crypto, Metaverse, and DeFi enthusiasts.</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Fostered knowledge sharing and exploration within the community.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Google DSC Lead at PVGCOET</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckAll />
            <p>Interviewed 80 candidates and selected a core team of 5, & a committee of 20.</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Conducted an informative session of GDSC addressing 200 freshmen.</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Working on inter-college open source program Google Developers Student Winter of Code.</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Successfully completed the PR Officer role in 2022-23.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Internships</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckAll />
            <p>Former Artificial Intelligence Intern at RadiacalX AI </p>
            </li>
            <li>
            <BsCheckAll />
            <p>Embracing cutting-edge technologies like OpenAI, Vertex AI, and TensorFlow to enhance ReX, our AI Coach.</p>
            </li>
            <li>
            <BsCheckAll />
            <p> It's an opportunity to craft intelligent solutions </p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services